package com.example.WeMeet.couple.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CoupleInfo {
    @Id
    @GeneratedValue
    private UUID pairUUID;
    private String userEmail1;
    private String userEmail2;
//    private String coupleName;
    private boolean isCouple;
    private LocalDate coupleDate;
}
