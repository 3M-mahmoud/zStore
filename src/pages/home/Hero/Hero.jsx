// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import slider1 from "../../../assets/images/Slider/slider-1.jpg";
import slider2 from "../../../assets/images/Slider/slider-2.jpg";
import slider3 from "../../../assets/images/Slider/slider-3.jpg";
import slider4 from "../../../assets/images/Slider/slider-4.jpg";
import slider5 from "../../../assets/images/Slider/slider-5.jpg";
import slider6 from "../../../assets/images/Slider/slider-6.jpg";
// Import Swiper styles
import "swiper/css";

import "./style.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { East, West } from "@mui/icons-material";
import { Fragment, useRef } from "react";

import { Box, useMediaQuery } from "@mui/material";

function Hero() {
  const sliderRef = useRef(null);
  const handlePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };
  return (
    <Box
      height={"50vh"}
      sx={{
        height: {
          xs: "20vh",
          md: "50vh",
        },
      }}
    >
      <Swiper
        simulateTouch={useMediaQuery("(min-width:1000px)")}
        speed={2000}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        ref={sliderRef}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="slider-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="slider-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="slider-5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="slider-6" />
        </SwiperSlide>
        {useMediaQuery("(min-width:1000px)") && (
          <Fragment>
            <button onClick={handleNext}>
              <East />
            </button>
            <button onClick={handlePrev}>
              <West />
            </button>
          </Fragment>
        )}
      </Swiper>
    </Box>
  );
}

export default Hero;
