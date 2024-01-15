import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodaysProduct } from "../../../model/todaysProduct.model";
import { addItem, removeItem } from "../../../redux/slices/cartSlice";
import { RootState } from "../../../redux/store";

const ShoppingCart=()=>{
    const [cartItemList,setCartItemList]=useState<TodaysProduct[]>([])
    const dispatch=useDispatch();
    const {TotalItem,Price}=useSelector((state:RootState)=>state.cart)
    function addPriceHandler(){
        // dispatch(addItem("s"))
    }
    function subtractPriceHandler(){
        dispatch(removeItem("s"))
    }
    useEffect(()=>{
        const fetchAllCartItem=async()=>{
            const cartItems=await fetch("http://localhost:4000/ProductCart");
            const cartList=await cartItems.json();
            await setCartItemList(cartList);
            calculateItemTotal()
        }
        fetchAllCartItem();
    },[])

    function calculateItemTotal(){
        let item={
            TotalItem:0,
            Price:0 
        }
        item.TotalItem=cartItemList.length;
        item.Price=cartItemList.reduce((pre,acc)=>pre+(acc.SellingPrice?acc.SellingPrice:0),0);
        dispatch(addItem(item))
    }

    return(
        <div>
            <div style={{padding:"80px"}}>
               <h1>Shopping Cart</h1>
               <div style={{marginTop:"20px",display:"flex",justifyContent:"space-between",gap:"20px"}}>
               <div style={{width:"70%"}}>
                {
                 cartItemList&&cartItemList.length>0&&cartItemList.map((item,index)=>(
<div style={{display:"flex",alignItems:"center",padding:"20px",border:"1px solid #c6bebe",marginBottom:"30px"}} key={index}>
                <img src={item.ImageUrl} alt="" style={{height:"150px",width:"100px",objectFit:"cover"}}/>
                <div style={{paddingLeft:"30px",display:"flex",justifyContent:"space-between",width:"100%"}}> 
                <div>
                    <h2>{item.ProductName}</h2>
                    <h4>1kg</h4>
                    </div>
                    <div style={{display:"flex",gap:"40px"}}>
                    <div>
                        <button onClick={subtractPriceHandler} style={{width:"40px",height:"40px"}}>-</button>
                        <span style={{padding:"0px 20px 0px 20px"}}>1</span>
                        <button onClick={addPriceHandler} style={{width:"40px",height:"40px"}}>+</button>
                    </div>
                    <div>
                      <h2> $ {item.SellingPrice}</h2>
                    </div>
                    </div>
                </div>
                </div>
                 ))   
                
                }
               </div>
               <div style={{width:"30%"}}>
                    <div>
                        <h2>Order Details</h2>

                        <div style={{marginTop:"10px",display:"flex",justifyContent:"space-between"}}>
                            <div>SubTotal({TotalItem})</div>
                            <div>${Price}</div>
                        </div>

                        <div style={{marginTop:"10px",display:"flex",justifyContent:"space-between"}}>
                            <div>Grand Total</div>
                            <div>${Price}</div>
                        </div>


                        <button style={{marginTop:"10px",width:"100%",height:"50px",color:"white",background:"black"}}>Proceed Payment</button>
                    </div>
               </div>
               </div>
            </div>
        </div>
    )
}
 export default ShoppingCart;