package com.example.WeMeet.post.controller;

import com.example.WeMeet.post.domain.dto.CreatePostDto;
import com.example.WeMeet.post.domain.entity.Post;
import com.example.WeMeet.post.service.PostPhotoService;
import com.example.WeMeet.post.service.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/api/post")
@RequiredArgsConstructor
@Slf4j
public class PostController {
    private final PostPhotoService postPhotoService;
    private final PostService postService;

    @PostMapping("/upload")
    public ResponseEntity<Post> uploadPost(@RequestParam(value = "file", required = false) MultipartFile[] file,
                                           @RequestParam("post") CreatePostDto createPostDto) throws IOException {
//         String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        String userEmail = "asdf1234@naver.com";
        // Post에서 글 관련한 내용만 서버에 먼저 저장
        UUID postUUID = postService.savePost(createPostDto);
        // 관련한 이미지에대해 저장
        if (file != null && file.length > 0) {
            postPhotoService.savePostImages(userEmail, postUUID, file);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<HttpStatus> deletePost(@RequestParam UUID postUUID) throws IOException {
//        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        String userEmail = "asdf1234@naver.com";
        try {
            postPhotoService.deletePostImage(postUUID, userEmail);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

