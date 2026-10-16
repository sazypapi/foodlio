import z from "zod";

export const vendorApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  logo: z.string().min(1, "Logo is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  // LANDMARK IS OPTIONAL. EMPTY OR WHITESPACE-ONLY INPUT BECOMES NULL SO THE DATABASE STORES NOTHING INSTEAD OF AN EMPTY STRING
  landmark: z
    .string()
    .optional()
    .transform((value) => (value && value.trim() ? value.trim() : null)),
  // THE HIDDEN PIN INPUTS ARRIVE AS STRINGS. FIRST CHECK THEY ARE NOT EMPTY, THEN TURN THEM INTO A NUMBER, THEN CHECK THE RANGE
  // z.number() ALSO REJECTS NaN, SO GARBAGE TEXT FAILS WITH THE SAME "INSIDE NIGERIA" MESSAGE
  latitude: z
    .string()
    .min(1, "Drop a pin on the map to confirm your location")
    .transform(Number)
    .pipe(
      z
        .number("Pin must be inside Nigeria")
        .min(4, "Pin must be inside Nigeria")
        .max(14, "Pin must be inside Nigeria"),
    ),
  longitude: z
    .string()
    .min(1, "Drop a pin on the map to confirm your location")
    .transform(Number)
    .pipe(
      z
        .number("Pin must be inside Nigeria")
        .min(2.5, "Pin must be inside Nigeria")
        .max(15, "Pin must be inside Nigeria"),
    ),
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

  categoryId: z.string().min(1, "Category is required"),

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

  // CHANGED: EMPTY STRING BECOMES undefined (NOT 0), THEN THE RANGE CHECK RUNS ONLY WHEN A VALUE EXISTS
  latitude: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : undefined))
    .pipe(z.number().min(-90).max(90).optional()),

  // CHANGED: SAME IDEA FOR LONGITUDE, WHOSE VALID RANGE IS -180 TO 180
  longitude: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : undefined))
    .pipe(z.number().min(-180).max(180).optional()),

  // CHANGED: LANDMARK IS OPTIONAL, AND AN EMPTY BOX BECOMES null SO A VENDOR CAN CLEAR IT
  landmark: z
    .string()
    .optional()
    .transform((val) => (val && val.trim() ? val.trim() : null)),
});
export const sideOptionSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be under 50 characters"),
  extraPrice: z.coerce.number().min(0, "Price can't be negative"),
  isAvailable: z.boolean().default(true),
  image: z.string().url("Image must be a valid URL").or(z.literal("")),
});
