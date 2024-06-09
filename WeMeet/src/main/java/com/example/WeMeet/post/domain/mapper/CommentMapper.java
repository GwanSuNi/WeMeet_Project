package com.example.WeMeet.post.domain.mapper;
import com.example.WeMeet.post.domain.dto.CommentDto;
import com.example.WeMeet.post.domain.entity.Comment;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface CommentMapper {
    CommentDto toDto(Comment comment);
    Comment toEntity(CommentDto commentDto);
}
