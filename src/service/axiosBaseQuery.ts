import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

import { BASE_API_URL } from "src/constants/api";

const Axios = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error?.response?.status === 401 &&
      !window.location.pathname.includes("/auth")
    ) {
      window.location.assign("/auth/login");
      return;
    }
    return Promise.reject(error?.response?.data || error);
  }
);

Axios.interceptors.request.use((config) => {
  return config;
});

const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig, unknown, unknown> => async (props) => {
    try {
      const { data } = await Axios(props);

      return { data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: { status: err.code, message: err.message },
      };
    }
  };
export default axiosBaseQuery;
