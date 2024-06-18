package com.example.WeMeet.member.service;

import com.example.WeMeet.member.domain.entity.ProfilePhoto;
import com.example.WeMeet.member.repository.ProfilePhotoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RequiredArgsConstructor
@Slf4j
public class IdPhotoServiceImpl implements IdPhotoService {
    private final ProfilePhotoRepository idPhotoRepository;
    private static final String RELATIVE_PATH_PROFILE = "/db/weMeet/profile/";
    private static final String UPLOAD_DIR_PROFILE = System.getProperty("user.home") + RELATIVE_PATH_PROFILE;

    /**
     * @param userEmail
     * @param file
     * @return
     * @throws IOException
     */
    @Override
    public ProfilePhoto saveProfileImage(String userEmail, MultipartFile file) throws IOException {
        Path uploadPath = Paths.get(UPLOAD_DIR_PROFILE);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        Path filePath = uploadPath.resolve(userEmail + ".png");
        Files.copy(file.getInputStream(), filePath);

        // 이미지 엔티티 저장
        ProfilePhoto image = new ProfilePhoto();
        image.setName(userEmail);
        image.setPath(uploadPath.resolve(userEmail + ".png").toString());
        return idPhotoRepository.save(image);
    }

    /**
     * @param userEmail
     * @return
     * @throws IOException
     */
    @Override
    public byte[] getProfileImage(String userEmail) throws IOException {
        Path filePath = Paths.get(UPLOAD_DIR_PROFILE).resolve(userEmail + ".png");
        return Files.readAllBytes(filePath);
    }

    /**
     * @param userEmail
     */
    @Override
    public void deleteProfileImage(String userEmail) {
        Path filePath = Paths.get(UPLOAD_DIR_PROFILE).resolve(userEmail + ".png");
        try {
            Files.delete(filePath);
            idPhotoRepository.deleteByName(userEmail);
        } catch (IOException e) {
            log.error("Failed to delete image file: {}", userEmail);
        }
    }
}
