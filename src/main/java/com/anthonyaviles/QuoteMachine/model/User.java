package com.anthonyaviles.QuoteMachine.model;

import com.anthonyaviles.QuoteMachine.model.dto.UserDto;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "first_name", nullable = false)
	private String firstName;

	@Column(name = "last_name", nullable = false)
	private String lastName;

	@Column(name = "email", nullable = false, unique = true)
	private String email;

	@Column(name = "phone_number", nullable = false)
	private String phoneNumber;

	@Column(name = "password", nullable = false)
	private String password;

	@OneToMany( cascade = CascadeType.ALL)
	List<Quote> quotes = new ArrayList<>();

	public void addQuote(Quote quote) {
		quotes.add(quote);
	}

	public void deleteQuote(Quote quote) {
		quotes.remove(quote);
	}

	public static User from(UserDto userDto) {
		User user = new User();
		user.setFirstName(userDto.getFirstName());
		user.setLastName(userDto.getLastName());
		user.setEmail(userDto.getEmail());
		user.setPhoneNumber(userDto.getPhoneNumber());
		return user;
	}
}
