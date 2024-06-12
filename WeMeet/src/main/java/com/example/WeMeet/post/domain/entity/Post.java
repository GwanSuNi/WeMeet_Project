package com.example.WeMeet.post.domain.entity;

import jakarta.persistence.*;
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
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID postID;
    // 작성자 , FK
    private UUID memberID;
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

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.like = 0;
    }
}
