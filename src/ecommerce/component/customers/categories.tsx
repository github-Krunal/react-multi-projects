import { useEffect, useState } from "react";
import { Category } from "../model/category.model";

const Categories = () => {
    const [categoriesList,setCategoriesList]=useState<Category[]>([])
    useEffect(()=>{
        const getAllCategories=async()=>{
            const data = await fetch("http://localhost:4000/Categories");
            const categories:Category[]=await data.json()
            setCategoriesList(categories)
        }
        getAllCategories()
    },[])

  return (
    <div>
      <h1 style={{ fontWeight: "600", textAlign: "center", marginTop: "45px" }}>
        Love our categories
      </h1>

      <div style={{ padding: "0 20px", display: "flex", gap: "25px" }}>
        {categoriesList &&
          categoriesList.length > 0 &&
          categoriesList.map((category,index) => (
            <div className="categories-start" key={index}>
              <div className="categories-main">
                <img
                  src={category.ImageUrl}
                  alt=""
                />
              </div>
              <p className="categories-name">{category.Title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Categories;
