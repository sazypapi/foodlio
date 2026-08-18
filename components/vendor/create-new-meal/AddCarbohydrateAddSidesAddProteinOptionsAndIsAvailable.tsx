import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

function AddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable() {
  return (
    <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
      <div className="grid grid-cols-2">
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="isAvailable" name="isAvailable" />
            <FieldLabel htmlFor="isAvailable">Available</FieldLabel>
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="addSides" name="addSides" />
            <FieldLabel htmlFor="addSides">Add Sides</FieldLabel>
          </Field>
        </FieldGroup>
      </div>
      <div className="grid grid-cols-2">
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="addProteinOptions" name="addProteinOptions" />
            <FieldLabel htmlFor="addProteinOptions">Add Protein</FieldLabel>
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="addCarbohydrateOptions"
              name="addCarbohydrateOptions"
            />
            <FieldLabel htmlFor="addCarbohydrateOptions">
              Add Carbohydrate
            </FieldLabel>
          </Field>
        </FieldGroup>
      </div>
    </div>
  );
}

export default AddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable;
