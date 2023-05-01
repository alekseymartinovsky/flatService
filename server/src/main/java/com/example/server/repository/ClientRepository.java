package com.example.server.repository;

import com.example.server.entity.ClientEntity;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<ClientEntity, Long>{
    ClientEntity findOneByLogin(String login);

    ClientEntity findOneByToken(String token);

    ClientEntity findFirstById(Long id);
}
