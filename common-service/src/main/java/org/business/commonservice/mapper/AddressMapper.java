package org.business.commonservice.mapper;

import org.business.commonservice.dto.AddressDTO;
import org.business.commonservice.entity.TxnAddressEntity;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AddressMapper {
    AddressDTO txnAddressEntityToAddressDTO(TxnAddressEntity txnAddressEntity);
    TxnAddressEntity addressDTOToTxnAddressEntity(AddressDTO addressDTO);
}
