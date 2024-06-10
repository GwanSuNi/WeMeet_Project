package com.example.WeMeet.member.mapper;

import com.example.WeMeet.member.dto.MemberDTO;
import com.example.WeMeet.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    MemberDTO toDTO(Member member);
    Member toEntity(MemberDTO memberDto);
}
