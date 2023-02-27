/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const useAxiosPost = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector((state) => state.Appreducer.userData);

  const postData = async () => {
    setIsLoading(true);

    try {
      console.log("response");
      const response = await axios.post("https://127.0.0.1:8080/register", userData);
      
      setResponse(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }

    
  };

  return { response, error, isLoading, postData };
};

export default useAxiosPost;
