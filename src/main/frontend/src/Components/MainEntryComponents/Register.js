import React, { useState } from "react";
import { registerUser } from "../../Service/authService";
import { Link } from "react-router-dom";
import "../../css/MainEntry/mainEntry.css";

export default function Register() {
  const initialUserForm = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  const [userData, setUserData] = useState({ ...initialUserForm });
  const [duplicatePassword, setDuplicatePassword] = useState("");
  const [submissionCount, setSubmissionCount] = useState(0);
  const [resStatus, setResStatus] = useState(false);

  function handleMainChange({ target }) {
    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  }

  function handleDupliecatePasswordChange({ target }) {
    setDuplicatePassword(target.value);
  }

  function handleSubmit() {
    registerUser(userData);
    setResStatus(true);
  }

  function validatePasswordsMatch() {
    if (userData.password.localeCompare(duplicatePassword) === 0) {
      if (submissionCount > 0) {
        setSubmissionCount(0);
        return true;
      } else {
        return true;
      }
    } else {
      setSubmissionCount(1);
      return false;
    }
  }

  function handleFormClear(event) {
    setUserData({
      ...userData,
      password: "",
    });
    setDuplicatePassword("");
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    if (validatePasswordsMatch()) {
      handleSubmit();
    } else {
      handleFormClear();
    }
  }

  function startingDisplay() {
    return (
      <form
        className='main-forms'
        autoComplete='off'
        onSubmit={onSubmitHandler}
      >
        <h3> Welcome to Delete! </h3>

        <input
          type='text'
          placeholder='Username'
          value={userData.username}
          required='required'
          id='username'
          name='username'
          onChange={(e) => handleMainChange(e)}
        />

        <input
          type='text'
          placeholder='First Name'
          value={userData.firstName}
          required='required'
          id='firstName'
          name='firstName'
          onChange={(e) => handleMainChange(e)}
        />

        <input
          type='text'
          placeholder='Last Name'
          value={userData.lastName}
          required='required'
          id='lastName'
          name='lastName'
          onChange={(e) => handleMainChange(e)}
        />

        <input
          type='text'
          placeholder='Phone Number 123-456-7890'
          value={userData.phoneNumber}
          required='required'
          pattern='^\d{3}-\d{3}-\d{4}$'
          id='phoneNumber'
          name='phoneNumber'
          onChange={(e) => handleMainChange(e)}
        />

        <input
          type='text'
          placeholder='E-Mail'
          value={userData.email}
          required='required'
          id='email'
          name='email'
          onChange={(e) => handleMainChange(e)}
        />

        <input
          type='password'
          placeholder='Password'
          value={userData.password}
          required='required'
          pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
          id='password'
          name='password'
          onChange={(e) => handleMainChange(e)}
        />
        <input
          type='password'
          placeholder='Retype your password'
          value={duplicatePassword}
          required='required'
          id='duplicatePassword'
          name='duplicatePassword'
          onChange={handleDupliecatePasswordChange}
        />
        <button className='btn btn-login btn-medium' type='submit'>
          Create Account!
        </button>
        <ul>
          <p>Password Requirements</p>
          <p>At least 1 Uppercase</p>
          <p>At least 1 Lowercase</p>
          <p>At least 1 Number</p>
          <p>At least 1 Symbol: !@#$%^&*_=+-</p>
          <p>Min 8 characters and Max 12 characters</p>
        </ul>
      </form>
    );
  }

  function duplicatePasswordMismatchDisplay() {
    return (
      <form
        className='main-forms'
        onSubmit={onSubmitHandler}
        autoComplete='off'
      >
        <h3> Welcome to Delete! </h3>

        <input
          type='text'
          placeholder='First Name'
          value={userData.firstName}
          required='required'
          id='firstName'
          name='firstName'
          onChange={(e) => handleMainChange(e)}
        />

        <input
          type='text'
          placeholder='Last Name'
          value={userData.lastName}
          required='required'
          id='lastName'
          name='lastName'
          onChange={(e) => handleMainChange(e)}
        />

        <input
          type='text'
          placeholder='Phone Number 123-456-7890'
          value={userData.phoneNumber}
          required='required'
          pattern='^\d{3}-\d{3}-\d{4}$'
          id='phoneNumber'
          name='phoneNumber'
          onChange={(e) => handleMainChange(e)}
        />

        <input
          type='text'
          placeholder='E-Mail'
          value={userData.email}
          required='required'
          id='email'
          name='email'
          onChange={(e) => handleMainChange(e)}
        />

        <input
          type='password'
          placeholder='Password'
          value={userData.password}
          required='required'
          pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
          id='password'
          name='password'
          onChange={(e) => handleMainChange(e)}
        />
        <input
          type='password'
          placeholder='Retype your password'
          value={duplicatePassword}
          required='required'
          id='duplicatePassword'
          name='duplicatePassword'
          onChange={handleDupliecatePasswordChange}
        />
        <h4>Passwords must match!</h4>
        <button className='btn btn-register btn-medium' type='submit'>
          Create Account!
        </button>
        <ul>
          <p>Password Requirements</p>
          <p>At least 1 Uppercase</p>
          <p>At least 1 Lowercase</p>
          <p>At least 1 Number</p>
          <p>At least 1 Symbol: !@#$%^&*_=+-</p>
          <p>Min 8 characters and Max 12 characters</p>
        </ul>
      </form>
    );
  }

  function directToLoginPage() {
    return (
      <div>
        <h3>
          Thank you for registering! To start a consultation, please login!
        </h3>
        <Link to='/login'>Login</Link>
      </div>
    );
  }

  return (
    <div className='main-container'>
      {submissionCount > 0
        ? resStatus
          ? directToLoginPage()
          : duplicatePasswordMismatchDisplay()
        : resStatus
        ? directToLoginPage()
        : startingDisplay()}
    </div>
  );
}
