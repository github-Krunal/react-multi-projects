import { useEffect, useState } from 'react';
import { Banner } from '../model/banner.model';
import '../scss/banner.scss'
const DashboardBanner=()=>{
  const [activeSlide, setActiveSlide] = useState<number>(0);
const [bannerList,setBannerList]=useState<Banner[]>([])
    useEffect(() => {
      const getAllBannerImage = async () => {
        const data = await fetch("http://localhost:4000/BannerSlider");
        const bannerListData: Banner[] = await data.json();
        setBannerList(bannerListData)
        const interval = setInterval(() => {
          if (bannerListData && bannerListData.length) {
            setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % bannerListData.length);
          }
        }, 6000);
        return () => clearInterval(interval);
      };
      
      getAllBannerImage();
    }, []);

    return (
        <div>
           <div className="angry-grid">
        <div id="item-0">
            {
               (bannerList&&bannerList.length>0)&& <img src={bannerList[activeSlide].Image} alt="" />
            }
        </div>
        <div id="item-1">&nbsp;</div>
        <div id="item-2">&nbsp;</div>
            </div>
        </div>
    )
}
export default DashboardBanner;