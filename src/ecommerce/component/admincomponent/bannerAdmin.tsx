import BannerBlockFirst from "./bannerBlockfirst"
import BannerBlockSecond from "./bannerBlockSecond"
import BannerForm from "./bannerForm"
import SliderList from "./sliderList"

const BannerAdmin=()=>{
    return(
        <div>
            <div style={{display:'flex'}}>
                <div style={{width:'50%'}}>
                    <BannerForm/>
                </div>
                <div>
                    <SliderList/>
                    <BannerBlockFirst/>
                    <BannerBlockSecond/>
                </div>
            </div>
        </div>
    )
}
export default BannerAdmin