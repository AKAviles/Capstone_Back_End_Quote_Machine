package com.anthonyaviles.QuoteMachine.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class LoginController {

	@GetMapping("/api/hello")
	public String hello() {
		return "Hello, the time at the server is now " + new Date() + "\n";
	}
}