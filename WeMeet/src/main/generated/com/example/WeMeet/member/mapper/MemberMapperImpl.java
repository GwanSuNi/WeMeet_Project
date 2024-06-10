package com.example.WeMeet.member.mapper;

import com.example.WeMeet.member.dto.MemberDTO;
import com.example.WeMeet.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-06-10T18:29:27+0900",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.11 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public MemberDTO toDTO(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDTO memberDTO = new MemberDTO();

        memberDTO.setUserUUID( member.getUserUUID() );
        memberDTO.setUserEmail( member.getUserEmail() );
        memberDTO.setPassword( member.getPassword() );
        memberDTO.setNickname( member.getNickname() );
        memberDTO.setRole( member.getRole() );
        memberDTO.setBirth( member.getBirth() );
        memberDTO.setRegistDate( member.getRegistDate() );
        memberDTO.setQuit( member.isQuit() );

        return memberDTO;
    }

    @Override
    public Member toEntity(MemberDTO memberDto) {
        if ( memberDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setUserUUID( memberDto.getUserUUID() );
        member.setUserEmail( memberDto.getUserEmail() );
        member.setPassword( memberDto.getPassword() );
        member.setNickname( memberDto.getNickname() );
        member.setRole( memberDto.getRole() );
        member.setBirth( memberDto.getBirth() );
        member.setRegistDate( memberDto.getRegistDate() );
        member.setQuit( memberDto.isQuit() );

        return member;
    }
}
