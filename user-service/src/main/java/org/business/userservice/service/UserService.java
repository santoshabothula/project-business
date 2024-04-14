package org.business.userservice.service;

import lombok.AllArgsConstructor;
import org.business.commonservice.dto.UserDTO;
import org.business.commonservice.exception.custom.NotFoundException;
import org.business.commonservice.mapper.UserMapper;
import org.business.commonservice.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository repository;
    private final UserMapper mapper;

    public UserDTO get(String username) {
        return mapper.txnUserEntityToUserDTO(repository.findById(username).orElseThrow(NotFoundException::new));
    }

    public UserDTO save(UserDTO userDTO) {
        return mapper.txnUserEntityToUserDTO(repository.save(mapper.userDTOToTxnUserEntity(userDTO)));
    }

    public void delete(String username) {
        repository.deleteById(username);
    }

    public UserDTO getByEmail(String email) {
        return mapper.txnUserEntityToUserDTO(repository.findByEmail(email).orElseThrow(NotFoundException::new));
    }
}
