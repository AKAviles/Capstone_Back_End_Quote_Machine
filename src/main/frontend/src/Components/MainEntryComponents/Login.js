import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Service/authService";

import "../../css/MainEntry/login.css";

export default function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  function onChangeUsername(e) {
    const username = e.target.value;
    setUsername(username);
  }

  function onChangePassword(e) {
    const password = e.target.value;
    setPassword(password);
  }

  async function handleLogin(e) {
    e.preventDefault();
    setMessage("");
    try {
      let response = await loginUser(username, password);
      if (!response) {
        setMessage("Incorrect Credentials. Try again.");
      } else {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user.roles[0] === "ROLE_ADMIN") {
          navigate("/admin/users");
          window.location.reload();
        } else {
          navigate("/dashboard");
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='main-container'>
        <h2>Please login!</h2>
        <form
          className='main-forms'
          autoComplete='off'
          onSubmit={(e) => handleLogin(e)}
        >
          <input
            type='text'
            placeholder='Username'
            value={username}
            id='username'
            name='username'
            onChange={(e) => onChangeUsername(e)}
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            id='password'
            name='password'
            onChange={(e) => onChangePassword(e)}
          />

          <button tye='submit' className='btn btn-login btn-medium'>
            login
          </button>
          {message && (
            <div>
              <div>{message}</div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
