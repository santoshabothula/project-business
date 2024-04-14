package org.business.userservice.controller;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import org.business.commonservice.dto.UserDTO;
import org.business.commonservice.dto.UserLoginDetailsDTO;
import org.business.userservice.service.ForgotPasswordService;
import org.business.userservice.service.LoginService;
import org.business.userservice.service.LogoutService;
import org.business.userservice.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService service;
    private final LoginService loginService;
    private final LogoutService logoutService;
    private final ForgotPasswordService forgotPasswordService;

    @GetMapping("/{username}")
    public ResponseEntity<UserDTO> get(@PathVariable @NotBlank String username) {
        return ResponseEntity.ok(service.get(username));
    }

    @PostMapping("/save")
    public ResponseEntity<UserDTO> save(@RequestBody @NotNull UserDTO userDTO) {
        return ResponseEntity.ok(service.save(userDTO));
    }

    @PutMapping("/update")
    public ResponseEntity<UserDTO> update(@RequestBody @NotNull UserDTO userDTO) {
        return ResponseEntity.ok(service.save(userDTO));
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<Void> delete(@PathVariable @NotNull String username) {
        service.delete(username);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @NotNull UserLoginDetailsDTO userLoginDetailsDTO) {
        return ResponseEntity.ok(loginService.login(userLoginDetailsDTO));
    }

    @PostMapping("/validate")
    public ResponseEntity<Boolean> validate(@RequestBody @NotNull UserLoginDetailsDTO userLoginDetailsDTO) {
        return ResponseEntity.ok(loginService.validate(userLoginDetailsDTO.getToken(), userLoginDetailsDTO.getUsername()));
    }

    @PutMapping("/logout")
    public ResponseEntity<Boolean> logout(@PathVariable @NotNull String username) {
        return ResponseEntity.ok(logoutService.logout(username));
    }

    @PostMapping("/forgot-password/{email}")
    public ResponseEntity<Void> forgotPassword(@PathVariable @NotBlank String email) {
        forgotPasswordService.forgotPassword(email);
        return ResponseEntity.noContent().build();
    }

}
