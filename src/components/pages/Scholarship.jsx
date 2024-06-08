import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Scholarship = ({item}) => {
    
    const {UniversityName,image,ScholarshipName,postDate,ApplicationDeadline,
        SubjectCategorey,location,
        ScholarshipCategory,
        Degree,
        ApplicationFees,
    _id}=item;
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
            alt=""
            src={image}
            className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
            <h3 dateTime="2022-10-10" className="block text-xs text-gray-600">{UniversityName}</h3>
            <h3 className="mt-1 text-lg text-gray-900"> {ScholarshipName} </h3>
            <div className="flex flex-wrap justify-between  space-x-2 text-xs text-gray-600 mt-1">
                <span>{SubjectCategorey} </span>
                <span>{ScholarshipCategory}</span>
            </div>
            <h2 className="mt-1 text-sm text-gray-900">Degree : {Degree}</h2>
            <h3 className="mt-1 text-sm text-gray-900">Application Fees : {ApplicationFees}$ </h3>
            <div className="flex flex-col pt-3  text-xs text-gray-600 mt-1">
                <span>posted :  {postDate} </span>
                <span>Deadline : {ApplicationDeadline}</span>
            </div>
           
            <div className="flex  justify-between items-center pt-3 space-x-2 text-xs text-gray-400">
               
                <span>location : {location.Country},{location.city}</span>
            </div>
            <Link to={`/ScholarShip/${_id}`} className="block text-center mt-3 w-full rounded text-white px-12 py-3 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto " ><button className="capitalize">details</button></Link>
        </div>

    </article>
    );
};
Scholarship.propTypes = {
    item: PropTypes.object
  };
export default Scholarship;