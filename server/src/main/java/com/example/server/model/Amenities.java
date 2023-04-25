package com.example.server.model;

import com.example.server.entity.AmenitiesEntity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Amenities {
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

    static public AmenitiesEntity toEntity(Amenities amenities){
        AmenitiesEntity amenitiesEntity = new AmenitiesEntity();
        amenitiesEntity.setHotWater(amenities.getHotWater());
        amenitiesEntity.setEssentials(amenities.getEssentials());
        amenitiesEntity.setBedLinen(amenities.getBedLinen());
        amenitiesEntity.setMosquitoNet(amenities.getMosquitoNet());
        amenitiesEntity.setCrib(amenities.getCrib());
        amenitiesEntity.setHeating(amenities.getHeating());
        amenitiesEntity.setWifi(amenities.getWifi());
        amenitiesEntity.setRefrigerator(amenities.getRefrigerator());
        amenitiesEntity.setElectricKettle(amenities.getElectricKettle());
        amenitiesEntity.setTv(amenities.getTv());
        amenitiesEntity.setCooking(amenities.getCooking());
        amenitiesEntity.setCoffeeMaker(amenities.getCoffeeMaker());
        amenitiesEntity.setParking(amenities.getParking());
        amenitiesEntity.setWashingMachine(amenities.getWashingMachine());
        amenitiesEntity.setAirConditioning(amenities.getAirConditioning());
        amenitiesEntity.setFireSafety(amenities.getFireSafety());
        return amenitiesEntity;
    }

    static public Amenities toModel(AmenitiesEntity amenitiesEntity){
        Amenities amenities = new Amenities();
        amenities.setId(amenities.getId());
        amenities.setHotWater(amenitiesEntity.getHotWater());
        amenities.setEssentials(amenitiesEntity.getEssentials());
        amenities.setBedLinen(amenitiesEntity.getBedLinen());
        amenities.setMosquitoNet(amenitiesEntity.getMosquitoNet());
        amenities.setCrib(amenitiesEntity.getCrib());
        amenities.setHeating(amenitiesEntity.getHeating());
        amenities.setWifi(amenitiesEntity.getWifi());
        amenities.setRefrigerator(amenitiesEntity.getRefrigerator());
        amenities.setElectricKettle(amenitiesEntity.getElectricKettle());
        amenities.setTv(amenitiesEntity.getTv());
        amenities.setCooking(amenitiesEntity.getCooking());
        amenities.setCoffeeMaker(amenitiesEntity.getCoffeeMaker());
        amenities.setParking(amenitiesEntity.getParking());
        amenities.setWashingMachine(amenitiesEntity.getWashingMachine());
        amenities.setAirConditioning(amenitiesEntity.getAirConditioning());
        amenities.setFireSafety(amenitiesEntity.getFireSafety());
        return amenities;
    }
}
