package com.example.WeMeet.jwt.controller;

import com.example.WeMeet.jwt.dto.JoinDTO;
import com.example.WeMeet.jwt.service.JoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class JoinController {
    private final JoinService joinService;

    // TODO: 가입 실패시 처리
    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody JoinDTO joinDto) {
        joinService.joinProcess(joinDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // TODO: SignUp 페이지 분류에 따라 이 API로 Axios 요청하게 훅스 생성
    @PostMapping("/join/admin")
    public ResponseEntity<String> joinAdmin(@RequestBody JoinDTO joinDto) {
        joinService.joinProcess(joinDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/joinList")
    public ResponseEntity<String> join(@RequestBody List<JoinDTO> joinDTOList) {
        joinService.joinProcess(joinDTOList);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
