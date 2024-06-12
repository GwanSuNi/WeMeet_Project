package com.example.WeMeet.couple.service;

import com.example.WeMeet.couple.domain.dto.CoupleInfoDTO;
import com.example.WeMeet.couple.domain.dto.CoupleInfoRequestDTO;
import com.example.WeMeet.couple.domain.dto.MakeCoupleRequestDTO;
import com.example.WeMeet.couple.domain.entity.CoupleInfo;
import com.example.WeMeet.couple.domain.mapper.CoupleInfoMapper;
import com.example.WeMeet.couple.repository.CoupleInfoRepository;
import com.example.WeMeet.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class CoupleInfoServiceImpl implements CoupleInfoService {
    private final CoupleInfoRepository coupleInfoRepository;
    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public void makeCouple(MakeCoupleRequestDTO makeCoupleRequestDTO) {
        String userEmail1 = makeCoupleRequestDTO.getUserEmail1();
        String userEmail2 = makeCoupleRequestDTO.getUserEmail2();
        LocalDate coupleDate = makeCoupleRequestDTO.getCoupleDate();

        // 이미 커플인 경우
        if (coupleInfoRepository.findByUser1EmailOrUser2Email(userEmail1) != null) {
            return;
        }

        // 커플이 아닌 경우 커플로 등록
        CoupleInfo coupleInfo = new CoupleInfo();
        coupleInfo.setUser1Email(userEmail1);
        coupleInfo.setUser2Email(userEmail2);
        coupleInfo.setCoupleDate(coupleDate);
        coupleInfo.setCouple(true);
        UUID coupleUUID = coupleInfoRepository.save(coupleInfo).getCoupleUUID();

        // 커플 등록 시 커플 상태로 변경
        memberRepository.updateCoupleStateByEmail(userEmail1, true);
        memberRepository.updateCoupleStateByEmail(userEmail2, true);
        memberRepository.updatePairUUIDByEmail(userEmail1, userEmail2, coupleUUID);
    }

    @Override
    @Transactional
    public void breakCouple(UUID coupleUUID) {
        if (!isCouple(coupleUUID)) {
            return;
        }
        // 커플인 경우 커플 해제

        CoupleInfo coupleInfo = coupleInfoRepository.findByCoupleUUID(coupleUUID);
        coupleInfo.setCouple(false);
        coupleInfoRepository.save(coupleInfo);

        // 커플 해제 시 커플 상태 해제
        memberRepository.updateCoupleStateByEmail(coupleInfo.getUser1Email(), false);
        memberRepository.updateCoupleStateByEmail(coupleInfo.getUser2Email(), false);
        memberRepository.updatePairUUIDByEmail(coupleInfo.getUser1Email(), coupleInfo.getUser2Email(), null);
    }

    @Override
    public boolean isCouple(UUID coupleUUID) {
        return coupleInfoRepository.isCoupleByCoupleUUID(coupleUUID);
    }

    @Override
    public UUID getCoupleUUID(String userEmail) {
        CoupleInfo coupleInfo = coupleInfoRepository.findByUser1EmailOrUser2Email(userEmail);
        if (coupleInfo == null) {
            return null;
        }
        return coupleInfo.getCoupleUUID();
    }

    @Override
    public CoupleInfoDTO getCoupleInfo(String userEmail) {
        // 커플이 아닌 경우
        if (coupleInfoRepository.findByUser1EmailOrUser2Email(userEmail) == null) {
            log.warn("Not a couple");
            return null;
        }
        UUID coupleUUID = coupleInfoRepository.findCoupleUUIDByUser1EmailOrUser2Email(userEmail);
        return coupleInfoRepository.findCoupleInfoDTOByCoupleUUID(coupleUUID);
    }

    @Override
    public CoupleInfoDTO getCoupleInfo(UUID coupleUUID) {
        if (!isCouple(coupleUUID)) {
            return null;
        }
        return coupleInfoRepository.findCoupleInfoDTOByCoupleUUID(coupleUUID);
    }
}