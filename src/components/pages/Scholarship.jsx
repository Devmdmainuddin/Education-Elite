import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Scholarship = ({item}) => {
    
    const {UniversityName,image,
        WorldRank,SubjectCategorey,
        ScholarshipCategory,
        Degree,
        ApplicationFees}=item;
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
            alt=""
            src={image}
            className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
            <h3 dateTime="2022-10-10" className="block text-xs text-gray-600">Queries :    </h3>
            <h3 className="mt-1 text-lg text-gray-900">  </h3>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-1">
                <span>Brand : {UniversityName} </span>
                <span>reason : {WorldRank}</span>
            </div>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-1">
                <span>posted :{SubjectCategorey} </span>
                <span>recommenCount : {ScholarshipCategory}</span>
            </div>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-1">
                <span>posted :{Degree} </span>
                <span>recommenCount : {ApplicationFees}</span>
            </div>
           
            {/* <div className="flex  justify-between items-center pt-3 space-x-2 text-xs text-gray-400">
                <span> <img className="w-12 rounded-full" src={userInfo.userImage?userInfo.userImage:"https://i.ibb.co/n3pxCKM/profile.png"} alt="" /> </span>
                <span>{userInfo.name}</span>
            </div> */}
            <Link to='' className="block text-center mt-3 w-full rounded text-white px-12 py-3 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto" ><button>recommend</button></Link>
        </div>

    </article>
    );
};
Scholarship.propTypes = {
    item: PropTypes.object
  };
export default Scholarship;