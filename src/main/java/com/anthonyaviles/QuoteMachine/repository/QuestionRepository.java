package com.anthonyaviles.QuoteMachine.repository;

import com.anthonyaviles.QuoteMachine.model.Question;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
	public Question findByQuestion(String question);
	Slice<Question> findQuestionByAnswersIsContaining(String string);
}
