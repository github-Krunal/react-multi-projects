import { useEffect, useState } from "react"
import { useGetAllDataQuery } from "../../services/ecommerce.service"

const Carousal = () => {
  const { data: carousualData } = useGetAllDataQuery("Carousual");
  const [activeSlide, setActiveSlide] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (carousualData && carousualData.length) {
        if (activeSlide === carousualData?.length) {
          setActiveSlide(0);
        } else {
          setActiveSlide(
            (prevActiveSlide) => (prevActiveSlide + 1) % carousualData.length
          );
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [carousualData?.length]);

  return (
    <div>
      {carousualData && carousualData.length && (
        <img src={carousualData[activeSlide].ImageUrl} alt="" />
      )}
    </div>
  );
};
export default Carousal