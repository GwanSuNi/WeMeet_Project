package com.example.WeMeet.post.repository;

import com.example.WeMeet.post.domain.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
public interface CommentRepository extends JpaRepository<Comment, Long> {

}
