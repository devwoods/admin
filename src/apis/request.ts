import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    return Promise.reject(new Error("No Token"));
  }

  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
});

export default function request<T>(requestConfig: AxiosRequestConfig) {
  if (BASE_URL === undefined) {
    return;
  }

  const { url, method, params, data } = requestConfig;

  const requestURL = BASE_URL + "/api" + url;

  switch (method) {
    case "get":
    case "GET": {
      return axiosInstance.get<T>(requestURL, {
        params,
      });
    }
    case "post":
    case "POST": {
      return axiosInstance.post<T>(requestURL, data, { params });
    }
    case "put":
    case "PUT": {
      return axiosInstance.put<T>(requestURL, data, { params });
    }
    case "delete":
    case "DELETE": {
      return axiosInstance.delete<T>(requestURL, { params });
    }
    default: {
      console.error("axios error");
    }
  }
}
