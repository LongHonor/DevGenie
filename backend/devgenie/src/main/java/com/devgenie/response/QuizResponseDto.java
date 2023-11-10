package com.devgenie.response;

import com.devgenie.domain.Quiz;
import lombok.Builder;
import lombok.Data;

@Data
public class QuizResponseDto {
    private Long quizId;
    private String quizContent;
    private String quizAnswer;
    private String tag;

    @Builder
    public QuizResponseDto(Long quizId, String quizContent, String quizAnswer, String tag) {
        this.quizId = quizId;
        this.quizContent = quizContent;
        this.quizAnswer = quizAnswer;
        this.tag = tag;
    }

    public static QuizResponseDto of(Quiz quiz){
        return QuizResponseDto.builder()
                .quizId(quiz.getId())
                .quizContent(quiz.getQuizContent())
                .quizAnswer(quiz.getQuizAnswer())
                .tag(quiz.getTag().name())
                .build();
    }
}
