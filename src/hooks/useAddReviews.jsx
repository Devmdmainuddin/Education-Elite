import Swal from "sweetalert2";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useMutation } from "@tanstack/react-query";


const useAddReviews = () => {
    const { user } = useAuth() || {}
    const axiosSecure = useAxiosSecure()
    const { mutateAsync } = useMutation({
        mutationFn: async reviewData => {
            const { data } = await axiosSecure.post(`/reviews`, reviewData)
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
            // console.log("data add successfully")
        }
    })

    const handleReviews = async (e) => {
        e.preventDefault();

        const form = e.target;
        const rating = form.rating.value
        const comments = form.Comments.value
        // const sholarshipId = sholarship._id;
        // const sholarshipName = sholarship.ScholarshipName;
        // const sholarshipUniversity = sholarship.UniversityName;
        // const sholarshipcategory = sholarship.ScholarshipCategory;
        const reviewerImage = user?.photoURL
        const reviewerName = user?.displayName;
        const reviewerEmail = user?.email;
        const reviewDate = (new Date()).toDateString();

        const reviewData = {
            // sholarshipName,
            // sholarshipId,
            // sholarshipUniversity,
            // sholarshipcategory,
            rating,
            comments,
            reviewerImage,
            reviewerName,
            reviewerEmail,
            reviewDate,
        };

        try {
            // console.log(reviewData);
            await mutateAsync(reviewData)
            form.reset()
        }
        catch (err) {
            // console.log(err);
        }
    };

  

    return (
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
    );
};

export default useAddReviews;