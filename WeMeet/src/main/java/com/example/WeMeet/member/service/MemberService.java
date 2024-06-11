package com.example.WeMeet.member.service;

import com.example.WeMeet.member.domain.dto.MemberDTO;
import com.example.WeMeet.member.domain.dto.MemberSearchDTO;

public interface MemberService {
    MemberDTO getMemberDetail(String userEmail);
    MemberSearchDTO getMemberSearch(String userEmail);

    boolean isCouple(String userEmail);
    boolean existsByUserEmail(String userEmail);
}
