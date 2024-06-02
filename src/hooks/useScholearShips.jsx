
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useScholearShips = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allScholarShip = [], isPending:loading, refetch } = useQuery({
        queryKey: ['allScholarShip'],
        queryFn: async() => {
          const { data } = await axiosSecure.get(`/allScholarShip`)
          return data
        },
      })
      return [allScholarShip,loading,refetch]
};

export default useScholearShips;