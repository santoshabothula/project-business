package org.business.commonservice.repository;

import org.business.commonservice.entity.TxnUserEntity;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends BaseRepository<TxnUserEntity, String> {
    Optional<TxnUserEntity> findByEmail(String email);
}
