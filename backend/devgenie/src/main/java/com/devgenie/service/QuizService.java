package com.devgenie.service;

import com.devgenie.domain.MemberQuiz;
import com.devgenie.domain.Quiz;
import com.devgenie.domain.Tag;
import com.devgenie.repository.MemberQuizRepository;
import com.devgenie.repository.MemberRepository;
import com.devgenie.repository.QuizRepository;
import com.devgenie.response.SolveQuizResponseDto;
import com.devgenie.response.QuizResponseDto;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class QuizService {

    private final MemberRepository memberRepository;
    private final MemberQuizRepository memberQuizRepository;
    private final QuizRepository quizRepository;

    //문제 조회
    public Page<QuizResponseDto> findAllQuizByTag(String tag, Pageable pageable){

        //페이징 정보 설정
        PageRequest pageRequest = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(),
                Sort.by(Sort.Direction.DESC, "Id"));

        //모든 문제 조회
        if(tag.equals("ALL")){
            return quizRepository.findAll(pageRequest)
                    .map(QuizResponseDto::of);
        }
        //태그에 해당하는 문제 조회
        return quizRepository.findPageByTag(Tag.valueOf(tag),pageRequest)
                .map(QuizResponseDto::of);
    }

    //문제 풀이
    public SolveQuizResponseDto solveQuiz(Long quizId, String submissionAnswer){
        Quiz quiz = quizRepository.findById(quizId).orElseThrow();
        //임시 피드백(LLM서버가 완성되면 변경 예정)
        String feedback = "LLM를 통해 만들어진 피드백";
        MemberQuiz memberQuiz;

        //해당문제가 멤버퀴즈 테이블에 존재할 경우
        if(memberQuizRepository.existsByQuiz(quiz)){
            memberQuiz = memberQuizRepository.findByQuiz(quiz).orElseThrow();//todo 예외처리 필요
            memberQuiz.updateMemberQuiz(submissionAnswer, feedback);
        }
        else{
            //새로운 멤버퀴즈 생성
            memberQuiz = MemberQuiz.builder()
                    .quiz(quiz)
                    .submissionAnswer(submissionAnswer)
                    .feedback(feedback)
                    .build();
            memberQuizRepository.save(memberQuiz);
        }

        return SolveQuizResponseDto.of(quiz,memberQuiz);
    }
}
