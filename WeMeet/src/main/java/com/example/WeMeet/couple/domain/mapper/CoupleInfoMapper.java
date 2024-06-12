package com.example.WeMeet.couple.domain.mapper;

import com.example.WeMeet.couple.domain.dto.CoupleInfoDTO;
import com.example.WeMeet.couple.domain.entity.CoupleInfo;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CoupleInfoMapper {
    CoupleInfoDTO toDTO(CoupleInfo coupleInfo);
    CoupleInfo toEntity(CoupleInfoDTO coupleInfoDto);
}
