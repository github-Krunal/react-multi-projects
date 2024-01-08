import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { Banner } from "../model/banner.model";

const SliderList=()=>{
    const [sliderList,setSliderList]=useState<Banner[]>([])
    const handleChange = (index:number) => {
        const newState = [...sliderList]
        newState[index].ShowOnSlider = !newState[index].ShowOnSlider
        updateBannerSlider(newState[index])
        setSliderList(newState)
    };
    useEffect(()=>{
        const fetchData=async()=>{
            let data=await fetch(`http://localhost:4000/BannerSlider?Type=slider`)
            let product=await data.json();
            setSliderList(product)
        }
        fetchData()
    },[])

    async function  updateBannerSlider(slider:Banner){
            await   fetch(`http://localhost:4000/BannerSlider/${slider?.id}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(slider),
          });
    }

    return (
      <div>
        <h1>Slider List</h1>
        <table className="demTable">
          <thead>
            <tr>
              <th>Slogan</th>
              <th>BannerText</th>
              <th>Image</th>
              <th>Show on slider</th>
            </tr>
          </thead>
          <tbody>
            {sliderList &&
              sliderList.map((slider,index) => (
                <tr key={index}>
                  <td>{slider.Slogan}</td>
                  <td>{slider.BannerText}</td>
                  <td><img src={slider.Image} alt=""  width={'80px'} height='80px'/></td>
                  <td>
                  <Checkbox
      checked={slider.ShowOnSlider}
      onChange={()=>handleChange(index)}
      inputProps={{ 'aria-label': 'controlled' }}
    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
}

export default SliderList;