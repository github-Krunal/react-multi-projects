import { useEffect, useState } from "react"
import { Product } from "../../../model/product.model"

const AdminDashboard=()=>{
    const [productList,setProductList]=useState<Product[]>([])

    useEffect(()=>{
const fetchAllProduct=async ()=>{
    let data=await fetch('http://localhost:4000/DashboardProduct');
    setProductList(await data.json())
}
fetchAllProduct()
    },[])

    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div>
                    Total Product:{productList.length}
                </div>
                <div>
                    Product Sold:0
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard