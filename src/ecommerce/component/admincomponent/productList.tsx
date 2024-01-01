import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../model/product.model";

const ProductList = () => {
  const [productList,setProductList]=useState<Product[]>([])
    
  const deleteProductHandler=(product:Product)=>{
        fetch(`http://localhost:4000/DashboardProduct/${product.id}`,{
            method:'DELETE'
        })
        let list=productList.filter(a=>a.id!=product.id);
        setProductList(list)
}
    useEffect(()=>{
        const getAllDashboardProduct= async ()=>{
            let data=await fetch('http://localhost:4000/DashboardProduct')
            let product=await data.json();
            setProductList(product)
        }
        getAllDashboardProduct();
    },[])

  return (
    <div>
      <table className="demTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>ImageUrl</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                productList?.map((product,index)=>(
                    <tr key={index}>
                    <td>{product.Title}</td>
                    <td>{product.Price}</td>
                    <td>{product.Category}</td>
                    <td>
                        <img src={product.ImageUrl} style={{width:'50px',height:'50px'}}/>
                    </td>
                    <td>
                      <Link to={`/admin/update-product/${product.id}`}><button style={{marginRight:'10px'}}>edit</button></Link>
                        <button onClick={()=>deleteProductHandler(product)}>Delete</button>
                    </td>
                  </tr>
                ))
            }
        
        </tbody>
      </table>
    </div>
  );
};
export default ProductList;
