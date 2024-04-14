package org.business.userservice.service;

import lombok.AllArgsConstructor;
import org.business.commonservice.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LogoutService {

    private final UserRepository userRepository;

    public boolean logout(String username) {
        return userRepository.findById(username).map(user -> {
            user.setUserLoggedIn(false);
            userRepository.save(user);
            return true;
        }).orElse(false);
    }
}
