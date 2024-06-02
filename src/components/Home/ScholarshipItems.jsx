import { Link } from "react-router-dom";


const ScholarshipItems = ({item}) => {
    const {ScholarshipName,UniversityName,SubjectCategorey,ApplicationDeadline,image,Country,city,ApplicationFees,PostedBy,_id}=item
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
            alt=""
            src={image}
            className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
            <h3 dateTime="2022-10-10" className="block text-xs text-gray-600">Queries : queryTitle  </h3>
            <h3 className="mt-1 text-lg text-gray-900"> {ScholarshipName} </h3>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-1">
                <span>Brand : {UniversityName} </span>
                <span>reason : {Country}</span>
            </div>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-1">
                <span>posted :{city} </span>
                <span>recommenCount : {}</span>
            </div>
           
            <div className="flex  justify-between items-center pt-3 space-x-2 text-xs text-gray-400">
               
                <span>{PostedBy}</span>
            </div>
            <Link to={`/ScholarShip/${_id}`} className="block text-center mt-3 w-full rounded text-white px-12 py-3 text-sm font-medium bg-teal-500 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto" ><button>details</button></Link>
        </div>

    </article>
    );
};

export default ScholarshipItems;