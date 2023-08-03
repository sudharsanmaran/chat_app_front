import axios, { AxiosResponse } from "axios";
import { BASE_URL, REFRESH_TOKEN_URL } from "../constants";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export const private_api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export const updateToken = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

async function fetchNewAccessToken(): Promise<string> {
  try {
    const response = await api.post(
      REFRESH_TOKEN_URL,
      JSON.stringify({ refresh: localStorage.getItem("refreshToken") }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { access } = response.data;
    localStorage.setItem("accessToken", access);
    return access;
  } catch (error) {
    updateToken("", "");
    throw error;
  }
}

private_api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const status = error.response ? error.response.status : null;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await fetchNewAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return private_api(originalRequest);
      } catch (error) {
        updateToken("", "");
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
