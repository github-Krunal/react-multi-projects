import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import { useGetProductsQuery } from "../../services/ecommerce.service"

const ProductCart=()=>{
    const {data:products}=useGetProductsQuery()
    return (
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {
            products?.map((product)=>(
                <Card sx={{ maxWidth: 345 }} key={product.ID} style={{marginRight:"10px"}}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={product.ImageUrl}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.ID}-{product.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {product.Description}
                  </Typography>
                </CardContent>
              </Card>
            ))
        }
      </div>
    );
}
export default ProductCart