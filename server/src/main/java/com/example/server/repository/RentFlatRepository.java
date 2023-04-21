package com.example.server.repository;

import com.example.server.entity.ManagerEntity;
import com.example.server.entity.RentFlatEntity;
import com.example.server.model.RentFlat;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RentFlatRepository extends CrudRepository<RentFlatEntity, Long>{
    RentFlatEntity findOneById(Long id);

    List<RentFlatEntity> findAllByManagerEntity(ManagerEntity managerEntity);

    RentFlatEntity findOneByFlatInfoEntityId(Long id);
}
