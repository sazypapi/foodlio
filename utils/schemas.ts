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
