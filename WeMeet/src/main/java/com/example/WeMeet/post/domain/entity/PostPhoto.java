package com.example.WeMeet.post.domain.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
public class PostPhoto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID photoUUID;
    // FK 게시물 ID
    private UUID postUUID;
    // 이미지 경로
    private String imgPath;
}
