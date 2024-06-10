package com.example.WeMeet.member.repository;

import com.example.WeMeet.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface MemberRepository  extends JpaRepository<Member, UUID> {
    Member findByUserUUID(UUID userUUID);
    boolean existsByUserUUID(UUID userUUID);
}
