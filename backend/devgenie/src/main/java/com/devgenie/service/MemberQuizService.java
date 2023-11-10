package com.devgenie.service;

import com.devgenie.domain.Tag;
import com.devgenie.repository.MemberQuizRepository;
import com.devgenie.repository.MemberRepository;
import com.devgenie.repository.QuizRepository;
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
public class MemberQuizService {

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
}
