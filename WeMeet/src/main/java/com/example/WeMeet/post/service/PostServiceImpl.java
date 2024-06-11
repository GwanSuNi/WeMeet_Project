package com.example.WeMeet.post.service;

import com.example.WeMeet.global.exception.ValidationException;
import com.example.WeMeet.post.domain.dto.CreatePostDto;
import com.example.WeMeet.post.domain.dto.PostDto;
import com.example.WeMeet.post.domain.dto.UpdatePostDto;
import com.example.WeMeet.post.domain.entity.Post;
import com.example.WeMeet.post.domain.entity.PostPhoto;
import com.example.WeMeet.post.domain.mapper.PostMapper;
import com.example.WeMeet.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service("postServiceImpl")
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final PostMapper postMapper;
    // 사진 없이 저장할때

    /**
     * 사진이 없어도 저장할 수 있게 만듬
     * 컨트롤러에서 사진 이미지 경로를 받아와야할지 고민
     *
     * @param createPostDto
     * @return
     */
    @Override
    public UUID savePost(CreatePostDto createPostDto) {
        validateCreatePostDto(createPostDto);
        Post post = postMapper.toPost(createPostDto);
        postRepository.save(post);
        return post.getPostID();
    }

    /**
     * TODO 사진을 수정하거나, 글을 수정하거나 경우를 나누지않고 한꺼번에 처리해야함
     *
     * @param postUUID
     * @param updatePostDto
     * @return
     */
    @Override
    public void updatePost(UUID postUUID, UpdatePostDto updatePostDto) {
        Post post = postRepository.findById(postUUID).orElseThrow(() -> new ValidationException("Not Found Post"));
        postMapper.updatePostFromDto(updatePostDto, post);
        postRepository.save(post);
    }

    /**
     *
     * @param postUUID
     * @return
     */
    @Override
    public PostDto getPost(UUID postUUID) {
        Post post = postRepository.findById(postUUID).orElseThrow(
                () -> new ValidationException("Not Found Post"));
        return postMapper.toDto(post);
    }

    /**
     *
     * @param postUUID
     */
    @Override
    public void deletePost(UUID postUUID) {
        Post post = postRepository.findById(postUUID).orElseThrow(()-> new ValidationException("Not Found Post"));
        postRepository.delete(post);
    }

    private void validateCreatePostDto(CreatePostDto createPostDto) {
        if (createPostDto.getMemberID() == null)
            throw new ValidationException("memberID cannot be null");

        if (createPostDto.getTitle() == null || createPostDto.getTitle().isEmpty())
            throw new ValidationException("title cannot be null or empty");

        if (createPostDto.getContent() == null || createPostDto.getContent().isEmpty())
            throw new ValidationException("content cannot be null or empty");

        if (createPostDto.getPositionInfo() == null || createPostDto.getPositionInfo().isEmpty())
            throw new ValidationException("positionInfo cannot be null or empty");
    }
}
