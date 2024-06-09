package com.example.WeMeet.member.domain.entity;

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
    // 공유아이디
    private UUID pairUUID;
    // 혈액형
    private String bloodType;
    // 이름
    private String name;
    private String nickName;
    private String birth;
    private String registerDate;
    // TODO 공개정보 ENUM 컬럼 넣기
}
