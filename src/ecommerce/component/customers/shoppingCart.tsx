const ShoppingCart=()=>{
    return(
        <div>
            <div style={{padding:"80px"}}>
               <h1>Shopping Cart</h1>
               <div style={{marginTop:"20px",display:"flex",justifyContent:"space-between",gap:"20px"}}>
               <div style={{width:"70%"}}>
                <div style={{display:"flex",alignItems:"center",padding:"20px",border:"1px solid #c6bebe",marginBottom:"30px"}}>
                <img src="https://cdn.dribbble.com/userupload/11590377/file/original-f8946e228e7ace6e86f49ca5a74a8973.jpg?resize=1200x800" alt="" style={{height:"150px",width:"100px",objectFit:"cover"}}/>
                <div style={{paddingLeft:"30px",display:"flex",justifyContent:"space-between",width:"100%"}}> 
                <div>
                    <h2>Fresh watermelon</h2>
                    <h4>1kg</h4>
                    </div>
                    <div style={{display:"flex",gap:"40px"}}>
                    <div>
                        <button style={{width:"40px",height:"40px"}}>-</button>
                        <span style={{padding:"0px 20px 0px 20px"}}>1</span>
                        <button style={{width:"40px",height:"40px"}}>+</button>
                    </div>
                    <div>
                      <h2> $ 20,000</h2>
                    </div>
                    </div>
                </div>
                </div>
                <div style={{display:"flex",alignItems:"center",padding:"20px",border:"1px solid #c6bebe"}}>
                <img src="https://cdn.dribbble.com/userupload/11590377/file/original-f8946e228e7ace6e86f49ca5a74a8973.jpg?resize=1200x800" alt="" style={{height:"150px",width:"100px",objectFit:"cover"}}/>
                <div style={{paddingLeft:"30px",display:"flex",justifyContent:"space-between",width:"100%"}}> 
                <div>
                    <h2>Fresh watermelon</h2>
                    <h4>1kg</h4>
                    </div>
                    <div style={{display:"flex",gap:"40px"}}>
                    <div>
                        <button style={{width:"40px",height:"40px"}}>-</button>
                        <span style={{padding:"0px 20px 0px 20px"}}>1</span>
                        <button style={{width:"40px",height:"40px"}}>+</button>
                    </div>
                    <div>
                      <h2> $ 20,000</h2>
                    </div>
                    </div>
                </div>
                </div>
               </div>
               <div style={{width:"30%"}}>
                    <div>
                        <h2>Order Details</h2>

                        <div style={{marginTop:"10px",display:"flex",justifyContent:"space-between"}}>
                            <div>SubTotal(2)</div>
                            <div>$334</div>
                        </div>
                        <div style={{marginTop:"10px",display:"flex",justifyContent:"space-between"}}>
                            <div>Shipping Fee</div>
                            <div>$334</div>
                        </div>

                        <div style={{marginTop:"10px",display:"flex",justifyContent:"space-between"}}>
                            <div>Grand Total</div>
                            <div>$334</div>
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