import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/MainEntry/mainEntry.css";

export default function Home() {
  const navigate = useNavigate();

  function routeChange(toPath) {
    let path = `${toPath}`;
    navigate(path);
  }
  return (
    <div className='main-container'>
      <button
        className='btn btn-login btn-large'
        onClick={() => routeChange("login")}
      >
        Login
      </button>
      <button
        className='btn btn-register btn-large'
        onClick={() => routeChange("register")}
      >
        Register
      </button>
    </div>
  );
}
