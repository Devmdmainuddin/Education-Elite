// import { BiDetail } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import UpdateReview from "../Modal/UpdateReview";
import LoadingSpinner from "../../Shared/LoadingSpinner";
const MyReviewsRow = ({ review, handleDelete,isLoading,refetch }) => {
    const [isOpen, setIsOpen] = useState(false)

    const axiosSecure = useAxiosSecure()
    const { mutateAsync } = useMutation({
        mutationFn: async reviewData => {
            const { data } = await axiosSecure.put(`/reviews/${review._id}`, reviewData)
            return data
        },
        onSuccess: data => {
            // console.log(data)
             refetch()
            toast.success('user role update successfully')
            setIsOpen(false)

        }
    })


    const modalHandler = async e => {
        e.preventDefault()
        const form = e.target
        const rating=form.rating.value
        const comments= form.comment.value
        const data={
            rating:rating,
            comments:comments,
        }
        try {
            await mutateAsync(data)
        } catch (err) {
            // console.log(err.message);
            toast.error(err.message)
        }
    }


    if ( isLoading) return <LoadingSpinner />

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{review.sholarshipName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{review.sholarshipUniversity}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{review.comments}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{review.reviewDate}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                <button onClick={() => setIsOpen(true)} className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
                    <FaRegEdit />
                </button>
                <UpdateReview isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler}rating={review.rating} comment={review.comments} ></UpdateReview>
                <button onClick={() => handleDelete(review._id)} className='cursor-pointer inline-block px-3 py-1 bg-red-200  rounded-full font-semibold text-red-900 leading-tight'>
                    <RiDeleteBinLine />
                </button>
            </td>
        </tr>
    );
};
MyReviewsRow.propTypes = {
    review: PropTypes.object,
    handleDelete: PropTypes.func,
    refetch: PropTypes.func,
    isLoading : PropTypes.bool,
}
export default MyReviewsRow;