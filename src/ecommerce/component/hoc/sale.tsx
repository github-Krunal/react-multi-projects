const Sale=(props:any)=>{
    return (
        <div style={{position:"relative"}}> 
            <div className="offer">Sale {props.product.Sale}%</div>
            <props.component product={props.product}/>
        </div>
    )
}
export default Sale;