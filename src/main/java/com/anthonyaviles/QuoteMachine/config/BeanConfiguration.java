package com.anthonyaviles.QuoteMachine.config;

import com.anthonyaviles.QuoteMachine.repository.AnswerRepository;
import com.anthonyaviles.QuoteMachine.service.AnswerService;
import com.anthonyaviles.QuoteMachine.service.impl.AnswerServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {

	@Bean
	public AnswerService answerService(AnswerRepository answerRepository) {
		return new AnswerServiceImpl(answerRepository);
	}
}
