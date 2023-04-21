package com.example.server.repository;

import com.example.server.entity.FlatImageEntity;
import com.example.server.entity.ManagerEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FlatImageRepository extends CrudRepository<FlatImageEntity, Long> {
    List<FlatImageEntity> findAllByManagerId(Long id);

    List<FlatImageEntity> findAllByManagerIdAndIsNewUpload(Long managerId, Boolean isNewUpload);
}
