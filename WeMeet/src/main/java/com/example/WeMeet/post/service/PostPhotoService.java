package com.example.WeMeet.post.service;

import com.example.WeMeet.post.domain.entity.PostPhoto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;
import java.util.UUID;

public interface PostPhotoService {
    public void savePostImages(String userEmail, UUID postUUID, MultipartFile[] files) throws IOException;
    public PostPhoto savePostImage(String uploadPostPath, UUID postUUID, MultipartFile file, int index) throws IOException;
    public void deletePostImage(UUID postUUID, String userEmail);
    public List<byte[]> getPostImages(UUID postUUID, String userEmail) throws IOException;
    public void deletePostImagePath(UUID postUUID);
}
