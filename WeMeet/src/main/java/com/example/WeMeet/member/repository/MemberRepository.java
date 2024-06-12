package com.example.WeMeet.member.repository;

import com.example.WeMeet.member.domain.dto.MemberSearchDTO;
import com.example.WeMeet.member.domain.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.UUID;

public interface MemberRepository  extends JpaRepository<Member, UUID> {
    Member findByUserUUID(UUID userUUID);
    Member findByUserEmail(String userEmail);
    boolean existsByUserUUID(UUID userUUID);
    boolean existsByUserEmail(String userEmail);

    @Query("SELECT m.isCouple FROM Member m WHERE m.userEmail = :userEmail")
    boolean isCoupleByUserEmail(@Param("userEmail") String userEmail);

    @Query("SELECT new com.example.WeMeet.member.domain.dto.MemberSearchDTO(m.userEmail, m.nickname, m.birth, m.bloodType) FROM Member m WHERE m.userEmail = :userEmail")
    MemberSearchDTO findByUserEmailToSearchDTO(@Param("userEmail") String userEmail);

    @Modifying
    @Query("UPDATE Member m SET m.isCouple = :isCouple WHERE m.userEmail = :userEmail")
    void updateCoupleStateByEmail(@Param("userEmail") String userEmail, @Param("isCouple") boolean isCouple);

    @Modifying
    @Query("UPDATE Member m SET m.coupleUUID = :coupleUUID WHERE (m.userEmail = :user1Email OR m.userEmail = :user2Email)")
    void updatePairUUIDByEmail(@Param("user1Email") String user1Email, @Param("user2Email") String user2Email, @Param("coupleUUID") UUID coupleUUID);
}
