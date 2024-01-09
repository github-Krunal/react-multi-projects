import { useEffect, useState } from "react";
import { Category } from "../model/category.model";

const CategoriesTable = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const deleteProductHandler = (category: Category) => {
    fetch(`http://localhost:4000/Categories/${category.id}`, {
      method: "DELETE",
    });
    let list = categoriesList.filter((a) => a.id != category.id);
    setCategoriesList(list);
  };
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(`http://localhost:4000/Categories`);
      let category = await data.json();
      setCategoriesList(category);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 style={{ marginTop: "30px" }}>Categories List</h1>
      <table className="demTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categoriesList &&
            categoriesList.map((slider, index) => (
              <tr key={index}>
                <td>{slider.Title}</td>
                <td>
                  <img
                    src={slider.ImageUrl}
                    alt=""
                    width={"80px"}
                    height="80px"
                  />
                </td>
                <td>
                  <button onClick={() => deleteProductHandler(slider)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default CategoriesTable;
