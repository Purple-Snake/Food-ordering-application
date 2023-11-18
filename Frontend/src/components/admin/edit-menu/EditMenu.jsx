import AddMenuItem from "./AddMenuItem";
import AdminFoodItems from "./AdminFoodItems";

function EditMenu() {
  return (
    <div className="flex">
      <AdminFoodItems />
      <AddMenuItem />
    </div>
  );
}

export default EditMenu;
