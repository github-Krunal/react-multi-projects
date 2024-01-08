import { useEffect, useState } from "react"
import { Banner } from "../model/banner.model"

const BannerBlockSecond=()=>{
  const [blockTwoList,setBlockTwoList]=useState<Banner[]>([])

  useEffect(()=>{
    const fetchData=async()=>{
        let data=await fetch(`http://localhost:4000/BannerSlider?Type=Block2`)
        let product=await data.json();
        setBlockTwoList(product)
    }
    fetchData()
},[])
    return (
        <div>
            <h1 style={{marginTop:'30px'}}>Banner Block Two</h1>
                    <table className="demTable" >
        <thead>
          <tr>
            <th>Slogan</th>
            <th>BannerText</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
        {blockTwoList &&
              blockTwoList.map((slider,index) => (
                <tr key={index}>
                  <td>{slider.Slogan}</td>
                  <td>{slider.BannerText}</td>
                  <td><img src={slider.Image} alt=""  width={'80px'} height='80px'/></td>
                  {/* <td>
                  <Checkbox
      checked={slider.ShowOnSlider}
      onChange={()=>handleChange(index)}
      inputProps={{ 'aria-label': 'controlled' }}
    />
                  </td> */}
                </tr>
              ))}
        </tbody>
                    </table>
        </div>
    )
}

export default BannerBlockSecond;