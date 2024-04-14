package org.business.commonservice.dto;

import lombok.*;
import org.business.commonservice.entity.TxnAddressEntity;

import java.sql.Blob;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class UserDTO extends BaseDTO {
    private String username;
    private String password;
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private String phone;
    private String gender;
    private LocalDate dob;
    private Blob photo;
    private boolean isUserLoggedIn;
    private AddressDTO addresses;
}
