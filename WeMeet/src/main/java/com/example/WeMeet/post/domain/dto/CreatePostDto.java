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
public class CreatePostDto {
    private UUID memberID;
    private String title;
    private String content;
    private String positionInfo;
    private boolean disclosure;
}
