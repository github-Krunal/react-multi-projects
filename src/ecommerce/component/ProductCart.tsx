import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import {
  useCreateCartMutation,
  useGetProductsQuery,
} from "../../services/ecommerce.service";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Product } from "../../model/product.model";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { currencyFormat } from "../../utility/currencyFormat";
import { Link } from "react-router-dom";
const ProductCart = () => {
  const {totalCartItem,setCartItem}=useContext(CartContext)
  const { data: products } = useGetProductsQuery();
  const [createCart] = useCreateCartMutation();
  function setProduct(product: Product) {
    createCart(product);
    let totalItem=totalCartItem+1;
    setCartItem(totalItem)
  }
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
        {products?.map((product) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={product.id}
            style={{ marginRight: "10px" }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={product.ImageUrl}
              title="green iguana"
            />
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={'/product-details/'+product.id}>{product.id}-{product.Title}</Link>
                <Chip label={currencyFormat(product.Price)} variant="outlined" />
                <ShoppingBagIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setProduct(product)}
                ></ShoppingBagIcon>
              </div>
              <Typography variant="body2" color="text.secondary">
                {product.Description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default ProductCart;
