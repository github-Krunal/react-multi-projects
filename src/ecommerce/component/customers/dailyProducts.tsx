import { useEffect, useState } from "react";
import { TodaysProduct } from "../../../model/todaysProduct.model";
import ProductCard from "../global/productCard";
import Sale from "../hoc/sale";

const DailyProducts = () => {
  const [todaysProductList, setTodaysProductList] = useState<TodaysProduct[]>(
    []
  );
  useEffect(() => {
    const getAllDailyProduct = async () => {
      const data = await fetch("http://localhost:4000/TodaysProduct");
      const products: TodaysProduct[] = await data.json();
      setTodaysProductList(products);
    };
    getAllDailyProduct();
  }, []);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>All fresh products daily!</h1>
          <div>
            <button className="categories-button">All</button>
            <button className="categories-button">Vegetables</button>
          </div>
        </div>
        <div style={{display:"flex",gap:'20px'}}>
        {todaysProductList.length > 0 &&
          todaysProductList.map((product, index) => (
            <>
            {
              product.Sale?<Sale component={ProductCard} product={product} key={index}/>:
              <ProductCard product={product} key={index}/>
            }
            </>
          ))}
          </div>
      </div></>
  );
};

export default DailyProducts;
