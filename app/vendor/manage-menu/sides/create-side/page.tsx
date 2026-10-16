import CreateNewSideContainer from "@/components/vendor/manage-menu/sides/create-new-side/CreateNewSideContainer";
import { ViewAllSides } from "@/components/vendor/manage-menu/sides/CreateNewSide";

function CreateSide() {
  return (
    <div>
      <ViewAllSides />
      <CreateNewSideContainer />
    </div>
  );
}

export default CreateSide;
