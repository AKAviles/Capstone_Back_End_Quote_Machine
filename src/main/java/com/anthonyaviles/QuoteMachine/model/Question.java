package com.anthonyaviles.QuoteMachine.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="questions")
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id", nullable=false)
	private int questionId;

	@Column(name = "questions",unique = true, nullable = false)
	private String question;

	@Column(name = "answer_list")
	@OneToMany(cascade = CascadeType.ALL)
	List<Answer> answers = new ArrayList<>();

	public void deleteAnswer(Answer answer) {
		answers.remove(answer);
	}

}
