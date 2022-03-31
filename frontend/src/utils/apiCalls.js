import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

export function getQuotesForUser(userId) {
  return axios.get(`${API_BASE_URL}`);
}

export function registerUser(userData) {
  return axios
    .post(`${API_BASE_URL}/users`, userData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
