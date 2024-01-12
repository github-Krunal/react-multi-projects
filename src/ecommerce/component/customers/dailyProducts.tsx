import { useEffect, useState } from "react";
import { TodaysProduct } from "../../../model/todaysProduct.model";
import ProductCard from "../global/productCard";
import Sale from "../hoc/sale";

const DailyProducts = () => {
  const [todaysProductList, setTodaysProductList] = useState<TodaysProduct[]>(
    []
  );
  const [selectCategories,setSelectedCategories]=useState<string>("All")
  const categroiesHandler=(categoriesType:string)=>{
    setSelectedCategories(categoriesType)
  }

  useEffect(() => {
    const getAllDailyProduct = async () => {
      let url=`http://localhost:4000/TodaysProduct`
      if(selectCategories!="All"){
        url+=`?Category=${selectCategories}`
      }
      const data = await fetch(url);
      const products: TodaysProduct[] = await data.json();
      setTodaysProductList(products);
    };
    getAllDailyProduct();
  }, [selectCategories]);

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
            <button className={`categories-button ${selectCategories==="All"?'selected-categories-button':'unselected-categories-button'}`}  onClick={()=>categroiesHandler('All')}>All</button>
            <button className={`categories-button ${selectCategories==="Vegetables"?'selected-categories-button':'unselected-categories-button'}`}onClick={()=>categroiesHandler('Vegetables')}>Vegetables</button>
          </div>
        </div>
        <div style={{display:"flex",gap:'20px'}}>
        {todaysProductList.length > 0 &&
          todaysProductList.map((product, index) => (
            <div key={index}>
            {
              product.Sale?<Sale component={ProductCard} product={product} />:
              <ProductCard product={product} />
            }
            </div>
          ))}
          </div>
      </div></>
  );
};

export default DailyProducts;
