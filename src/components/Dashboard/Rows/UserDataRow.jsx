import PropTypes from 'prop-types'
import UpdateUserModal from '../Modal/UpdateUserModal'
import { useState } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import { RiDeleteBinLine } from 'react-icons/ri'
const UserDataRow = ({ user, refetch}) => {
  const [isOpen, setIsOpen] = useState(false)
  const axiosSecure = useAxiosSecure()

  const { mutateAsync } = useMutation({
    mutationFn: async role => {
      const { data } = await axiosSecure.patch(`/users/update/${user.email}`, role)
      return data
    },
    onSuccess: data => {
      refetch()
      // console.log(data)
      toast.success('user role update successfully')
      setIsOpen(false)

    }
  })


  const modalHandler = async selected => {
    const userRole = {
      role: selected,
      status: 'verified',
    }
    try {
      refetch()
       await mutateAsync(userRole) 
    } catch (err) {
      // console.log(err.message);
      toast.error(err.message)
    }
  }


  const handleDelet = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/users/${id}`)
                .then(res => {
                   if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "user has been delete",
                        showConfirmButton: false,
                        timer: 1500
                    });
                   
                   }
                })
                
        }
    });

}



  return (
    <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
              } whitespace-no-wrap`}
          >
            {user?.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </button>
       
        <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user}></UpdateUserModal>
     <button onClick={()=>handleDelet(user._id)} className='cursor-pointer inline-block px-3 py-1 bg-red-200  rounded-full font-semibold text-red-900 leading-tight'>
     <RiDeleteBinLine />
     </button>
     </td>
    </tr>
  )
}

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
}

export default UserDataRow