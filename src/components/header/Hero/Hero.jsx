// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://zstoreq8.com/image/cache/catalog/iPHONE%20(11)-3840x889.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zstoreq8.com/image/cache/catalog/IPAD-Zstore+++-3840x889.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zstoreq8.com/image/cache/catalog/Slider%20Plus/B3-3840x889.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zstoreq8.com/image/cache/catalog/Slider%20Plus/Samsung-Zstore+-3840x889.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zstoreq8.com/image/cache/catalog/Slider%20Plus/B7+-3840x889.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero;
