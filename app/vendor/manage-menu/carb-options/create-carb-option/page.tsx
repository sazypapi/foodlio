import CreateNewCarbOptionContainer from "@/components/vendor/manage-menu/carbs/create-new-carb-options/CreateNewCarbContainer";
import { ViewAllCarb } from "@/components/vendor/manage-menu/carbs/CreateNewCarb";

function CreateCarbOption() {
  return (
    <div>
      <ViewAllCarb />
      <CreateNewCarbOptionContainer />
    </div>
  );
}

export default CreateCarbOption;
