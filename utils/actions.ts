/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/lib/prisma";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ZodError } from "zod";
import {
  editAdminNoteSchema,
  editVendorDetailsSchema,
  finsihSettingUpAccountScheme,
  menuItemSchema,
  sideOptionSchema,
  vendorApplicationSchema,
} from "./schemas";
import { backendClient } from "@/lib/edgestore-server";
import { resend } from "@/lib/resend";
import { revalidatePath } from "next/cache";
import { OrderStatus, Prisma, VendorStatus } from "@/generated/prisma/client";
import { TimeRange } from "./time-range";
export type MonthlyRevenue = {
  month: string;
  revenue: number;
};
const renderError = (error: unknown): { message: string } => {
  console.log(error);
  if (error instanceof ZodError) {
    const firstMessage = error.issues[0]?.message;
    return { message: firstMessage };
  }
  return {
    message: error instanceof Error ? error.message : "an error occured",
  };
};
export const isUserApplicationExists = async () => {
  const user = await currentUser();
  return await db.vendor.findUnique({
    where: {
      clerkUserId: user?.id,
    },
  });
};
async function generateUniqueVendorSlug(slug: string) {
  let newSlug = slug;
  let counter = 1;

  while (await db.vendor.findUnique({ where: { slug: newSlug } })) {
    newSlug = `${slug}-${counter}`;
    counter++;
  }

  return newSlug;
}
async function generateUniqueVendorSlugForEditVendorDetails(slug: string) {
  let newSlug = slug;
  let counter = 1;
  const vendor = await getVendorByClerkId();
  while (
    await db.vendor.findFirst({
      where: { slug: newSlug, NOT: { id: vendor.id } },
    })
  ) {
    newSlug = `${slug}-${counter}`;
    counter++;
  }

  return newSlug;
}
// ESCAPES VENDOR-TYPED TEXT BEFORE IT GOES INTO AN HTML EMAIL SO NOBODY CAN INJECT MARKUP INTO YOUR ADMIN INBOX
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const submitVendorApplicationForm = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  try {
    const user = await currentUser();
    if (!user) {
      redirect("/sign-in?redirect_url=/vendor-application");
    }
    const rawData = Object.fromEntries(formData);
    const validatedFields = vendorApplicationSchema.parse({
      ...rawData,
      cuisineType: formData.getAll("cuisineType") as string[],
    });
    let finalBackUpNumber;
    const formBackUpNumber = rawData.backUpPhoneNumber.toString();
    if (!formBackUpNumber) {
      finalBackUpNumber = null;
    } else if (formBackUpNumber.length < 11) {
      return { message: "Back Up Number must be at least 11 digits" };
    } else {
      finalBackUpNumber = formBackUpNumber;
    }
    if (finalBackUpNumber === validatedFields.phoneNumber) {
      return {
        message: "Backup number must be different from the main number.",
      };
    }
    await backendClient.publicFiles.confirmUpload({
      url: validatedFields.logo,
    });
    let slug = validatedFields.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    slug = await generateUniqueVendorSlug(slug);

    // LANDMARK, LATITUDE AND LONGITUDE ARE ALREADY INSIDE validatedFields, SO THE SPREAD BELOW SAVES THEM WITH NO EXTRA CODE
    await db.vendor.create({
      data: {
        ...validatedFields,
        clerkUserId: user?.id,
        backUpPhoneNumber: finalBackUpNumber,
        slug,
      },
    });

    const applicantEmail = user.emailAddresses[0].emailAddress;
    const applicantName = user.firstName ?? "there";

    // ONE-TAP LINK SO YOU CAN CHECK THE PIN ON A SATELLITE MAP WHEN REVIEWING
    const mapLink = `https://www.google.com/maps?q=${validatedFields.latitude},${validatedFields.longitude}`;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zedekedochie@gmail.com",
      subject: "We've received your application — Foodlio",
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">
               <div style="background:#2563eb;padding:24px 32px">
                 <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px">Foodlio</h1>
               </div>
               <div style="padding:32px">
                 <h2 style="color:#111827;font-size:18px;margin:0 0 12px">Application received!</h2>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 16px">Hi ${escapeHtml(applicantName)},</p>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 24px">Thanks for applying to be a vendor on Foodlio. We're reviewing your application and will get back to you as soon as possible.</p>
                 <div style="background:#eff6ff;border-left:4px solid #2563eb;padding:16px;border-radius:4px;margin-bottom:24px">
                   <p style="color:#1d4ed8;margin:0;font-size:14px">You'll receive another email once your application has been reviewed.</p>
                 </div>
                 <p style="color:#9ca3af;font-size:13px;margin:0">— The Foodlio Team</p>
               </div>
             </div>`,
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zedekedochie@gmail.com",
      subject: "New vendor application — Foodlio",
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">
               <div style="background:#2563eb;padding:24px 32px">
                 <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px">Foodlio</h1>
               </div>
               <div style="padding:32px">
                 <h2 style="color:#111827;font-size:18px;margin:0 0 20px">New vendor application</h2>
                 <table style="width:100%;border-collapse:collapse">
                   <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;width:120px">Name</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:500">${escapeHtml(validatedFields.name)}</td></tr>
                   <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px">Email</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:500">${escapeHtml(validatedFields.email)}</td></tr>
                   <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:500">${escapeHtml(validatedFields.phoneNumber)}</td></tr>
                   <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px">Address</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:500">${escapeHtml(validatedFields.address)}</td></tr>
                   <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px">Landmark</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:500">${validatedFields.landmark ? escapeHtml(validatedFields.landmark) : "None given"}</td></tr>
                   <tr><td style="padding:10px 0;color:#6b7280;font-size:14px">Pin</td><td style="padding:10px 0;color:#111827;font-size:14px;font-weight:500"><a href="${mapLink}" style="color:#2563eb">View on map</a> (${validatedFields.latitude.toFixed(5)}, ${validatedFields.longitude.toFixed(5)})</td></tr>
                 </table>
                 <div style="margin-top:24px">
                   <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/vendors" style="background:#2563eb;color:#ffffff;padding:12px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:500">Review application</a>
                 </div>
               </div>
             </div>`,
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/vendor-application/status");
};
export const approveVendorApplication = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  try {
    const clerkId = Object.fromEntries(formData).clerkId.toString();

    const vendor = await db.vendor.update({
      where: { clerkUserId: clerkId },
      data: { status: "ACTIVE" },
    });

    await (
      await clerkClient()
    ).users.updateUserMetadata(clerkId, {
      publicMetadata: { role: "VENDOR" },
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zedekedochie@gmail.com",
      subject: "Your application has been approved — Foodlio",
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">
               <div style="background:#2563eb;padding:24px 32px">
                 <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px">Foodlio</h1>
               </div>
               <div style="padding:32px">
                 <h2 style="color:#111827;font-size:18px;margin:0 0 12px">You're approved!</h2>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 16px">Hi ${vendor.name},</p>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 24px">Great news — your vendor application has been approved. You can now log in and start setting up your store on Foodlio.</p>
                 <div style="margin-bottom:24px">
                   <a href="${process.env.NEXT_PUBLIC_APP_URL}/vendor/dashboard" style="background:#2563eb;color:#ffffff;padding:12px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:500">Go to your dashboard</a>
                 </div>
                 <p style="color:#9ca3af;font-size:13px;margin:0">— The Foodlio Team</p>
               </div>
             </div>`,
    });
    revalidatePath(`/admin/vendors/${vendor.id}`);
    return { message: "Vendor Application Approved Successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const getAllVendors = async (filters: {
  status?: string;
  search?: string;
  page?: number;
}) => {
  const { status, search, page = 1 } = filters;
  const pageSize = 10;
  const skip = (page - 1) * pageSize;
  const where = {
    ...(status &&
      status !== "ALL" && {
        status: status as VendorStatus,
      }),
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" as const } },
        { email: { contains: search, mode: "insensitive" as const } },
        { address: { contains: search, mode: "insensitive" as const } },
      ],
    }),
  };
  const [vendors, totalCount] = await Promise.all([
    db.vendor.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: pageSize,
    }),
    db.vendor.count({ where }),
  ]);
  return {
    vendors,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
    currentPage: page,
  };
};
export const getSingleVendorRecord = async (slug: string) => {
  return await db.vendor.findUnique({
    where: {
      slug,
    },
  });
};
export const editAdminNote = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  try {
    const clerkId = Object.fromEntries(formData).clerkId.toString();
    const isVendorExists = await db.vendor.findUnique({
      where: { clerkUserId: clerkId },
    });
    if (!isVendorExists) {
      return { message: "Vendor not found" };
    }
    const adminNote = Object.fromEntries(formData).adminNote.toString();
    const validatedNote = editAdminNoteSchema.parse({ adminNote });
    await db.vendor.update({
      where: { clerkUserId: clerkId },
      data: { adminNote: validatedNote.adminNote },
    });
    revalidatePath(`/admin/vendors/${isVendorExists.id}`);
    return { message: "Admin Note updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const deleteAdminNote = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  try {
    const clerkId = Object.fromEntries(formData).clerkId.toString();
    const isVendorExists = await db.vendor.findUnique({
      where: { clerkUserId: clerkId },
    });
    if (!isVendorExists) {
      return { message: "Vendor not found" };
    }
    await db.vendor.update({
      where: { clerkUserId: clerkId },
      data: { adminNote: null },
    });
    revalidatePath(`/admin/vendors/${isVendorExists.id}`);
    return { message: "Admin Note deleted successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const rejectVendorApplication = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  try {
    const clerkId = Object.fromEntries(formData).clerkId.toString();
    const vendorData = await db.vendor.findUnique({
      where: { clerkUserId: clerkId },
    });
    if (!vendorData?.adminNote) {
      return {
        message: "Please provide a reason for the rejection in the admin note.",
      };
    }
    if (vendorData.adminNote.length < 10) {
      return {
        message:
          "Admin note must be at least 10 characters long to reject a vendor.",
      };
    }
    await db.vendor.update({
      where: { clerkUserId: clerkId },
      data: { status: "REJECTED" },
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zedekedochie@gmail.com",
      subject: "Update on your vendor application — Foodlio",
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">
               <div style="background:#2563eb;padding:24px 32px">
                 <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px">Foodlio</h1>
               </div>
               <div style="padding:32px">
                 <h2 style="color:#111827;font-size:18px;margin:0 0 12px">Application update</h2>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 16px">Hi ${vendorData.name},</p>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 24px">Thank you for applying to be a vendor on Foodlio. After reviewing your application, we're unable to approve it at this time.</p>
                 <div style="background:#fef2f2;border-left:4px solid #ef4444;padding:16px;border-radius:4px;margin-bottom:24px">
                   <p style="color:#b91c1c;margin:0;font-size:14px">If you believe this is a mistake or would like to reapply in the future, please reach out to our support team.</p>
                 </div>
                 <p style="color:#9ca3af;font-size:13px;margin:0">— The Foodlio Team</p>
               </div>
             </div>`,
    });

    revalidatePath(`/admin/vendors/${vendorData.id}`);

    return { message: "Vendor Application Rejected" };
  } catch (error) {
    return renderError(error);
  }
};
export const suspendVendor = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  try {
    const clerkId = Object.fromEntries(formData).clerkId.toString();
    const vendorData = await db.vendor.findUnique({
      where: { clerkUserId: clerkId },
    });
    if (!vendorData?.adminNote) {
      return {
        message: "Please provide a reason for suspension in the admin note.",
      };
    }
    if (vendorData.adminNote.length < 10) {
      return {
        message:
          "Admin note must be at least 10 characters long to suspend a vendor.",
      };
    }
    await db.vendor.update({
      where: { clerkUserId: clerkId },
      data: { status: "SUSPENDED" },
    });

    await (
      await clerkClient()
    ).users.updateUserMetadata(clerkId, {
      publicMetadata: { role: null },
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zedekedochie@gmail.com",
      subject: "Your vendor account has been suspended — Foodlio",
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">
               <div style="background:#2563eb;padding:24px 32px">
                 <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px">Foodlio</h1>
               </div>
               <div style="padding:32px">
                 <h2 style="color:#111827;font-size:18px;margin:0 0 12px">Account suspended</h2>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 16px">Hi ${vendorData.name},</p>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 24px">Your vendor account on Foodlio has been temporarily suspended. You will not be able to accept orders during this period.</p>
                 <div style="background:#fffbeb;border-left:4px solid #f59e0b;padding:16px;border-radius:4px;margin-bottom:24px">
                   <p style="color:#92400e;margin:0;font-size:14px">Please contact our support team to resolve this and get your account reinstated.</p>
                 </div>
                 <p style="color:#9ca3af;font-size:13px;margin:0">— The Foodlio Team</p>
               </div>
             </div>`,
    });

    revalidatePath(`/admin/vendors/${vendorData.id}`);

    return { message: "Vendor Suspended Successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const reinstateVendor = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  try {
    const clerkId = Object.fromEntries(formData).clerkId.toString();

    const vendor = await db.vendor.update({
      where: { clerkUserId: clerkId },
      data: { status: "ACTIVE" },
    });

    await (
      await clerkClient()
    ).users.updateUserMetadata(clerkId, {
      publicMetadata: { role: "VENDOR" },
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zedekedochie@gmail.com",
      subject: "Your vendor account has been reinstated — Foodlio",
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">
               <div style="background:#2563eb;padding:24px 32px">
                 <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px">Foodlio</h1>
               </div>
               <div style="padding:32px">
                 <h2 style="color:#111827;font-size:18px;margin:0 0 12px">Account reinstated</h2>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 16px">Hi ${vendor.name},</p>
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 24px">Good news — your vendor account on Foodlio has been reinstated. You can now log in and resume accepting orders.</p>
                 <div style="margin-bottom:24px">
                   <a href="${process.env.NEXT_PUBLIC_APP_URL}/vendor/dashboard" style="background:#2563eb;color:#ffffff;padding:12px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:500">Go to your dashboard</a>
                 </div>
                 <p style="color:#9ca3af;font-size:13px;margin:0">— The Foodlio Team</p>
               </div>
             </div>`,
    });

    revalidatePath(`/admin/vendors/${vendor.id}`);

    return { message: "Vendor Reinstated Successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const getVendorByClerkId = async () => {
  const user = await currentUser();
  if (user?.publicMetadata.role !== "VENDOR") {
    redirect("/vendor-application");
  }
  const vendor = await db.vendor.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });
  if (!vendor) {
    redirect("/vendor-application");
  }
  return vendor;
};
export const toggleRestaurantOnAndOff = async (params: {
  clerkId: string;
  toggleValueString: string;
}) => {
  const vendor = await getVendorByClerkId();
  try {
    const toggleValue = params.toggleValueString === "true";
    await db.vendor.update({
      where: { clerkUserId: vendor.clerkUserId },
      data: { closeOpenStatus: toggleValue },
    });
    revalidatePath(`/vendor/dashboard`);
    return { message: "Restaurant status updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const createMealAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let validatedFields: any;
  let uploadConfirmed = false;

  try {
    const rawData = Object.fromEntries(formData);
    const vendorId = rawData.vendorId.toString();
    const isVendorExists = await db.vendor.findUnique({
      where: { id: vendorId },
      include: { menuItems: true },
    });

    if (!isVendorExists) {
      return { message: "There was an error, try again" };
    }
    const categoryName = formData.get("categoryName") as string;
    const normalized = categoryName.toLowerCase().trim();

    const getExistingCategory = await db.category.findFirst({
      where: {
        name: normalized,
        vendorId: vendorId,
      },
    });
    let categoryId: string | null = null;
    if (getExistingCategory) {
      categoryId = getExistingCategory.id;
    } else {
      const slug = normalized.replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
      const newCategory = await db.category.upsert({
        where: {
          vendorId_name: {
            vendorId: vendorId,
            name: normalized,
          },
        },
        update: {},
        create: { name: normalized, slug, vendorId },
      });
      categoryId = newCategory.id;
    }
    validatedFields = menuItemSchema.parse({
      ...rawData,
      categoryId: categoryId,
      isAvailable: rawData.isAvailable === "on",
      addProteinOptions: rawData.addProteinOptions === "on",
      addCarbohydrateOptions: rawData.addCarbohydrateOptions === "on",
      addSides: rawData.addSides === "on",
      discount: rawData.discount === "" ? undefined : rawData.discount,
    });

    const normalizedNewName = validatedFields.name
      .toLowerCase()
      .replace(/\s+/g, "");
    const existingNameArrays = isVendorExists.menuItems.map((item) =>
      item.name.toLowerCase().replace(/\s+/g, ""),
    );
    const isDuplicate = existingNameArrays.includes(normalizedNewName);
    if (isDuplicate) {
      return {
        message:
          "You have a menu item called " + validatedFields.name + " already",
      };
    }

    await backendClient.publicFiles.confirmUpload({
      url: validatedFields.image,
    });
    uploadConfirmed = true;
    const menuItemSlug = validatedFields.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    await db.menuItem.create({
      data: {
        ...validatedFields,
        vendorId,
        slug: menuItemSlug,
      },
    });
  } catch (error) {
    if (uploadConfirmed && validatedFields?.image) {
      try {
        await backendClient.publicFiles.deleteFile({
          url: validatedFields.image,
        });
      } catch (cleanupError) {
        console.error("Failed to clean up orphaned upload:", cleanupError);
      }
    }
    return renderError(error);
  }
  redirect("/vendor/manage-menu");
};
export const getAllMenuItems = async (filters?: {
  search?: string;
  availability?: string;
  page?: number;
}) => {
  const { search, availability, page = 1 } = filters ?? {};
  const vendor = await getVendorByClerkId();
  const pageSize = 10;
  const skip = (page - 1) * pageSize;
  const where = {
    ...(availability === "AVAILABLE" && { isAvailable: true }),
    ...(availability === "UNAVAILABLE" && { isAvailable: false }),
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" as const } },
        { description: { contains: search, mode: "insensitive" as const } },
      ],
    }),
    vendorId: vendor.id,
  };
  const [menuItems, totalCount] = await Promise.all([
    db.menuItem.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
      },
      skip,
      take: pageSize,
    }),
    db.menuItem.count({ where }),
  ]);

  return {
    menuItems,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
    currentPage: page,
    vendor,
  };
};
export const getSingleMenuItem = async (slug: string) => {
  if (!slug) {
    redirect("/vendor");
  }

  const vendor = await getVendorByClerkId();
  console.log(vendor.id + "vendor id");

  return await db.menuItem.findUnique({
    where: {
      vendorId_slug: {
        vendorId: vendor.id,
        slug,
      },
    },
    include: {
      orderItems: true,
    },
  });
};
export const editMenuItem = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let uploadConfirmed = false;
  let dbUpdateSucceeded = false;
  let validatedFields: any;
  let id;

  try {
    const rawData = Object.fromEntries(formData);
    id = rawData.mealId.toString();

    const menuItem = await db.menuItem.findUnique({ where: { id } });
    if (!menuItem) {
      return { message: "There was an error, try again" };
    }

    const vendorId = menuItem.vendorId;
    const categoryName = formData.get("categoryName") as string;
    const normalized = categoryName.toLowerCase().trim();

    const getExistingCategory = await db.category.findFirst({
      where: { name: normalized, vendorId },
    });

    let categoryId: string;
    if (getExistingCategory) {
      categoryId = getExistingCategory.id;
    } else {
      const slug = normalized.replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
      const newCategory = await db.category.upsert({
        where: { vendorId_name: { vendorId, name: normalized } },
        update: {},
        create: { name: normalized, slug, vendorId },
      });
      categoryId = newCategory.id;
    }

    validatedFields = menuItemSchema.parse({
      ...rawData,
      categoryId,
      isAvailable: rawData.isAvailable === "on",
      addProteinOptions: rawData.addProteinOptions === "on",
      addCarbohydrateOptions: rawData.addCarbohydrateOptions === "on",
      addSides: rawData.addSides === "on",
      discount: rawData.discount === "" ? undefined : rawData.discount,
    });

    const otherMenuItems = await db.menuItem.findMany({
      where: { vendorId, NOT: { id } },
    });

    const normalizedNewName = validatedFields.name
      .toLowerCase()
      .replace(/\s+/g, "");
    const existingNameArrays = otherMenuItems.map((item) =>
      item.name.toLowerCase().replace(/\s+/g, ""),
    );

    if (existingNameArrays.includes(normalizedNewName)) {
      return {
        message:
          "You have a menu item called " + validatedFields.name + " already",
      };
    }

    const imageChanged = menuItem.image !== validatedFields.image;

    if (imageChanged) {
      await backendClient.publicFiles.confirmUpload({
        url: validatedFields.image,
      });
      uploadConfirmed = true;
    }

    const menuItemSlug = validatedFields.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    await db.menuItem.update({
      where: { id },
      data: { ...validatedFields, slug: menuItemSlug },
    });
    dbUpdateSucceeded = true; // point of no return — DB now owns the new image

    if (imageChanged) {
      await backendClient.publicFiles
        .deleteFile({ url: menuItem.image })
        .catch((err) => {
          console.error("Failed to delete old image, orphaned:", err);
        });
    }

    revalidatePath(`/vendor/manage-menu/${id}`);
    return { message: "Meal Updated Successfully" };
  } catch (error) {
    // Only clean up the new image if the DB never actually committed to it —
    // once dbUpdateSucceeded is true, the new image is live and must never be deleted here.
    if (uploadConfirmed && !dbUpdateSucceeded && validatedFields?.image) {
      try {
        await backendClient.publicFiles.deleteFile({
          url: validatedFields.image,
        });
      } catch (cleanupError) {
        console.error("Failed to clean up orphaned upload:", cleanupError);
      }
    }
    return renderError(error);
  }
};
export type OpenReason = "setup" | "menu" | "ready";

