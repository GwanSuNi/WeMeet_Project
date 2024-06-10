package com.example.WeMeet.couple.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
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
    // 남자 ID
    private UUID maleUUID;
    // 여자 ID
    private UUID femaleUUID;
    private String coupleName;
    private boolean coupleState;
}
