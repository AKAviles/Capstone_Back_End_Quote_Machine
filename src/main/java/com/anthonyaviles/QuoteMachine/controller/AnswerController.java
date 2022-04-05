package com.anthonyaviles.QuoteMachine.controller;


import com.anthonyaviles.QuoteMachine.model.Answer;
import com.anthonyaviles.QuoteMachine.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answers")
public class AnswerController {

	private AnswerService answerService;

	public AnswerController(AnswerService answerService) {
		this.answerService = answerService;
	}

	@PostMapping
	public ResponseEntity<Answer> saveAnswer(@RequestBody Answer answer) {
		return new ResponseEntity<>(answerService.saveAnswer(answer), HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Answer>> getAllAnswers() {
		List<Answer> answers = answerService.getAllAnswers();
		return new ResponseEntity<>(answers, HttpStatus.OK);
	}

	@GetMapping("{id}")
	public ResponseEntity<Answer> getAnswerById(@PathVariable("id") int id) {
		return new ResponseEntity<>(answerService.getAnswerById(id), HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteAnswer(@PathVariable("id") int id) {
		answerService.deleteAnswer(id);
		return new ResponseEntity<>("Answer Deleted Successfully.", HttpStatus.OK);
	}
}