export const canRestaurantBeOpened = async (): Promise<{
  canOpen: boolean;
  reason: OpenReason; // CHANGED: WAS string
}> => {
  const vendor = await getVendorByClerkId();
  if (!vendor) {
    redirect("/");
  }
  const isRestaurantFullySetUp: boolean =
    vendor.images.length > 0 && vendor.minimumPrice != null;
  if (!isRestaurantFullySetUp) {
    return { canOpen: false, reason: "setup" };
  }
  const vendorsMeals = await db.menuItem.count({
    where: {
      vendorId: vendor.id,
    },
  });
  if (vendorsMeals < 3) {
    return { canOpen: false, reason: "menu" };
  }
  return { canOpen: true, reason: "ready" }; // CHANGED: WAS "All good"
};
export const finsihSettingUpAccount = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const vendor = await getVendorByClerkId();
  if (!vendor) {
    redirect("/");
  }
  const confirmedImages: string[] = [];
  let validatedFields: any;
  try {
    const rawData = Object.fromEntries(formData);
    validatedFields = finsihSettingUpAccountScheme.parse(rawData);
    for (const imageUrl of validatedFields.images) {
      await backendClient.publicFiles.confirmUpload({ url: imageUrl });
      confirmedImages.push(imageUrl);
    }

    await db.vendor.update({
      where: { id: vendor.id },
      data: { ...validatedFields },
    });
  } catch (error) {
    if (confirmedImages.length > 0) {
      await Promise.allSettled(
        confirmedImages.map((url) =>
          backendClient.publicFiles.deleteFile({ url }),
        ),
      );
    }
    return renderError(error);
  }

  redirect("/vendor/manage-store");
};
export const getVendorsCategory = async () => {
  const vendor = await getVendorByClerkId();
  return await db.category.findMany({
    where: {
      vendorId: vendor.id,
    },
  });
};
export const editVendorDetails = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const vendor = await getVendorByClerkId();
  if (!vendor) {
    redirect("/");
  }

  const confirmedImages: string[] = [];
  let validatedFields: any;

  try {
    const rawData = Object.fromEntries(formData);

    let editedUrls: string[] = [];
    if (typeof rawData.editedUrls === "string") {
      try {
        editedUrls = JSON.parse(rawData.editedUrls);
      } catch {
        editedUrls = [];
      }
    }

    let newImages: string[] = [];
    if (typeof rawData.images === "string") {
      try {
        newImages = JSON.parse(rawData.images);
      } catch {
        newImages = [];
      }
    }

    const finalImages = [...editedUrls, ...newImages];
    if (!finalImages.length) {
      return { message: "There must be at least 1 vendor image" };
    }

    validatedFields = editVendorDetailsSchema.parse({
      ...rawData,
      cuisineType: formData.getAll("cuisineType") as string[],
      images: finalImages,
    });
    console.log(
      "cuisineType via getAll 2 log:",
      formData.getAll("cuisineType"),
    );

    for (const imageUrl of newImages) {
      await backendClient.publicFiles.confirmUpload({ url: imageUrl });
      confirmedImages.push(imageUrl);
    }

    const removedImages = vendor.images.filter(
      (img) => !editedUrls.includes(img),
    );
    if (removedImages.length > 0) {
      await Promise.allSettled(
        removedImages.map((url) =>
          backendClient.publicFiles.deleteFile({ url }),
        ),
      );
    }
    let slug = validatedFields.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    slug = await generateUniqueVendorSlugForEditVendorDetails(slug);
    await db.vendor.update({
      where: { id: vendor.id },
      data: { ...validatedFields, slug },
    });
    revalidatePath("/vendor/manage-store");

    return { message: "Your details have been updated" };
  } catch (error) {
    if (confirmedImages.length > 0) {
      await Promise.allSettled(
        confirmedImages.map((url) =>
          backendClient.publicFiles.deleteFile({ url }),
        ),
      );
    }
    return renderError(error);
  }

  // redirect("/vendor/manage-store");
};
export const getAllVendorsOrders = async (filters?: {
  search?: string;
  status?: string;
  page?: number;
}) => {
  const { search, status, page = 1 } = filters ?? {};
  const vendor = await getVendorByClerkId();

  const pageSize = 10;
  const skip = (page - 1) * pageSize;

  const where = {
    ...(status && { status: status as OrderStatus }),
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" as const } },
        { deliveryAddress: { contains: search, mode: "insensitive" as const } },
        { id: { contains: search, mode: "insensitive" as const } },
      ],
    }),
    vendorId: vendor.id,
  };

  const [orders, totalCount] = await Promise.all([
    db.order.findMany({
      where,
      include: {
        orderItems: true,
        packType: true,
        vendor: true,
        user: true,
      },
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    }),
    db.order.count({ where }),
  ]);

  return {
    orders,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
    currentPage: page,
  };
};
export const getSingleOrder = async (id: string) => {
  console.log(id + "this is the id");

  return await db.order.findUnique({
    where: { id },
    include: {
      orderItems: {
        include: {
          menuItem: true,
          orderItemCarbs: { include: { carbOption: true } },
          orderItemSides: { include: { sideOption: true } },
          orderItemProteins: { include: { proteinOption: true } },
        },
      },
      packType: true,
      rider: true,
      vendor: true,
    },
  });
};
export const cancelOrderAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let id;
  try {
    const rawData = Object.fromEntries(formData);
    id = rawData.id.toString();
    const isIdExists = await db.order.findUnique({
      where: {
        id,
      },
    });
    if (!isIdExists) {
      revalidatePath(`/vendor/orders/${id}`);
      return { message: "There was an error, try again" };
    }
    await db.order.update({
      where: {
        id,
      },
      data: {
        status: "CANCELLED",
      },
    });
    // return { message: "it works" };
  } catch (error) {
    return renderError(error);
  }
  redirect(`/vendor/orders/${id}`);
};
export const updateOrderStatusAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let id;
  try {
    const rawData = Object.fromEntries(formData);
    id = rawData.id.toString();
    const status = rawData.status.toString() as OrderStatus;

    const order = await db.order.findUnique({ where: { id } });
    if (!order) {
      return { message: "There was an error, try again" };
    }

    await db.order.update({
      where: { id },
      data: { status },
    });

    revalidatePath(`/vendor/orders/${id}`);
    return { message: `Order marked as ${status}` };
  } catch (error) {
    return renderError(error);
  }
};
export const getAllVendorsSides = async (filters?: {
  search?: string;
  availability?: string;
  page?: number;
}) => {
  const vendor = await getVendorByClerkId();
  const { search, availability, page = 1 } = filters ?? {};
  const pageSize = 10;
  const skip = (page - 1) * pageSize;
  const where = {
    vendorId: vendor.id,
    ...(availability === "AVAILABLE" && { isAvailable: true }),
    ...(availability === "UNAVAILABLE" && { isAvailable: false }),
    ...(search && {
      name: { contains: search, mode: "insensitive" as const },
    }),
  };
  const [allSides, totalCount] = await Promise.all([
    db.sideOption.findMany({
      where,
      skip,
      take: pageSize,
    }),
    db.sideOption.count({ where }),
  ]);
  return {
    allSides,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
    currentPage: page,
    vendor,
  };
};
export const deleteSideOption = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const rawData = Object.fromEntries(formData);
  const sideId = rawData.id.toString();

  try {
    const sideOption = await db.sideOption.findUnique({
      where: { id: sideId },
    });
    if (!sideOption) {
      return { message: "Side option not found" };
    }

    await db.sideOption.delete({
      where: { id: sideId },
    });

    await backendClient.publicFiles
      .deleteFile({ url: sideOption.image })
      .catch((err) => {
        console.error("Failed to delete side image, orphaned:", err);
      });
    // return { message: "Side option deleted successfully" };
  } catch (error) {
    return renderError(error);
  }

  redirect("/vendor/manage-menu/sides");
};
export const createNewSide = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let uploadConfirmed = false;
  let validatedFields: any;
  try {
    const vendor = await getVendorByClerkId();
    const rawData = Object.fromEntries(formData);
    validatedFields = sideOptionSchema.parse({
      ...rawData,
      isAvailable: rawData.isAvailable === "on",
    });
    const slug = validatedFields.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    const allVendorsSides = await db.sideOption.findMany({
      where: { vendorId: vendor.id },
    });
    const doesSlugExist = allVendorsSides.some((side) => side.slug === slug);
    if (doesSlugExist) {
      return { message: "A side with this name already exists" };
    }
    await backendClient.publicFiles.confirmUpload({
      url: validatedFields.image,
    });
    uploadConfirmed = true;

    await db.sideOption.create({
      data: {
        ...validatedFields,
        slug,
        vendorId: vendor.id,
      },
    });
    // return { message: "Side created successfully" };
  } catch (error) {
    if (uploadConfirmed && validatedFields?.image) {
      try {
        await backendClient.publicFiles.deleteFile({
          url: validatedFields.image,
        });
      } catch (cleanupError) {
        console.error("Failed to clean up orphaned upload:", cleanupError);
      }
    }
    return renderError(error);
  }
  redirect("/vendor/manage-menu/sides");
};
export const getVendorSideOptions = async (vendorId: string) => {
  return db.sideOption.findMany({
    where: { vendorId },
  });
};

