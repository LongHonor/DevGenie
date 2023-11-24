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
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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


        RestTemplate restTemplate = new RestTemplate();
        //LLM 서버 url
        String url = "https://f17c-34-87-120-181.ngrok-free.app/알고리즘은 일련의 작업을 수행하기 위한 명확한 지침 또는 규칙의 집합으로, 주어진 문제를 해결하는 데 사용됩니다. 예를 들어, 검색, 정렬, 데이터 압축 등 다양한 작업을 수행하는 데에 사용됩니다.이 답안을 기준으로 알고리즘은 컴퓨터과학이야 라는말을 피드백해줘";
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, null, String.class);
        String feedback = response.getBody();
        System.out.println(feedback);

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
