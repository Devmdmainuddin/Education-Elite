
import ReviewsItems from "../../../components/pages/ReviewsItems";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useReviews from "../../../hooks/useReviews";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'
import Swal from "sweetalert2";
const ManageReview = () => {
    const axiosSecure = useAxiosSecure()
    const [reviews, loading, refetch] = useReviews()

    //   delete
    const { mutateAsync } = useMutation({
        mutationFn: async id => {
            const { data } = await axiosSecure.delete(`/reviews/${id}`)
            return data
        },
        onSuccess: data => {
            console.log(data)
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully deleted.",
                showConfirmButton: false,
                timer: 1500
            });
          
        },
    })

    const handleDelete = async id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Its, deleted !"
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    await mutateAsync(id)
                } catch (err) {
                    console.log(err)
                }

            }
        });

        
        
    }

    if (loading) return <LoadingSpinner />
    return (
        <div>
            <h2 className="text-3xl text-center font-normal">manage reviews</h2>
            <div id="gridLayout" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {/* <div id="gridLayout" className="grid grid-cols-3 gap-6 mt-12"> */}

                {
                    reviews.map(item => <ReviewsItems
                        key={item._id}
                        item={item}
                        refetch={refetch}
                        handleDelete={handleDelete}
                    ></ReviewsItems>)
                }

            </div>
        </div>
    );
};

export default ManageReview;