import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { TodaysProduct } from "../../../model/todaysProduct.model";
const ProductCard=(props:any)=>{
    const product:TodaysProduct=props.product
    debugger
    return (
        <>
            <div style={{width:'300px',boxShadow:'0 0 10px #a9a3a3'}}>
            <div style={{height:"300px"}}>
                <img src={product.ImageUrl} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
        <div style={{padding:'0px 20px 25px 30px '}}>
            <h4 style={{color:"#aa9e9e"}}>{product.CategoryType}</h4>
            <h2>{product.ProductName}</h2>
            <div style={{marginTop:'15px',display:"flex",gap:'10px'}}>
            <FormControl sx={{  minWidth: 120 }} size="small">
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

    <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          size="small"
        />
            </div>

            <div style={{marginTop:'15px',display:"flex",gap:'10px',justifyContent:'space-between',alignItems:"center"}}>
                <div>
                    <div style={{fontSize:"20px",color:'#429519'}}>RS. {product.SellingPrice}</div>
                    <div style={{fontSize:"16px",color:'#828282',textDecoration:'line-through'}}>RS. {product.OriginalPrice}</div>
                </div>
                <div>
                    <button className="cart-btn">
                       <ShoppingBagIcon/> <span style={{alignSelf:'center',height:'12px',marginLeft:'5px'}}>ADD</span>
                        </button>
                </div>
                </div>
        </div></div></>
    )
}

export default ProductCard