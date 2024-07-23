import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDeleteCreator, useGetCreator, useUpdateCreator } from "../apis";

export const useHandleCreatorEdit = ({ creatorId }) => {
  const { getCreatorData, getCreatorIsLoading, getCreatorMutate } = useGetCreator();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const { updateCreatorMutate, updateCreatorError } = useUpdateCreator();
  const { deleteCreatorData, deleteCreatorIsLoading, deleteCreatorMutate } = useDeleteCreator();

  const onSubmit = data => {
    updateCreatorMutate(creatorId, data).then(() => {
      navigate(`/creators/${creatorId}`);
    });
  }

  const handleDeleteCreator = () => {
    deleteCreatorMutate(creatorId).then(() => {
      navigate("/")
    });
  }

  useEffect(() => {
    getCreatorMutate(creatorId);
  }, []);

  const modalStyles = {
    content: {
      position: "relative",
      width: "fit-content",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "3px",
      background: "linear-gradient(to bottom right, #c8acd6, #6f5af1)",
      borderRadius: "10px",
      border: "none",
      inset: 0,
      transition: "all ease-in-out 0.2s",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.603)",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "all ease-in-out 0.3s",
    },
  };

  const [imageURL, setImageURL] = useState('/placeholder.png');

  useEffect(() => {
    if (getCreatorData?.imageURL) {
      setImageURL(getCreatorData?.imageURL);
    }
  }, getCreatorData);

  return {
    getCreatorData,
    getCreatorIsLoading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    confirmModalIsOpen,
    setConfirmModalIsOpen,
    handleDeleteCreator,
    modalStyles,
    imageURL,
    setImageURL,
  }
}