import React, { useState } from "react";
import { addQuote } from "../../utils/apiCalls";
import { getCurrentUser } from "../../Service/authService";
import "../../css/card.css";
import "../../css/displayTotal.css";

export default function DisplayTotal({ formData, handleSubmit }) {
  const initialQuoteData = {
    sessions: "",
    cost: "",
  };
  const [clicked, setClicked] = useState(false);
  const [quoteData, setQuoteData] = useState({ ...initialQuoteData });

  function handleQuoteData(sessions, cost) {
    setQuoteData({
      sessions: sessions,
      cost: cost,
    });
  }

  function handleAddQuote() {
    let user = getCurrentUser();
    addQuote(user.id, quoteData);
    window.location.reload(false);
  }

  function addSessions(obj1) {
    let removalAmountNum;
    let skinTypeNum;
    // let ageNum: ask steph what value of this number is regarding cost
    let colorNum;
    let inkAmountNum;
    let scarringNum;
    let layeringNum;
    const sessions = [];

    if (obj1.removalamount === "fade") {
      removalAmountNum = 5;
      sessions.push(removalAmountNum);
    } else if (obj1.removalamount === "unsure") {
      removalAmountNum = 5;
      sessions.push(removalAmountNum);
    } else if (obj1.removalamount === "remove") {
      removalAmountNum = 10;
      sessions.push(removalAmountNum);
    }

    if (obj1.skintype === "one") {
      skinTypeNum = 1;
      sessions.push(skinTypeNum);
    } else if (obj1.skintype === "two") {
      skinTypeNum = 2;
      sessions.push(skinTypeNum);
    } else if (obj1.skintype === "three") {
      skinTypeNum = 3;
      sessions.push(skinTypeNum);
    } else if (obj1.skintype === "four") {
      skinTypeNum = 4;
      sessions.push(skinTypeNum);
    } else if (obj1.skintype === "five") {
      skinTypeNum = 5;
      sessions.push(skinTypeNum);
    } else if (obj1.skintype === "six") {
      skinTypeNum = 6;
      sessions.push(skinTypeNum);
    }

    if (obj1.color === "black") {
      colorNum = 1;
      sessions.push(colorNum);
    } else if (obj1.color === "blackred") {
      colorNum = 2;
      sessions.push(colorNum);
    } else if (obj1.color === "blackcolor") {
      colorNum = 3;
      sessions.push(colorNum);
    } else if (obj1.color === "multi") {
      colorNum = 4;
      sessions.push(colorNum);
    }

    if (obj1.inkamount === "amatuer") {
      inkAmountNum = 3;
      sessions.push(inkAmountNum);
    } else if (obj1.inkamount === "minimal") {
      inkAmountNum = 4;
      sessions.push(inkAmountNum);
    } else if (obj1.inkamount === "moderate") {
      inkAmountNum = 5;
      sessions.push(inkAmountNum);
    } else if (obj1.inkamount === "significant") {
      inkAmountNum = 6;
      sessions.push(inkAmountNum);
    } else if (obj1.inkamount === "newtattoo") {
      inkAmountNum = 8;
      sessions.push(inkAmountNum);
    }

    if (obj1.scarring === "minimal") {
      scarringNum = 2;
      sessions.push(scarringNum);
    } else if (obj1.scarring === "moderate") {
      scarringNum = 4;
      sessions.push(scarringNum);
    } else if (obj1.scarring === "significant") {
      scarringNum = 6;
      sessions.push(scarringNum);
    }

    if (obj1.layering === "yeslayering") {
      layeringNum = 2;
      sessions.push(layeringNum);
    } else if (obj1.layering === "nolayering") {
      layeringNum = 0;
    }
    let totalSessions = 0;
    for (let i = 0; i < sessions.length; i++) {
      totalSessions += sessions[i];
    }
    return totalSessions;
  }

  function calculateTotal(obj1) {
    let sizeNum;
    let finalEstimate;

    if (obj1.size === "xs") {
      sizeNum = 120;
    } else if (obj1.size === "small") {
      sizeNum = 230;
    } else if (obj1.size === "medium") {
      sizeNum = 310;
    } else if (obj1.size === "large") {
      sizeNum = 390;
    } else if (obj1.size === "xl") {
      sizeNum = 640;
    } else if (obj1.size === "eyebrows") {
      sizeNum = 260;
    } else {
      sizeNum = 350;
    }

    finalEstimate = sizeNum * addSessions(formData);
    return finalEstimate;
  }

  function handleCalculateTotal() {
    setClicked(!clicked);

    handleQuoteData(addSessions(formData), calculateTotal(formData));
    calculateTotal(formData);
  }

  return (
    <>
      <button
        className='btn btn-calculate'
        onClick={() => handleCalculateTotal()}
      >
        Calculate
      </button>

      {clicked ? (
        <div>
          <p className='text'>
            Your estimated total is: ${calculateTotal(formData)} based on{" "}
            {addSessions(formData)} sessions!
          </p>
          <button
            className='btn btn-submit'
            type='submit'
            onClick={() => handleAddQuote()}
          >
            Save Quote!
          </button>
        </div>
      ) : null}
    </>
  );
}
