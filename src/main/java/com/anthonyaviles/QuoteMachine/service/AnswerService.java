package com.anthonyaviles.QuoteMachine.service;

import com.anthonyaviles.QuoteMachine.model.Answer;

import java.util.List;

public interface AnswerService {
	Answer saveAnswer(Answer answer);
	List<Answer> getAllAnswers();
	Answer getAnswerById(int id);
	Answer updateAnswer(Answer answer, int id);
	Answer deleteAnswer(int id);

}
