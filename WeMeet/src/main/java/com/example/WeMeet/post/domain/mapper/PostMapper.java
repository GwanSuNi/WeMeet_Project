package com.example.WeMeet.post.domain.mapper;

import com.example.WeMeet.post.domain.dto.PostDto;
import com.example.WeMeet.post.domain.entity.Post;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface PostMapper {
    PostDto toDto(Post post);

    Post toEntity(PostDto postDto);
}
