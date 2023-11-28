package com.devgenie.controller;


import com.devgenie.request.SubmissionAnswerRequestDto;
import com.devgenie.response.QuizResponseDto;
import com.devgenie.response.SolveQuizResponseDto;
import com.devgenie.service.QuizService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class QuizController {

    public final QuizService quizService;

    //문제 조회
    @GetMapping("/quiz")
    public Page<QuizResponseDto> findAllQuizByTag(@RequestParam(name = "tag", defaultValue = "ALL") List<String> tags,
                                                  @PageableDefault(size = 10, sort = "id",  direction = Sort.Direction.DESC) Pageable pageable){

        return quizService.findAllQuizByTag(tags, pageable);
    }

    @GetMapping("/quiz/random")
    public List<QuizResponseDto> findRandomQuiz(@RequestParam(name = "count", defaultValue = "5") int count){

        return quizService.findRandomQuiz(count);
    }

    //문제 풀기
    @PostMapping("/quiz/solve/{quiz_id}")
    public SolveQuizResponseDto solveQuiz(@RequestBody SubmissionAnswerRequestDto submissionAnswerDto, @PathVariable("quiz_id") Long quiz_id){
        return quizService.solveQuiz(quiz_id, submissionAnswerDto.getSubmissionAnswer());
    }
}
