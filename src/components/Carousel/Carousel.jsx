
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
          <div id="slide1" className="h-[500px] carousel-item relative w-full bg-[url('https://i.ibb.co/3TttPjT/pexels-dom-j-7304-227405.jpg')] bg-cover bg-center">
                {/* <img  src="https://i.ibb.co/3TttPjT/pexels-dom-j-7304-227405.jpg" className="w-full h-[500px]  object-cover" /> */}
          {/* <p className='w-1/2 mx-auto'>Every year, millions of students worldwide apply for scholarships. Whether these scholarship opportunities are for private education tuition or to cover the cost of college education</p> */}
            </div>
            </SwiperSlide>
        <SwiperSlide className=''>
        <div id="slide2" className="carousel-item relative w-full  ">
            
                <img src="https://i.ibb.co/HC90MPK/pexels-thatguycraig000-2566121.jpg" className="w-full h-[500px] object-cover" />
        </div>
        </SwiperSlide>
        <SwiperSlide className=''>
        <div id="slide3" className="carousel-item relative w-full ">
            
                <img src="https://i.ibb.co/JvRtp3M/pexels-pixabay-207692.jpg" className=" w-full h-[500px]  object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide className=''>
        <div id="slide4" className="carousel-item relative w-full ">
            
                <img src="https://i.ibb.co/MCQdpmr/becca-tapert-Gn-Y-m-W1-Q6-Xc-unsplash.jpg" className="w-full h-[500px] bg-center  object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide className=''>
        <div id="slide3" className="carousel-item relative w-full ">
            
                <img src="https://i.ibb.co/K26xhtj/pexels-pixabay-207684.jpg" className="w-full h-[500px]  object-cover" /> 
            </div>
        </SwiperSlide>
        <SwiperSlide className=''>
        <div id="slide2" className="carousel-item relative w-full ">
            
                <img src="https://i.ibb.co/G7ZPfBr/ken-theimer-Po-E6-Q48-B-5k-unsplash.jpg" className="w-full h-[500px]  object-cover" />
                
            </div>
        </SwiperSlide>
      
       

      </Swiper>
    </>

    );
};



export default Carousel;