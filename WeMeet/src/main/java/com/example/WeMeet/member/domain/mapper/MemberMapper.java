package com.example.WeMeet.member.domain.mapper;

import com.example.WeMeet.member.domain.dto.MemberDTO;
import com.example.WeMeet.member.domain.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    MemberDTO toDTO(Member member);
    Member toEntity(MemberDTO memberDto);
}
