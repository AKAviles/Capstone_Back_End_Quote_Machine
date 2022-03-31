import React from "react";
import Navbar from "../UserDashboardComponents/Navbar";
import Logout from "../UserDashboardComponents/Logout";
import "../../css/app.css";
import "../../css/dashboard.css";

export default function MyQuotes() {
  return (
    <div className='dashboard-body'>
      <div className='header'>
        <Navbar />
        <Logout />
      </div>
      <div className='dashboard-body'>
        <div className='border-box-1'>
          <h3>Contact</h3>
        </div>
      </div>
    </div>
  );
}
