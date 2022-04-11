package com.anthonyaviles.QuoteMachine.controller;

import com.anthonyaviles.QuoteMachine.model.Answer;
import com.anthonyaviles.QuoteMachine.model.Question;
import com.anthonyaviles.QuoteMachine.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

	private QuestionService questionService;

	public QuestionController(QuestionService questionService) {
		super();
		this.questionService = questionService;
	}

	@PostMapping
	public ResponseEntity<Question> saveQuestion(@RequestBody Question question) {
		return new ResponseEntity<Question>(questionService.saveQuestion(question), HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Question>> getAllQuestions() {
		List<Question> questions = questionService.getAllQuestions();
		return new ResponseEntity<>(questions, HttpStatus.OK);
	}

	@GetMapping("{id}")
	public ResponseEntity<Question> getQuestionById(@PathVariable("id") int id) {
		Question question = questionService.getQuestionById(id);
		return new ResponseEntity<>(question, HttpStatus.OK);
	}

	//Customer query to get by question
	@GetMapping("/")
	public ResponseEntity<Question> getQuestionByQuestion(@RequestParam(value="question") String question) {
		return new ResponseEntity<>(questionService.getQuestionByQuestion(question), HttpStatus.OK);
	}

	@PutMapping("{id}")
	public ResponseEntity<Question> updateQuestion(@PathVariable("id") int id, @RequestBody Question question) {
		Question newQuestion = questionService.updateQuestion(question, id);
		return new ResponseEntity<>(newQuestion, HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteQuestion(@PathVariable("id") int id) {
		questionService.deleteQuestion(id);
		return new ResponseEntity<>("Question Deleted Successfully.", HttpStatus.OK);
	}

	@GetMapping("/{questionId}/answers")
	public ResponseEntity<List<Answer>> getAnswersForQuestion(@PathVariable int questionId) {
		Question question = questionService.getQuestionById(questionId);
		List<Answer> answers = question.getAnswers();
		return new ResponseEntity<>(answers, HttpStatus.OK);
	}

	@PostMapping("/{questionId}/answers")
	public ResponseEntity<Question> addAnswerToQuestion(@PathVariable int questionId, @RequestBody Answer answer) {
		Question question = questionService.addAnswerToQuestion(questionId, answer);
		return new ResponseEntity<>(question, HttpStatus.OK);
	}

	@DeleteMapping("/{questionId}/{answerId}/remove")
	public ResponseEntity<Answer> deleteAnswerFromQuestion(@PathVariable int questionId, @PathVariable int answerId) {
		Answer answer = questionService.deleteAnswerFromQuestion(questionId, answerId);
		return new ResponseEntity<>(answer, HttpStatus.OK);
	}
}
