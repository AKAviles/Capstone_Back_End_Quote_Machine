package com.anthonyaviles.QuoteMachine.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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
	@OneToMany(cascade = CascadeType.ALL, fetch= FetchType.EAGER)
	List<Answer> answers = new ArrayList<>();

	public void deleteAnswer(Answer answer) {
		answers.remove(answer);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Question question1 = (Question) o;
		return questionId == question1.questionId && Objects.equals(question, question1.question);
	}

	@Override
	public int hashCode() {
		return Objects.hash(questionId, question);
	}
}
