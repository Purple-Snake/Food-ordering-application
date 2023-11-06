import Orders from "./Orders";
import SelectedOrder from "./SelectedOrder";

function AdminPage() {
  return (
    <div className="flex">
      <Orders />
      <SelectedOrder />
    </div>
  );
}

export default AdminPage;
