import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import UpdateApplyInfo from "../Modal/UpdateApplyInfo";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
// import { Link } from "react-router-dom";
import AddReviewModal from "../Modal/AddReviewModal";
import Swal from "sweetalert2";

const MyApplyRow = ({apply,handleDelete,isPending,refetch}) => {
    const {universityName,
        ScholarshipName,scholarshipcategory, location,Feedback,SubjectCategorey,Degree,applicationfees,Status,_id}=apply
    const [isOpen, setIsOpen] = useState(false)
    const [addReview, setAddReview] = useState(false)

    const axiosSecure = useAxiosSecure()
    const { mutateAsync } = useMutation({
        mutationFn: async applyData => {
            const { data } = await axiosSecure.put(`/application/${_id}`, applyData)
            return data
        },
        onSuccess: data => {
           
            refetch()
            toast.success('user role update successfully')
            setIsOpen(false)

        }
    })


    const modalHandler = async e => {
       
        e.preventDefault()
        const form = e.target
        const universityName= form.universityName.value
        const SubjectCategorey= form.SubjectCategorey.value
        const Degree= form.Degree.value
       
        const data={
           
            universityName:universityName,
            SubjectCategorey:SubjectCategorey, 
            Degree:Degree,
        }
        try {
            if(Status === 'pending'){
                await mutateAsync(data)
            }else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Your items not  Edit your application in processing",
                    showConfirmButton: false,
                    timer: 1500
                }); 
            }
           
        } catch (err) {
            // console.log(err.message);
            toast.error(err.message)
        }
    }


    if ( isPending) return <LoadingSpinner />
   
   
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{universityName}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{location.Country},{location.city}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{Feedback}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{SubjectCategorey}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{Degree}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'> $ {applicationfees}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'> {Status}</p>
        </td>
       
    
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            
            {/* Update User Modal */}
            {/* <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user}></UpdateUserModal> */}
        
            {/* <Link to={`/updateScholarShip/${_id}`} className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
            <FaRegEdit />
            </Link> */}
            <button onClick={() => setIsOpen(true)} className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
                    <FaRegEdit />
                </button>
                <UpdateApplyInfo isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler}universityName={universityName} SubjectCategorey={SubjectCategorey} ></UpdateApplyInfo>

            <button onClick={() => handleDelete(_id)} className='cursor-pointer inline-block px-3 py-1 bg-red-200  rounded-full font-semibold text-red-900 leading-tight'>
            <RiDeleteBinLine />
            </button>

            <button onClick={() => setAddReview(true)} className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
            add Reviews
                </button>
            {/* <Link className="py-2 px-6 bg-green-300 rounded inline-block mx-auto  text-center mt-8">add Reviews</Link> */}
            <AddReviewModal addReviews={addReview} setAddReview={setAddReview} universityName={universityName} ScholarshipName={ScholarshipName} scholarshipcategory={scholarshipcategory} id={_id}></AddReviewModal>
        </td>
    </tr>
    );
};
MyApplyRow.propTypes = {
    apply: PropTypes.object,
    handleDelete: PropTypes.func,
    isPending: PropTypes.bool,
    refetch: PropTypes.func,
}
export default MyApplyRow;