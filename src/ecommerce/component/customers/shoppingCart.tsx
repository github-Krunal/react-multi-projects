import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodaysProduct } from "../../../model/todaysProduct.model";
import { addItem } from "../../../redux/slices/cartSlice";
import { RootState } from "../../../redux/store";

const ShoppingCart = () => {
  const [cartItemList, setCartItemList] = useState<TodaysProduct[]>([]);
  const dispatch = useDispatch();
  const { TotalItem, Price } = useSelector((state: RootState) => state.cart);
  function addPriceHandler(item: TodaysProduct) {
    let index: number = cartItemList.findIndex(
      (product) => product.id === item.id
    );
    let newState = [...cartItemList];
    if (Array.isArray(newState) && index >= -1) {
      newState[index].NumberOfItems = (newState[index].NumberOfItems || 0) + 1;
    }
    setCartItemList(newState);
    calculateItemTotal(newState);
    updateProduct(item.id)
  }
  function subtractPriceHandler(item: TodaysProduct) {
    let index: number = cartItemList.findIndex(
      (product) => product.id === item.id
    );
    let newState = [...cartItemList];
    if (Array.isArray(newState) && index >= -1) {
      newState[index].NumberOfItems = (newState[index].NumberOfItems || 0) - 1;
    }
    setCartItemList(newState);
    calculateItemTotal(newState);
    updateProduct(item.id)

  }

  async function updateProduct(id:number|undefined){
    let singleProduct:TodaysProduct|undefined=cartItemList.find(item=>item.id===id)
   await   fetch(`http://localhost:4000/ProductCart/${id}`, {
              headers: {
                "Content-Type": "application/json",
              },
              method: "PATCH",
              body: JSON.stringify(singleProduct),
            });
  }

  useEffect(() => {
    const fetchAllCartItem = async () => {
      const cartItems = await fetch("http://localhost:4000/ProductCart");
      const cartList = await cartItems.json();
      setCartItemList(cartList);
      calculateItemTotal(cartList);
    };
    fetchAllCartItem();
  }, []);

  function calculateItemTotal(cartList: TodaysProduct[]) {
    let item = {
      TotalItem: TotalItem,
      Price: Price,
    };
    item.TotalItem = cartList.length;
    item.Price = cartList.reduce((acc, obj) => {
      const product =
        (obj.NumberOfItems ? obj.NumberOfItems : 0) *
        (obj.SellingPrice ? obj.SellingPrice : 0);
      return acc + product;
    }, 0);
    dispatch(addItem(item));
  }

  return (
    <div>
      <div style={{ padding: "80px" }}>
        <h1>Shopping Cart</h1>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ width: "70%" }}>
            {cartItemList &&
              cartItemList.length > 0 &&
              cartItemList.map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "20px",
                    border: "1px solid #c6bebe",
                    marginBottom: "30px",
                  }}
                  key={index}
                >
                  <img
                    src={item.ImageUrl}
                    alt=""
                    style={{
                      height: "150px",
                      width: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      paddingLeft: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div>
                      <h2>
                        {item.ProductName}({item.SellingPrice})
                      </h2>
                      <h4>1kg</h4>
                    </div>
                    <div style={{ display: "flex", gap: "40px" }}>
                      <div>
                        <button
                          onClick={() => subtractPriceHandler(item)}
                          style={{ width: "40px", height: "40px" }}
                        >
                          -
                        </button>
                        <span style={{ padding: "0px 20px 0px 20px" }}>
                          {item.NumberOfItems}
                        </span>
                        <button
                          onClick={() => addPriceHandler(item)}
                          style={{ width: "40px", height: "40px" }}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <h2>
                          {" "}
                          ${" "}
                          {(item.SellingPrice ? item.SellingPrice : 0) *
                            (item.NumberOfItems ? item.NumberOfItems : 0)}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div style={{ width: "30%" }}>
            <div>
              <h2>Order Details</h2>

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>SubTotal({TotalItem})</div>
                <div>${Price}</div>
              </div>

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>Grand Total</div>
                <div>${Price}</div>
              </div>

              <button
                style={{
                  marginTop: "10px",
                  width: "100%",
                  height: "50px",
                  color: "white",
                  background: "black",
                }}
              >
                Proceed Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
