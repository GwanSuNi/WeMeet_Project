package com.example.WeMeet.member.repository;

import com.example.WeMeet.member.domain.entity.ProfilePhoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProfilePhotoRepository extends JpaRepository<ProfilePhoto, Long> {
    @Modifying
    @Query("update ProfilePhoto p set p.path = '' where p.name = :name")
    void deleteByName(@Param("name") String name);
}
