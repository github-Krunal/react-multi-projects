import { Link, Outlet } from "react-router-dom";
import { AppBar, Badge, Box, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search';
const Topbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ bgcolor: "lightslategrey" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                    alt=""
                  />
                </div>
              </Link>
            </Typography>
           <Link to="/admin"> <button>Admin</button></Link>
            <Link to="/search">
           <SearchIcon></SearchIcon>
              </Link>
            <Link to="/cart">
              <Badge color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: "30px" }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Topbar;
