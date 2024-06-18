package com.example.WeMeet.post.domain.mapper;

import com.example.WeMeet.post.domain.dto.CreatePostDto;
import com.example.WeMeet.post.domain.dto.PostDto;
import com.example.WeMeet.post.domain.dto.PostSummaryDto;
import com.example.WeMeet.post.domain.dto.UpdatePostDto;
import com.example.WeMeet.post.domain.entity.Post;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Mapper(componentModel = "spring")
@Component
public interface PostMapper {
    PostDto toDto(Post post);

    Post toEntity(PostDto postDto);

    @Mapping(target = "postID", ignore = true) // postID는 무시합니다. (자동 생성됨)
    @Mapping(target = "createdAt", ignore = true) // createdAt는 무시합니다. (@PrePersist에 의해 자동 설정됨)
    @Mapping(target = "like", ignore = true) // like는 무시합니다. (@PrePersist에 의해 자동 설정됨)
    @Mapping(target = "visitCount", ignore = true) // visitCount는 무시합니다. (별도의 로직으로 처리 필요)
    Post toPost(CreatePostDto dto);

    @Mapping(target = "postID", ignore = true)
    @Mapping(target = "memberID", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "like", ignore = true)
    @Mapping(target = "visitCount", ignore = true)
    void updatePostFromDto(UpdatePostDto updatePostDto, @MappingTarget Post post);

    @Mapping(target = "title", source = "title")
    @Mapping(target = "positionInfo", source = "positionInfo")
    @Mapping(target = "stateTime", expression = "java(getStateTime(post.getCreatedAt()))")
    PostSummaryDto postToPostSummaryDto(Post post);

    List<PostSummaryDto> postsToPostSummaryDtos(List<Post> posts);

    default String getStateTime(LocalDateTime createdAt) {
        LocalDateTime now = LocalDateTime.now();
        Duration duration = Duration.between(createdAt, now);

        long days = duration.toDays();
        if (days > 0) {
            return days + "일 전";
        }

        long hours = duration.toHours();
        if (hours > 0) {
            return hours + "시간 전";
        }

        long minutes = duration.toMinutes();
        if (minutes > 0) {
            return minutes + "분 전";
        }

        return "방금 전";
    }
}
