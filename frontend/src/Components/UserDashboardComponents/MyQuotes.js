import React, { useEffect, useState } from "react";
import Navbar from "../UserDashboardComponents/Navbar";
import Logout from "../UserDashboardComponents/Logout";
import { getQuotesForUser, deleteQuoteById } from "../../utils/apiCalls";
import "../../css/app.css";
import "../../css/dashboard.css";
import "../../css/myQuotes.css";

export default function MyQuotes() {
  const [quoteList, setQuoteList] = useState([]);
  const [resStatus, setResStatus] = useState(false);

  useEffect(() => {
    getQuotes();
  }, [quoteList]);

  async function getQuotes() {
    try {
      const response = await getQuotesForUser();
      setQuoteList(response.data);
      if (response.status === 200) {
        setResStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteQuotes(quoteId) {
    try {
      const response = await deleteQuoteById(quoteId);
      console.log(`Deleted Quote: ${response}`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
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
                        onClick={() => deleteQuotes(quote.qid)}
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
  );
}
