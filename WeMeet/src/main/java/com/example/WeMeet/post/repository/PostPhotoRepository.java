package com.example.WeMeet.post.repository;

import com.example.WeMeet.post.domain.entity.PostPhoto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PostPhotoRepository extends JpaRepository<PostPhoto, Long> {
    List<PostPhoto> findByPhotoUUID(UUID photoUUID);
    // 특정 postUUID 를 가진 PostPhoto 엔티티의 개수를 얻을 수 있다
    int countByPostUUID(UUID postUUID);
}