export const editSideOption = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let uploadConfirmed = false;
  let dbUpdateSucceeded = false;
  let validatedFields: any;

  try {
    const vendor = await getVendorByClerkId();
    const rawData = Object.fromEntries(formData);
    const sideId = rawData.id.toString();

    const sideOption = await db.sideOption.findUnique({
      where: { id: sideId },
    });
    if (!sideOption) {
      redirect("/vendor/manage-menu/sides");
    }

    validatedFields = sideOptionSchema.parse({
      ...rawData,
      isAvailable: rawData.isAvailable === "on",
    });

    const vendorSideOptions = await getVendorSideOptions(vendor.id);
    const duplicateName = vendorSideOptions.some(
      (option) =>
        option.id !== sideId &&
        option.name.trim().toLowerCase() ===
          validatedFields.name.trim().toLowerCase(),
    );

    if (duplicateName) {
      return { message: "A side option with this name already exists" };
    }

    const imageChanged = sideOption.image !== validatedFields.image;

    if (imageChanged) {
      await backendClient.publicFiles.confirmUpload({
        url: validatedFields.image,
      });
      uploadConfirmed = true;
    }

    await db.sideOption.update({
      where: { id: sideId },
      data: validatedFields,
    });
    dbUpdateSucceeded = true;

    if (imageChanged) {
      await backendClient.publicFiles
        .deleteFile({ url: sideOption.image })
        .catch((err) => {
          console.error("Failed to delete old image, orphaned:", err);
        });
    }

    revalidatePath(`/vendor/manage-menu/sides/${sideOption.slug}`);
    return { message: "Side updated successfully" };
  } catch (error) {
    if (uploadConfirmed && !dbUpdateSucceeded && validatedFields?.image) {
      try {
        await backendClient.publicFiles.deleteFile({
          url: validatedFields.image,
        });
      } catch (cleanupError) {
        console.error("Failed to clean up orphaned upload:", cleanupError);
      }
    }
    return renderError(error);
  }
};
export const getSingleSideOption = async (slug: string) => {
  const vendor = await getVendorByClerkId();

  const sideOption = await db.sideOption.findUnique({
    where: {
      vendorId_slug: {
        vendorId: vendor.id,
        slug,
      },
    },
    include: {
      orderItemSides: true,
    },
  });

  return sideOption;
};
export const getAllVendorsCarbs = async (filters?: {
  search?: string;
  availability?: string;
  page?: number;
}) => {
  const { search, availability, page = 1 } = filters ?? {};
  const vendor = await getVendorByClerkId();
  const pageSize = 10;
  const skip = (page - 1) * pageSize;

  const where = {
    vendorId: vendor.id,
    ...(availability === "AVAILABLE" && { isAvailable: true }),
    ...(availability === "UNAVAILABLE" && { isAvailable: false }),
    ...(search && {
      name: { contains: search, mode: "insensitive" as const },
    }),
  };
  const [allCarbs, totalCount] = await Promise.all([
    db.carbOption.findMany({
      where,
      skip,
      take: pageSize,
    }),
    db.carbOption.count({ where }),
  ]);
  return {
    allCarbs,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
    currentPage: page,
    vendor,
  };
};
export const createNewCarbOption = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let uploadConfirmed = false;
  let validatedFields: any;
  try {
    const vendor = await getVendorByClerkId();
    const rawData = Object.fromEntries(formData);
    validatedFields = sideOptionSchema.parse({
      ...rawData,
      isAvailable: rawData.isAvailable === "on",
    });
    const slug = validatedFields.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    const allVendorsCarbOptions = await db.carbOption.findMany({
      where: { vendorId: vendor.id },
    });
    const doesSlugExist = allVendorsCarbOptions.some(
      (carbOption) => carbOption.slug === slug,
    );
    if (doesSlugExist) {
      return { message: "A carb option with this name already exists" };
    }
    await backendClient.publicFiles.confirmUpload({
      url: validatedFields.image,
    });
    uploadConfirmed = true;

    await db.carbOption.create({
      data: {
        ...validatedFields,
        slug,
        vendorId: vendor.id,
      },
    });
    // return { message: "Carb option created successfully" };
  } catch (error) {
    if (uploadConfirmed && validatedFields?.image) {
      try {
        await backendClient.publicFiles.deleteFile({
          url: validatedFields.image,
        });
      } catch (cleanupError) {
        console.error("Failed to clean up orphaned upload:", cleanupError);
      }
    }
    return renderError(error);
  }
  redirect("/vendor/manage-menu/carb-options");
};
export const getVendorCarbOptions = async (vendorId: string) => {
  return db.carbOption.findMany({
    where: { vendorId },
  });
};
export const editCarbOption = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let uploadConfirmed = false;
  let dbUpdateSucceeded = false;
  let validatedFields: any;

  try {
    const vendor = await getVendorByClerkId();
    const rawData = Object.fromEntries(formData);
    const carbId = rawData.id.toString();

    const carbOption = await db.carbOption.findUnique({
      where: { id: carbId },
    });
    if (!carbOption) {
      redirect("/vendor/manage-menu/carb-options");
    }

    validatedFields = sideOptionSchema.parse({
      ...rawData,
      isAvailable: rawData.isAvailable === "on",
    });

    const vendorCarbOptions = await getVendorCarbOptions(vendor.id);
    const duplicateName = vendorCarbOptions.some(
      (option) =>
        option.id !== carbId &&
        option.name.trim().toLowerCase() ===
          validatedFields.name.trim().toLowerCase(),
    );

    if (duplicateName) {
      return { message: "A carb option with this name already exists" };
    }

    const imageChanged = carbOption.image !== validatedFields.image;

    if (imageChanged) {
      await backendClient.publicFiles.confirmUpload({
        url: validatedFields.image,
      });
      uploadConfirmed = true;
    }

    await db.carbOption.update({
      where: { id: carbId },
      data: validatedFields,
    });
    dbUpdateSucceeded = true;

    if (imageChanged) {
      await backendClient.publicFiles
        .deleteFile({ url: carbOption.image })
        .catch((err) => {
          console.error("Failed to delete old image, orphaned:", err);
        });
    }

    revalidatePath(`/vendor/manage-menu/carb-options/${carbOption.slug}`);
    return { message: "Carb option updated successfully" };
  } catch (error) {
    if (uploadConfirmed && !dbUpdateSucceeded && validatedFields?.image) {
      try {
        await backendClient.publicFiles.deleteFile({
          url: validatedFields.image,
        });
      } catch (cleanupError) {
        console.error("Failed to clean up orphaned upload:", cleanupError);
      }
    }
    return renderError(error);
  }
};
export const deleteCarbOption = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const rawData = Object.fromEntries(formData);
  const carbId = rawData.id.toString();

  try {
    const carbOption = await db.carbOption.findUnique({
      where: { id: carbId },
    });
    if (!carbOption) {
      return { message: "Carb option not found" };
    }

    await db.carbOption.delete({
      where: { id: carbId },
    });

    await backendClient.publicFiles
      .deleteFile({ url: carbOption.image })
      .catch((err) => {
        console.error("Failed to delete carb image, orphaned:", err);
      });
    // return { message: "Carb option deleted successfully" };
  } catch (error) {
    return renderError(error);
  }

  redirect("/vendor/manage-menu/carb-options");
};
export const getSingleCarbOption = async (slug: string) => {
  const vendor = await getVendorByClerkId();

  const carbOption = await db.carbOption.findUnique({
    where: {
      vendorId_slug: {
        vendorId: vendor.id,
        slug,
      },
    },
    include: {
      orderItemCarbs: true,
    },
  });

  return carbOption;
};
export const getAllVendorsProtein = async (filters?: {
  search?: string;
  availability?: string;
  page?: number;
}) => {
  const { search, availability, page = 1 } = filters ?? {};
  const vendor = await getVendorByClerkId();
  const pageSize = 10;
  const skip = (page - 1) * pageSize;

  const where = {
    vendorId: vendor.id,
    ...(availability === "AVAILABLE" && { isAvailable: true }),
    ...(availability === "UNAVAILABLE" && { isAvailable: false }),
    ...(search && {
      name: { contains: search, mode: "insensitive" as const },
    }),
  };
  const [allProteins, totalCount] = await Promise.all([
    db.proteinOption.findMany({
      where,
      skip,
      take: pageSize,
    }),
    db.proteinOption.count({ where }),
  ]);
  return {
    allProteins,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
    currentPage: page,
    vendor,
  };
};
export const getSingleProteinOption = async (slug: string) => {
  const vendor = await getVendorByClerkId();

  const proteinOption = await db.proteinOption.findUnique({
    where: {
      vendorId_slug: {
        vendorId: vendor.id,
        slug,
      },
    },
    include: {
      orderItemProteins: true,
    },
  });

  return proteinOption;
};
export const createNewProteinOption = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let uploadConfirmed = false;
  let validatedFields: any;
  try {
    const vendor = await getVendorByClerkId();
    const rawData = Object.fromEntries(formData);
    validatedFields = sideOptionSchema.parse({
      ...rawData,
      isAvailable: rawData.isAvailable === "on",
    });
    const slug = validatedFields.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    const allVendorsProteinOptions = await db.proteinOption.findMany({
      where: { vendorId: vendor.id },
    });
    const doesSlugExist = allVendorsProteinOptions.some(
      (proteinOption) => proteinOption.slug === slug,
    );
    if (doesSlugExist) {
      return { message: "A protein option with this name already exists" };
    }
    await backendClient.publicFiles.confirmUpload({
      url: validatedFields.image,
    });
    uploadConfirmed = true;

    await db.proteinOption.create({
      data: {
        ...validatedFields,
        slug,
        vendorId: vendor.id,
      },
    });
    // return { message: "Protein option created successfully" };
  } catch (error) {
    if (uploadConfirmed && validatedFields?.image) {
      try {
        await backendClient.publicFiles.deleteFile({
          url: validatedFields.image,
        });
      } catch (cleanupError) {
        console.error("Failed to clean up orphaned upload:", cleanupError);
      }
    }
    return renderError(error);
  }
  redirect("/vendor/manage-menu/protein-options");
};
export const getVendorProteinOptions = async (vendorId: string) => {
  return db.proteinOption.findMany({
    where: { vendorId },
  });
};
export const editProteinOption = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  let uploadConfirmed = false;
  let dbUpdateSucceeded = false;
  let validatedFields: any;

  try {
    const vendor = await getVendorByClerkId();
    const rawData = Object.fromEntries(formData);
    const proteinId = rawData.id.toString();

    const proteinOption = await db.proteinOption.findUnique({
      where: { id: proteinId },
    });
    if (!proteinOption) {
      redirect("/vendor/manage-menu/protein-options");
    }

    validatedFields = sideOptionSchema.parse({
      ...rawData,
      isAvailable: rawData.isAvailable === "on",
    });

    const vendorProteinOptions = await getVendorProteinOptions(vendor.id);
    const duplicateName = vendorProteinOptions.some(
      (option) =>
        option.id !== proteinId &&
        option.name.trim().toLowerCase() ===
          validatedFields.name.trim().toLowerCase(),
    );

    if (duplicateName) {
      return { message: "A protein option with this name already exists" };
    }

    const imageChanged = proteinOption.image !== validatedFields.image;

    if (imageChanged) {
      await backendClient.publicFiles.confirmUpload({
        url: validatedFields.image,
      });
      uploadConfirmed = true;
    }

    await db.proteinOption.update({
      where: { id: proteinId },
      data: validatedFields,
    });
    dbUpdateSucceeded = true;

    if (imageChanged) {
      await backendClient.publicFiles
        .deleteFile({ url: proteinOption.image })
        .catch((err) => {
          console.error("Failed to delete old image, orphaned:", err);
        });
    }

    revalidatePath(`/vendor/manage-menu/protein-options/${proteinOption.slug}`);
    return { message: "Protein option updated successfully" };
  } catch (error) {
    if (uploadConfirmed && !dbUpdateSucceeded && validatedFields?.image) {
      try {
        await backendClient.publicFiles.deleteFile({
          url: validatedFields.image,
        });
      } catch (cleanupError) {
        console.error("Failed to clean up orphaned upload:", cleanupError);
      }
    }
    return renderError(error);
  }
};
const REVENUE_STATUSES: OrderStatus[] = [
  "PAID",
  "PREPARING",
  "READY_FOR_PICKUP",
  "PICKED_UP",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
];
export async function getVendorHeaderStats() {
  const vendor = await getVendorByClerkId();
  if (!vendor) {
    redirect("/vendor");
  }
  const orders = await db.order.findMany({
    where: { vendorId: vendor.id },
    select: { userId: true, status: true, totalAmount: true },
  });

  const totalCustomers = new Set(orders.map((o) => o.userId)).size;

  const totalRevenue = orders
    .filter((o) => REVENUE_STATUSES.includes(o.status))
    .reduce((sum, o) => sum + o.totalAmount.toNumber(), 0);

  const totalOrders = orders.length;

  const deliveredCount = orders.filter((o) => o.status === "DELIVERED").length;
  const completionRate =
    totalOrders === 0 ? 0 : (deliveredCount / totalOrders) * 100;

  return { totalCustomers, totalRevenue, totalOrders, completionRate };
}
function bucketFor(
  status: OrderStatus,
): "COMPLETED" | "IN_PROGRESS" | "CANCELLED" {
  if (status === "DELIVERED") return "COMPLETED";
  if (status === "CANCELLED") return "CANCELLED";

  return "IN_PROGRESS";
}
export async function getVendorOrderStatusBreakdown() {
  const vendorId = (await getVendorByClerkId()).id;
  const orders = await db.order.findMany({
    where: { vendorId },
    select: { status: true },
  });

  const counts: Record<"COMPLETED" | "IN_PROGRESS" | "CANCELLED", number> = {
    COMPLETED: 0,
    IN_PROGRESS: 0,
    CANCELLED: 0,
  };

  orders.forEach((order) => {
    counts[bucketFor(order.status)]++;
  });

  return counts;
}

