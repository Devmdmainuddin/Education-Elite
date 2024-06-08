import { Helmet } from "react-helmet-async";
import useApplyScholarship from "../../../hooks/useApplyScholarship";
import ApplyScholearshipsRow from "../../../components/Dashboard/Rows/ApplyScholearshipsRow";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";



const ManageAppliedApplication = () => {
 const [applyScholarship,loading,refetch,sort,setSort] = useApplyScholarship()
  
  const axiosSecure = useAxiosSecure()



  const items = applyScholarship.filter(p => { p })
  const { mutateAsync } = useMutation({
    mutationFn: async userRole => {
      const { data } = await axiosSecure.patch(`/application/update/${items._id}`, userRole)
      return data
    },
    onSuccess: data => {
      console.log(data)
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Application Status update successfully",
        showConfirmButton: false,
        timer: 1500
      });



    }
  })
  const handleDelet = () => {
    const userRole = {
      status: "rejected",

    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync(userRole)


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

          <select
            onChange={e => {
              setSort(e.target.value)
            }}
            value={sort}
            name='sort'
            id='sort'
            className='border p-3 rounded-md bg-gray-100'
          >
            <option value=''>Sort By Deadline</option>
            <option value='dsc'>Descending Order</option>
            <option value='asc'>Ascending Order</option>
          </select>


          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden mt-6'>
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
                  applyScholarship.map(scholarship => <ApplyScholearshipsRow key={scholarship._id} scholarship={scholarship} handleDelet={handleDelet} refetch={refetch}></ApplyScholearshipsRow>)
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