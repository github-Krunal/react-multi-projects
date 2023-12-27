import { Chip } from "@mui/material";
import { currencyFormat } from "../../utility/currencyFormat";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useCreateCartMutation, useGetSingleProductQuery } from "../../services/ecommerce.service";
import { Product } from "../../model/product.model";
import { useParams } from "react-router-dom";

const ProductDetails=()=>{
    const { productID } = useParams();
    const {data:product} =useGetSingleProductQuery(Number(productID))
      const [createCart] = useCreateCartMutation();
  function setProduct(product: Product|undefined) {
    if(product){
        createCart(product);
    }
  }
return (
    <div>
        <div style={{columns:2}}>
            <div style={{width:'100%',height:'100%'}}>
                <img src={product?.ImageUrl} alt="" style={{width:'100%',height:'100%'}}/>
            </div>
            <div>
                <h4>{product?.Title}</h4>
                <Chip label={currencyFormat(product?.Price)} variant="outlined" />
                <ShoppingBagIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setProduct(product)}
                ></ShoppingBagIcon>
                <p>{product?.Description}</p>
            </div>
        </div>
    </div>
)
}
export default ProductDetails;