package com.anthonyaviles.QuoteMachine.controller;

import com.anthonyaviles.QuoteMachine.model.Answer;
import com.anthonyaviles.QuoteMachine.model.Question;
import com.anthonyaviles.QuoteMachine.service.QuestionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

	private QuestionService questionService;

	Logger logger = LoggerFactory.getLogger(QuestionController.class);

	public QuestionController(QuestionService questionService) {
		super();
		this.questionService = questionService;
	}

	@PostMapping
	public ResponseEntity<Question> saveQuestion(@RequestBody Question question) {
		logger.info("Saving question to database: " + question);
		return new ResponseEntity<Question>(questionService.saveQuestion(question), HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Question>> getAllQuestions() {
		logger.info("Getting list of question...");
		List<Question> questions = questionService.getAllQuestions();
		return new ResponseEntity<>(questions, HttpStatus.OK);
	}

	@GetMapping("{id}")
	public ResponseEntity<Question> getQuestionById(@PathVariable("id") int id) {
		logger.info("Getting question by id: " + id);
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
		logger.info("Updating question information");
		Question newQuestion = questionService.updateQuestion(question, id);
		return new ResponseEntity<>(newQuestion, HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteQuestion(@PathVariable("id") int id) {
		logger.info("Deleting question with id: " + id);
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
