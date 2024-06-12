package com.example.WeMeet.member.service;

import com.example.WeMeet.member.domain.dto.MemberDTO;
import com.example.WeMeet.member.domain.dto.MemberSearchDTO;
import com.example.WeMeet.member.domain.mapper.MemberMapper;
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
    private final MemberMapper memberMapper;
    @Override
    public MemberDTO getMemberDetail(String userEmail) {
        if (!memberRepository.existsByUserEmail(userEmail)) {
            return null;
        }
        return memberMapper.toDTO(memberRepository.findByUserEmail(userEmail));
    }

    @Override
    public MemberSearchDTO getMemberSearch(String userEmail) {
        if (!memberRepository.existsByUserEmail(userEmail)) {
            return null;
        }
        return memberRepository.findByUserEmailToSearchDTO(userEmail);
    }

    @Override
    public boolean isCouple(String userEmail) {
        return memberRepository.isCoupleByUserEmail(userEmail);
    }

    @Override
    public boolean existsByUserEmail(String userEmail) {
        return memberRepository.existsByUserEmail(userEmail);
    }
}
