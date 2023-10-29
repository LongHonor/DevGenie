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

    private String submissionAnswer;
    private LocalDateTime solvedDateTime;
    private OblivionStatus oblivionStatus;

    @Builder
    public MemberQuiz(String submissionAnswer, LocalDateTime solvedDateTime, OblivionStatus oblivionStatus) {
        this.submissionAnswer = submissionAnswer;
        this.solvedDateTime = solvedDateTime;
        this.oblivionStatus = oblivionStatus;
    }
}
