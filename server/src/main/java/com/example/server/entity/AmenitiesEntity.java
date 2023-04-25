package com.example.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class AmenitiesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Boolean hotWater;
    private Boolean essentials;
    private Boolean bedLinen;
    private Boolean mosquitoNet;
    private Boolean crib;
    private Boolean heating;
    private Boolean wifi;
    private Boolean refrigerator;
    private Boolean electricKettle;
    private Boolean tv;
    private Boolean cooking;
    private Boolean coffeeMaker;
    private Boolean parking;
    private Boolean washingMachine;
    private Boolean airConditioning;
    private Boolean fireSafety;
}
