import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");
  return axios.create({
    baseURL: "",
    headers: {
      Authorization: token,
      user_id: user_id
    }
  });
};
