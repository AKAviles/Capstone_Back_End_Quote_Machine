package com.anthonyaviles.QuoteMachine.ServiceTests;

import com.anthonyaviles.QuoteMachine.model.Answer;
import com.anthonyaviles.QuoteMachine.repository.AnswerRepository;
import com.anthonyaviles.QuoteMachine.service.impl.AnswerServiceImpl;
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

import java.util.Optional;

import static org.mockito.Mockito.when;

@ActiveProfiles("test")
public class AnswerServiceTests {

	@InjectMocks
	AnswerServiceImpl answerService;

	@Mock
	private AnswerRepository answerRepository;

	private Session session;
	private Transaction transaction;
	private SessionFactory factory;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);
		factory = new Configuration().configure().buildSessionFactory();
		session = factory.openSession();
		transaction = session.beginTransaction();

		//Truncate Tables
		session.createSQLQuery("SET REFERENTIAL_INTEGRITY FALSE").executeUpdate();
		session.createSQLQuery("truncate table questions_answers").executeUpdate();
		session.createSQLQuery("truncate table answers").executeUpdate();
		session.createSQLQuery("truncate table questions").executeUpdate();
		session.createSQLQuery("SET REFERENTIAL_INTEGRITY TRUE").executeUpdate();

		//Populate Answers
		Answer answer1 = new Answer();
		answer1.setAnswer("Fade");

		Answer answer2 = new Answer();
		answer2.setAnswer("Remove");

		Answer answer3 = new Answer();
		answer3.setAnswer("Unsure");

		Answer answer4 = new Answer();
		answer4.setAnswer("I. White, very fair, red/blonde, freckles");

		Answer answer5 = new Answer();
		answer5.setAnswer("II. White, fair, red/blonde hair");

		Answer answer6 = new Answer();
		answer6.setAnswer("III. White or olive skin, fair with any eye or hair color");

		session.save(answer1);
		session.save(answer2);
		session.save(answer3);
		session.save(answer4);
		session.save(answer5);
		session.save(answer6);

		transaction.commit();
		session.close();
		factory.close();
	}

	@Test
	void getAnswerById_should_return_answer() {
		Answer expectedAnswer = new Answer();
		expectedAnswer.setAnswerId(3);
		expectedAnswer.setAnswer("Unsure");

		when(answerRepository.findById(3)).thenReturn(Optional.of(expectedAnswer));
		Answer actualAnswer = answerService.getAnswerById(3);
		Assertions.assertThat(actualAnswer).isEqualTo(expectedAnswer);
	}
}
