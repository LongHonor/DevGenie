package com.devgenie.response;

import com.devgenie.domain.MemberQuiz;
import com.devgenie.domain.OblivionStatus;
import com.devgenie.domain.Quiz;
import com.devgenie.domain.Tag;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MemberQuizResponseDto {

    //퀴즈 부분
    private Long quizId;
    private String quizContent;
    private String quizAnswer;
    private Tag tag;

    //멤버 퀴즈 부분
    private Long memberQuizId;
    private String submissionAnswer;
    private String feedback;
    private Integer point;
    private LocalDateTime solvedDateTime;
    private OblivionStatus oblivionStatus;

    @Builder
    public MemberQuizResponseDto(Long quizId, String quizContent, String quizAnswer, Tag tag, Long memberQuizId,
                                String submissionAnswer, String feedback, LocalDateTime solvedDateTime, OblivionStatus oblivionStatus, Integer point) {
        this.quizId = quizId;
        this.quizContent = quizContent;
        this.quizAnswer = quizAnswer;
        this.tag = tag;

        this.memberQuizId = memberQuizId;
        this.submissionAnswer = submissionAnswer;
        this.feedback = feedback;
        this.point = point;
        this.solvedDateTime = solvedDateTime;
        this.oblivionStatus = oblivionStatus;
    }

    public static MemberQuizResponseDto of(MemberQuiz memberQuiz){
        return MemberQuizResponseDto.builder()
                .quizId(memberQuiz.getQuiz().getId())
                .quizContent(memberQuiz.getQuiz().getQuizContent())
                .quizAnswer(memberQuiz.getQuiz().getQuizAnswer())
                .tag(memberQuiz.getQuiz().getTag())

                .memberQuizId(memberQuiz.getId())
                .submissionAnswer(memberQuiz.getSubmissionAnswer())
                .feedback(memberQuiz.getFeedback())
                .solvedDateTime(memberQuiz.getSolvedDateTime())
                .oblivionStatus(memberQuiz.getOblivionStatus())
                .build();
    }
}
