import {
    Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Rating,
  Select,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { TodaysProduct } from "../../../model/todaysProduct.model";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const ProductCard = (props: any) => {
  const product: TodaysProduct = props.product;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opensnackbar, setOpenSnackbar] = useState(false);

  async function  onCardHandler(product:TodaysProduct){
  await     fetch("http://localhost:4000/ProductCart", {
               headers: {
                 "Content-Type": "application/json",
               },
               method: "post",
               body: JSON.stringify(product),
             });
             setOpenSnackbar(true)
}
  const handleCloseSnackbar=()=>{
    setOpenSnackbar(false)

  }
  return (
    <>
      <div className="product-cart" style={{ width: "300px", boxShadow: "0 0 10px #a9a3a3",position:'relative' }}>
      <Tooltip title="Add to wishlist" arrow placement="left">
        <div className="product-cart-icons">
            <FavoriteBorderIcon style={{fontSize:"15px"}}/>
        </div>
        </Tooltip>
        <Tooltip title="Quick view" arrow placement="left">
        <div className="product-cart-icons" onClick={handleOpen} style={{marginTop:"40px"}}>
            <VisibilityIcon style={{fontSize:"15px"}}/>
        </div>
        </Tooltip>

        <div style={{ height: "300px" }}>
          <img
            src={product.ImageUrl}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ padding: "0px 20px 25px 30px " }}>
          <h4 style={{ color: "#aa9e9e" }}>{product.CategoryType}</h4>
          <h2>{product.ProductName}</h2>
          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Weight</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Weight"
                defaultValue={'1kg'}
              >
                <MenuItem value={'1kg'}>1kg</MenuItem>
                <MenuItem value={'2kg'}>2kg</MenuItem>
                <MenuItem value={'3kg'}>3kg</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-number"
              label="Quantity"
              type="number"
              size="small"
            />
          </div>

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "20px", color: "#429519" }}>
                RS. {product.SellingPrice}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#828282",
                  textDecoration: "line-through",
                }}
              >
                RS. {product.OriginalPrice}
              </div>
            </div>
            <div>
              <button className="cart-btn"  onClick={()=>onCardHandler(product)}>
                <ShoppingBagIcon />{" "}
                <span
                  style={{
                    alignSelf: "center",
                    height: "12px",
                    marginLeft: "5px",
                  }}
                >
                  ADD
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <div style={{position:"absolute",top:"10px",right:"10px"}}>
            <HighlightOffIcon/>
         </div>
         <div style={{display:"flex"}}>
            <div style={{height:"430px"}}>
                <img src="https://hongotheme.myshopify.com/cdn/shop/products/grosery-product-02-b.jpg?v=1692169001&width=360" alt="" />
            </div>
            <div>
                <h4 style={{color:"#838282"}}>Miu Miu</h4>
                <h1 style={{fontSize:"22px",fontWeight:"600",marginTop:"6px"}}>Mint leaves</h1>
                <div style={{display:"flex",alignItems:"center"}}>
                <Rating
        name="simple-controlled"
        value={5}
      />(2)&nbsp;&nbsp;
      SKU: HN-496601&nbsp;&nbsp;
      <div style={{padding:"5px",border:"1px solid green",color:"green"}}>
        IN STOCK
      </div>
      </div>
      <h2 style={{marginTop:"10px"}}>Rs. 200.00</h2>
      <p style={{marginTop:"10px",fontSize:"17px"}}>At vero eos et accusamus et iusto dignissimos ducimus blanditiis praesentium voluptatum deleniti atque...</p>
      <div style={{marginTop:"10px",fontSize:"17px"}}>
      <a >View Details</a>
      </div> 
      <div style={{marginTop:"10px",fontSize:"17px",fontWeight:"bold",marginBottom:"10px"}}>
      Weight: 1kg
      </div> 
      <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Weight</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Weight"
              >
                <MenuItem value={10}>1kg</MenuItem>
                <MenuItem value={20}>2kg</MenuItem>
                <MenuItem value={30}>3kg</MenuItem>
              </Select>
            </FormControl>

            <div style={{marginTop:"10px",fontSize:"17px",fontWeight:"bold",marginBottom:"10px"}}>
            Quantity
      </div>
     
      <TextField 
              id="outlined-number"
              label="Quantity"
              type="number"
              size="small"
            
            />

<button className="cart-btn" style={{marginTop:"20px",width:"250px",display:"flex",justifyContent:"center"}} >
                <ShoppingBagIcon/>{" "}
                <span 
                  style={{
                    alignSelf: "center",
                    height: "12px",
                    marginLeft: "5px",
                  }}
                >
                  ADD
                </span>
              </button>
      </div>
         </div>
        </Box>
      </Modal>
      <Snackbar
        open={opensnackbar}
        autoHideDuration={6000}
        message="Product added to cart"
        onClose={handleCloseSnackbar}
        
      />
    </>
  );
};

export default ProductCard;
