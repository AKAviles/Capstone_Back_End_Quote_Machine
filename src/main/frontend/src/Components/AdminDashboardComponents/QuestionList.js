import React, { useState, useEffect } from "react";
import {
  getQuestions,
  deleteQuestion,
  addQuestion,
} from "../../utils/apiCalls";
import deleteButton from "../../images/delete.png";
import Logout from "../UserDashboardComponents/Logout";
import AdminNav from "./AdminNav";
import AnswerList from "./AnswerList";
import "../../css/app.css";
import "../../css/dashboard.css";
import "../../css/myQuotes.css";
import "../../css/Admin/qanda.css";
import "../../css/Admin/users.css";

export default function QandA() {
  const [questionList, setQuestionList] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [questionData, setQuestionData] = useState({ question: "" });
  const [clickState, setClickState] = useState(-1);
  const [resStatus, setResStatus] = useState(false);
  const [addQuestionClicked, setAddQuestionClicked] = useState(false);

  useEffect(() => {
    getAllQuestions();
  }, [questionList]);

  async function getAllQuestions() {
    try {
      const response = await getQuestions();
      setQuestionList(response.data);
      if (response.status === 200) {
        setResStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleAnswersShowHide(e) {
    setHidden(!hidden);

    let targetNum = parseInt(e.target.id);
    let stateNum = parseInt(clickState);
    for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].questionId === targetNum) {
        if (stateNum === questionList[i].questionId) {
          setClickState(-1);
          break;
        } else {
          setClickState(e.target.id);
          break;
        }
      }
    }
  }

  //Takes text input from field and sets state
  function handleQuestionInput({ target }) {
    setQuestionData({
      ...questionData,
      question: target.value,
    });
  }

  //Sends question state with post question api when enter key is pressed
  function handleQuestionAdd(e) {
    if (e.key === "Enter") {
      addQuestion(questionData);
      setQuestionData({
        ...questionData,
        question: "",
      });
    }
  }
  return (
    <div className='dashboard-body'>
      <div className='header'>
        <AdminNav />
        <Logout />
      </div>
      <div className='admin-dashboard-body'>
        <div className='qanda-container'>
          <table className='row-formatting'>
            <thead>
              <tr>
                <th>Question Id</th>
                <th>Question</th>
                <th>Answers</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resStatus
                ? questionList.map((ques) => (
                    <React.Fragment key={ques.questionId}>
                      <tr>
                        <td>{ques.questionId}</td>
                        <td>{ques.question}</td>
                        <td>
                          {ques.questionId !== parseInt(clickState) ? (
                            <span
                              id={ques.questionId}
                              onClick={(e) => handleAnswersShowHide(e)}
                            >
                              &#43;
                            </span>
                          ) : (
                            <span
                              id={ques.questionId}
                              onClick={(e) => handleAnswersShowHide(e)}
                            >
                              &#8722;
                            </span>
                          )}
                        </td>
                        <td>
                          <img
                            className='delete-img'
                            src={deleteButton}
                            alt='delete'
                            onClick={() => deleteQuestion(ques.questionId)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <AnswerList clickState={clickState} ques={ques} />
                        </td>
                        <td></td>
                      </tr>
                    </React.Fragment>
                  ))
                : null}
              <tr>
                <td>
                  <span
                    onClick={() => setAddQuestionClicked(!addQuestionClicked)}
                  >
                    &#43;
                  </span>
                </td>
                {addQuestionClicked ? (
                  <td>
                    <input
                      value={questionData.question}
                      placeholder='question'
                      onChange={(e) => handleQuestionInput(e)}
                      onKeyDown={(e) => handleQuestionAdd(e)}
                    ></input>
                  </td>
                ) : null}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
