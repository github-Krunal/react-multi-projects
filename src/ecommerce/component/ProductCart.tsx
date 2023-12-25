import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import {
  useCreateCartMutation,
  useGetProductsQuery,
} from "../../services/ecommerce.service";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { Product } from "../../model/product.model";
const ProductCart = () => {
  const { data: products } = useGetProductsQuery();
  const [createCart, { isLoading }] = useCreateCartMutation();
  function setProduct(product: Product) {
    createCart(product);
  }
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
        {products?.map((product) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={product.ID}
            style={{ marginRight: "10px" }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={product.ImageUrl}
              title="green iguana"
            />
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {product.ID}-{product.Title}
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
