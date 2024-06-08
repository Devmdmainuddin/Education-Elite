import { useLoaderData } from "react-router-dom";

const ApplicationsDetails = () => {
    const sholarship = useLoaderData();
    // console.log(sholarship);
    return (
        <div>
            <h2>details page</h2>

            {sholarship.SubjectCategorey}
        </div>
    );
};

export default ApplicationsDetails;