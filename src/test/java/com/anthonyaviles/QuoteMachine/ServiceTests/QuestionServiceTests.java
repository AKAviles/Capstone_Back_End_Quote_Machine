package com.anthonyaviles.QuoteMachine.ServiceTests;

import com.anthonyaviles.QuoteMachine.model.Question;
import com.anthonyaviles.QuoteMachine.repository.QuestionRepository;
import com.anthonyaviles.QuoteMachine.service.impl.QuestionServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

public class QuestionServiceTests {

	@InjectMocks
	QuestionServiceImpl questionService;

	@Mock
	private QuestionRepository questionRepository;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void getQuestionByQuestion_should_return_correct_question_given_valid_question() {
		Question expectedQuestion = new Question();
		expectedQuestion.setQuestionId(6);
		expectedQuestion.setQuestion("Amount of Ink");

		when(questionRepository.findByQuestion(anyString())).thenReturn(expectedQuestion);
		Question actualQuestion = questionService.getQuestionByQuestion("Amount of Ink");

		Assertions.assertThat(actualQuestion).isEqualTo(expectedQuestion);
	}
}
