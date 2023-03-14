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
  const [mManagement, setmManagement] = useState();

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.Appreducer.isLogin);

  const postData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(url, userData);

      if (response.status == 200 && type == 'Login') {
        Router.push('/MainPage');
        dispatch(isUserLogin(true));
      } else if (response.status == 200 && type == 'Register' && !error) {
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

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setmManagement(response.data[0].category);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    error,
    isLoading,
    postData,
    dispatch,
    fetchData,
    getData,
    mManagement,
  };
};

export default useAxiosPost;
