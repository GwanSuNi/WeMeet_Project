package com.example.WeMeet.jwt.repository;

import com.example.WeMeet.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<Member, UUID> {
    Member findByUserUUID(UUID userUUID);
    Member findByUserEmail(String userEmail);


    boolean existsByUserUUID(UUID userUUID);
    boolean existsByUserEmail(String userEmail);
}