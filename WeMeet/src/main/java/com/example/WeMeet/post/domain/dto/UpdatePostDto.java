package com.example.WeMeet.post.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class UpdatePostDto {
    private String title;
    private String content;
    private String positionInfo;
    private boolean disclosure;
}
