package com.anthonyaviles.QuoteMachine.service.impl;

import com.anthonyaviles.QuoteMachine.exception.ResourceNotFoundException;
import com.anthonyaviles.QuoteMachine.model.Answer;
import com.anthonyaviles.QuoteMachine.model.Question;
import com.anthonyaviles.QuoteMachine.repository.QuestionRepository;
import com.anthonyaviles.QuoteMachine.service.AnswerService;
import com.anthonyaviles.QuoteMachine.service.QuestionService;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {


	private QuestionRepository questionRepository;
	private AnswerService answerService;

	@Autowired
	public QuestionServiceImpl(QuestionRepository questionRepository, AnswerService answerService) {
		this.questionRepository = questionRepository;
		this.answerService = answerService;
	}

	public QuestionServiceImpl() {

	}

	@Override
	public Question saveQuestion(Question question) {
		return questionRepository.save(question);
	}

	@Override
	public List<Question> getAllQuestions() {
		return questionRepository.findAll();
	}

	@Override
	public Question getQuestionById(int id) {
		return questionRepository.findById(id).orElseThrow(() ->
				new ResourceNotFoundException("Question", "Id", id));
	}

	@Override
	public Question getQuestionByQuestion(String question) {
		SessionFactory factory = new Configuration().configure().buildSessionFactory();
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		Question question1 = null;
		try {
			TypedQuery tq = session.createQuery("FROM Question WHERE question = :question");
			tq.setParameter("question", question);
			question1 = (Question)tq.getSingleResult();
			tx.commit();
			return question1;
		} catch (ResourceNotFoundException e) {
			throw new ResourceNotFoundException("Question", "Question", question1);
		} finally {
			session.close();
		}
	}

	@Override
	public Question updateQuestion(Question question, int id) {
		Question existingQuestion = getQuestionById(id);
		existingQuestion.setQuestion(question.getQuestion());
		questionRepository.save(existingQuestion);
		return existingQuestion;
	}

	@Override
	public Question deleteQuestion(int id) {
		Question existingQuestion = getQuestionById(id);
		questionRepository.delete(existingQuestion);
		return existingQuestion;
	}

	@Override
	@Transactional
	public Question addAnswerToQuestion(int questionId, Answer answer) {
		Question question = getQuestionById(questionId);
		List<Answer> questionAnswers = question.getAnswers();
		questionAnswers.add(answer);
		questionRepository.save(question);
		return question;
	}

	@Override
	public Answer deleteAnswerFromQuestion(int questionId, int answerId) {
		Question question = getQuestionById(questionId);
		Answer answer = answerService.getAnswerById(answerId);
		question.deleteAnswer(answer);
		return answer;
	}
}
