import axios from "axios";
const url = "http://localhost:4000/";
export const PostData = async (path, data) => {
  const res = await axios.post(`${url}${path}`, data);
  return res;
};

export const GetData = async (path, data) => {
  return await axios.get(`${url}${path}`, data);
};