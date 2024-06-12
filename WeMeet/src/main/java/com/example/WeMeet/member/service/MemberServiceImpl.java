package com.example.WeMeet.member.service;

import com.example.WeMeet.member.domain.dto.MemberDTO;
import com.example.WeMeet.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    @Override
    public MemberDTO getMemberDetail(String userEmail) {
        return null;
    }
}
