package com.example.server.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "rentFlat")
public class RentFlatEntity extends FlatEntity {


    private Boolean longTermRental;

    @OneToOne
    AmenitiesEntity amenities;

    public static RentFlatEntity create(FlatInfoEntity flatInfo, List<FlatImageEntity> images, ManagerEntity manager, AmenitiesEntity amenities){
        RentFlatEntity rentFlatEntity = new RentFlatEntity();
        rentFlatEntity.setFlatInfoEntity(flatInfo);
        rentFlatEntity.setFlatImageEntities(images);
        rentFlatEntity.setManagerEntity(manager);
        rentFlatEntity.setAmenities(amenities);
        return rentFlatEntity;

    }

}
