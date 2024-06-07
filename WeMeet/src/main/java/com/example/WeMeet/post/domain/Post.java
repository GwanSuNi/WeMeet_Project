package com.example.WeMeet.post.domain;

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
public class Post {
    @Id
    @GeneratedValue
    private UUID postID;
    private String title;
    private String content;
    private String imgPath;
    // 위치정보
    private String positionInfo;
    private long like;
    // 공개여부
    private boolean disclosure;
    private long visitCount;
}