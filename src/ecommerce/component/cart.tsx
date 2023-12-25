import { Product } from '../../model/product.model';
import { useDeleteCartMutation, useGetCartQuery } from '../../services/ecommerce.service';
import './cart.scss';
const Cart = () => {
    const {data:products}=useGetCartQuery(undefined,{
        refetchOnMountOrArgChange:true
    });
    const [deleteCart, { isLoading }] = useDeleteCartMutation();
   function deleteProductHandler(product: Product) {
     deleteCart(product.ID);
   }
  return (
    <div style={{ marginTop: "10px" }}>
      <h1>Shopping Cart</h1>
      <div className="shopping-cart" style={{ marginTop: "10px" }}>
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>

        {products?.map((product) => (
          <div className="product" key={product.ID}>
            <div className="product-image">
              <img src={product.ImageUrl} />
            </div>
            <div className="product-details">
              <div className="product-title">{product.Title}</div>
              <p className="product-description">{product.Description}</p>
            </div>
            <div className="product-price">12.99</div>
            <div className="product-quantity">
              {/* <input type="number" value="2" min="1"/> */}
            </div>
            <div className="product-removal">
              <button className="remove-product" onClick={()=>deleteProductHandler(product)}>Remove</button>
            </div>
            <div className="product-line-price">25.98</div>
          </div>
        ))}

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">
              71.97
            </div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">
              3.60
            </div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">
              15.00
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">
              90.57
            </div>
          </div>
        </div>

        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};
export default Cart;