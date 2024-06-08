import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import MyApplyRow from "../../../components/Dashboard/Rows/MyApplyRow";
// import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyApplication = () => {
    const { user ,loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    //   Fetch Rooms Data
    const {data: applyScholarShip = [],isPending,refetch,} = useQuery({
      queryKey: ['applyScholarShip'],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/applyScholarShip/${user?.email}`)
        return data
      },
    })

  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async id => {
        const { data } = await axiosSecure.delete(`/applyScholarShip/${id}`)
        return data
    },
    onSuccess: data => {
   
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "applyScholarShip has been delete",
        showConfirmButton: false,
        timer: 1500
    });
    },
})

const handleDelete = async id => {

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
}).then(async (result) => {
    if ( result.isConfirmed) {
      await mutateAsync(id)
      refetch()
    }
});
}
    if (loading && isPending) return <LoadingSpinner />

    return (
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
                 University Name,
                </th>
                <th
                  scope='col'
                  className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                >
                University Address
                </th>
                <th
                  scope='col'
                  className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                >
                 Application Feedback
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
                applyScholarShip.map(apply => <MyApplyRow key={apply._id} apply={apply} handleDelete={handleDelete} isPending={isPending} refetch={refetch}></MyApplyRow>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default MyApplication;