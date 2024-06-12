package com.example.WeMeet.member.domain.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberDTO {
    private UUID userUUID;
    private String userEmail;
    private String password;
    private String nickname;
    private String role;
    private String birth;
    private LocalDateTime registDate;
    private boolean isQuit;
}
