import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const ProductCard=()=>{
    return (
        <div>
            <div style={{width:'300px',boxShadow:'0 0 10px #a9a3a3'}}>
            <div style={{height:"300px"}}>
                <img src="https://hongotheme.myshopify.com/cdn/shop/products/grosery-product-01.jpg?v=1692168983&width=360" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
        <div style={{padding:'0px 20px 25px 30px '}}>
            <h4 style={{color:"#aa9e9e"}}>Fresh fruits</h4>
            <h2>Fresh watermelon</h2>
            <div style={{marginTop:'15px',display:"flex",gap:'10px'}}>
            <FormControl sx={{  minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Age"
       
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <TextField
          id="outlined-number"
          label="Number"
          type="number"
          size="small"
        />
            </div>

            <div style={{marginTop:'15px',display:"flex",gap:'10px',justifyContent:'space-between',alignItems:"center"}}>
                <div>
                    <div style={{fontSize:"20px",color:'#429519'}}>RS. 300</div>
                    <div style={{fontSize:"16px",color:'#828282',textDecoration:'line-through'}}>RS. 500</div>
                </div>
                <div>
                    <button className="cart-btn">
                       <ShoppingBagIcon/> <span style={{alignSelf:'center',height:'12px',marginLeft:'5px'}}>ADD</span>
                        </button>
                </div>
                </div>
        </div></div></div>
    )
}

export default ProductCard