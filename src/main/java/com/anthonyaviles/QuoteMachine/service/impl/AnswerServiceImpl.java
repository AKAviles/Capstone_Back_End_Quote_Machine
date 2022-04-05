package com.anthonyaviles.QuoteMachine.service.impl;

import com.anthonyaviles.QuoteMachine.exception.ResourceNotFoundException;
import com.anthonyaviles.QuoteMachine.model.Answer;
import com.anthonyaviles.QuoteMachine.repository.AnswerRepository;
import com.anthonyaviles.QuoteMachine.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService {

	private AnswerRepository answerRepository;

	@Autowired
	public AnswerServiceImpl(AnswerRepository answerRepository) {
		this.answerRepository = answerRepository;
	}

	@Override
	public Answer saveAnswer(Answer answer) {
		return answerRepository.save(answer);
	}

	@Override
	public List<Answer> getAllAnswers() {
		return answerRepository.findAll();
	}

	@Override
	public Answer getAnswerById(int id) {
		return answerRepository.findById(id).orElseThrow(() ->
				new ResourceNotFoundException("Answer", "Id", id));
	}

	@Override
	public Answer updateAnswer(Answer answer, int id) {
		Answer existingAnswer = getAnswerById(id);
		existingAnswer.setAnswer(answer.getAnswer());
		answerRepository.save(existingAnswer);
		return existingAnswer;
	}

	@Override
	public Answer deleteAnswer(int id) {
		Answer existingAnswer = getAnswerById(id);
		answerRepository.delete(existingAnswer);
		return existingAnswer;
	}
}
