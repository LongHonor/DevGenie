package com.devgenie.service;

import com.devgenie.domain.MemberQuiz;
import com.devgenie.domain.Quiz;
import com.devgenie.domain.Tag;
import com.devgenie.repository.MemberQuizRepository;
import com.devgenie.repository.MemberRepository;
import com.devgenie.repository.QuizRepository;
import com.devgenie.response.FeedbackResponse;
import com.devgenie.response.SolveQuizResponseDto;
import com.devgenie.response.QuizResponseDto;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class QuizService {

    private final MemberRepository memberRepository;
    private final MemberQuizRepository memberQuizRepository;
    private final QuizRepository quizRepository;

    //문제 조회
    public Page<QuizResponseDto> findAllQuizByTag(List<String> tags, Pageable pageable){

        //페이징 정보 설정
        PageRequest pageRequest = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(),
                Sort.by(Sort.Direction.DESC, "id"));

        //전체 문제 조회
        if(tags.contains("ALL")){
            return quizRepository.findAll(pageRequest)
                    .map(QuizResponseDto::of);
        }

        //자료형을 Tag로 변환
        List<Tag> tagList = tags.stream()
                                .map(Tag::valueOf)
                                .collect(Collectors.toList());
        //태그에 해당하는 문제 조회
        return quizRepository.findPageByTagIn(tagList,pageRequest)
                .map(QuizResponseDto::of);
    }

    public List<QuizResponseDto> findRandomQuiz(int count){
        long qty = quizRepository.count();
        List<Quiz> randomQuizList = new ArrayList<>();

        while (randomQuizList.size() < count) {
            int idx = (int)(Math.random() * qty);
            Page<Quiz> quizPage = quizRepository.findAll(PageRequest.of(idx, 1));
            if (quizPage.hasContent()) {
                Quiz quiz = quizPage.getContent().get(0);
                if (!randomQuizList.contains(quiz)) {
                    randomQuizList.add(quiz);
                }
            }
        }

        return randomQuizList.stream()
                .map(QuizResponseDto::of)
                .collect(Collectors.toList());
    }

    //문제 풀이
    public SolveQuizResponseDto solveQuiz(Long quizId, String submissionAnswer){
        Quiz quiz = quizRepository.findById(quizId).orElseThrow();

        URI uri = UriComponentsBuilder
                .fromUriString("https://7e16-34-125-7-116.ngrok-free.app/json_receive")
                .encode()
                .build()
                .toUri();

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> map = new HashMap<>();
        map.put("quizAnswer", quiz.getQuizAnswer());
        map.put("submissionAnswer", submissionAnswer);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(map, headers);

        ResponseEntity<FeedbackResponse> response = restTemplate.postForEntity(uri, entity, FeedbackResponse.class);

        String feedback = response.getBody().getFeedback();
        int point = response.getBody().getPoint();

        MemberQuiz memberQuiz;

        //해당문제가 멤버퀴즈 테이블에 존재할 경우
        if(memberQuizRepository.existsByQuiz(quiz)){
            memberQuiz = memberQuizRepository.findByQuiz(quiz).orElseThrow();//todo 예외처리 필요
            memberQuiz.updateMemberQuiz(submissionAnswer, feedback, point);
        }
        else{
            //새로운 멤버퀴즈 생성
            memberQuiz = MemberQuiz.builder()
                    .quiz(quiz)
                    .submissionAnswer(submissionAnswer)
                    .feedback(feedback)
                    .point(point)
                    .build();
            memberQuizRepository.save(memberQuiz);
        }

        return SolveQuizResponseDto.of(quiz,memberQuiz);
    }


}
