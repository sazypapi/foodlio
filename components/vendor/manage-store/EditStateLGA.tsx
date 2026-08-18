"use client";

import { useState } from "react";
import { CustomSelect } from "@/components/ui/custom-select";
import { stateLga } from "@/lib/StateLGA";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function EditStateLGA({
  defaultState,
  defaultLga,
  onStateChange,
}: {
  defaultState?: string;
  defaultLga?: string;
  onStateChange?: (state: string) => void;
}) {
  const [selectedState, setSelectedState] = useState(defaultState ?? "");
  const [selectedLga, setSelectedLga] = useState(defaultLga ?? "");

  const lgas = stateLga.find((s) => s.name === selectedState)?.lgas ?? [];

  function handleStateChange(value: string) {
    setSelectedState(value);
    setSelectedLga("");
    onStateChange?.(value);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-y-3 sm:gap-y-0 mt-3">
      <div>
        <Label className="capitalize mb-1 sm:mb-2 text-xs sm:text-sm">
          State
        </Label>
        <CustomSelect
          options={stateLga.map((s) => ({ value: s.name, label: s.name }))}
          value={selectedState}
          onValueChange={handleStateChange}
          placeholder="Select state"
        />
        <input type="hidden" name="state" value={selectedState} />
      </div>

      <div>
        <Label className="capitalize mb-1 sm:mb-2 text-xs sm:text-sm">
          Local Government Area
        </Label>
        {selectedState ? (
          <>
            <CustomSelect
              options={lgas.map((lga) => ({ value: lga, label: lga }))}
              value={selectedLga}
              onValueChange={setSelectedLga}
              placeholder="Select LGA"
              disabled={!selectedState}
            />
            <input
              type="hidden"
              name="localGovernmentArea"
              value={selectedLga}
            />
          </>
        ) : (
          <Input
            id="lga-placeholder"
            type="text"
            placeholder="Pick a state first"
            disabled
            className="shadow-gray-300 py-4 border placeholder:text-[16px] text-[16px] rounded-sm"
          />
        )}
      </div>
    </div>
  );
}
