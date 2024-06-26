package com.example.WeMeet.couple.service;

import com.example.WeMeet.couple.domain.dto.CoupleInfoDTO;
import com.example.WeMeet.couple.domain.dto.CoupleInfoRequestDTO;
import com.example.WeMeet.couple.domain.dto.MakeCoupleRequestDTO;

import java.util.UUID;

public interface CoupleInfoService {
    void makeCouple(MakeCoupleRequestDTO makeCoupleRequestDTO);
    void breakCouple(UUID coupleUUID);
    boolean isCouple(UUID coupleUUID);
    UUID getCoupleUUID(String userEmail);
    CoupleInfoDTO getCoupleInfo(String userEmail);
    CoupleInfoDTO getCoupleInfo(UUID coupleUUID);

}
