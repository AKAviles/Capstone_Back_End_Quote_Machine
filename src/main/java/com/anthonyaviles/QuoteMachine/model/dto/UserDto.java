package com.anthonyaviles.QuoteMachine.model.dto;

import com.anthonyaviles.QuoteMachine.model.Quote;
import com.anthonyaviles.QuoteMachine.model.User;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class UserDto {
	private long id;
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNumber;
	private List<Quote> quotes = new ArrayList<>();

	public static UserDto from(User user) {
		UserDto userDto = new UserDto();
		userDto.setId(user.getId());
		userDto.setFirstName(user.getFirstName());
		userDto.setLastName(user.getLastName());
		userDto.setEmail(user.getEmail());
		userDto.setPhoneNumber(user.getPhoneNumber());
		userDto.setQuotes(user.getQuotes());
		return userDto;
	}

}



