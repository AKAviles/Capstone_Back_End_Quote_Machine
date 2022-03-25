package com.anthonyaviles.QuoteMachine.service.impl;

import com.anthonyaviles.QuoteMachine.exception.ResourceNotFoundException;
import com.anthonyaviles.QuoteMachine.model.Quote;
import com.anthonyaviles.QuoteMachine.repository.QuoteRepository;
import com.anthonyaviles.QuoteMachine.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuoteServiceImpl implements QuoteService {

	private QuoteRepository quoteRepository;

	@Autowired
	public QuoteServiceImpl(QuoteRepository quoteRepository) {
		super();
		this.quoteRepository = quoteRepository;
	}

	@Override
	// TODO: Add functionality to link to userId
	public Quote saveQuote(Quote quote) {
		return quoteRepository.save(quote);
	}


	@Override
	public List<Quote> getAllQuotes() {
		return quoteRepository.findAll();
	}

	@Override
	public Quote getQuoteById(int id) {
		return quoteRepository.findById(id).orElseThrow(() ->
				new ResourceNotFoundException("Quote", "Id", id));
	}

	@Override
	public void deleteQuote(int id) {
		//check if quote with given ID is existing in db
		Quote existingQuote = getQuoteById(id);
		quoteRepository.delete(existingQuote);
	}
}
