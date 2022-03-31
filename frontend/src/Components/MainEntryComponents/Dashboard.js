import React from "react";
import Logout from "../UserDashboardComponents/Logout";
import MainQuote from "../UserDashboardComponents/MainQuote";
import "../../css/app.css";
import "../../css/dashboard.css";
import Navbar from "../UserDashboardComponents/Navbar";

export default function Dashboard() {
  return (
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
  );
}
