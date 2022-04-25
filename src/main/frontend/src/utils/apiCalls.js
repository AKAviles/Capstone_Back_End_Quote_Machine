import axios from "axios";
import getAuthHeader from "../Service/authHeader";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

//Admin Api's-----------------------------------------------------
export function getAllUsers() {
  return axios
    .get(`${API_BASE_URL}/admin/users`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getUserByEmail(email) {
  return axios
    .get(`${API_BASE_URL}/admin/users/?email=${email}`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getUserByFirstName(name) {
  return axios
    .get(`${API_BASE_URL}/admin/users/name?firstName=${name}`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteUser(userId) {
  return axios
    .delete(`${API_BASE_URL}/admin/users/${userId}`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function addQuestion(questionData) {
  return axios
    .post(`${API_BASE_URL}/questions`, questionData, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getQuestions() {
  return axios
    .get(`${API_BASE_URL}/questions`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateQuestion(questionData, questionId) {
  return axios
    .put(`${API_BASE_URL}/questions/${questionId}`, questionData, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteQuestion(questionId) {
  return axios
    .delete(`${API_BASE_URL}/questions/${questionId}`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function addAnswerToQuestion(answerData, questionId) {
  return axios
    .post(`${API_BASE_URL}/questions/${questionId}/answers`, answerData, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteAnswerToQuestion(questionId, answerId) {
  return axios
    .delete(`${API_BASE_URL}/questions/${questionId}/${answerId}/remove`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

//Non-Admin Api's-------------------------------------------------

export function getUser(userId) {
  return axios
    .get(`${API_BASE_URL}/users/${userId}`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateUser(userId, userObj) {
  return axios
    .put(`${API_BASE_URL}/users/${userId}`, userObj, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function addQuote(userId, quoteData) {
  return axios
    .post(`${API_BASE_URL}/users/${userId}/quotes`, quoteData, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getQuotesForUser(userId) {
  return axios
    .get(`${API_BASE_URL}/users/${userId}/quotes`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteQuoteById(userId, quoteId) {
  return axios
    .delete(`${API_BASE_URL}/users/${userId}/${quoteId}/remove`, {
      headers: getAuthHeader(),
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
