package org.business.userservice.service;

import lombok.AllArgsConstructor;
import org.apache.commons.lang.StringUtils;
import org.business.commonservice.dto.UserLoginDetailsDTO;
import org.business.commonservice.exception.custom.NotFoundException;
import org.business.commonservice.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginService {

    private UserRepository userRepository;
    private JwtService jwtService;

    public String login(UserLoginDetailsDTO userLoginDetailsDTO) {

        if (StringUtils.isBlank(userLoginDetailsDTO.getUsername()) || StringUtils.isBlank(userLoginDetailsDTO.getPassword())) {
            throw new NotFoundException();
        }

        return userRepository.findById(userLoginDetailsDTO.getUsername()).map(user -> {

            if (user.getPassword().equals(userLoginDetailsDTO.getPassword())) {

                if (user.isUserLoggedIn()) {
                    throw new NotFoundException(); // TODO: custom exception required for already logged-in
                }

                user.setUserLoggedIn(true);
                userRepository.save(user);
                return jwtService.generateToken(user);
            }

            throw new NotFoundException();

        }).orElseThrow(NotFoundException::new);

    }

    public boolean validate(String token, String username) {

        return userRepository.findById(username).map(user -> {

            try {

                if (user.isUserLoggedIn()) {
                    jwtService.validateToken(token, user.getPassword());
                    return true;
                }

                return false;

            } catch (Exception ex) {
                return false;
            }

        }).orElse(false);
    }

}
