package com.anthonyaviles.QuoteMachine.service.impl;

import com.anthonyaviles.QuoteMachine.exception.ResourceNotFoundException;
import com.anthonyaviles.QuoteMachine.model.Quote;
import com.anthonyaviles.QuoteMachine.model.User;
import com.anthonyaviles.QuoteMachine.repository.UserRepository;
import com.anthonyaviles.QuoteMachine.service.QuoteService;
import com.anthonyaviles.QuoteMachine.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;
	private QuoteService quoteService;

	@Autowired
	public UserServiceImpl(UserRepository userRepository, QuoteService quoteService) {
		this.userRepository = userRepository;
		this.quoteService = quoteService;

	}

	public UserServiceImpl() {
	}

	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}


	@Override
	public User getUserById(long id) {
		return userRepository.findById(id).orElseThrow(() ->
				new ResourceNotFoundException("User", "Id", id));
	}

	@Override
	public User getUserByEmail(String email) {
		return userRepository.findByEmailIs(email);
	}

	@Override
	public List<User> getUserByFirstName(String firstName) {
		return userRepository.findUserByFirstNameStartingWith(firstName);
	}

	@Override
	@Transactional
	public User updateUser(User user, long id) {
		// check if user with given ID is existing in db
		User existingUser = getUserById(id);
		existingUser.setFirstName(user.getFirstName());
		existingUser.setLastName(user.getLastName());
		existingUser.setEmail(user.getEmail());
		existingUser.setPhoneNumber(user.getPhoneNumber());
		// save existingUser to db
		userRepository.save(existingUser);
		return existingUser;
	}

	@Override
	public void deleteUser(long id) {
		// check if user with given ID is existing in db
		User existingUser = getUserById(id);
		userRepository.delete(existingUser);
	}

	@Override
	@Transactional
	public User addQuoteToUser(long userId, Quote quote) {
		User user = getUserById(userId);
		List<Quote> userQuotes = user.getQuotes();
		userQuotes.add(quote);
		userRepository.save(user);
		return user;
	}

	@Override
	@Transactional
	public Quote deleteQuoteFromUser(long userId, int quoteId) {
		User user = getUserById(userId);
		Quote quote = quoteService.getQuoteById(quoteId);
		user.deleteQuote(quote);
		return quote;
	}
}
