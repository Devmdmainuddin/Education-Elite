// import { BiDetail } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const MyReviewsRow = ({review,handleDelete}) => {
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
                
                {/* Update User Modal */}
                {/* <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user}></UpdateUserModal> */}
            
                <Link to={`/updateScholarShip/${review._id} `} className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
                <FaRegEdit />
                </Link>
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
}
export default MyReviewsRow;