import { Helmet } from "react-helmet-async";
import useApplyScholarship from "../../../hooks/useApplyScholarship";
import ApplyScholearshipsRow from "../../../components/Dashboard/Rows/ApplyScholearshipsRow";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageAppliedApplication = () => {
    const [applyScholarship,loading,refetch] = useApplyScholarship()

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

    if (loading) return <LoadingSpinner />
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage ScholerShips</title>
        </Helmet>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                  <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     Scholarship name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     University Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Subject Category
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Applied Degree
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     Application Fees
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                       Application Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>{/* User data table row */}
                {
                  applyScholarship.map(scholarship =><ApplyScholearshipsRow key={scholarship._id} scholarship={scholarship} handleDelet={handleDelet} refetch={refetch}></ApplyScholearshipsRow>)  
                }
            
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ManageAppliedApplication;