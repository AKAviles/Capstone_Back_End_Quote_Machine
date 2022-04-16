package com.anthonyaviles.QuoteMachine.repository;

import com.anthonyaviles.QuoteMachine.model.ERole;
import com.anthonyaviles.QuoteMachine.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository {
    Optional<Role> findByName(ERole name);
}
