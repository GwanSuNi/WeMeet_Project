package com.example.WeMeet.post.domain.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostSummaryDto {
    // 얼굴사진 링크
    private String imgPath;
    // 제목
    private String title;
    // ex) 1시간전, 몇시간전, 하루전 ..
    private String stateTime;
    // 위치 정보
    private String positionInfo;
}
