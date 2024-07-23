import { useState } from "react"
import { supabase } from "../../../client";

export const useDeleteCreator = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const deleteCreatorMutate = async (creatorId) => {
    setIsLoading(true);
    supabase.from("creators").delete().eq("id", creatorId).then(res => {
      setData(res.data);
      setIsLoading(false);
    }).catch(error => {
      console.error(error);
    });
  }

  return {
    deleteCreatorData: data,
    deleteCreatorIsLoading: isLoading,
    deleteCreatorMutate,
  }
}