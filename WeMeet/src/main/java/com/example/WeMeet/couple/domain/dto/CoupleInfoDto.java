package com.example.WeMeet.couple.domain.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
public class CoupleInfoDTO {
    private String userEmail1;
    private String userEmail2;
    private LocalDate coupleDate;
}
