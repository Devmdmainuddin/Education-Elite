import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useState } from "react";


const useApplyScholarship = () => {
  const [sort, setSort] = useState('')
  // console.log(sort);
  const axiosSecure = useAxiosSecure()
  const { data: applyScholarship = [], isPending: loading, refetch } = useQuery({
    queryKey: ['applyScholarship'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/applyScholarShip?sort=${sort}`)
      return data
    },
  })
  return [applyScholarship, loading, refetch, sort, setSort]
};

export default useApplyScholarship;