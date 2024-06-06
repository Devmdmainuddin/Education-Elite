import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import MyReviewsRow from "../../../components/Dashboard/Rows/MyReviewsRow";
import Swal from "sweetalert2";


const MyReviews = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    //   Fetch Rooms Data
    const { data: myreviews = [], isLoading, refetch, } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/review/${user?.email}`)
            return data
        },
    })
    //   delete
    const { mutateAsync } = useMutation({
        mutationFn: async id => {
            const { data } = await axiosSecure.delete(`/reviews/${id}`)
            return data
        },
        onSuccess: data => {
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "reviews has been delete",
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
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await mutateAsync(id)
                refetch()
            }
        });
    }



    if (isLoading) return <LoadingSpinner />

    return (
        <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                    <table className='min-w-full leading-normal'>
                        <thead>
                            <tr className="bg-[#d98787]">
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-[#ecfaf4fa]  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Scholarship name
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-[#ecfaf4fa]  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    university name
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-[#ecfaf4fa]  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Review comments
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-[#ecfaf4fa]  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Review date
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-[#ecfaf4fa]  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>{/* User data table row */}
                            {
                                myreviews.map(review => <MyReviewsRow key={review._id} review={review} handleDelete={handleDelete} isLoading={isLoading} refetch={refetch}></MyReviewsRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;