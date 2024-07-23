
import { useState } from "react";
import { supabase } from "../../../client"

export const useGetCreators = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCreatorsMutate = () => {
    setIsLoading(true);
    supabase.from('creators').select().then(res => {
      setData(res.data);
      setIsLoading(false);
    }).catch(error => {
      console.error(error);
    });
  }

  return {
    getCreatorsData: data,
    getCreatorsIsLoading: isLoading,
    getCreatorsMutate,
  }
}