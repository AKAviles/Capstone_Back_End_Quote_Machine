package com.anthonyaviles.QuoteMachine.repository;

import com.anthonyaviles.QuoteMachine.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Integer> {
}
