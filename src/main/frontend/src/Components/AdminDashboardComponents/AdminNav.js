import React from "react";
import { Link } from "react-router-dom";
import "../../css/app.css";
import "../../css/dashboard.css";
import logo from "../../images/delete-logo-stacked-rgb (1).png";

export default function AdminNav() {
  return (
    <div className='navigation'>
      <Link to='/admin/users'>
        <img className='resize' src={logo} alt='logo' />
      </Link>

      <ul className='navigation'>
        <Link to='/admin/users'>
          <li>Users</li>
        </Link>

        <Link to='/admin/q-and-a'>
          <li>Consultation Questions</li>
        </Link>

        <Link to='/dashboard'>
          <li>Consultation</li>
        </Link>

        <Link to='/contact'>
          <li>Contact Information</li>
        </Link>
      </ul>
    </div>
  );
}
