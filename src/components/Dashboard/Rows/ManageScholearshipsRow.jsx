import PropTypes from 'prop-types'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
const ManageScholearshipsRow = ({ scholarship, refetch }) => {
    const axiosSecure = useAxiosSecure()
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
                axiosSecure.delete(`/scholarship/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "user has been delete",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch()
                        }
                    })

            }
        });

    }



    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarship.ScholarshipName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarship.UniversityName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarship.SubjectCategorey}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarship.Degree}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarship.ApplicationFees}</p>
            </td>


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                
                {/* Update User Modal */}
                {/* <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user}></UpdateUserModal> */}
                <Link className='cursor-pointer inline-block px-3 py-1 bg-green-200  rounded-full font-semibold text-red-900 leading-tight'>
                 Details
                </Link>
                <Link  className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
                Edit
                </Link>
                <button onClick={() => handleDelet(scholarship._id)} className='cursor-pointer inline-block px-3 py-1 bg-red-200  rounded-full font-semibold text-red-900 leading-tight'>
                Cancel
                </button>
            </td>
        </tr>
    )
}

ManageScholearshipsRow.propTypes = {
    scholarship: PropTypes.object,
    refetch: PropTypes.func,
}

export default ManageScholearshipsRow