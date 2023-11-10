package com.devgenie.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_id")
    private Long id;

    @Column(length = 50000)
    private String quizContent;

    @Column(length = 50000)
    private String quizAnswer;

    @Enumerated(EnumType.STRING)
    private Tag tag;

    @Builder
    public Quiz(String quizContent, String quizAnswer, Tag tag) {
        this.quizContent = quizContent;
        this.quizAnswer = quizAnswer;
        this.tag = tag;
    }
}
