import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ApplyScholearshipsRow = ({scholarship, handleDelet }) => {
    
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{scholarship.SubjectCategorey}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{scholarship.universityName}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{scholarship.SubjectCategorey}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{scholarship.Degree}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{scholarship.applicationfees}</p>
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
    );
};
ApplyScholearshipsRow.propTypes = {
    scholarship: PropTypes.object,
    handleDelet: PropTypes.func,
  };
export default ApplyScholearshipsRow;