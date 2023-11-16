package com.devgenie.repository;

import com.devgenie.domain.MemberQuiz;
import com.devgenie.domain.Quiz;
import com.devgenie.domain.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberQuizRepository extends JpaRepository<MemberQuiz,Long> {

    boolean existsByQuiz(Quiz quiz);
    Optional<MemberQuiz> findByQuiz(Quiz quiz);
    Page<MemberQuiz> findAll(Pageable pageable);
}
