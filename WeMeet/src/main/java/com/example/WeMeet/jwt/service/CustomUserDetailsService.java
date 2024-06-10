package com.example.WeMeet.jwt.service;

import com.example.WeMeet.jwt.dto.CustomUserDetails;
import com.example.WeMeet.jwt.repository.UserRepository;
import com.example.WeMeet.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member userData = userRepository.findByUserEmail(username);
        if (userData == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new CustomUserDetails(userData);
    }
}
