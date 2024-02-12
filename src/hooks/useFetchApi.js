import { useEffect, useState } from "react";
import { GetRickMortyApi } from "../helpers/GetRickMortyApi";

export const useFetchApi = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: true,
    hasError: null,
  });

  const apiConsume = async () => {
    try {
      const data = await GetRickMortyApi();
      setResponse({
        data,
        isLoading: false,
        hasError: "00",
      });
    } catch (error) {
      setResponse({
        data: null,
        isLoading: false,
        hasError: `error: ${error}`,
      });
    }
  };

  useEffect(() => {
    apiConsume();
  }, []);

  return { response };
};
