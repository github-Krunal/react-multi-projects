import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Topbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to='/' style={{textDecoration:'none'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                <img src="https://w7.pngwing.com/pngs/911/911/png-transparent-hamburger-burger-king-whopper-fast-food-restaurant-daily-burger-text-fast-food-restaurant-logo-thumbnail.png" alt="" style={{width:'40px',height:'40px'}}/>
                <div style={{marginLeft:'15px',color:'white'}}>
                      Food App
                </div>
                </div>
                </Link>
            </Typography>
            <Link to="/cart">
            <Badge badgeContent={"0"} color="secondary" >
              <ShoppingCartIcon />
            </Badge>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet></Outlet>
    </div>
  );
};
export default Topbar;
