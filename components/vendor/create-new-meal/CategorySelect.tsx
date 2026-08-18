"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { ChevronDown, Check, Plus } from "lucide-react";
import { Category } from "@/generated/prisma/client";
import { Label } from "@/components/ui/label";

export default function CreatableSelect({
  category,
}: {
  category: Category[];
}) {
  const categoryNames = category.map((category) => category.name);
  const [options, setOptions] = useState<string[]>(categoryNames);
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const filtered = options.filter((o) =>
    o.toLowerCase().includes(query.trim().toLowerCase()),
  );

  const exactMatch = options.some(
    (o) => o.toLowerCase() === query.trim().toLowerCase(),
  );

  const canCreate = query.trim().length > 0 && !exactMatch;

  function selectOption(value: string) {
    setSelected(value);
    setOpen(false);
    setQuery("");
  }

  function createOption() {
    const value = query.trim();
    if (!value) return;
    setOptions((prev) => [value, ...prev]);
    selectOption(value);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (filtered.length > 0) {
        selectOption(filtered[0]);
      } else if (canCreate) {
        createOption();
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  }

  return (
    <div className="">
      <Label className="capitalize mb-1 sm:mb-2 text-xs sm:text-sm">
        Category
      </Label>
      <input type="hidden" name="category" value={selected} />
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-2 py-[3px] bg-white border rounded-sm text-left transition-colors"
        >
          <span className={selected ? "text-neutral-900" : "text-neutral-500"}>
            {selected || "Select or create a collection"}
          </span>
          <span className="flex items-center pl-3 ml-3 border-l border-neutral-200">
            <ChevronDown
              size={18}
              className={`text-neutral-500 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>

        {open && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden">
            <div className="p-2 border-b border-neutral-100">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="search or type to create..."
                className="w-full px-3 py-2 text-[15px] text-neutral-900 placeholder-neutral-400 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              />
            </div>

            <ul className="max-h-56 overflow-y-auto py-1">
              {filtered.map((option) => {
                const isSelected = option === selected;
                return (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => selectOption(option)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left text-[15px] transition-colors ${
                        isSelected
                          ? "bg-blue-50 text-neutral-900"
                          : "text-neutral-800 hover:bg-neutral-50"
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && (
                        <Check size={16} className="text-blue-600" />
                      )}
                    </button>
                  </li>
                );
              })}

              {filtered.length === 0 && !canCreate && (
                <li className="px-4 py-3 text-[15px] text-neutral-400">
                  no matches
                </li>
              )}

              {canCreate && (
                <li>
                  <button
                    type="button"
                    onClick={createOption}
                    className="w-full flex items-center gap-2 px-4 py-3 text-left text-[15px] text-neutral-900 hover:bg-neutral-50 transition-colors border-t border-neutral-100"
                  >
                    <Plus size={16} className="text-neutral-500" />
                    <span>
                      create &quot;
                      <span className="font-medium">{query.trim()}</span>&quot;
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
