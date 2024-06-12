package com.example.WeMeet.couple.controller;

import com.example.WeMeet.couple.domain.dto.BreakCoupleRequestDTO;
import com.example.WeMeet.couple.domain.dto.CoupleInfoDTO;
import com.example.WeMeet.couple.domain.dto.CoupleInfoRequestDTO;
import com.example.WeMeet.couple.domain.dto.MakeCoupleRequestDTO;
import com.example.WeMeet.couple.service.CoupleInfoService;
import com.example.WeMeet.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/couple")
public class CoupleController {
    private final CoupleInfoService coupleInfoService;
    private final MemberService memberService;

    @GetMapping("")
    public ResponseEntity<CoupleInfoDTO> getCoupleInfo(@RequestParam("userEmail") String userEmail) {
        CoupleInfoDTO result = coupleInfoService.getCoupleInfo(userEmail);
        if (result == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<String> makeCouple(@RequestBody MakeCoupleRequestDTO makeCoupleRequestDTO) {
        if (!memberService.existsByUserEmail(makeCoupleRequestDTO.getUserEmail1()) || !memberService.existsByUserEmail(makeCoupleRequestDTO.getUserEmail2())) {
            return ResponseEntity.badRequest().body("존재하지 않는 회원입니다.");
        }

        try {
            coupleInfoService.makeCouple(makeCoupleRequestDTO);
            return ResponseEntity.ok("커플 등록 성공");
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return ResponseEntity.internalServerError().body("커플 등록 실패");
    }

    @PatchMapping("")
    public ResponseEntity<String> breakCouple(@RequestBody BreakCoupleRequestDTO breakCoupleRequestDTO) {
        if (!memberService.existsByUserEmail(breakCoupleRequestDTO.getUserEmail1()) || !memberService.existsByUserEmail(breakCoupleRequestDTO.getUserEmail2())) {
            return ResponseEntity.badRequest().body("존재하지 않는 회원입니다.");
        }

        try {
            UUID pairUUID = coupleInfoService.getPairUUID(breakCoupleRequestDTO.getUserEmail1());
            coupleInfoService.breakCouple(pairUUID);
            return ResponseEntity.ok("커플 해제 성공");
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return ResponseEntity.internalServerError().body("커플 해제 실패");
    }
}
