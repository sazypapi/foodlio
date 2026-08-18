import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

type ToggleProps = {
  isCarbohydrate: boolean;
  isSides: boolean;
  isProtein: boolean;
  isAvailable: boolean;
};
function EditAddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable({
  isCarbohydrate,
  isSides,
  isProtein,
  isAvailable,
}: ToggleProps) {
  return (
    <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
      <div className="grid grid-cols-2">
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="isAvailable"
              name="isAvailable"
              defaultChecked={isAvailable}
            />
            <FieldLabel htmlFor="isAvailable">Available</FieldLabel>
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="addSides" name="addSides" defaultChecked={isSides} />
            <FieldLabel htmlFor="addSides">Add Sides</FieldLabel>
          </Field>
        </FieldGroup>
      </div>
      <div className="grid grid-cols-2">
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="addProteinOptions"
              name="addProteinOptions"
              defaultChecked={isProtein}
            />
            <FieldLabel htmlFor="addProteinOptions">Add Protein</FieldLabel>
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="addCarbohydrateOptions"
              name="addCarbohydrateOptions"
              defaultChecked={isCarbohydrate}
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

export default EditAddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable;
