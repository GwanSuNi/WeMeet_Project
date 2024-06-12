package com.example.WeMeet.couple.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
public class CoupleInfoDTO {
    private String user1Email;
    private String user2Email;
    private String user1Name;
    private String user2Name;
    private String user1Birth;
    private String user2Birth;
    private String user1BloodType;
    private String user2BloodType;
    private LocalDate coupleDate;
}
