import React from "react";
import { Link } from "react-router-dom";
import "../../css/app.css";
import "../../css/dashboard.css";
import logo from "../../images/delete-logo-stacked-rgb (1).png";

export default function Navbar() {
  return (
    <div className='navigation'>
      <Link to='/dashboard'>
        <img className='resize' src={logo} alt='logo' />
      </Link>

      <ul className='navigation'>
        <Link to='/dashboard'>
          <li>Consultation</li>
        </Link>

        <Link to='/myQuotes'>
          <li>My Quotes</li>
        </Link>

        <Link to='/contact'>
          <li>Contact Information</li>
        </Link>
      </ul>
    </div>
  );
}
