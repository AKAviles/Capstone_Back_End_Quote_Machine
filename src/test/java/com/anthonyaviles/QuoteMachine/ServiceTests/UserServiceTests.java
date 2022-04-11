package com.anthonyaviles.QuoteMachine.ServiceTests;

import com.anthonyaviles.QuoteMachine.model.User;
import com.anthonyaviles.QuoteMachine.repository.UserRepository;
import com.anthonyaviles.QuoteMachine.service.impl.UserServiceImpl;
import org.assertj.core.api.Assertions;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import static org.junit.jupiter.params.provider.Arguments.arguments;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ActiveProfiles("test")
public class UserServiceTests {

	@InjectMocks
	UserServiceImpl userService;

	@Mock
	private UserRepository userRepository;

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
		session.createSQLQuery("truncate table users_quotes;").executeUpdate();
		session.createSQLQuery("truncate table questions_answers;").executeUpdate();
		session.createSQLQuery("truncate table users;").executeUpdate();
		session.createSQLQuery("truncate table quotes;").executeUpdate();
		session.createSQLQuery("truncate table questions;").executeUpdate();
		session.createSQLQuery("truncate table answers;").executeUpdate();
		session.createSQLQuery("SET FOREIGN_KEY_CHECKS = 1").executeUpdate();

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

		session.save(user1);
		session.save(user2);
		session.save(user3);
		session.save(user4);
		session.save(user5);

		transaction.commit();
		session.close();
		factory.close();
	}


	@Test
	public void getUserByEmail_should_return_correct_user_given_valid_email() {
		User expectedUser = new User();
		expectedUser.setId(5);
		expectedUser.setFirstName("Daniel");
		expectedUser.setLastName("Day");
		expectedUser.setEmail("days@mail.com");
		expectedUser.setPhoneNumber("0987654321");
		expectedUser.setPassword("password");

		when(userRepository.findByEmail(anyString())).thenReturn(expectedUser);
		User actualUser = userService.getUserByEmail("days@mail.com");

		Assertions.assertThat(actualUser).isEqualTo(expectedUser);
	}

	@Test
	public void getUserByFirstName_should_return_correct_users_given_valid_Name() {
		User expectedUser1 = new User();
		expectedUser1.setId(1);
		expectedUser1.setFirstName("Anthony");
		expectedUser1.setLastName("Aviles");
		expectedUser1.setEmail("anthony@gmail.com");
		expectedUser1.setPhoneNumber("123");
		expectedUser1.setPassword("abc");

		User expectedUser2 = new User();
		expectedUser2.setId(2);
		expectedUser2.setFirstName("Anthony");
		expectedUser2.setLastName("James");
		expectedUser2.setEmail("james@mail.com");
		expectedUser2.setPhoneNumber("345");
		expectedUser2.setPassword("abcdef");

		List<User> expectedList = new ArrayList<>();
		expectedList.add(expectedUser1);
		expectedList.add(expectedUser2);

		when(userRepository.findByFirstName(anyString())).thenReturn(expectedList);
		List<User> actualList = userService.getUserByFirstName("Ant");

		Assertions.assertThat(actualList).usingRecursiveComparison().isEqualTo(expectedList);
	}

	@ParameterizedTest
	@MethodSource("input")
	void getUserById_should_return_correct_user_given_id(User user) {
		when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));
		User actualUser = userService.getUserById(user.getId());
		Assertions.assertThat(actualUser).isEqualTo(user);
	}

	static Stream<Arguments> input() {
		User expectedUser1 = new User();
		expectedUser1.setId(1);
		expectedUser1.setFirstName("Anthony");
		expectedUser1.setLastName("Aviles");
		expectedUser1.setEmail("anthony@gmail.com");
		expectedUser1.setPhoneNumber("123");
		expectedUser1.setPassword("abc");

		User expectedUser2 = new User();
		expectedUser2.setId(2);
		expectedUser2.setFirstName("Anthony");
		expectedUser2.setLastName("James");
		expectedUser2.setEmail("james@mail.com");
		expectedUser2.setPhoneNumber("345");
		expectedUser2.setPassword("abcdef");

		User expectedUser3 = new User();
		expectedUser3.setId(3);
		expectedUser3.setFirstName("Stephen");
		expectedUser3.setLastName("Thompson");
		expectedUser3.setEmail("kicman@ufc.com");
		expectedUser3.setPhoneNumber("123456");
		expectedUser3.setPassword("kickingit");
		return Stream.of(
				arguments(
						expectedUser1
				),
				arguments(
						expectedUser2
				),
				arguments(
						expectedUser3
				)
		);
	}
}