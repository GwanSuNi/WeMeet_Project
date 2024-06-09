package com.example.WeMeet.post.service;

import com.example.WeMeet.post.domain.dto.PostDto;

public interface PostService {
    public PostDto savePost(PostDto postDto);
    public PostDto updatePost(PostDto postDto);
    public PostDto getPost(Long id);
    public void deletePost(Long id);
}
