import axios from "axios";
import { BASE_URL } from "../constants";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export const PrivateApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMTQyMDE5LCJpYXQiOjE2OTA1MzcyMTksImp0aSI6IjViOGUwMTMwYmMyOTQyMjFhMjZmMjU0OTU4YmIzMTU5IiwidXNlcl9pZCI6ImE3YmJiYTg4LTVkMGYtNDA4MC1hNzkyLTA4ZmE3YjQyNzQxZiJ9.FIh5H0R2ovAXfJmm4f4jYsPu9n2l5k59LooNJe-sVmo`,
  },
});