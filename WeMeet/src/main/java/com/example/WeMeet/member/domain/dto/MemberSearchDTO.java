package com.example.WeMeet.member.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberSearchDTO {
    private String email;
    private String nickname;
    private String birth;
    private String bloodType;
}
