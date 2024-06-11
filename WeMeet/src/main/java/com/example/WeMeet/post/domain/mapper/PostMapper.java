package com.example.WeMeet.post.domain.mapper;

import com.example.WeMeet.post.domain.dto.CreatePostDto;
import com.example.WeMeet.post.domain.dto.PostDto;
import com.example.WeMeet.post.domain.dto.UpdatePostDto;
import com.example.WeMeet.post.domain.entity.Post;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.stereotype.Component;

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

}
