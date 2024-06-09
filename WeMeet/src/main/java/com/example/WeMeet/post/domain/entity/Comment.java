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
public class Comment {
    @Id
    @GeneratedValue
    private UUID commentID;
    // FK 게시물 ID
    private UUID postID;
    // 댓글 내용
    private String content;
    // 현재 로그인한 Member 의 userName
    private String userName;
    // 작성 시간
    private LocalDateTime createdAt;
}
