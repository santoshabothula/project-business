package org.business.commonservice.dto;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class AddressDTO extends BaseDTO {
    private Long id;
    private String country;
    private String state;
    private String city;
    private String addressLine1;
    private String addressLine2;
    private Long zipcode;
}
