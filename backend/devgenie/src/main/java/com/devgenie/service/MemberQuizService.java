package com.devgenie.service;

import com.devgenie.domain.MemberQuiz;
import com.devgenie.domain.Quiz;
import com.devgenie.domain.Tag;
import com.devgenie.repository.MemberQuizRepository;
import com.devgenie.repository.MemberRepository;
import com.devgenie.repository.QuizRepository;
import com.devgenie.response.MemberQuizResponseDto;
import com.devgenie.response.QuizResponseDto;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberQuizService {

    private final MemberRepository memberRepository;
    private final MemberQuizRepository memberQuizRepository;
    private final QuizRepository quizRepository;

    //문제 조회
    public Page<MemberQuizResponseDto> findAllMemberQuizByTag(String tag, Pageable pageable) {
        updateOblivionStatus();

        //페이징 정보 설정
        PageRequest pageRequest = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(),
                Sort.by(Sort.Direction.DESC, "Id"));

        return memberQuizRepository.findAll(pageRequest)
                .map(MemberQuizResponseDto::of);
    }

    // 1주일이 넘어가면 oblivion_status_0으로 바꾸는 메소드
    private void updateOblivionStatus() {
        List<MemberQuiz> memberQuizList = memberQuizRepository.findAll();

        memberQuizList.stream()
                .filter(this::isPastDue)
                .forEach(MemberQuiz::setOblivionStatusToZero);
    }

    private boolean isPastDue(MemberQuiz memberQuiz) {
        long daysBetween = ChronoUnit.DAYS.between(memberQuiz.getSolvedDateTime(), LocalDateTime.now());

        return switch (memberQuiz.getOblivionStatus()) {
            case OBLIVION_STATUS_1 -> daysBetween > 7;
            case OBLIVION_STATUS_2 -> daysBetween > 30;
            case OBLIVION_STATUS_3 -> daysBetween > 90;
            case OBLIVION_STATUS_4 -> daysBetween > 180;
            default -> false;
        };
    }
}
