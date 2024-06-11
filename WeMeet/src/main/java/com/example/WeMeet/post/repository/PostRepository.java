package com.example.WeMeet.post.repository;

import com.example.WeMeet.post.domain.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {
    public boolean existsByPostId(UUID postId);
}
