import CreateNewProteinOptionContainer from "@/components/vendor/manage-menu/proteins/create-protein-options/CreateNewProteinContainer";
import { ViewAllProtein } from "@/components/vendor/manage-menu/proteins/CreateNewProtein";

function CreateProteinPage() {
  return (
    <div>
      <ViewAllProtein />
      <CreateNewProteinOptionContainer />
    </div>
  );
}

export default CreateProteinPage;
