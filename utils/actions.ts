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
  vendorApplicationSchema,
} from "./schemas";
import { backendClient } from "@/lib/edgestore-server";
import { resend } from "@/lib/resend";
import { revalidatePath } from "next/cache";
import { VendorStatus } from "@/generated/prisma/client";
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
    const slug = validatedFields.name
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
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
                 <p style="color:#4b5563;line-height:1.6;margin:0 0 16px">Hi ${applicantName},</p>
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
                   <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px;width:120px">Name</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:500">${validatedFields.name}</td></tr>
                   <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px">Email</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:500">${validatedFields.email}</td></tr>
                   <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:14px">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;font-weight:500">${validatedFields.phoneNumber}</td></tr>
                   <tr><td style="padding:10px 0;color:#6b7280;font-size:14px">Address</td><td style="padding:10px 0;color:#111827;font-size:14px;font-weight:500">${validatedFields.address}</td></tr>
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
export const getAllVendorApplications = async (filters: {
  status?: string;
  search?: string;
}) => {
  const { status, search } = filters;

  return await db.vendor.findMany({
    where: {
      ...(status &&
        status !== "ALL" && {
          status: status as VendorStatus,
        }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { address: { contains: search, mode: "insensitive" } },
        ],
      }),
    },
    orderBy: { createdAt: "desc" },
  });
};
export const getSingleVendorRecord = async (id: string) => {
  return await db.vendor.findUnique({
    where: {
      id,
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
  try {
    const toggleValue = params.toggleValueString === "true";
    await db.vendor.update({
      where: { clerkUserId: params.clerkId },
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
    const categoryName = formData.get("category") as string;
    const getExistingCategory = await db.category.findFirst({
      where: {
        name: categoryName,
        vendorId: vendorId,
      },
    });
    let categoryId: string | null = null;
    if (getExistingCategory === null) {
      categoryId = null;
    } else {
      const normalized = categoryName.toLowerCase().trim();
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

    await db.menuItem.create({
      data: {
        ...validatedFields,
        vendorId,
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
export const getAllMenuItems = async (
  vendorId: string,
  filters?: { search?: string; availability?: string },
) => {
  const { search, availability } = filters ?? {};

  return await db.menuItem.findMany({
    where: {
      ...(availability === "AVAILABLE" && { isAvailable: true }),
      ...(availability === "UNAVAILABLE" && { isAvailable: false }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      }),
      vendorId: vendorId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
export const getSingleMenuItem = async (id: string) => {
  return await db.menuItem.findUnique({
    where: {
      id,
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
  let validatedFields: any;
  let id;
  try {
    const rawData = Object.fromEntries(formData);
    id = rawData.mealId.toString();
    const menuItem = await db.menuItem.findUnique({
      where: {
        id,
      },
    });
    if (!menuItem) {
      return { message: "There was an error, try again" };
    }
    validatedFields = menuItemSchema.parse({
      ...rawData,
      category: formData.getAll("category") as string[],
      isAvailable: rawData.isAvailable === "on",
      addProteinOptions: rawData.addProteinOptions === "on",
      addCarbohydrateOptions: rawData.addCarbohydrateOptions === "on",
      addSides: rawData.addSides === "on",
      discount: rawData.discount === "" ? undefined : rawData.discount,
    });

    const otherMenuItems = await db.menuItem.findMany({
      where: {
        vendorId: menuItem.vendorId,
        NOT: { id },
      },
    });

    const normalizedNewName = validatedFields.name
      .toLowerCase()
      .replace(/\s+/g, "");
    const existingNameArrays = otherMenuItems.map((item) =>
      item.name.toLowerCase().replace(/\s+/g, ""),
    );

    const isDuplicate = existingNameArrays.includes(normalizedNewName);
    if (isDuplicate) {
      return {
        message:
          "You have a menu item called " + validatedFields.name + " already",
      };
    }
    if (!(menuItem.image === validatedFields.image)) {
      await backendClient.publicFiles.confirmUpload({
        url: validatedFields.image,
      });
      uploadConfirmed = true;
    }
    await db.menuItem.update({
      where: {
        id,
      },
      data: { ...validatedFields },
    });
    // return { message: "Edit Successful" };
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
  redirect(`/vendor/manage-menu/${id}`);
};
export const canRestaurantBeOpened = async (): Promise<{
  canOpen: boolean;
  reason: string;
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
  return { canOpen: true, reason: "All good" };
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
    include: {
      menuItems: true,
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

    await db.vendor.update({
      where: { id: vendor.id },
      data: { ...validatedFields },
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
