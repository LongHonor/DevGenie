package com.devgenie.repository;

import com.devgenie.domain.Quiz;
import com.devgenie.domain.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface QuizRepository extends JpaRepository<Quiz,Long> {

    Page<Quiz> findAll(Pageable pageable);

    //태그를 통해 퀴즈 검색
    Page<Quiz> findPageByTagIn(List<Tag> tagList, Pageable pageable);

}
