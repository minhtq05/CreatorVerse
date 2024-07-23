import { useState } from "react";
import { supabase } from "../../../client";

export const useGetCreator = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCreatorMutate = async (creatorId) => {
    setIsLoading(true);
    supabase.from("creators").select().eq("id", creatorId).single().then(res => {
      setData(res.data);
      setIsLoading(false);
    }).catch(error => {
      console.error(error);
    });
  }

  return {
    getCreatorData: data,
    getCreatorIsLoading: isLoading,
    getCreatorMutate,
  }
}