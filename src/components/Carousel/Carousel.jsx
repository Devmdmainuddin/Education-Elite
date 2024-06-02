
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation,Autoplay } from 'swiper/modules';
const Carousel = () => {

    return (
        <>
      <Swiper
       navigation={true}
        loop={true} 
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
         modules={[Navigation,Autoplay]}  className="mySwiper">

        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full  h-[400px]">
                <img  src="https://i.ibb.co/nwspGDW/electronics-banner-2.jpg" className="w-full  object-cover" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div id="slide2" className="carousel-item relative w-full  h-[400px]">
                <img src="https://i.ibb.co/KF9nm0S/electronics-banner-1.jpg" className="w-full  object-cover" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide3" className="carousel-item relative w-full  h-[400px]">
                <img src="https://i.ibb.co/9yxG1rd/mens-banner.jpg" className=" w-full  object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide4" className="carousel-item relative w-full  h-[400px]">
                <img src="https://i.ibb.co/k4NGb54/womens-banner.jpg" className="w-full   object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide3" className="carousel-item relative w-full h-[400px]">
                <img src="https://i.ibb.co/8B65DNm/home-banner1.jpg" className="w-full   object-cover" /> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide2" className="carousel-item relative w-full h-[400px]">
                <img src="https://i.ibb.co/WWV8rJb/home-banner2.jpg" className="w-full   object-cover" />
                
            </div>
        </SwiperSlide>
      
       

      </Swiper>
    </>

    );
};



export default Carousel;