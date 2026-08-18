import z from "zod";

export const vendorApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  logo: z.string().min(1, "Logo is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  state: z.string().min(1, "State is required"),
  localGovernmentArea: z.string().min(1, "Local Government Area is required"),
  phoneNumber: z.string().min(11, "Phone Number must be at least 11 digits"),

  email: z.string().email("Enter a valid email"),
  cuisineType: z.array(z.string()).min(1, "Select at least one cuisine type"),
});
export const editAdminNoteSchema = z.object({
  adminNote: z
    .string()
    .trim()
    .refine(
      (val) => {
        const wordCount = val.split(/\s+/).filter(Boolean).length;
        return wordCount >= 10 && wordCount <= 50;
      },
      { message: "Admin note must be between 10 and 50 words" },
    ),
});

export const menuItemSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be under 50 characters"),

  description: z
    .string()
    .trim()
    .refine(
      (val) => {
        const wordCount = val.split(/\s+/).filter(Boolean).length;
        return wordCount >= 5 && wordCount <= 15;
      },
      { message: "Admin note must be between 5 and 15 words" },
    ),

  price: z.coerce
    .number({ error: "Price must be a number" })
    .positive("Price must be greater than 0"),

  image: z
    .string()
    .min(1, "Image is required")
    .url("Image must be a valid URL"),

  category: z.array(z.string()).min(1, "Select at least one category type"),

  isAvailable: z.boolean().default(false),

  discount: z.coerce
    .number()
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100")
    .optional()
    .nullable(),

  addProteinOptions: z.boolean().default(false),
  addCarbohydrateOptions: z.boolean().default(false),
  addSides: z.boolean().default(false),
});
export const finsihSettingUpAccountScheme = z.object({
  images: z.preprocess(
    (val) => {
      if (typeof val === "string") {
        try {
          return JSON.parse(val);
        } catch {
          return [];
        }
      }
      return val;
    },
    z.array(z.string()).min(1, { message: "At least one image is required" }),
  ),
  minimumPrice: z.coerce.number().min(1000),
});
export const editVendorDetailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  logo: z.string().min(1, "Logo is required"),
  address: z.string().min(1, "Address is required"),
  state: z.string().min(1, "State is required"),
  localGovernmentArea: z.string().min(1, "Local Government Area is required"),
  phoneNumber: z.string().min(11, "Phone number must be at least 11 digits"),
  email: z.string().email("Invalid email address"),
  cuisineType: z.array(z.string()).min(1, "Select at least one cuisine type"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  minimumPrice: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : undefined)),
});
