import React, { useState } from "react";
import {
  addAnswerToQuestion,
  deleteAnswerToQuestion,
} from "../../utils/apiCalls";
import "../../css/Admin/qanda.css";

export default function AnswerList({ clickState, ques }) {
  const [addAnswerClicked, setAddAnswerClicked] = useState(false);
  const [answerData, setAnswerData] = useState({ answer: "" });

  function handleAnswerInput({ target }) {
    setAnswerData({
      ...answerData,
      answer: target.value,
    });
  }

  function handleAnswerAdd(e, id) {
    if (e.key === "Enter") {
      addAnswerToQuestion(answerData, id);
      setAnswerData({
        answer: "",
      });
    }
  }

  return (
    <div
      className={`${
        parseInt(clickState) === ques.questionId
          ? "answers-container"
          : "hidden"
      }`}
    >
      {ques.answers.map((ans) => (
        <div className='answers-list'>
          <ul key={ans.answerId}>
            <p className='answer'>{ans.answer}</p>
            <span
              onClick={() =>
                deleteAnswerToQuestion(ques.questionId, ans.answerId)
              }
            >
              &#215;
            </span>
          </ul>
        </div>
      ))}
      <div className='add-container'>
        <span
          className='add'
          onClick={() => setAddAnswerClicked(!addAnswerClicked)}
        >
          &#43;
        </span>
        {addAnswerClicked ? (
          <input
            value={answerData.answer}
            placeholder='Answer'
            onChange={(e) => handleAnswerInput(e)}
            onKeyDown={(e) => handleAnswerAdd(e, ques.questionId)}
          ></input>
        ) : null}
      </div>
    </div>
  );
}
