import { Helmet } from "react-helmet-async";
import { FaCaravan, FaCartArrowDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const SholarshipDetails = () => {
    const { user } = useAuth() || {}
    const axiosSecure = useAxiosSecure()
    // const navigare =useNavigate()
    const sholarship = useLoaderData();
    console.log(sholarship);



    const { mutateAsync } = useMutation({

        mutationFn: async reviewData => {
            const { data } = await axiosSecure.post(`/reviews`, reviewData)
            console.log(data);
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
            console.log("data add successfully")
        }
    })

    const handleReviews = async (e) => {
        e.preventDefault();

        const form = e.target;
        const rating = form.rating.value
        const comments = form.Comments.value
        const sholarshipId = sholarship._id;
        const sholarshipUniversity = sholarship.UniversityName;
        const sholarshipcategory = sholarship.ScholarshipCategory;
        const reviewerImage = user.photoURL
        const reviewerName = user.displayName;
        const reviewDate = (new Date()).toDateString();

        const reviewData = {
            sholarshipId,
            sholarshipUniversity,
            sholarshipcategory,
            rating,
            comments,
            reviewerImage,
            reviewerName,
            reviewDate,
        };

        try {
            await mutateAsync(reviewData)
        }
        catch (err) {
            console.log(err);
        }

        // try {
        //     if (user.email !== autherEmail) {
        //         const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/addRecommendation`, info)
        //         // console.log(data)


        //         if (data?.insertedId) {
        //             form.reset();

        //             // const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/updaterecommen/${items._id}`, recoupdate)
        //             //  console.log(data)

        //             // axios.get(`${import.meta.env.VITE_API_URL}/recommendation`)
        //             //     .then(data => {
        //             //         const filteritems = data.data.filter(p => p.queryId == items._id)
        //             //         setrecommentitems(filteritems)
        //             //     })
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: " add recommendation items ",
        //                 showConfirmButton: false,
        //                 timer: 1500

        //             });
        //         }
        //     } else {
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "error",
        //             title: " you are not allowed add recommendation ",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //     }
        // }
        // catch (err) {
        //     // console.log(err)
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "error",
        //         title: " add recommendation faile",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        // }

    };

    return (
        <div>
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
                            <div className="flex -mx-2 mb-4 justify-center">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Apply Scholarship</button>
                                </div>

                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{sholarship.UniversityName}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {sholarship.ScholarshipCategory}
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">price : </span>
                                    <span className="text-gray-600 dark:text-gray-300">{sholarship.location}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">In Stock : </span>
                                    <span className="text-gray-600 dark:text-gray-300">{sholarship.ApplicationDeadline}</span>
                                </div>
                            </div>


                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <div className="flex items-center gap-x-2"><FaCaravan className="text-2xl" /><span> SHIPPING & RETURNS</span></div>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                                        from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                                        up for the company{`'`}s newsletter or follow it on social media.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <div className="flex items-center gap-x-2"><FaCartArrowDown className="text-2xl" /><span> CARE INSTRUCTIONS</span></div>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                                        from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                                        up for the company{`'`}s newsletter or follow it on social media.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> SHARE</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                                        from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                                        up for the company{`'`}s newsletter or follow it on social media.
                                    </p>
                                </details>
                            </div>

                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {sholarship.Degree}
                                </p>
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
                                min={0}
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





        </div>
    );
};

export default SholarshipDetails;