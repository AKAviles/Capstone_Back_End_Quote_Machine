package com.anthonyaviles.QuoteMachine.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="answers")
public class Answer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "answer_id", nullable = false)
	private int answerId;

	@Column(name = "answer", nullable = false)
	private String answer;

	@Column(name = "answer_value")
	private double value;
}
