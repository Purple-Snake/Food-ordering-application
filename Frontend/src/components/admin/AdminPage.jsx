import Orders from "./Orders";
import SelectedOrder from "./SelectedOrder";
import "./adminPage.css"

function AdminPage() {
  return (
    <div className="flex">
      <Orders />
      <SelectedOrder />
    </div>
  );
}

export default AdminPage;
