package com.example.WeMeet.post.domain.dto;

import jakarta.persistence.GeneratedValue;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
    private UUID postID;
    private UUID memberID;
    private String title;
    private String content;
    private String positionInfo;
    private LocalDateTime createdAt;
    private long like;
    private boolean disclosure;
    private long visitCount;
}
