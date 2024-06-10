package com.example.WeMeet.member.service;

import com.example.WeMeet.member.domain.dto.MemberDTO;

public interface MemberService {
    MemberDTO getMemberDetail(String userEmail);
}
