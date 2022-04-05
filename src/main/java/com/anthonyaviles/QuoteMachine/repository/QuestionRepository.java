package com.anthonyaviles.QuoteMachine.repository;

import com.anthonyaviles.QuoteMachine.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
}
