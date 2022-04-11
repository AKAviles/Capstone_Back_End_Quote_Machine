package com.anthonyaviles.QuoteMachine.ServiceTests;

import com.anthonyaviles.QuoteMachine.model.Quote;
import com.anthonyaviles.QuoteMachine.repository.QuoteRepository;
import com.anthonyaviles.QuoteMachine.service.impl.QuoteServiceImpl;
import org.assertj.core.api.Assertions;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.ActiveProfiles;

import java.util.Optional;

import static org.mockito.Mockito.when;

@ActiveProfiles("test")
public class QuoteServiceTests {

	@InjectMocks
	QuoteServiceImpl quoteService;

	@Mock
	private QuoteRepository quoteRepository;

	private Session session;
	private Transaction transaction;
	private SessionFactory factory;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);
		factory = new Configuration().configure().buildSessionFactory();
		session = factory.openSession();
		transaction = session.beginTransaction();

		//Truncate Tables
		session.createSQLQuery("SET FOREIGN_KEY_CHECKS = 0").executeUpdate();
		session.createSQLQuery("truncate table users_quotes").executeUpdate();
		session.createSQLQuery("truncate table quotes");
		session.createSQLQuery("SET FOREIGN_KEY_CHECKS = 1").executeUpdate();

		//Populate Quotes
		Quote quote1 = new Quote();
		quote1.setSessions(23);
		quote1.setCost(2000.00);

		Quote quote2 = new Quote();
		quote2.setSessions(15);
		quote2.setCost(1650.00);

		Quote quote3 = new Quote();
		quote3.setSessions(18);
		quote3.setCost(2100.00);

		Quote quote4 = new Quote();
		quote4.setSessions(5);
		quote4.setCost(550.00);

		Quote quote5 = new Quote();
		quote5.setSessions(12);
		quote5.setCost(1350.00);

		Quote quote6 = new Quote();
		quote6.setSessions(8);
		quote6.setCost(990.00);

		session.save(quote1);
		session.save(quote2);
		session.save(quote3);
		session.save(quote4);
		session.save(quote5);
		session.save(quote6);


		transaction.commit();
		session.close();
		factory.close();
	}

	@Test
	void getQuoteById_should_return_quote() {
		Quote expectedQuote = new Quote();
		expectedQuote.setQid(1);
		expectedQuote.setSessions(23);
		expectedQuote.setCost(2000.00);

		when(quoteRepository.findById(1)).thenReturn(Optional.of(expectedQuote));
		Quote actualQuote = quoteService.getQuoteById(expectedQuote.getQid());
		Assertions.assertThat(actualQuote).isEqualTo(expectedQuote);
	}

}
