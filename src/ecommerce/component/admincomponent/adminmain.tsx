import { Link, Outlet } from "react-router-dom";
import "./adminmain.scss";
const AdminMain = () => {
  return (
    <div style={{ position: "relative", minHeight: "600px" }}>
      <div className="sidenav">
        <Link to={"add-product"}>Add Product</Link>
        <Link to={"product-list"}>Product List</Link>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
export default AdminMain;