export async function getVendorMonthlyRevenue(): Promise<MonthlyRevenue[]> {
  const vendor = await getVendorByClerkId();

  const orders = await db.order.findMany({
    where: { vendorId: vendor.id },
    select: { status: true, totalAmount: true, createdAt: true },
  });

  const now = new Date();
  const months: MonthlyRevenue[] = [];

  for (let i = 5; i >= 0; i--) {
    const target = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const label = target.toLocaleString("en-US", { month: "short" });

    const revenue = orders
      .filter(
        (o) =>
          REVENUE_STATUSES.includes(o.status) &&
          o.createdAt.getFullYear() === target.getFullYear() &&
          o.createdAt.getMonth() === target.getMonth(),
      )
      .reduce((sum, o) => sum + o.totalAmount.toNumber(), 0);

    months.push({ month: label, revenue });
  }

  return months;
}

export type RevenuePoint = { label: string; revenue: number };

type OrderForRevenue = {
  status: OrderStatus;
  totalAmount: Prisma.Decimal;
  createdAt: Date;
};

function getRangeStart(range: TimeRange): Date | undefined {
  const now = new Date();
  switch (range) {
    case "7d":
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case "30d":
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    case "90d":
      return new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
    case "year":
      return new Date(now.getFullYear(), 0, 1);
    case "all":
      return undefined;
  }
}

