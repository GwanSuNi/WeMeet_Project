package com.example.WeMeet.post.service;

import com.example.WeMeet.global.exception.ResourceNotFoundException;
import com.example.WeMeet.post.domain.entity.PostPhoto;
import com.example.WeMeet.post.repository.PostPhotoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.nio.file.Paths;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Slf4j
// TODO 처음 만든 로직은 게시물과 사진을 올릴 수 있는데, 그 이후 사진 수정은 안되고, 게시물을 삭제하면 사진과 게시물 둘다 삭제됨
//      메서드 설명 완성해주기
public class PostPhotoServiceImpl implements PostPhotoService {
    private final PostPhotoRepository postPhotoRepository;
    private static final String RELATIVE_PATH_POST = "/db/weMeet/post/";
    private static final String UPLOAD_DIR_POST = System.getProperty("user.home") + RELATIVE_PATH_POST;

    /**
     * @param uploadPostPath
     * @param postUUID
     * @param index
     * @return
     */
    private Path getPostFilePath(String uploadPostPath, UUID postUUID, int index) {
        return Paths.get(uploadPostPath).resolve(postUUID + "_" + index + ".png");
    }

    /**
     * @param userEmail
     * @param postUUID
     * @param files
     * @throws IOException
     */
    @Override
    public void savePostImages(String userEmail, UUID postUUID, MultipartFile[] files) throws IOException {
        // 사용자가 많을 경우를 대비한 폴더경로
        // 저장할 디렉토리 설정
        String uploadPostPath = UPLOAD_DIR_POST + userEmail + "/" + postUUID;
        Path uploadPath = Paths.get(uploadPostPath);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        for (int i = 0; i < files.length; i++) {
            savePostImage(userEmail,uploadPostPath, postUUID, files[i], i);
        }
    }

    /**
     * @param uploadPostPath
     * @param postUUID
     * @param file
     * @param index
     * @throws IOException
     */
    @Override
    public void savePostImage(String userEmail, String uploadPostPath, UUID postUUID, MultipartFile file, int index) throws IOException {
        // 사진 이름 정하기
        Path filePath = getPostFilePath(uploadPostPath, postUUID, index);
        Files.copy(file.getInputStream(), filePath);
        // DB에 저장할때 상대경로로 저장
        String uploadPostPathDB = RELATIVE_PATH_POST + userEmail + "/" + postUUID;
        PostPhoto postPhoto = new PostPhoto();
        postPhoto.setPostUUID(postUUID);
        postPhoto.setImgPath(uploadPostPathDB);
        postPhotoRepository.save(postPhoto);
    }

    /**
     * 게시물의 이미지 삭제하기 메서드
     *
     * @param postUUID
     * @param userEmail
     */
    @Override
    public void deletePostImage(UUID postUUID, String userEmail) {
        String uploadPostPath = UPLOAD_DIR_POST + userEmail + "/" + postUUID;
        try (Stream<Path> paths = Files.walk(Paths.get(uploadPostPath))) {
            paths
                    .filter(Files::isRegularFile) // 파일만 선택
                    .filter(p -> p.toString().endsWith(".png")) // png 파일만 선택
                    .forEach(p -> {
                        try {
                            Files.delete(p); // 파일 삭제
                        } catch (IOException e) {
                            throw new ResourceNotFoundException("파일을 찾을 수 없습니다.");
                        }
                    });
        } catch (IOException e) {
            throw new ResourceNotFoundException("파일을 찾을 수 없습니다.");
        }
        deletePostImagePath(postUUID);
        // postUUID를 갖고있는경로의 데이터 찾아서 삭제하기
    }

    /**
     * @param postUUID
     */
    @Override
    public void deletePostImagePath(UUID postUUID) {
        List<PostPhoto> postPhotoList = postPhotoRepository.findByPhotoUUID(postUUID);
        postPhotoRepository.deleteAll(postPhotoList);
    }

    /**
     * @param postUUID
     * @param userEmail
     * @return
     * @throws IOException
     */
    @Override
    public List<byte[]> getPostImages(UUID postUUID, String userEmail) throws IOException {
        String uploadPostPath = UPLOAD_DIR_POST + userEmail + "/" + postUUID;
        int index = postPhotoRepository.countByPostUUID(postUUID);
        List<byte[]> images = new ArrayList<>();
        for (int i = 0; i < index; i++) {
            Path filePath = getPostFilePath(uploadPostPath, postUUID, i);
            images.add(Files.readAllBytes(filePath));
        }
        return images;
    }
}
