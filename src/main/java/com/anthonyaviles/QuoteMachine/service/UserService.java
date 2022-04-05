package com.anthonyaviles.QuoteMachine.service;

import com.anthonyaviles.QuoteMachine.model.Quote;
import com.anthonyaviles.QuoteMachine.model.User;

import java.util.List;

public interface UserService {
	User saveUser(User user);
	List<User> getAllUsers();
	User getUserById(long id);
	User getUserByEmail(String email);
	boolean checkIfUserWithEmailExists(String email);
	User updateUser(User user, long id);
	void deleteUser(long id);
	User addQuoteToUser(long userId, Quote quote);
	Quote deleteQuoteFromUser(long userId, int quoteId);
}
