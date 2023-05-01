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

    public static String getAmenitiesString(AmenitiesEntity amenities) {
        StringBuilder amenitiesString = new StringBuilder();
        if (amenities.getHotWater()) {
            amenitiesString.append("горячая вода, ");
        }
        if (amenities.getEssentials()) {
            amenitiesString.append("основные принадлежности, ");
        }
        if (amenities.getBedLinen()) {
            amenitiesString.append("постельное белье, ");
        }
        if (amenities.getMosquitoNet()) {
            amenitiesString.append("москитная сетка, ");
        }
        if (amenities.getCrib()) {
            amenitiesString.append("детская кроватка, ");
        }
        if (amenities.getHeating()) {
            amenitiesString.append("отопление, ");
        }
        if (amenities.getWifi()) {
            amenitiesString.append("Wi-Fi, ");
        }
        if (amenities.getRefrigerator()) {
            amenitiesString.append("холодильник, ");
        }
        if (amenities.getElectricKettle()) {
            amenitiesString.append("электрический чайник, ");
        }
        if (amenities.getTv()) {
            amenitiesString.append("телевизор, ");
        }
        if (amenities.getCooking()) {
            amenitiesString.append("возможность готовить, ");
        }
        if (amenities.getCoffeeMaker()) {
            amenitiesString.append("кофеварка, ");
        }
        if (amenities.getParking()) {
            amenitiesString.append("парковка, ");
        }
        if (amenities.getWashingMachine()) {
            amenitiesString.append("стиральная машина, ");
        }
        if (amenities.getAirConditioning()) {
            amenitiesString.append("кондиционер, ");
        }
        if (amenities.getFireSafety()) {
            amenitiesString.append("средства пожарной безопасности, ");
        }

        if (amenitiesString.length() > 0) {
            amenitiesString.setLength(amenitiesString.length() - 2);
        }
        return amenitiesString.toString();
    }
}
