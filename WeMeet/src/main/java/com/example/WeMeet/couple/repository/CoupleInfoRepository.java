package com.example.WeMeet.couple.repository;

import com.example.WeMeet.couple.domain.dto.CoupleInfoDTO;
import com.example.WeMeet.couple.domain.entity.CoupleInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.UUID;

public interface CoupleInfoRepository extends JpaRepository<CoupleInfo, UUID> {
    CoupleInfo findByCoupleUUID(UUID coupleUUID);

    CoupleInfo findByUser1Email(String userEmail1);

    CoupleInfo findByUser2Email(String userEmail2);

    CoupleInfo findByUser1EmailAndUser2Email(String userEmail1, String userEmail2);

    @Query("SELECT CASE WHEN COUNT(c) > 0 THEN true ELSE false END FROM CoupleInfo c WHERE c.coupleUUID = :coupleUUID and c.isCouple = true")
    boolean isCoupleByCoupleUUID(@Param("coupleUUID") UUID coupleUUID);

    @Query("SELECT c FROM CoupleInfo c WHERE (c.user1Email = :userEmail OR c.user2Email = :userEmail) and c.isCouple = true")
    CoupleInfo findByUser1EmailOrUser2Email(@Param("userEmail") String userEmail);

    @Query("SELECT c.coupleUUID FROM CoupleInfo c WHERE (c.user1Email = :userEmail OR c.user2Email = :userEmail) and c.isCouple = true")
    UUID findCoupleUUIDByUser1EmailOrUser2Email(@Param("userEmail") String userEmail);

    // CoupleUUID로 현재 사귀고 있는 커플에 대한 정보 조회
    @Query("SELECT new com.example.WeMeet.couple.domain.dto.CoupleInfoDTO(m1.userEmail, m2.userEmail, m1.nickname, m2.nickname, m1.birth, m2.birth, m1.bloodType, m2.bloodType,  c.coupleDate) " +
            "FROM CoupleInfo c " +
            "JOIN Member m1 ON m1.userEmail = c.user1Email " +
            "JOIN Member m2 ON m2.userEmail = c.user2Email " +
            "WHERE c.coupleUUID = :coupleUUID")
    CoupleInfoDTO findCoupleInfoDTOByCoupleUUID(@Param("coupleUUID") UUID coupleUUID);

    // 이메일로 현재 사귀고 있는 커플에 대한 정보 조회
    @Query("SELECT new com.example.WeMeet.couple.domain.dto.CoupleInfoDTO(m1.userEmail, m2.userEmail, m1.nickname, m2.nickname, m1.birth, m2.birth, m1.bloodType, m2.bloodType,  c.coupleDate) " +
            "FROM CoupleInfo c " +
            "JOIN Member m1 ON m1.userEmail = c.user1Email " +
            "JOIN Member m2 ON m2.userEmail = c.user2Email " +
            "WHERE c.isCouple = true and (c.user1Email = :userEmail OR c.user2Email = :userEmail)")
    CoupleInfoDTO findCoupleInfoDTOByUser1EmailOrUser2Email(@Param("userEmail") String userEmail);
}
