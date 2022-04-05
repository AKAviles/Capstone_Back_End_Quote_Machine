package com.anthonyaviles.QuoteMachine.service;

import com.anthonyaviles.QuoteMachine.model.Answer;
import com.anthonyaviles.QuoteMachine.model.Question;

import java.util.List;

public interface QuestionService {
	Question saveQuestion(Question question);
	List<Question> getAllQuestions();
	Question getQuestionById(int id);
	Question deleteQuestion(int id);
	Question updateQuestion(Question question, int id);
	Question addAnswerToQuestion(int questionId, Answer answer);
	Answer deleteAnswerFromQuestion(int questionId, int answerId);
}
