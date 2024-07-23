import { useState } from "react";
import { supabase } from "../../../client";

export const useUpdateCreator = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateCreatorMutate = async (creatorId, data) => {
    setIsLoading(true);
    supabase.from("creators").update(data).eq("id", creatorId).then(res => {
      setIsLoading(false);
    }).catch(error => {
      setError(error);
      console.error(error);
    });
  }

  return {
    updateCreatorError: error,
    updateCreatorIsLoading: isLoading,
    updateCreatorMutate,
  }
}