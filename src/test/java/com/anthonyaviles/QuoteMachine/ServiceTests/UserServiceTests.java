package com.anthonyaviles.QuoteMachine.ServiceTests;

import com.anthonyaviles.QuoteMachine.model.User;
import com.anthonyaviles.QuoteMachine.repository.UserRepository;
import com.anthonyaviles.QuoteMachine.service.impl.UserServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;


public class UserServiceTests {

	@InjectMocks
	UserServiceImpl userService;

	@Mock
	private UserRepository userRepository;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);
	}


	@Test
	public void getUserByEmail_should_return_correct_user_given_valid_email() {
		User expectedUser = new User();
		expectedUser.setId(6);
		expectedUser.setFirstName("Test");
		expectedUser.setLastName("User");
		expectedUser.setEmail("test@mail.com");
		expectedUser.setPhoneNumber("1234567890");
		expectedUser.setPassword("password");

		when(userRepository.findByEmail(anyString())).thenReturn(expectedUser);
		User actualUser = userService.getUserByEmail("test@mail.com");

		Assertions.assertThat(actualUser).isEqualTo(expectedUser);
	}

	@Test
	public void getUserByFirstName_should_return_correct_users_given_valid_Name() {
		User expectedUser1 = new User();
		expectedUser1.setId(1);
		expectedUser1.setFirstName("Anthony");
		expectedUser1.setLastName("Aviles");
		expectedUser1.setEmail("anthony@gmail.com");
		expectedUser1.setPhoneNumber("3049975149");
		expectedUser1.setPassword("abc");

		User expectedUser2 = new User();
		expectedUser2.setId(7);
		expectedUser2.setFirstName("Anthony");
		expectedUser2.setLastName("User");
		expectedUser2.setEmail("secAnthony@mail.com");
		expectedUser2.setPhoneNumber("1234567890");
		expectedUser2.setPassword("password");

		List<User> expectedList = new ArrayList<>();
		expectedList.add(expectedUser1);
		expectedList.add(expectedUser2);

		when(userRepository.findByFirstName(anyString())).thenReturn(expectedList);
		List<User> actualList = userService.getUserByFirstName("Ant");

		Assertions.assertThat(actualList).isEqualTo(expectedList);
	}
}
