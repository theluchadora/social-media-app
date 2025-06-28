import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  const profileStr = localStorage.getItem("profile");
  if (profileStr) {
    const profile = JSON.parse(profileStr);
    req.headers.Authorization = `Bearer ${profile.token}`;
  }
  return req;
});


export const getUser = (userId)=> API.get(`/user/${userId}`);

export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);

export const getAllUser = () => API.get("/user");

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data);

export const unFollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);