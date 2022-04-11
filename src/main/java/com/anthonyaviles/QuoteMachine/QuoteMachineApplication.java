package com.anthonyaviles.QuoteMachine;

import com.anthonyaviles.QuoteMachine.config.BeanConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({BeanConfiguration.class})
public class QuoteMachineApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuoteMachineApplication.class, args);



	}

}
