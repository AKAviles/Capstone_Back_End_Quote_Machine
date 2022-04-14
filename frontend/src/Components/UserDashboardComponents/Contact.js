import React, { useState, useEffect } from "react";
import { getUser, updateUser } from "../../utils/apiCalls";
import Navbar from "../UserDashboardComponents/Navbar";
import Logout from "../UserDashboardComponents/Logout";
import pen from "../../images/pen.png";
import "../../css/app.css";
import "../../css/dashboard.css";
import "../../css/contact.css";
import "../../css/MainEntry/mainEntry.css";

export default function MyQuotes() {
  const [resStatus, setResStatus] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [fullUserInfo, setFullUserInfo] = useState({});

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUserInfo() {
    try {
      const response = await getUser();
      setFullUserInfo(response.data);
      if (response.status === 200) {
        setResStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function onChangeHandler({ target }) {
    setFullUserInfo({
      ...fullUserInfo,
      [target.name]: target.value,
    });
  }

  function activateEditMode() {
    console.log(fullUserInfo);
    setEditMode(true);
  }

  async function updateContactInformation(reqBody) {
    console.log(reqBody);
    try {
      const response = await updateUser(reqBody);
      if (response.status === 200) setEditMode(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='dashboard-body'>
      <div className='header'>
        <Navbar />
        <Logout />
      </div>
      <div className='dashboard-body'>
        <div className='border-box-1'>
          <div className='main-contact-container'>
            <h3>Contact</h3>
            <div className='contact-form-container'>
              {resStatus ? (
                editMode ? (
                  <form autoComplete='off'>
                    <span
                      className='pen-img'
                      onClick={() => updateContactInformation(fullUserInfo)}
                    >
                      &#10003;
                    </span>
                    <span htmlFor='email'>E-Mail:</span>
                    <input
                      type='text'
                      name='email'
                      value={fullUserInfo.email}
                      onChange={(e) => onChangeHandler(e)}
                    />
                    <span htmlFor='phone'>Phone Number:</span>
                    <input
                      type='text'
                      name='phoneNumber'
                      value={fullUserInfo.phoneNumber}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </form>
                ) : (
                  <form autoComplete='off'>
                    <img
                      className='pen-img'
                      src={pen}
                      alt='edit'
                      onClick={() => activateEditMode()}
                    />
                    <span htmlFor='email'>E-Mail:</span>
                    <input
                      disabled='disabled'
                      value={fullUserInfo.email}
                      onChange={(e) => onChangeHandler(e)}
                    />
                    <span htmlFor='phone'>Phone Number:</span>
                    <input
                      disabled='disabled'
                      value={fullUserInfo.phoneNumber}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </form>
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
