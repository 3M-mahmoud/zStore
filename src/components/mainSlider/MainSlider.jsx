import { Children, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./style.css";

// import required modules
import { Autoplay } from "swiper/modules";

// import icon
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import CatCard from "../catCard/CatCard";
import Product from "../product/Product";

const MainSlider = ({ products, numPerGroup, numPerView, type}) => {
  // constants
  const swiperRef = useRef(null);
  const [isReachBeginning, setIsReachBeginning] = useState(true);
  const [isReachEnd, setIsReachEnd] = useState(false);

  // function
  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleReachBeginning = () => {
    setIsReachBeginning(true);
    setIsReachEnd(false);
    console.log("left");
  };
  
  const handleReachEnd = () => {
    setIsReachEnd(true);
    setIsReachBeginning(false);
  };

  return (
    <Swiper
      ref={swiperRef}
      onReachBeginning={handleReachBeginning}
      onReachEnd={handleReachEnd}
      slidesPerGroup={numPerGroup}
      slidesPerView={numPerView}
      spaceBetween={20}
      speed={1000}
      autoplay={{
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        420: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        630: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        840: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: numPerView,
        },
      }}
      modules={[Autoplay]}
      className="catSwiper"
    >
      {products.map((item) => {
        return (
          <SwiperSlide key={item.id}>
          {type === "products" ? <Product item={item} /> : <CatCard product={item} />}
          </SwiperSlide>
        )
      }
      )}
      {!isReachBeginning && (
        <button className="prev" onClick={slidePrev}>
          <KeyboardArrowRight />
        </button>
      )}

      {!isReachEnd && (
        <button className="next" onClick={slideNext}>
          <KeyboardArrowLeft />
        </button>
      )}
    </Swiper>
  );
};

export default MainSlider;
