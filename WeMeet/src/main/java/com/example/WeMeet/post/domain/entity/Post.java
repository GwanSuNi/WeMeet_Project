package com.example.WeMeet.post.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    @Id
    @GeneratedValue
    private UUID postID;
    // 작성자 , FK
    private UUID memberID;
    // 여러가지 이미지 FK
    private UUID imgUUID;
    // 제목
    private String title;
    // 내용
    private String content;
    // 위치정보
    private String positionInfo;
    // 생성날짜
    private LocalDateTime createdAt;
    // 좋아요 수
    private long like;
    // 공개여부
    private boolean disclosure;
    // 조회수
    private long visitCount;
}