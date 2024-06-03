
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useScholearShips = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allScholarShip = [], isPending:loading, refetch } = useQuery({
        queryKey: ['allScholarShip'],
        queryFn: async() => {
          const { data } = await axiosSecure.get(`/ScholarShips`)
          // console.log(data);
          return data
        },
      })
      return [allScholarShip,loading,refetch]
};

export default useScholearShips;