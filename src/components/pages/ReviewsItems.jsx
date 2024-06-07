import PropTypes from 'prop-types';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const ReviewsItems = ({ item, handleDelete }) => {
    return (
        <div className="border p-4">
            <div className="flex gap-x-4">
                <img src={item.reviewerImage} alt="" className="size-14 rounded-full object-cover" />
                <h2>{item.reviewerName}</h2>
                <p>{item.reviewDate}</p>
            </div>
            <p><Rating
                style={{ maxWidth: 180 }}
                value={item.rating}
                readOnly
            /></p>
            <p>{item.sholarshipUniversity}</p>
            <p>{item.sholarshipcategory}</p>

            <p>{item.comments}</p>
            <div className="">
                <button onClick={() => handleDelete(item._id)} className="py-2 px-6 mx-auto m-2 block rounded bg-red-300 text-white">delete</button>
            </div>


        </div>
    );
};
ReviewsItems.propTypes = {
    item: PropTypes.object,
    handleDelete: PropTypes.func
};

export default ReviewsItems;