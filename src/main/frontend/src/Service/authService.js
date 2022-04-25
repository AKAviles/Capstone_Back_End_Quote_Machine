import axios from "axios";
const API_BASE_URL = "http://localhost:8080/api/auth";

export function registerUser(userData) {
  return axios
    .post(`${API_BASE_URL}/signup`, userData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function loginUser(username, password) {
  return axios
    .post(`${API_BASE_URL}/signin`, { username, password })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function logout() {
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}
