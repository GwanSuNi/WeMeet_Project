package com.example.WeMeet.couple.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID coupleUUID;
    private String user1Email;
    private String user2Email;
//    private String coupleName;
    private boolean isCouple;
    private LocalDate coupleDate;
}
