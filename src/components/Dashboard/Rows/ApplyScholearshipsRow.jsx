import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import UpdateApplyModal from '../Modal/UpdateApplyModal'
import { useState } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'


const ApplyScholearshipsRow = ({scholarship, handleDelet,refetch }) => {
    const {_id,SubjectCategorey,universityName,Degree,applicationfees,status}=scholarship 
    const [isOpen, setIsOpen] = useState(false)

    const axiosSecure = useAxiosSecure()
    const { mutateAsync } = useMutation({
      mutationFn: async userRole => {
        const { data } = await axiosSecure.patch(`/application/update/${_id}`, userRole)
        return data
      },
      onSuccess: data => {
        console.log(data)
         refetch()
        toast.success('user role update successfully')
        setIsOpen(false)
  
      }
    })


    const modalHandler = async selected => {

          const userRole = {
            status: selected,
          
          }
          try {
            refetch()
             await mutateAsync(userRole)
          } catch (err) {
            console.log(err.message);
            toast.error(err.message)
          }
        }


    return (
        <tr>
       
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
          <span className='relative'>{status}</span>
        </button>
        {/* Update User Modal */}
        <UpdateApplyModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} stat={status} ></UpdateApplyModal>
        </td>


        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            
            {/* Update User Modal */}
            {/* <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user}></UpdateUserModal> */}
            <Link className='cursor-pointer inline-block px-3 py-1 bg-green-200  rounded-full font-semibold text-red-900 leading-tight'>
             Details
            </Link>
            <Link  className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
            Feedback
            </Link>
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
  };
export default ApplyScholearshipsRow;