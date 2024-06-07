package com.example.WeMeet.member.domain;

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
public class Member {
    @Id
    @GeneratedValue
    private UUID memberID;
    //
    private UUID pairUUID;
    private String bloodType;
    private String name;
    private String birth;
    private String nickName;
    private String registerDate;
    // TODO 공개정보 컬럼 넣기
}
