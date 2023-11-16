package com.devgenie.controller;

import com.devgenie.response.MemberQuizResponseDto;
import com.devgenie.response.QuizResponseDto;
import com.devgenie.service.MemberQuizService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MemberQuizController {

    private final MemberQuizService memberQuizService;

    @GetMapping("/myquiz")
    public Page<MemberQuizResponseDto> findAllMemberQuizByTag(@RequestParam(name = "tag", defaultValue = "ALL") String tag,
                                                              @PageableDefault(size = 10, sort = "id",  direction = Sort.Direction.DESC) Pageable pageable){

        return memberQuizService.findAllMemberQuizByTag(tag, pageable);
    }
}
