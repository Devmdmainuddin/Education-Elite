import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import useReviews from '../../hooks/useReviews';
import { useState } from 'react';
import LoadingSpinner from '../Shared/LoadingSpinner';

const Testimonial = () => {
    const [dataLength, setDataLength] = useState(6);
   const [reviews,loading]= useReviews()


   if (loading ) return <LoadingSpinner />
//    const {reviewerImage,reviewerName,reviewerEmail,reviewDate,rating,comments,sholarshipName,sholarshipUniversity}=reviews
    return (
        <div className="py-16 bg-gray-50">


            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                    <h1 className="text-2xl  md:text-4xl xl:text-5xl font-semibold leading-10   text-gray-800 xl:w-2/3 pr-16 lg:pr-0">Our student love what we do</h1>
                    <p className="mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-6 lg:pr-0">Over 500 companies use our product to understand their business and marketing better.</p>
                    <button className=" px-8 py-4 mt-4 bg-teal-500 hover:teal-400 rounded text-base font-medium leading-none text-center text-white">Read success stories</button>
                </div>
                <div  className="">
                    <Swiper
                        // direction={'vertical'}
                        loop={true}
                        slidesPerView={1}
                            spaceBetween={1}
                            breakpoints={{
                                  992: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                  },
                                
                              }}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="Swiper  w-full "
                    >
                       {
                        reviews.slice(0, dataLength).map(item =><SwiperSlide key={item._id}>
                            {/* <div className="w-full md:w-1/2 lg:w-1/3 p-3"> */}
                                <div className="w-full">
                                    <div className="p-6  bg-white bg-opacity-60 border rounded-4xl">
                                        <div className="flex flex-col justify-between">
                                            <div className="mb-5 block">
                                                <div className="flex flex-wrap mb-4 -m-2">
                                                    <div className="w-auto p-2">
                                                        <img src={item.reviewerImage} alt="" className='w-12 h-12 rounded-full' />
                                                    </div>
                                                    <div className="w-auto p-2">
                                                        <h3 className="font-semibold leading-normal">{item.reviewerName}</h3>
                                                        <p className="text-gray-500 uppercase">{item.sholarshipUniversity}</p>
                                                    </div>
                                                </div>
                                                <p className="text-lg font-medium">{item.comments}</p>
                                            </div>
                                            <div className="block">
                                                <p className="text-sm text-gray-500 font-medium">{item.reviewDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                            </SwiperSlide>)
                       }
                     
                    
                       

                    </Swiper>
                  
                </div>
            </div>
        </div>

    );
};

export default Testimonial;