function getGrouping(range: TimeRange): "day" | "week" | "month" {
  if (range === "7d" || range === "30d") return "day";
  if (range === "90d") return "week";
  return "month";
}

const dayLabel = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
const monthLabel = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
const weekLabel = (d: Date) => {
  // CALM DOWN, YOU'RE ADJUSTING AND ACCOUNTING FOR THE FACT THAT MOST TIMES, A MONTH ACTUALLY HAS MORE THAN 4 WEEKS IN IT AND THE START OF THE MONTH ISNT ALWAYS SUNDAY, SO YOU'RE GETTING THE DAY (0-6) OF THE FIRST Days_One, ADDING IT TO TODAY'S DATE THEN GETTING THE ACTUAL WEEK WE'RE IN.
  const week = Math.ceil(
    (d.getDate() + new Date(d.getFullYear(), d.getMonth(), 1).getDay()) / 7,
  );
  return `W${week} ${d.toLocaleDateString("en-US", { month: "short" })}`;
};

const dayStep = (d: Date) => d.setDate(d.getDate() + 1);
const weekStep = (d: Date) => d.setDate(d.getDate() + 7);
const monthStep = (d: Date) => d.setMonth(d.getMonth() + 1);

function buildRevenueSeries(
  orders: OrderForRevenue[],
  start: Date,
  end: Date,
  step: (d: Date) => void,
  labelFor: (d: Date) => string,
): RevenuePoint[] {
  const map = new Map<string, number>();

  const cursor = new Date(start);
  while (cursor <= end) {
    map.set(labelFor(cursor), 0);
    step(cursor);
  }

  orders.forEach((o) => {
    if (!REVENUE_STATUSES.includes(o.status)) return;
    const label = labelFor(o.createdAt);
    if (map.has(label)) {
      map.set(label, map.get(label)! + o.totalAmount.toNumber());
    }
  });

  return Array.from(map.entries()).map(([label, revenue]) => ({
    label,
    revenue,
  }));
}

