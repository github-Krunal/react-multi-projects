import ProductCard from "../global/productCard";

const DailyProducts = () => {
  return (
    <div>
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

        <ProductCard />
      </div>
    </div>
  );
};

export default DailyProducts;
