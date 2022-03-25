package com.anthonyaviles.QuoteMachine.model;


import com.anthonyaviles.QuoteMachine.model.dto.QuoteDto;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="quotes")
public class Quote {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "quote_id", nullable = false)
	private int qid;

	@Column(name = "session_count", nullable = false)
	private int sessions;

	@Column(name = "total_cost", nullable = false)
	private double cost;

	@ManyToOne
	private User user;

	public static Quote from(QuoteDto quoteDto) {
		Quote quote = new Quote();
		quote.setSessions(quoteDto.getSessions());
		quote.setCost(quoteDto.getCost());
		return quote;
	}

}
