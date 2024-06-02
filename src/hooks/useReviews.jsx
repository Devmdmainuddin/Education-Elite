import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReviews = () => {
    const axiosSecure = useAxiosSecure()
    const { data: reviews = [], isPending:loading, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async() => {
          const { data } = await axiosSecure.get(`/reviews`)
          return data
        },
      })
      return [reviews,loading,refetch]
};

export default useReviews;