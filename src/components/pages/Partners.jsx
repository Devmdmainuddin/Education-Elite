import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Autoplay } from 'swiper/modules';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.png'
const Partners = () => {
    return (
        <div>
            <div>
                <h2 className="text-3xl text-center my-8">Our Partners</h2>
                <div className="mt-8">
                <Swiper
                       
                        loop={true}
                        slidesPerView={2}
                        spaceBetween={1}
                        breakpoints={{
                            992: {
                                slidesPerView: 5,
                                spaceBetween: 24,
                            },

                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[ Autoplay]}
                        className="Swiper  w-full "
                    >
                         <SwiperSlide >
                              
                             <img src={img1} alt="" className='w-[180px] h-[180px]' />
                        </SwiperSlide>
                       
                        <SwiperSlide >
                              
                        <img src={img2} alt="" className='w-[180px] h-[180px]'/>
                        </SwiperSlide>

                        <SwiperSlide >
                              
                        <img src={img3} alt="" className='w-[180px] h-[180px]'/>
                        </SwiperSlide>
                        <SwiperSlide >
                              
                        <img src={img4} alt="" className='w-[180px] h-[180px]'/>
                        </SwiperSlide>

                        <SwiperSlide >
                              
                        <img src={img5} alt="" className='w-[180px] h-[180px]'/>
                        </SwiperSlide>
                        <SwiperSlide >
                              
                        <img src={img6} alt="" className='w-[180px] h-[180px]'/>
                        </SwiperSlide>

                      
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default Partners;