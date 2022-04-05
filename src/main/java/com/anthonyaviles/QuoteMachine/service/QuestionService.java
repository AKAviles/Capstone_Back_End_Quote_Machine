package com.anthonyaviles.QuoteMachine.service;

import com.anthonyaviles.QuoteMachine.model.Question;

import java.util.List;

public interface QuestionService {
	Question saveQuestion(Question question);
	List<Question> getAllQuestions();
	Question getQuestionById(int id);
	Question deleteQuestion(int id);
}
