package com.example.WeMeet.post.service;

import com.example.WeMeet.post.domain.dto.PostDto;
import com.example.WeMeet.post.domain.entity.Post;
import com.example.WeMeet.post.domain.mapper.PostMapper;
import com.example.WeMeet.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class PostServiceImpl implements PostService{
    private final PostRepository postRepository;
    private final PostMapper postMapper;

    @Override
    public PostDto savePost(PostDto postDto) {
        Post post = postMapper.toEntity(postDto);
        postRepository.save(post);
        return null;
    }

    @Override
    public PostDto updatePost(PostDto postDto) {
        return null;
    }

    @Override
    public PostDto getPost(Long id) {
        return null;
    }

    @Override
    public void deletePost(Long id) {

    }
}
