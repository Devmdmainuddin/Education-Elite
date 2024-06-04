import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const MyApplyRow = ({apply,handleDelete}) => {
    const {universityName,location,Feedback,SubjectCategorey,Degree,applicationfees,Status,_id}=apply
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
        
            <Link to={`/updateScholarShip/${_id}`} className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
            <FaRegEdit />
            </Link>
            <button onClick={() => handleDelete(_id)} className='cursor-pointer inline-block px-3 py-1 bg-red-200  rounded-full font-semibold text-red-900 leading-tight'>
            <RiDeleteBinLine />
            </button>
        </td>
    </tr>
    );
};
MyApplyRow.propTypes = {
    apply: PropTypes.object,
    handleDelete: PropTypes.func,
}
export default MyApplyRow;