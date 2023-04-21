package com.example.server.repository;

import com.example.server.entity.CreditParams;
import org.springframework.data.repository.CrudRepository;

public interface CreditParamsRepository extends CrudRepository<CreditParams, Long> {

    CreditParams findFirstById(Long id);
}
