import { useState } from "react"
import { supabase } from "../../../client";

export const useAddCreator = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addCreatorMutate = async (data) => {
    setIsLoading(true);
    supabase.from('creators').insert(data).select().then(res => {
      setData(res.data);
      setIsLoading(false);
    }).catch(error => {
      console.error(error);
    });
  }

  return {
    addCreatorData: data,
    addCreatorIsLoading: isLoading,
    addCreatorMutate,
  }
}