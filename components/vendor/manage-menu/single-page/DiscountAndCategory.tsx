"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import MenuCategorySelect from "../../create-new-meal/CategorySelect";
import { MenuCategory } from "@/generated/prisma/client";

function DiscountAndCategory({
  discount,
  category,
}: {
  discount: number | null;
  category: MenuCategory[];
}) {
  const [categories, setCategories] = useState<MenuCategory[]>(category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categories.map((c) => (
        <input key={c} type="hidden" name="category" value={c} />
      ))}

      <div>
        <Label
          className="capitalize mb-1 sm:mb-2 text-xs sm:text-sm"
          htmlFor="discount"
        >
          Discount
        </Label>
        <Input
          id="discount"
          name="discount"
          type="number"
          defaultValue={discount ? discount : undefined}
          className="border placeholder:text-[16px] text-[16px] rounded-sm"
          placeholder="Discount (%) (optional)"
          step="0.01"
          max="100"
          min="0"
        />
      </div>
      <MenuCategorySelect value={categories} onChange={setCategories} />
    </div>
  );
}

export default DiscountAndCategory;
