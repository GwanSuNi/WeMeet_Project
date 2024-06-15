package com.example.WeMeet.member.service;

import com.example.WeMeet.member.domain.entity.ProfilePhoto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface IdPhotoService {
    //
    public byte[] getProfileImage(String userEmail) throws IOException;
    //
    public ProfilePhoto saveProfileImage(String userEmail, MultipartFile file) throws IOException;
    //
    public void deleteProfileImage(String userEmail);
}
