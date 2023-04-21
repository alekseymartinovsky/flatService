package com.example.server.repository;

import com.example.server.entity.AdminEntity;
import org.springframework.data.repository.CrudRepository;

public interface AdminRepository extends CrudRepository<AdminEntity, Long> {
    AdminEntity findOneByToken(String token);
}
