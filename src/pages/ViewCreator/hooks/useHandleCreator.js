import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCreator } from "../apis/useGetCreator";

export const useHandleCreator = ({ creatorId }) => {
  const { getCreatorData, getCreatorIsLoading, getCreatorMutate } = useGetCreator()
  const [expandText, setExpandText] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    getCreatorMutate(creatorId);
  }, []);

  return {
    getCreatorData,
    getCreatorIsLoading,
    expandText,
    setExpandText,
    navigate,
  }
}