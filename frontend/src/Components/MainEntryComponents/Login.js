import React, { useState } from "react";
import "../../css/MainEntry/login.css";

export default function Login() {
  const initialLoginForm = {
    email: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState({ ...initialLoginForm });

  function onChange({ target }) {
    setLoginForm({
      ...loginForm,
      [target.name]: [target.value],
    });
  }

  return (
    <>
      <div className='main-container'>
        <h2>Please login!</h2>
        <form className='main-forms' autoComplete='off'>
          <input
            type='text'
            placeholder='Email'
            value={loginForm.email}
            id='loginEmail'
            name='email'
            onChange={(e) => onChange(e)}
          />

          <input
            type='text'
            placeholder='Password'
            value={loginForm.password}
            id='password'
            name='password'
            onChange={(e) => onChange(e)}
          />

          <button tye='submit' className='btn btn-login btn-medium'>
            login
          </button>
        </form>
      </div>
    </>
  );
}
