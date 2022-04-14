import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

//Admin Api's-----------------------------------------------------
export function getAllUsers() {
  return axios
    .get(`${API_BASE_URL}/users`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getUserByEmail(email) {
  return axios
    .get(`${API_BASE_URL}/users/?email=${email}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getUserByFirstName(name) {
  return axios
    .get(`${API_BASE_URL}/users/name?firstName=${name}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteUser(userId) {
  return axios
    .delete(`${API_BASE_URL}/users/${userId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function addQuestion(questionData) {
  return axios
    .post(`${API_BASE_URL}/questions`, questionData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getQuestions() {
  return axios
    .get(`${API_BASE_URL}/questions`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateQuestion(questionData, id) {
  return axios
    .put(`${API_BASE_URL}/questions/${id}`, questionData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteQuestion(id) {
  return axios
    .delete(`${API_BASE_URL}/questions/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function addAnswerToQuestion(answerData, id) {
  return axios
    .post(`${API_BASE_URL}/questions/${id}/answers`, answerData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteAnswerToQuestion(questionId, answerId) {
  return axios
    .delete(`${API_BASE_URL}/questions/${questionId}/${answerId}/remove`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

//Non-Admin Api's-------------------------------------------------
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

export function getUser() {
  return axios
    .get(`${API_BASE_URL}/users/1`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateUser(userObj) {
  return axios
    .put(`${API_BASE_URL}/users/1`, userObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function addQuote(quoteData) {
  return axios
    .post(`${API_BASE_URL}/users/1/quotes`, quoteData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getQuotesForUser() {
  return axios
    .get(`${API_BASE_URL}/users/1/quotes`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteQuoteById(quoteId) {
  return axios
    .delete(`${API_BASE_URL}/users/1/${quoteId}/remove`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
