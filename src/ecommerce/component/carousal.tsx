import { useEffect, useState } from "react"
import { useGetAllDataQuery } from "../../services/ecommerce.service"

const Carousal = () => {
  const { data: carousualData } = useGetAllDataQuery("Carousual");
  const [activeSlide, setActiveSlide] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (carousualData && carousualData.length) {
        setActiveSlide(
          (prevActiveSlide) => (prevActiveSlide + 1) % carousualData.length
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [carousualData?.length]);

  return (
    <div>
      {carousualData && carousualData.length && (
        <div style={{width:'100%',height:'200px'}}>
        <img src={carousualData[activeSlide].ImageUrl} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
      )}
    </div>
  );
};
export default Carousal