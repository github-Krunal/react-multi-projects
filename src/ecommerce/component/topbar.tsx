import { Outlet } from "react-router-dom"
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Topbar=()=>{
    return(
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
            Food App
          </Typography>
          <Badge badgeContent={'0'} color="secondary">
  <ShoppingCartIcon />
</Badge>
        </Toolbar>
      </AppBar>
    </Box>
            <Outlet></Outlet>
        </div>
    )
}
export default Topbar