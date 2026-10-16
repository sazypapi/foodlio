"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import CreatableSelect from "../../create-new-meal/CategorySelect";
import { Category } from "@/generated/prisma/client";

function DiscountAndCategory({
  discount,
  category,
  categories,
}: {
  discount: number | null;
  category: string;
  categories: Category[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <CreatableSelect category={categories} selectedCategory={category} />
    </div>
  );
}

export default DiscountAndCategory;
