import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useApplyScholarship = () => {
    const axiosSecure = useAxiosSecure()
    const { data: applyScholarship = [], isPending:loading, refetch } = useQuery({
        queryKey: ['applyScholarship'],
        queryFn: async() => {
          const { data } = await axiosSecure.get(`/applyScholarShip`)
          return data
        },
      })
      return [applyScholarship,loading,refetch]
};

export default useApplyScholarship;