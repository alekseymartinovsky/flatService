package com.example.server.repository;

import com.example.server.entity.CurrencyEntity;
import org.springframework.data.repository.CrudRepository;

public interface CurrencyRepository extends CrudRepository<CurrencyEntity, Long> {
    CurrencyEntity findFirstById(Long id);
}
