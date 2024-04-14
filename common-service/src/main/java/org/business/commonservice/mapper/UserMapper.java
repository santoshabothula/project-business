package org.business.commonservice.mapper;

import org.business.commonservice.dto.UserDTO;
import org.business.commonservice.entity.TxnUserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    UserDTO txnUserEntityToUserDTO(TxnUserEntity txnUserEntity);
    TxnUserEntity userDTOToTxnUserEntity(UserDTO userDTO);
}
