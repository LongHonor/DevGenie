package com.devgenie.response;

import com.devgenie.domain.MemberQuiz;
import com.devgenie.domain.OblivionStatus;
import com.devgenie.domain.Quiz;
import lombok.Builder;
import lombok.Data;

import javax.swing.text.SimpleAttributeSet;
import java.time.LocalDateTime;

@Data
public class SolveQuizResponseDto {
    //퀴즈 정보
    private Long quizId;
    private String quizContent;
    private String quizAnswer;
    private String tag;
    //멤버 퀴즈 정보
    private Long memberQuizId;
    private String submissionAnswer;
    private String feedback;
    private LocalDateTime solvedDateTime;
    private OblivionStatus oblivionStatus;

    @Builder
    public SolveQuizResponseDto(Long quizId, String quizContent, String quizAnswer, String tag, Long memberQuizId,
                                String submissionAnswer, String feedback, LocalDateTime localDateTime, OblivionStatus oblivionStatus) {
        this.quizId = quizId;
        this.quizContent = quizContent;
        this.quizAnswer = quizAnswer;
        this.tag = tag;

        this.memberQuizId = memberQuizId;
        this.submissionAnswer = submissionAnswer;
        this.feedback = feedback;
        this.solvedDateTime = localDateTime;
        this.oblivionStatus = oblivionStatus;
    }

    public static SolveQuizResponseDto of(Quiz quiz, MemberQuiz memberQuiz){
        return SolveQuizResponseDto.builder()
                .quizId(quiz.getId())
                .quizContent(quiz.getQuizContent())
                .quizAnswer(quiz.getQuizAnswer())
                .tag(quiz.getTag().name())
                .memberQuizId(memberQuiz.getId())
                .submissionAnswer(memberQuiz.getSubmissionAnswer())
                .feedback(memberQuiz.getFeedback())
                .localDateTime(memberQuiz.getSolvedDateTime())
                .oblivionStatus(memberQuiz.getOblivionStatus())
                .build();
    }
}
