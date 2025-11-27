import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getTimelinePosts = async (id) => API.get(`/post/${id}/timeline`);
export const likePost = async (id, userId) => API.put(`/post/${id}/like`, { userId: userId });