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
    private final CoupleInfoMapper coupleInfoMapper;
    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public void makeCouple(MakeCoupleRequestDTO makeCoupleRequestDTO) {
        String userEmail1 = makeCoupleRequestDTO.getUserEmail1();
        String userEmail2 = makeCoupleRequestDTO.getUserEmail2();
        LocalDate coupleDate = makeCoupleRequestDTO.getCoupleDate();

        // 이미 커플인 경우
        if (coupleInfoRepository.findByUserEmail1OrUserEmail2(userEmail1) != null) {
            return;
        }

        // 커플이 아닌 경우 커플로 등록
        CoupleInfo coupleInfo = new CoupleInfo();
        coupleInfo.setUserEmail1(userEmail1);
        coupleInfo.setUserEmail2(userEmail2);
        coupleInfo.setCoupleDate(coupleDate);
        coupleInfo.setCouple(true);
        coupleInfoRepository.save(coupleInfo);

        // 커플 등록 시 커플 상태로 변경
        memberRepository.updateCoupleStateByEmail(userEmail1, true);
        memberRepository.updateCoupleStateByEmail(userEmail2, true);
    }

    @Override
    @Transactional
    public void breakCouple(UUID pairUUID) {
        if (!isCouple(pairUUID)) {
            return;
        }
        // 커플인 경우 커플 해제

        CoupleInfo coupleInfo = coupleInfoRepository.findByPairUUID(pairUUID);
        coupleInfo.setCouple(false);
        coupleInfoRepository.save(coupleInfo);

        // 커플 해제 시 커플 상태 해제
        memberRepository.updateCoupleStateByEmail(coupleInfo.getUserEmail1(), false);
        memberRepository.updateCoupleStateByEmail(coupleInfo.getUserEmail2(), false);
    }

    @Override
    public boolean isCouple(UUID parUUID) {
        return coupleInfoRepository.isCoupleByPairUUID(parUUID);
    }

    @Override
    public UUID getPairUUID(String userEmail) {
        CoupleInfo coupleInfo = coupleInfoRepository.findByUserEmail1OrUserEmail2(userEmail);
        if (coupleInfo == null) {
            return null;
        }
        return coupleInfo.getPairUUID();
    }

    @Override
    public CoupleInfoDTO getCoupleInfo(String userEmail) {
        // 커플이 아닌 경우
        if (coupleInfoRepository.findByUserEmail1OrUserEmail2(userEmail) == null) {
            log.warn("Not a couple");
            return null;
        }
        return coupleInfoMapper.toDTO(coupleInfoRepository.findByUserEmail1OrUserEmail2(userEmail));
    }

    @Override
    public CoupleInfoDTO getCoupleInfo(UUID pairUUID) {
        if (!isCouple(pairUUID)) {
            return null;
        }
        return coupleInfoMapper.toDTO(coupleInfoRepository.findByPairUUID(pairUUID));
    }
}