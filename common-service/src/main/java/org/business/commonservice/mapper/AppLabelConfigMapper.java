package org.business.commonservice.mapper;

import org.business.commonservice.dto.AppLabelConfigDTO;
import org.business.commonservice.entity.MstAppLabelConfigEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AppLabelConfigMapper {
    AppLabelConfigDTO mstAppLabelConfigEntityToAppLabelConfigDTO(MstAppLabelConfigEntity mstAppLabelConfigEntity);
    MstAppLabelConfigEntity appLabelConfigDTOToMstAppLabelConfigEntity(AppLabelConfigDTO appLabelConfigDTO);
}
