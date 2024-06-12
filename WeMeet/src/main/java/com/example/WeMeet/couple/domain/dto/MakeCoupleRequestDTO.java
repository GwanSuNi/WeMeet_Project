package com.example.WeMeet.couple.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class MakeCoupleRequestDTO {
    private String userEmail1;
    private String userEmail2;
    private LocalDate coupleDate;
}
