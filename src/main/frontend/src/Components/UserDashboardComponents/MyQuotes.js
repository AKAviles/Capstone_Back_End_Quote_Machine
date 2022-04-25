import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../UserDashboardComponents/Navbar";
import Logout from "../UserDashboardComponents/Logout";
import { getCurrentUser } from "../../Service/authService";
import { getQuotesForUser, deleteQuoteById } from "../../utils/apiCalls";
import "../../css/app.css";
import "../../css/dashboard.css";
import "../../css/MainEntry/mainEntry.css";
import "../../css/myQuotes.css";

export default function MyQuotes() {
  let navigate = useNavigate();
  const [quoteList, setQuoteList] = useState([]);
  const [resStatus, setResStatus] = useState(false);
  const [userId, setUserId] = useState();
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    let user = getCurrentUser();
    if (!user) {
      setLoggedIn(false);
    } else {
      setUserId(user.id);
      getQuotes(user.id);
    }
  }, [quoteList]);

  async function getQuotes(id) {
    try {
      const response = await getQuotesForUser(id);
      setQuoteList(response.data);
      if (response.status === 200) {
        setResStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteQuotes(uId, quoteId) {
    try {
      const response = await deleteQuoteById(uId, quoteId);
      console.log(`Deleted Quote: ${response}`);
    } catch (err) {
      console.log(err);
    }
  }

  function handleRedirect(e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <>
      {loggedIn ? (
        <div className='dashboard-body'>
          <div className='header'>
            <Navbar />
            <Logout />
          </div>
          <div className='dashboard-body'>
            <div className='border-box-1'>
              <div className='main-quotes-container'>
                <h3>My Quotes</h3>
                <div className='quotes-list-container'>
                  {resStatus
                    ? quoteList.map((quote, index) => (
                        <div className='quote-card' key={quote.qid}>
                          <h3>Tattoo {index + 1}</h3>
                          <h4>Sessions: {quote.sessions}</h4>
                          <h4>Estimated Cost: {quote.cost}</h4>
                          <button
                            onClick={() => deleteQuotes(userId, quote.qid)}
                            className='close btn'
                          >
                            &times;
                          </button>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          className='btn btn-login btn-small'
          onClick={(e) => handleRedirect(e)}
        >
          Log In
        </button>
      )}
    </>
  );
}
