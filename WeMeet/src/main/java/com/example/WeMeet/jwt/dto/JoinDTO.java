package com.example.WeMeet.jwt.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JoinDTO {
    private String username;
    private String password;
    private String nickname;
    private String birth;
    private String role;
}