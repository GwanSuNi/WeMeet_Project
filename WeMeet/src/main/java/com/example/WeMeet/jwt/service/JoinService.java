package com.example.WeMeet.jwt.service;

import com.example.WeMeet.jwt.dto.JoinDTO;
import com.example.WeMeet.jwt.repository.UserRepository;
import com.example.WeMeet.member.domain.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class JoinService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void joinProcess(JoinDTO joinDto) {
        String username = joinDto.getUsername();
        String password = joinDto.getPassword();
        boolean isExist = userRepository.existsByUserEmail(username);
        if (isExist) {
            System.out.println("JoinService joinProcess: UserEmail already exists");
            return;
        }
        Member data = new Member();
        data.setUserEmail(username);
        data.setPassword(bCryptPasswordEncoder.encode(password));
        data.setNickname(joinDto.getNickname());
        data.setRole("ROLE_" + joinDto.getRole());
        data.setBirth(joinDto.getBirth());
        data.setBloodType(joinDto.getBloodType());
        data.setRegistDate(LocalDateTime.now());
        userRepository.save(data);
    }

    public void joinProcess(List<JoinDTO> joinDtoList) {
        for (JoinDTO joinDto : joinDtoList) {
            joinProcess(joinDto);
        }
    }
}