package com.example.WeMeet.jwt.repository;

import com.example.WeMeet.jwt.entity.RefreshEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface RefreshRepository extends JpaRepository<RefreshEntity, Long> {
    Boolean existsByRefresh(String refreshToken);

    // TODO: DB에서 스케쥴러로 기간이 지난 토큰 제거
    @Transactional
    void deleteByRefresh(String refreshToken);
}
