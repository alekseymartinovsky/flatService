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

    @ManyToMany
    private List<FlatImageEntity> flatImageEntities;

    private Boolean longTermRental;
}
