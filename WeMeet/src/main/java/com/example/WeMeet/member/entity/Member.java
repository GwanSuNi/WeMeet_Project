package com.example.WeMeet.member.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID userUUID;
    @Column(unique = true)
    private String userEmail;
    private String password;
    private String nickname;
    private String role;
    private String birth;
    private LocalDateTime registDate = LocalDateTime.now();
    private boolean isQuit = false;

    public void quitUser() {
        isQuit = true;
    }
}
