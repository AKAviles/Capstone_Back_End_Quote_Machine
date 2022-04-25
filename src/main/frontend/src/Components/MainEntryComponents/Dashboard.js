import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../UserDashboardComponents/Logout";
import MainQuote from "../UserDashboardComponents/MainQuote";
import "../../css/app.css";
import "../../css/dashboard.css";
import "../../css/MainEntry/mainEntry.css";
import Navbar from "../UserDashboardComponents/Navbar";

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) setLoggedIn(false);
  }, [loggedIn]);

  let navigate = useNavigate();

  function handleRedirect(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <>
      {loggedIn ? (
        <div className='dashboard-body'>
          <div className='header'>
            <Navbar />
            <Logout />
          </div>
          <div className='dashboard-body'>
            <div className='border-box-1'>
              <MainQuote />
            </div>
          </div>
        </div>
      ) : (
        <button
          className='btn btn-login btn-small'
          onClick={(e) => handleRedirect(e)}
        >
          Log In
        </button>
      )}
    </>
  );
}
