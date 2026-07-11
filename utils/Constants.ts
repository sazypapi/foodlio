export const cuisineTypes = [
  "Nigerian",
  "Chinese",
  "American",
  "Italian",
  "Indian",
  "Mexican",
  "Lebanese",
  "Ghanaian",
  "Japanese",
  "Turkish",
  "French",
  "Thai",
  "Continental",
  "Fast Food",
  "Grills & BBQ",
  "Pizza",
  "Seafood",
  "Vegetarian",
  "Desserts & Pastries",
  "Drinks & Smoothies",
] as const;

export type CuisineType = (typeof cuisineTypes)[number];
