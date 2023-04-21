package com.example.server.repository;

import com.example.server.entity.ManagerEntity;
import org.springframework.data.repository.CrudRepository;

public interface ManagerRepository extends CrudRepository<ManagerEntity, Long> {

    ManagerEntity findOneByToken(String token);
}
