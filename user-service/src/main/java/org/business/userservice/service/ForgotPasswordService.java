package org.business.userservice.service;

import lombok.AllArgsConstructor;
import org.business.commonservice.dto.UserDTO;
import org.business.commonservice.mail.MailService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ForgotPasswordService {

    private final UserService userService;
    private final MailService mailService;

    public void forgotPassword(String email) {

        UserDTO userDTO = userService.getByEmail(email);

        String subject = "Forgot Password - " + userDTO.getUsername();
        String body = "Hi, \n please find your password \n Password: " + userDTO.getPassword() + "\n\n Regards,\nBusiness Team";
        mailService.sendEmail(email, subject, body);
    }
}
