import React, { useState, useEffect } from "react";
import {
  getAllUsers,
  getUserByEmail,
  getUserByFirstName,
  deleteUser,
} from "../../utils/apiCalls";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../Service/authService";
import deleteButton from "../../images/delete.png";
import Logout from "../UserDashboardComponents/Logout";
import AdminNav from "./AdminNav";
import "../../css/app.css";
import "../../css/dashboard.css";
import "../../css/myQuotes.css";
import "../../css/Admin/users.css";
import "../../css/MainEntry/mainEntry.css";

export default function Users() {
  let navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [resStatus, setResStatus] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [searchingFirstName, setSearchingFirstName] = useState(false);
  const [searchingEmail, setSearchingEmail] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [authorized, setAuthorized] = useState(true);

  useEffect(() => {
    let user = getCurrentUser();
    if (!user) {
      setLoggedIn(false);
    } else {
      if (user.roles[0] !== "ROLE_ADMIN") {
        setAuthorized(false);
      } else {
        if (!searchingFirstName && !searchingEmail) {
          getUsers();
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUsers() {
    try {
      const response = await getAllUsers();
      setUserList([]);
      setUserList(response.data);
      if (response.status === 200) {
        setResStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function searchByEmail(searchedEmail) {
    try {
      const response = await getUserByEmail(searchedEmail);
      setUserList([]);
      setUserList([response.data]);
      if (response.status === 200) {
        setResStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function searchByName(name) {
    try {
      const response = await getUserByFirstName(name);
      console.log(response);
      setUserList([]);
      setUserList(response.data);
      if (response.status === 200) {
        setResStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleName(event) {
    setFirstName(event.target.value);
  }

  function handleEntry(event) {
    if (event.key === "Enter") {
      if (event.target.name === "FirstName") {
        setSearchingFirstName(true);
        searchByName(firstName);
      } else if (event.target.name === "Email") {
        setSearchingEmail(true);
        searchByEmail(email);
      }
      console.log("pressed");
    }
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleClearSearch() {
    setEmail("");
    setFirstName("");
    getUsers();
  }

  function displayUnauthorized() {
    return <h5>Not Authorized</h5>;
  }

  function displayNotLoggedIn() {
    return (
      <button
        className='btn btn-login btn-small'
        onClick={(e) => handleRedirect(e)}
      >
        Log In
      </button>
    );
  }

  function displayAuthorizedAndLoggedIn() {
    return (
      <div className='dashboard-body'>
        <div className='header'>
          <AdminNav />
          <Logout />
        </div>
        <div className='user-dashboard-body'>
          <div className='search-bar-container'>
            <input
              value={firstName}
              name='FirstName'
              placeholder='Search By First Name'
              onChange={(e) => handleName(e)}
              onKeyDown={(e) => handleEntry(e)}
            ></input>
            <input
              value={email}
              name='Email'
              placeholder='Search By User E-mail'
              onChange={(e) => handleEmail(e)}
              onKeyDown={(e) => handleEntry(e)}
            ></input>
            <button onClick={() => handleClearSearch()}>Clear Search</button>
          </div>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>E-Mail</th>
                  <th>Phone Number</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <>
                  {resStatus
                    ? userList.map((user, index) => (
                        <tr key={index + 1}>
                          <td>{user.id}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{user.phoneNumber}</td>
                          <td>
                            <img
                              className='delete-img'
                              src={deleteButton}
                              alt='delete'
                              onClick={() => deleteUser(user.id)}
                            />
                          </td>
                        </tr>
                      ))
                    : null}
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  function handleRedirect(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <>
      {loggedIn && authorized
        ? displayAuthorizedAndLoggedIn()
        : loggedIn
        ? displayUnauthorized()
        : displayNotLoggedIn()}
    </>
  );
}
