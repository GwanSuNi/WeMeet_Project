package com.example.WeMeet.couple.domain.mapper;

import com.example.WeMeet.couple.domain.dto.CoupleInfoDTO;
import com.example.WeMeet.couple.domain.entity.CoupleInfo;
import java.time.LocalDate;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-06-12T15:54:33+0900",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.11 (Azul Systems, Inc.)"
)
@Component
public class CoupleInfoMapperImpl implements CoupleInfoMapper {

    @Override
    public CoupleInfoDTO toDTO(CoupleInfo coupleInfo) {
        if ( coupleInfo == null ) {
            return null;
        }

        String user1Email = null;
        String user2Email = null;
        LocalDate coupleDate = null;

        user1Email = coupleInfo.getUser1Email();
        user2Email = coupleInfo.getUser2Email();
        coupleDate = coupleInfo.getCoupleDate();

        String user1Name = null;
        String user2Name = null;
        String user1Birth = null;
        String user2Birth = null;
        String user1BloodType = null;
        String user2BloodType = null;

        CoupleInfoDTO coupleInfoDTO = new CoupleInfoDTO( user1Email, user2Email, user1Name, user2Name, user1Birth, user2Birth, user1BloodType, user2BloodType, coupleDate );

        return coupleInfoDTO;
    }

    @Override
    public CoupleInfo toEntity(CoupleInfoDTO coupleInfoDto) {
        if ( coupleInfoDto == null ) {
            return null;
        }

        CoupleInfo coupleInfo = new CoupleInfo();

        coupleInfo.setUser1Email( coupleInfoDto.getUser1Email() );
        coupleInfo.setUser2Email( coupleInfoDto.getUser2Email() );
        coupleInfo.setCoupleDate( coupleInfoDto.getCoupleDate() );

        return coupleInfo;
    }
}
