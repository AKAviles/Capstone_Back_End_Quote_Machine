import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Service/authService";
import "../../css/logout.css";
import "../../css/MainEntry/mainEntry.css";

export default function Logout() {
  let navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div className='logout'>
      <button
        className='btn btn-logout btn-medium'
        onClick={(e) => handleLogout(e)}
      >
        Logout
      </button>
    </div>
  );
}
