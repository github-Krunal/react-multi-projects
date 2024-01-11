const Sale=(props:any)=>{
    return (
        <div style={{position:"relative"}}> 
            <div className="offer">Sale 40%</div>
            <props.component product={props.product}/>
        </div>
    )
}
export default Sale;