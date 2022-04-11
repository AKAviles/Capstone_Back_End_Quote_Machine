package com.anthonyaviles.QuoteMachine.controller;

import com.anthonyaviles.QuoteMachine.model.Quote;
import com.anthonyaviles.QuoteMachine.model.User;
import com.anthonyaviles.QuoteMachine.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

	//build create user REST API

	@PostMapping
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
	}

	//build getAll users REST API
	@GetMapping
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> users = userService.getAllUsers();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	//build getUserById REST API
	//{id} adds path variable /api/users/{id}
	//use pathvariable in params
	@GetMapping("{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
		return new ResponseEntity<>( userService.getUserById(id), HttpStatus.OK);
	}

	//Custom query to get by email
	@GetMapping("/")
	public ResponseEntity<User> getUserByEmail(@RequestParam(value="email") String email) {
		return new ResponseEntity<>(userService.getUserByEmail(email), HttpStatus.OK);
	}

	//Customer query to get by firstName
	@GetMapping("/name")
	public ResponseEntity<List<User>> getUserByFirstName(@RequestParam(value="firstName") String firstName) {
		return new ResponseEntity<>(userService.getUserByFirstName(firstName), HttpStatus.OK);
	}

	//build updateUser REST API
	//{id} adds path variable /api/users/{id}
	//@RequestBody  maps the HttpRequest body to a transfer or domain object, enabling automatic deserialization of the inbound HttpRequest body onto a Java object
	@PutMapping("{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
		User user1 = userService.updateUser(user, id);
		return new ResponseEntity<>(user1, HttpStatus.OK);
	}

	//build deleteUser REST API
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
		// delete user from db
		userService.deleteUser(id);
		return new ResponseEntity<>("User deleted Successfully.", HttpStatus.OK);
	}

	//build get quotes by user
	@GetMapping("/{userId}/quotes")
	public ResponseEntity<List<Quote>> getQuotesForUser(@PathVariable long userId) {
		User user = userService.getUserById(userId);
		List<Quote> quotes = user.getQuotes();
		return new ResponseEntity<>(quotes, HttpStatus.OK);
	}

	//build add quote to user REST API
	@PostMapping("/{userId}/quotes")
	public ResponseEntity<User> addQuoteToUser(@PathVariable long userId, @RequestBody Quote quote) {
		User user = userService.addQuoteToUser(userId, quote);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	//build deleteQuoteFromUser REST API
	@DeleteMapping("/{userId}/{quoteId}/remove")
	public ResponseEntity<Quote> deleteQuoteFromUser(@PathVariable long userId, @PathVariable int quoteId) {
		Quote quote = userService.deleteQuoteFromUser(userId, quoteId);
		return new ResponseEntity<>(quote, HttpStatus.OK);
	}
}
