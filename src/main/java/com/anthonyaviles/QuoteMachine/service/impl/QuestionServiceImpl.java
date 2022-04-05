package com.anthonyaviles.QuoteMachine.service.impl;

import com.anthonyaviles.QuoteMachine.model.Question;
import com.anthonyaviles.QuoteMachine.repository.QuestionRepository;
import com.anthonyaviles.QuoteMachine.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class QuestionServiceImpl implements QuestionService {


	private QuestionRepository questionRepository;

	@Autowired
	public QuestionServiceImpl(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

	@Override
	public Question saveQuestion(Question question) {
		return null;
	}

	@Override
	public List<Question> getAllQuestions() {
		return null;
	}

	@Override
	public Question getQuestionById(int id) {
		return null;
	}

	@Override
	public Question deleteQuestion(int id) {
		return null;
	}
}
