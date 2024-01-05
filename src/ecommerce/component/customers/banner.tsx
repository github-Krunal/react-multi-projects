import { useEffect, useState } from 'react';
import { Banner } from '../model/banner.model';
import '../scss/banner.scss'
const DashboardBanner=()=>{
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [sliderList, setSliderList] = useState<Banner[]>([]);
  const [twoBannerList, setTwoBannerList] = useState<Banner[]>([]);
  useEffect(() => {
    const getAllBannerImage = async () => {
      const data = await fetch("http://localhost:4000/BannerSlider");
      const bannerListData: Banner[] = await data.json();
      let sliderlist=bannerListData.slice(0,3)
      let twobannerlist=bannerListData.slice(3,bannerListData.length)
      setSliderList(sliderlist);
      setTwoBannerList(twobannerlist);
      // const interval = setInterval(() => {
        if (sliderList && sliderList.length) {
          setActiveSlide(
            (prevActiveSlide) => (prevActiveSlide + 1) % sliderList.length
          );
        }
      // }, 5000);
      // return () => clearInterval(interval);
    };

    getAllBannerImage();
  }, []);

    return (
      <div>
        <div className="angry-grid">
          <div id="item-0">
            {sliderList && sliderList.length > 0 && (
              <div style={{position:'relative',height:'100%'}}>
                <div className='Banner-slider'>
                  <p>{sliderList[activeSlide].Slogan}</p>
                  <h2>{sliderList[activeSlide].BannerText}</h2>
                </div>
              <img src={sliderList[activeSlide].Image} alt="" />
              </div>
            )}
          </div>
          <div id="item-1">
            {twoBannerList && twoBannerList.length > 0 && (
              <div style={{position:'relative',height:'100%'}}>
                 <div className='Banner'>
                 <p>{twoBannerList[0].Slogan}</p>
                 <h2>{twoBannerList[0].BannerText}</h2>
               </div>
              <img src={twoBannerList[0].Image} alt="" />
              </div>
            )}
          </div>
          <div id="item-2">
            {twoBannerList && twoBannerList.length > 0 && (
              <div style={{position:'relative',height:'100%'}}>
 <div className='Banner'>
                 <p>{twoBannerList[1].Slogan}</p>
                 <h2>{twoBannerList[1].BannerText}</h2>
               </div>
              <img src={twoBannerList[1].Image} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
}
export default DashboardBanner;