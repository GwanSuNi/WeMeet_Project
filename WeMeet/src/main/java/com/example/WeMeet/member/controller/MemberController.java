package com.example.WeMeet.member.controller;

import com.example.WeMeet.member.domain.dto.MemberSearchDTO;
import com.example.WeMeet.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/")
    public ResponseEntity<String> getUsername() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        if (name == null || name.equals("anonymousUser")) {
            return ResponseEntity.status(403).body("로그인이 필요합니다.");
        }
        return ResponseEntity.ok(name);
    }

    // 본인의 정보 조회
    @GetMapping("/myInfo")
    public ResponseEntity<MemberSearchDTO> myInfo() {
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        MemberSearchDTO result = memberService.getMemberSearch(userEmail);
        if (result == null) {
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.ok(result);
    }

}
