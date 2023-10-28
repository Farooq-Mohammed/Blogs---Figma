import axios from "axios";
import { SERVICE_URLS } from "./serviceCalls";

const API_URL = "http://localhost:8083";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return processResponse(response);
  },
  function (error) {
    return Promise.reject(error);
  }
);

const processResponse = (response) => {
  if (response?.status === 200 || response?.status === 201) {
    return {
      isSuccess: true,
      data: response.data,
    };
  } else if (response?.status() === 409) {
    return {
      warning: true,
      msg: response.msg
    }
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};


const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body) => (
    axiosInstance({
      method: value.method,
      url: value.url,
      data: value.method === "DELETE" ? {} : body,
      headers: (value.headers) ? value.headers : null,
      responseType: value.responseType,
    })
  );
}

export { API };
