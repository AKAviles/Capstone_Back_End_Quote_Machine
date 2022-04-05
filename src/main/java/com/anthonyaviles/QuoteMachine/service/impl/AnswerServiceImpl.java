package com.anthonyaviles.QuoteMachine.service.impl;

import com.anthonyaviles.QuoteMachine.model.Answer;
import com.anthonyaviles.QuoteMachine.repository.AnswerRepository;
import com.anthonyaviles.QuoteMachine.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AnswerServiceImpl implements AnswerService {

	private AnswerRepository answerRepository;

	@Autowired
	public AnswerServiceImpl(AnswerRepository answerRepository) {
		this.answerRepository = answerRepository;
	}

	@Override
	public Answer saveAnswer(Answer answer) {
		return null;
	}

	@Override
	public List<Answer> getAllAnswers() {
		return null;
	}

	@Override
	public Answer getAnswerById(int id) {
		return null;
	}

	@Override
	public Answer deleteAnswer(int id) {
		return null;
	}
}
