import React from "react";
import { Link } from "react-router-dom";
import "../../css/app.css";
import "../../css/dashboard.css";
import logo from "../../images/delete-logo-stacked-rgb (1).png";

export default function Navbar() {
  return (
    <div className='navigation'>
      <img className='resize' src={logo} alt='logo' />
      <ul className='navigation'>
        <li>
          <Link to='/dashboard'>Consultation</Link>
        </li>
        <li>
          <Link to='/myQuotes'>My Quotes</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Information</Link>
        </li>
      </ul>
    </div>
  );
}
