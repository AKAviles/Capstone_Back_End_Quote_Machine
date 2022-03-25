package com.anthonyaviles.QuoteMachine.service;

import com.anthonyaviles.QuoteMachine.model.Quote;

import java.util.List;

public interface QuoteService {
	Quote saveQuote(Quote quote);
	List<Quote> getAllQuotes();
	Quote getQuoteById(int id);
	void deleteQuote(int id);
}
