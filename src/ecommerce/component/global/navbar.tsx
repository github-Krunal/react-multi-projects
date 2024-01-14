import { Link, Outlet } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Navbar = () => {
  return (
    <div>
      <div
        style={{
          height: "70px",
          background: "green",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ paddingLeft: "30px" }}>
          <img
            src="https://hongotheme.myshopify.com/cdn/shop/files/demo-grocery-logo-white.svg?v=1692188608"
            alt=""
          />
        </div>
        <div style={{ display: "flex" }}>
          <div className="navbar-actions">
            <FavoriteBorderIcon style={{ fontSize: "36px" }} />
            Product Wishlist
          </div>
          <div className="navbar-actions">
            <PersonAddAltIcon style={{ fontSize: "36px" }} />
            Login Account
          </div>
          <Link to={'/cart'}>   <div className="navbar-actions">
            <Badge
              badgeContent={4}
              color="secondary"
              style={{ color: "white", fontSize: "50px" }}
            >
              <AddShoppingCartIcon color="action" style={{ color: "white" }} />
            </Badge>
           <div style={{ marginLeft: "5px", fontSize: "14px" }}>
              <h4>cart</h4>
              <h4>RS. 2,300.00</h4>
            </div>
          </div></Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
