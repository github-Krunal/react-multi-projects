import { Snackbar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../../context/searchContext";
import { Product } from "../../model/product.model";
import { useCreateCartMutation} from "../../services/ecommerce.service";

const AllProduct = () => {
  const {sort,range,category,freeTextSearch} = useContext(SearchContext);
    const [createCart] = useCreateCartMutation();
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const [productList,setProductList]=useState<Product[]>([])
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
  
  useEffect(()=>{
    const fetchDashboardProduct = async ()=>{
      let queryArray:string[]=[];
      let url='http://localhost:4000/DashboardProduct'
      if(sort){
        if(sort==="Name"){
          queryArray.push(`_sort=Title&_order=asc`)
        }
        if(sort==="Price(Low to high)"){
          queryArray.push(`_sort=Price&_order=asc`)
        }
        if(sort==="Price(High to low)"){
          queryArray.push(`_sort=Price&_order=desc`)
        }
      }
      // if(range&&range.length>0){
      //   queryArray.push(`Price_gte=${range[0]}&Price_lte=${range[1]}`)
      // }
      if(category){
        queryArray.push(`Category=${category}`)
      }
      if(freeTextSearch){
        queryArray.push(`Title_like=${freeTextSearch}`)
      }
      if(queryArray.length>0){
        url=url+"?"+queryArray.join("&")
      }
      
      let data=await fetch(url);
      let b=await data.json();
      setProductList(b)
    }
    fetchDashboardProduct();
  },[sort,range,category,freeTextSearch])

  return (
    <>
      <div style={{ display: "flex" }}>
        {productList && productList.length > 0
          ? productList.map((product, index) => (
              <div
                className="toy-cart"
                style={{ marginRight: "20px" }}
                key={index}
              >
                <img src={product.ImageUrl} alt="" />
                <h3>{product.Title} - {product.Price} cat:{product.Category}</h3>
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
export default AllProduct;
