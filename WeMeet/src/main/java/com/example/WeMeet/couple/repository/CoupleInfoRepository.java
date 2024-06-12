package com.example.WeMeet.couple.repository;

import com.example.WeMeet.couple.domain.entity.CoupleInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.UUID;

public interface CoupleInfoRepository extends JpaRepository<CoupleInfo, UUID> {
    CoupleInfo findByPairUUID(UUID pairUUID);
    CoupleInfo findByUserEmail1(String userEmail1);
    CoupleInfo findByUserEmail2(String userEmail2);
    CoupleInfo findByUserEmail1AndUserEmail2(String userEmail1, String userEmail2);

    @Query("SELECT CASE WHEN COUNT(c) > 0 THEN true ELSE false END FROM CoupleInfo c WHERE c.pairUUID = :pairUUID and c.isCouple = true")
    boolean isCoupleByPairUUID(@Param("pairUUID") UUID pairUUID);

    @Query("SELECT c FROM CoupleInfo c WHERE (c.userEmail1 = :userEmail OR c.userEmail2 = :userEmail) and c.isCouple = true")
    CoupleInfo findByUserEmail1OrUserEmail2(@Param("userEmail") String userEmail);

}
