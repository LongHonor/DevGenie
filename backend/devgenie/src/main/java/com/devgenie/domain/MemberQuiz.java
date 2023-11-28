package com.devgenie.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class MemberQuiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "memberquiz_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    @Column(length = 5000)
    private String submissionAnswer; //사용자가 제출한 답변

    @Column(length = 5000)
    private String feedback; //LLM 모델이 생성한 피드백

    private LocalDateTime solvedDateTime; //문제를 해결한 날짜 및 시간

    @Enumerated(EnumType.STRING)
    private OblivionStatus oblivionStatus; //망각 상태 등급

    @Builder
    public MemberQuiz(Quiz quiz, Member member, String submissionAnswer, String feedback) {
        this.quiz = quiz;
        this.member = member;
        this.submissionAnswer = submissionAnswer;
        this.feedback = feedback;
        this.solvedDateTime = LocalDateTime.now();
        this.oblivionStatus = OblivionStatus.OBLIVION_STATUS_1;
    }

    //업데이트 메소드(문제를 새로 풀 때 호출)
    public void updateMemberQuiz(String submissionAnswer, String feedback){
        this.submissionAnswer = submissionAnswer;
        this.feedback = feedback;
        this.solvedDateTime = LocalDateTime.now();
        //현재 망각 상태에 따라 상태변경
        this.oblivionStatus = switch(this.oblivionStatus) {
            case OBLIVION_STATUS_0 -> OblivionStatus.OBLIVION_STATUS_1;
            case OBLIVION_STATUS_1 -> OblivionStatus.OBLIVION_STATUS_2;
            case OBLIVION_STATUS_2 -> OblivionStatus.OBLIVION_STATUS_3;
            case OBLIVION_STATUS_3 -> OblivionStatus.OBLIVION_STATUS_4;
            case OBLIVION_STATUS_4,OBLIVION_STATUS_5 -> OblivionStatus.OBLIVION_STATUS_5;
            default -> throw new EnumConstantNotPresentException(OblivionStatus.class,"존재하지 않는 망각상태입니다");
        };
    }

    public void setOblivionStatusToZero(){
        this.oblivionStatus = OblivionStatus.OBLIVION_STATUS_0;
    }

}
