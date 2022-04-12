package com.anthonyaviles.QuoteMachine.ServiceTests;

import com.anthonyaviles.QuoteMachine.model.Answer;
import com.anthonyaviles.QuoteMachine.model.Question;
import com.anthonyaviles.QuoteMachine.repository.QuestionRepository;
import com.anthonyaviles.QuoteMachine.service.impl.QuestionServiceImpl;
import org.assertj.core.api.Assertions;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ActiveProfiles("test")
public class QuestionServiceTests {

	@InjectMocks
	QuestionServiceImpl questionService;

	@Mock
	private QuestionRepository questionRepository;

	private Session session;
	private Transaction transaction;
	private SessionFactory factory;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);
		factory = new Configuration().configure().buildSessionFactory();
		session = factory.openSession();
		transaction = session.beginTransaction();

		//Drop Tables
		session.createSQLQuery("SET FOREIGN_KEY_CHECKS = 0").executeUpdate();
		session.createSQLQuery("truncate table questions_answers;").executeUpdate();
		session.createSQLQuery("truncate table questions;").executeUpdate();
		session.createSQLQuery("truncate table answers;").executeUpdate();
		session.createSQLQuery("SET FOREIGN_KEY_CHECKS = 1").executeUpdate();

		//Populate Questions Table
		Question question1 = new Question();
		question1.setQuestion("Are you looking to fade or remove your tattoo?");

		Question question2 = new Question();
		question2.setQuestion("What is your skin type?");

		Question question3 = new Question();
		question3.setQuestion("What is the age of your tattoo?");

		Question question4 = new Question();
		question4.setQuestion("What size is your tattoo?");

		Question question5 = new Question();
		question5.setQuestion("What color is your tattoo?");

		Question question6 = new Question();
		question6.setQuestion("Amount of Ink");

		Question question7 = new Question();
		question7.setQuestion("Scarring");

		Question question8 = new Question();
		question8.setQuestion("Layering");

		session.save(question1);
		session.save(question2);
		session.save(question3);
		session.save(question4);
		session.save(question5);
		session.save(question6);
		session.save(question7);
		session.save(question8);

		transaction.commit();
		session.close();
		factory.close();
	}

	@Test
	public void getQuestionByQuestion_should_return_correct_question_given_valid_question() {
		Question expectedQuestion = new Question();
		expectedQuestion.setQuestionId(6);
		expectedQuestion.setQuestion("Amount of Ink");

		when(questionRepository.findByQuestion(anyString())).thenReturn(expectedQuestion);
		Question actualQuestion = questionService.getQuestionByQuestion("Amount of Ink");

		Assertions.assertThat(actualQuestion).isEqualTo(expectedQuestion);
	}

	@Test
	public void addAnswerToQuestion_should_add_answer_to_question_answer_list() {
		Answer expectedAnswer1 = new Answer();
		expectedAnswer1.setAnswerId(1);
		expectedAnswer1.setAnswer("Fade");
		List<Answer> expectedList = new ArrayList<>();
		expectedList.add(expectedAnswer1);

		Question expectedQuestion = new Question();
		expectedQuestion.setQuestionId(1);
		expectedQuestion.setQuestion("Are you looking to fade or remove your tattoo?");
		expectedQuestion.setAnswers(expectedList);

		when(questionRepository.findById(1))
				.thenReturn(Optional.of(expectedQuestion));
		questionService.addAnswerToQuestion(1, expectedAnswer1);
		Question actualQuestion = questionService.getQuestionById(1);
		Assertions.assertThat(actualQuestion).isEqualTo(expectedQuestion);
	}
}
