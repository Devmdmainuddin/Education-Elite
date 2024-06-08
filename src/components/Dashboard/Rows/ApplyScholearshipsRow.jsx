// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import UpdateApplyModal from '../Modal/UpdateApplyModal'
import { useState } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useMutation } from '@tanstack/react-query'
import { FaRegEdit } from 'react-icons/fa';
import FeedbackModal from "../Modal/FeedbackModal";
import Swal from "sweetalert2";
import DetailsModal from "../Modal/DetailsModal";


const ApplyScholearshipsRow = ({ scholarship, refetch }) => {
  const { _id, ScholarshipName, SubjectCategorey, universityName, Degree, applicationfees, Status} = scholarship
  const [isOpen, setIsOpen] = useState(false)
  const [detailsModal, setDetailsModal] = useState(false)
  const [openFeedback, setOpenFeedback] = useState(false)

  const axiosSecure = useAxiosSecure()

  const { mutateAsync } = useMutation({
    mutationFn: async userRole => {
      const { data } = await axiosSecure.patch(`/application/update/${_id}`, userRole)
      return data
    },
    onSuccess: data => {
      console.log(data)
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Application Status update successfully",
        showConfirmButton: false,
        timer: 1500
      });




    }
  })
  const handleDelet = () => {
    const userRole = {
      Status: "rejected",

    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "canceled!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync(userRole)


      }
    });

  }

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{ScholarshipName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{universityName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{SubjectCategorey}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{Degree}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{applicationfees}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <div className="flex relative gap-x-2 items-center">
            <span className='relative'>{Status}</span>
            <span className='relative'><FaRegEdit></FaRegEdit></span>
          </div>

        </button>
        {/* Update User Modal */}
        <UpdateApplyModal isOpen={isOpen} setIsOpen={setIsOpen} id={_id} refetch={refetch} Status={Status} ></UpdateApplyModal>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

        <button onClick={() => setDetailsModal(true)} className='cursor-pointer inline-block px-3 py-1 bg-[#dddfdf] rounded-full font-semibold  leading-tight'>
            Details
          </button>
        {/* {Details feedback} */}
        <DetailsModal 
        detailsModal={detailsModal} 
        setDetailsModal={setDetailsModal} 
        ScholarshipName={ScholarshipName}     
        universityName={universityName}
        SubjectCategorey={SubjectCategorey}
        Degree={Degree}>   
        </DetailsModal>

        <button onClick={() => setOpenFeedback(true)} className=' rounded-full bg-green-200 relative cursor-pointer flex gap-x-2 items-center px-3 py-1 font-semibold text-green-900 leading-tight'>
          Feedback
          <span className=''><FaRegEdit></FaRegEdit></span>
        </button>

        {/* {update feedback} */}
        <FeedbackModal openFeedback={openFeedback} setOpenFeedback={setOpenFeedback} id={_id} refetch={refetch}> </FeedbackModal>
        
        <button onClick={() => handleDelet(scholarship._id)} className='cursor-pointer inline-block px-3 py-1 bg-red-200  rounded-full font-semibold text-red-900 leading-tight'>
          Cancel
        </button>
      </td>
    </tr>
  );
};
ApplyScholearshipsRow.propTypes = {
  scholarship: PropTypes.object,
  handleDelet: PropTypes.func,
  refetch: PropTypes.func,
  id: PropTypes.string
};
export default ApplyScholearshipsRow;