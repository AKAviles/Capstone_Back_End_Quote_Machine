package com.anthonyaviles.QuoteMachine.model.dto;

import com.anthonyaviles.QuoteMachine.model.Quote;
import lombok.Data;

@Data
public class QuoteDto {
	private int qid;
	private int sessions;
	private double cost;

	public static QuoteDto from(Quote quote) {
		QuoteDto quoteDto = new QuoteDto();
		quoteDto.setQid(quote.getQid());
		quoteDto.setSessions(quote.getSessions());
		quoteDto.setCost(quote.getCost());
		return quoteDto;
	}
}
