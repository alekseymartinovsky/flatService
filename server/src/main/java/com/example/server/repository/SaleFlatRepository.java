package com.example.server.repository;

import com.example.server.entity.ManagerEntity;
import com.example.server.entity.SaleFlatEntity;
import com.example.server.model.SaleFlat;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SaleFlatRepository extends CrudRepository<SaleFlatEntity, Long> {
    SaleFlatEntity findFirstById(Long id);

    List<SaleFlatEntity> findAllByManagerEntity(ManagerEntity manager);
}
