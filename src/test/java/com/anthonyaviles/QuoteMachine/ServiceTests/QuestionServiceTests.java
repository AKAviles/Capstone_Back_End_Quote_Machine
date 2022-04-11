package com.anthonyaviles.QuoteMachine.ServiceTests;

import com.anthonyaviles.QuoteMachine.model.Question;
import com.anthonyaviles.QuoteMachine.model.User;
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
		session.createSQLQuery("drop table users_quotes;").executeUpdate();
		session.createSQLQuery("drop table questions_answers;").executeUpdate();
		session.createSQLQuery("drop table users;").executeUpdate();
		session.createSQLQuery("drop table quotes;").executeUpdate();
		session.createSQLQuery("drop table questions;").executeUpdate();
		session.createSQLQuery("drop table answers;").executeUpdate();

		//Populate Users Table
		User user1 = new User();
		user1.setFirstName("Anthony");
		user1.setLastName("Aviles");
		user1.setEmail("anthony@gmail.com");
		user1.setPhoneNumber("123");
		user1.setPassword("abc");

		User user2 = new User();
		user2.setFirstName("Anthony");
		user2.setLastName("James");
		user2.setEmail("james@mail.com");
		user2.setPhoneNumber("345");
		user2.setPassword("abcdef");

		User user3 = new User();
		user3.setFirstName("Stephen");
		user3.setLastName("Thompson");
		user3.setEmail("kicman@ufc.com");
		user3.setPhoneNumber("123456");
		user3.setPassword("kickingit");

		User user4 = new User();
		user4.setFirstName("Gilbert");
		user4.setLastName("Johnson");
		user4.setEmail("gil@gil.com");
		user4.setPhoneNumber("1234567890");
		user4.setPassword("password");

		User user5 = new User();
		user5.setFirstName("Daniel");
		user5.setLastName("Day");
		user5.setEmail("days@mail.com");
		user5.setPhoneNumber("0987654321");
		user5.setPassword("password");

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
}
