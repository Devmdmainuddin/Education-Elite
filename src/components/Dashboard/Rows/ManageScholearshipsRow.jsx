import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';
const ManageScholearshipsRow = ({ scholarship, handleDelete }) => {
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
                <Link to={`/ScholarShip/${scholarship._id}`} className='cursor-pointer inline-block px-3 py-1 bg-green-200  rounded-full font-semibold text-red-900 leading-tight'>
                <BiDetail />
                </Link>
                <Link to={`updateScholarShip/${scholarship._id} `} className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
                <FaRegEdit />
                </Link>
                <button onClick={() => handleDelete(scholarship._id)} className='cursor-pointer inline-block px-3 py-1 bg-red-200  rounded-full font-semibold text-red-900 leading-tight'>
                <RiDeleteBinLine />
                </button>
            </td>
        </tr>
    )
}

ManageScholearshipsRow.propTypes = {
    scholarship: PropTypes.object,
    handleDelete: PropTypes.func,
}

export default ManageScholearshipsRow