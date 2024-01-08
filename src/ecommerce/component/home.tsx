import Advertise from "./customers/advertise";
import DashboardBanner from "./customers/banner";
import Categories from "./customers/categories";


const Home = () => {
  return (
    <div>
      <div style={{padding:"20px"}}>
      <DashboardBanner/>
      <Advertise/>
      <Categories/>
      </div>
      {/* <Carousal />
      <ToysCart /> */}
    </div>
  );
};
export default Home;
