package com.devgenie.repository;

import com.devgenie.domain.MemberQuiz;
import com.devgenie.domain.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberQuizRepository extends JpaRepository<MemberQuiz,Long> {
    Optional<MemberQuiz> findByQuiz(Quiz quiz);
}
