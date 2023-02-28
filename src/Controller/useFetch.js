/* eslint-disable react-hooks/exhaustive-deps */
import { isUserLogin } from '@/Modals/Reducers/Reducer';
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAxiosPost = (url, userData, type) => {
  const [responsee, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.Appreducer.isLogin);

  const postData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(url, userData);

      if (response.status == 200 && type == 'Login') {
        dispatch(isUserLogin(true));
        Router.push('/MainPage');
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { responsee, error, isLoading, postData, dispatch };
};

export default useAxiosPost;
