/* eslint-disable react-hooks/exhaustive-deps */
import { isUserLogin } from '@/Modals/Reducers/Reducer';
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAxiosPost = (url, userData, type) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchData, setFetchData] = useState();

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.Appreducer.isLogin);

  const postData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(url, userData);
      console.log(userData);
      if (response.status == 200 && type == 'Login') {
        dispatch(isUserLogin(true));
        Router.push('/MainPage');
      } else if (response.status == 200 && type == 'Register') {
        Router.push('/Login');
      }
    } catch (error) {
      setError(true);
      setFetchData(error.response.data.message || []);
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => {
      setError(false);
    }, 1500);
  };

  return { error, isLoading, postData, dispatch, fetchData };
};

export default useAxiosPost;
