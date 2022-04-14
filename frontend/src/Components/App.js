import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./MainEntryComponents/Login";
import Home from "./MainEntryComponents/Home";
import Dashboard from "./MainEntryComponents/Dashboard";
import Register from "./MainEntryComponents/Register";
import MyQuotes from "./UserDashboardComponents/MyQuotes";
import Contact from "./UserDashboardComponents/Contact";
import Users from "./AdminDashboardComponents/Users";
import QuestionList from "./AdminDashboardComponents/QuestionList";
import "../css/app.css";
import "../css/MainEntry/login.css";

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
          <Route exact path='/admin/users' element={<Users />} />
          <Route exact path='/admin/q-and-a' element={<QuestionList />} />
        </Routes>
      </article>
    </BrowserRouter>
  );
}

export default App;
