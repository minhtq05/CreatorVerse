import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCreators } from '../api';

export const useHandleCreators = () => {
  const navigate = useNavigate();
  const {
    getCreatorsData,
    getCreatorsIsLoading,
    getCreatorsMutate
  } = useGetCreators();

  useEffect(() => {
    getCreatorsMutate();
  }, []);

  return {
    getCreatorsData,
    getCreatorsIsLoading,
    getCreatorsMutate,
    navigate,
  }
}