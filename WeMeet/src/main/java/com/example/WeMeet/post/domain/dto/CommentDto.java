package com.example.WeMeet.post.domain.dto;

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
public class CommentDto {
    private UUID commentID;
    private UUID postID;
    private String content;
    private String userName;
    private LocalDateTime createdAt;
}
