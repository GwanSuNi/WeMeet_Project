package com.example.WeMeet.jwt.controller;

import com.example.WeMeet.member.dto.MemberDTO;
import com.example.WeMeet.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
@Secured("ROLE_ADMIN")
@RequestMapping("/admin")
public class AdminController {
    private final MemberService memberService;

    @GetMapping("/")
    public String admin() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return "Admin Controller: " + name;
    }

    @GetMapping("/member/{userEmail}")
    public ResponseEntity<MemberDTO> memberSearch(@PathVariable("userEmail") String userEmail) {
        MemberDTO memberDTO = memberService.getMemberDetail(userEmail);
        if (memberDTO == null) {
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.ok(memberDTO);
    }

}

