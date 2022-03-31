import React from "react";
import Login from "./MainEntryComponents/Login";
import Home from "./MainEntryComponents/Home";
import Dashboard from "./MainEntryComponents/Dashboard";
import Register from "./MainEntryComponents/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/app.css";
import "../css/MainEntry/login.css";
import MyQuotes from "./UserDashboardComponents/MyQuotes";
import Contact from "./UserDashboardComponents/Contact";

function App() {
  return (
    <BrowserRouter>
      <article>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/myQuotes' element={<MyQuotes />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </article>
    </BrowserRouter>
  );
}

export default App;