async function getEarliestOrderDate(vendorId: string): Promise<Date | null> {
  const first = await db.order.findFirst({
    where: { vendorId },
    orderBy: { createdAt: "asc" },
    select: { createdAt: true },
  });
  return first?.createdAt ?? null;
}

export const getVendorRevenueByRange = async (
  range: TimeRange,
): Promise<RevenuePoint[]> => {
  const vendor = await getVendorByClerkId();
  const now = new Date();

  const start =
    range === "all"
      ? ((await getEarliestOrderDate(vendor.id)) ?? now)
      : getRangeStart(range)!;

  const orders = await db.order.findMany({
    where: {
      vendorId: vendor.id,
      ...(range !== "all" ? { createdAt: { gte: start } } : {}),
    },
    select: { status: true, totalAmount: true, createdAt: true },
    orderBy: { createdAt: "asc" },
  });

  const grouping = getGrouping(range);
  if (grouping === "day")
    return buildRevenueSeries(orders, start, now, dayStep, dayLabel);
  if (grouping === "week")
    return buildRevenueSeries(orders, start, now, weekStep, weekLabel);
  return buildRevenueSeries(orders, start, now, monthStep, monthLabel);
};
export const getRecentFiveOrders = async (status?: string) => {
  const vendor = await getVendorByClerkId();
  return await db.order.findMany({
    where: {
      vendorId: vendor.id,
      ...(status && { status: status as OrderStatus }),
    },
    include: {
      orderItems: true,
      packType: true,
      vendor: true,
      user: true,
    },
    take: 10,
    orderBy: { createdAt: "desc" },
  });
};
