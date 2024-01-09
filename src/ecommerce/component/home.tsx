import Advertise from "./customers/advertise";
import DashboardBanner from "./customers/banner";
import Categories from "./customers/categories";
import DailyProducts from "./customers/dailyProducts";


const Home = () => {
  return (
    <div>
      <div style={{padding:"20px"}}>
      <DashboardBanner/>
      <Advertise/>
      <Categories/>
      <DailyProducts/>
      </div>
      {/* <Carousal />
      <ToysCart /> */}
    </div>
  );
};
export default Home;
