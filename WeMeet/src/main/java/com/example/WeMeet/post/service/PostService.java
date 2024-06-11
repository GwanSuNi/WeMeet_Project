package com.example.WeMeet.post.service;

import com.example.WeMeet.post.domain.dto.CreatePostDto;
import com.example.WeMeet.post.domain.dto.PostDto;
import com.example.WeMeet.post.domain.dto.UpdatePostDto;

import java.util.List;
import java.util.UUID;

public interface PostService {
    public UUID savePost(CreatePostDto createPostDto);
    public void updatePost(UUID postUUID, UpdatePostDto updatePostDto);
    public PostDto getPost(UUID postUUID);
    public void deletePost(UUID postUUID);
}
