
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

        <SwiperSlide className=''>
          <div id="slide1" className="h-[500px] carousel-item relative w-full bg-[url('https://i.ibb.co.com/Cmk08yt/ban02.jpg')] bg-cover bg-center">
                {/* <img  src="https://i.ibb.co/3TttPjT/pexels-dom-j-7304-227405.jpg" className="w-full h-[500px]  object-cover" /> */}
          {/* <p className='w-1/2 mx-auto'>Every year, millions of students worldwide apply for scholarships. Whether these scholarship opportunities are for private education tuition or to cover the cost of college education</p> */}
            </div>
            </SwiperSlide>
        <SwiperSlide className=''>
        <div id="slide2" className="carousel-item relative w-full  ">
            
                <img src="https://i.ibb.co.com/K2T5xwX/ban01.jpg" className="w-full h-[500px] object-cover" />
        </div>
        </SwiperSlide>
        <SwiperSlide className=''>
        <div id="slide3" className="carousel-item relative w-full ">
            
                <img src="https://i.ibb.co.com/Cmk08yt/ban02.jpg" className=" w-full h-[500px]  object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide className=''>
        <div id="slide4" className="carousel-item relative w-full ">
            
                <img src="https://i.ibb.co.com/3BsQcC8/ben03.jpg" className="w-full h-[500px] bg-center  object-cover" />
            </div>
        </SwiperSlide>
  
      
       

      </Swiper>
    </>

    );
};



export default Carousel;