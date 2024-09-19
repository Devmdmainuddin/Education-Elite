import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {  useState } from "react";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const SholarshipDetails = () => {
    const [dataLength, setDataLength] = useState(6);
    const { user } = useAuth() || {}
    const axiosSecure = useAxiosSecure()
    const sholarship = useLoaderData();

    const { data: review = [], isPending:loading, refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async() => {
          const { data } = await axiosSecure.get(`/reviews/${sholarship._id}`)
          return data
        },
      })




    const { mutateAsync } = useMutation({
        mutationFn: async reviewData => {
            const { data } = await axiosSecure.post(`/reviews`, reviewData)
            refetch()
            
            return data
        },
        onSuccess: () => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your review has been added",
                showConfirmButton: false,
                timer: 1500
            });
          
        }
    })

    const handleReviews = async (e) => {
        e.preventDefault();

        const form = e.target;
        const rating = form.rating.value
        const comments = form.Comments.value
        const sholarshipId = sholarship._id;
        const sholarshipName = sholarship.ScholarshipName;
        const sholarshipUniversity = sholarship.UniversityName;
        const sholarshipcategory = sholarship.ScholarshipCategory;
        const reviewerImage = user?.photoURL
        const reviewerName = user?.displayName;
        const reviewerEmail = user?.email;
        const reviewDate = (new Date()).toDateString();

        const reviewData = {
            sholarshipName,
            sholarshipId,
            sholarshipUniversity,
            sholarshipcategory,
            rating,
            comments,
            reviewerImage,
            reviewerName,
            reviewerEmail,
            reviewDate,
        };

        try {
          
            refetch()
            await mutateAsync(reviewData)
            form.reset()
        }
        catch (err) {
            console.log(err);
        }
    };

    if (loading) return <LoadingSpinner />
    return (
        <div className="max-w-[1420px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <Helmet>
                <title>Education Elite | SholarshipDetails </title>
            </Helmet>

            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={sholarship.image} alt="Product Image" />
                            </div>
                            
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{sholarship.ScholarshipName}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {sholarship.UniversityName}
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 flex gap-x-2 items-center dark:text-gray-300">location : <p className="text-sm text-gray-600">{sholarship.location.Country} , {sholarship.location.city}</p> </span>
                                </div>
                                
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 flex gap-x-2 items-center dark:text-gray-300">Subject Categorey : <p className="text-sm text-gray-600">{sholarship.SubjectCategorey} </p> </span>
                                </div>
                                
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 flex gap-x-2 items-center dark:text-gray-300">Scholarship Category : <p className="text-sm text-gray-600">{sholarship.ScholarshipCategory}</p> </span>
                                </div>
                                
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 flex gap-x-2 items-center dark:text-gray-300">Degree : <p className="text-sm text-gray-600">{sholarship.Degree}</p> </span>
                                </div>
                                
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 flex gap-x-2 items-center dark:text-gray-300">TuitionFees : <p className="text-sm text-gray-600">{sholarship.TuitionFees}$</p> </span>
                                </div>
                                
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 flex gap-x-2 items-center dark:text-gray-300">ServiceCharge : <p className="text-sm text-gray-600">{sholarship.ServiceCharge}$</p> </span>
                                </div>
                                
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 flex gap-x-2 items-center dark:text-gray-300">ServiceCharge : <p className="text-sm text-gray-600">{sholarship.ServiceCharge}$</p> </span>
                                </div>
                                
                            </div>
                            <div className="flex -mx-2 mb-4 ">
                                <div className="w-1/2 px-2">
                                    <Link to={`/chackout/${sholarship._id}`}> <button className="inline-block w-full rounded bg-teal-500 mt-4 px-4 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring active:bg-indigo-500">Apply Scholarship</button> </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ......................add review....................... */}
            <div className="py-8 px-4">
                <h2 className="text-center text-2xl text-slate-600 my-7">Add A review</h2>
                <form onSubmit={handleReviews} className='mt-12 max-w-[768px] mx-auto'>
                    <div className="flex gap-8 ">
                        <div className="flex-1 items-start">
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="rating"
                            >
                                Rating
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                maxLength={5}
                                max={5}
                                min={1}
                                type="number"
                                placeholder="Enter Rating"
                                id="rating"
                                name="rating"
                            />



                        </div>

                        <div className="flex-1">

                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="Comments">Comments</label>
                            <textarea
                                className="w-full p-2 resize-none border rounded-md focus:border-teal-500 focus:outline-none"
                                placeholder="Comments here"
                                id="Comments"
                                name="Comments"
                            />
                        </div>
                    </div>

                    <input
                        className="inline-block w-full rounded bg-teal-500 mt-4 px-4 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring active:bg-indigo-500"
                        type="submit"
                        value="Add Review"
                    />

                </form>
            </div>

            {/* ......................show review....................... */}

            <Swiper
               
                loop={true}
                slidesPerView={1}
                spaceBetween={1}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },

                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="Swiper   w-full "
            >
                {
                    review.slice(0, dataLength).map(review =><SwiperSlide key={review._id} className='flex justify-center items-center gap-x-4'>
                            {/* {review.comments} */}
                            <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8 ">
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                                <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                                <div className="pl-4 pt-4 flex items-start justify-between">
                                    <div className="mr-6">
                                        <p className="xl:text-xl xl:leading-loose text-gray-600">{review.comments}</p>
                                        <div className="flex justify-between">
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">{review.reviewerName}</p>
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">{review.reviewDate}</p>
                                        </div>
                                       
                                    </div>
                                    <img src={review.reviewerImage} className="w-10 rounded-full"  alt="Display Avatar of Anna Smith" role="img" />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>



        </div>
    );
};

export default SholarshipDetails;