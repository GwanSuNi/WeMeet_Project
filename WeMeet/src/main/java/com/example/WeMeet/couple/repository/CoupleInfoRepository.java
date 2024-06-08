package com.example.WeMeet.couple.repository;

import com.example.WeMeet.couple.domain.entity.CoupleInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CoupleInfoRepository extends JpaRepository<CoupleInfo, UUID> {
}
