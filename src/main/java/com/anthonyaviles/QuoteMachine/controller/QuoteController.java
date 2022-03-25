package com.anthonyaviles.QuoteMachine.controller;


import com.anthonyaviles.QuoteMachine.model.Quote;
import com.anthonyaviles.QuoteMachine.model.dto.QuoteDto;
import com.anthonyaviles.QuoteMachine.service.QuoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/quotes")
public class QuoteController {

	private QuoteService quoteService;

	public QuoteController(QuoteService quoteService) {
		super();
		this.quoteService = quoteService;
	}

	//build saveQuote REST API
	// TODO: Add functionality to link to userId
	@PostMapping
	public ResponseEntity<QuoteDto> saveQuote(@RequestBody QuoteDto quoteDto) {
		Quote quote = quoteService.saveQuote(Quote.from(quoteDto));
		return new ResponseEntity<>(QuoteDto.from(quote), HttpStatus.OK);
	}

	//build getAllQuotes REST API
	@GetMapping
	public ResponseEntity<List<QuoteDto>> getAllQuotes() {
		List<Quote> quotes = quoteService.getAllQuotes();
		List<QuoteDto> quotesDto = quotes.stream().map(QuoteDto::from).collect(Collectors.toList());
		return new ResponseEntity<>(quotesDto, HttpStatus.OK);
	}

	//build getQuoteById REST API
	@GetMapping("{id}")
	public ResponseEntity<Quote> getQuoteById(@PathVariable("id") int id) {
		return new ResponseEntity<>(quoteService.getQuoteById(id), HttpStatus.OK);
	}



	//build deleteQuote REST API
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteQuote(@PathVariable("id") int id) {
		//delete quote from db
		quoteService.deleteQuote(id);
		return new ResponseEntity<>("Quote deleted Successfully.", HttpStatus.OK);
	}
}
