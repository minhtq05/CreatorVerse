import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddCreator } from "../apis";

export const useHandleCreatorAddNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState("/placeholder.png");
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { addCreatorData, addCreatorIsLoading, addCreatorMutate } = useAddCreator();

  const onSubmit = data => {
    addCreatorMutate(data).then(() => {
      navigate("/")
    })
  }

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
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    confirmModalIsOpen,
    setConfirmModalIsOpen,
    modalStyles,
    imageUrl,
    setImageUrl,
    navigate,
  }
}