package com.example.server.repository;

import com.example.server.entity.AmenitiesEntity;
import org.springframework.data.repository.CrudRepository;

public interface AmenitiesRepository extends CrudRepository<AmenitiesEntity, Long> {
}
