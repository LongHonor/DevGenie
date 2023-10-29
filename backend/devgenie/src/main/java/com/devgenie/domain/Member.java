package com.devgenie.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    private String nickName;
    private String loginId;
    private String password;
    

    @Builder
    public Member(String nickName, String loginId, String password) {
        this.nickName = nickName;
        this.loginId = loginId;
        this.password = password;
    }
}