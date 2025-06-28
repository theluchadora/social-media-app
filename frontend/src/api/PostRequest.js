import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getTimelinePosts = async (id) => API.get(`/post/${id}/timeline`);
export const likePost = async (id, userId) => API.put(`/post/${id}/like`, { userId: userId });