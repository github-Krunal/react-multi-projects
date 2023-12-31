import { Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../model/product.model";
import { useCreateCartMutation, useGetDashboardProductQuery } from "../../services/ecommerce.service";

const ToysCart = () => {
    const [createCart] = useCreateCartMutation();
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  // const { data: productList } = useGetDashboardProductQuery();
  const [productList,setProductList]=useState<Product[]>([])

  useEffect(()=>{
    const getAllDashboardProduct= async ()=>{
        let data=await fetch('http://localhost:4000/DashboardProduct')
        let product=await data.json();
        setProductList(product)
    }
    getAllDashboardProduct();
  },[])


  function addToCartHandler(product: Product | undefined) {
    if(product&&product.RecordID){
        createCart(product)
    }
    setState({ ...{ vertical: "bottom", horizontal: "center" }, open: true });
  }
  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...{ vertical: "bottom", horizontal: "center" }, open: false });
  };
  return (
    <>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: "25px" }}>Product</div>
        <div>
        <Link to="/search">
     <button type="button">
          more
     </button>
 </Link>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {productList && productList.length > 0
          ? productList.map((product, index) => (
              <div
                className="toy-cart"
                style={{ marginRight: "20px" }}
                key={index}
              >
                <img src={product.ImageUrl} alt="" />
                <h3>{product.Title}</h3>
                <button onClick={() => addToCartHandler(product)}>
                  Add to cart
                </button>
              </div>
            ))
          : ""}
      </div>
      <Snackbar
        autoHideDuration={3000}
        open={open}
        message="Product added in cart"
        onClose={handleClose}
        key={vertical + horizontal}
      />
    </>
  );
};
export default ToysCart;
