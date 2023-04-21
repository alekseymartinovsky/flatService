package com.example.server.model;

import com.example.server.entity.FlatInfoEntity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FlatInfo {
    private Long id;

    private String city;
    private String street;
    private String house;
    private String flat;
    private Float price;
    private Float square;
    private Integer balcony;
    private String repair;
    private Integer rooms;
    private Integer floor;
    private String description;

    public static FlatInfo toModel(FlatInfoEntity flatInfoEntity) {
        FlatInfo flatInfo = new FlatInfo();
        flatInfo.setId(flatInfoEntity.getId());
        flatInfo.setCity(flatInfoEntity.getCity());
        flatInfo.setStreet(flatInfoEntity.getStreet());
        flatInfo.setHouse(flatInfoEntity.getHouse());
        flatInfo.setFlat(flatInfoEntity.getFlat());
        flatInfo.setPrice(flatInfoEntity.getPrice());
        flatInfo.setSquare(flatInfoEntity.getSquare());
        flatInfo.setBalcony(flatInfoEntity.getBalcony());
        flatInfo.setRepair(flatInfoEntity.getRepair());
        flatInfo.setRooms(flatInfoEntity.getRooms());
        flatInfo.setFloor(flatInfoEntity.getFloor());
        flatInfo.setDescription(flatInfoEntity.getDescription());
        return flatInfo;
    }

    public static FlatInfoEntity toEntity(FlatInfo flatInfo){
        FlatInfoEntity flatInfoEntity = new FlatInfoEntity();
        flatInfoEntity.setCity(flatInfo.getCity());
        flatInfoEntity.setStreet(flatInfo.getStreet());
        flatInfoEntity.setHouse(flatInfo.getHouse());
        flatInfoEntity.setFlat(flatInfo.getFlat());
        flatInfoEntity.setPrice(flatInfo.getPrice());
        flatInfoEntity.setSquare(flatInfo.getSquare());
        flatInfoEntity.setBalcony(flatInfo.getBalcony());
        flatInfoEntity.setRepair(flatInfo.getRepair());
        flatInfoEntity.setRooms(flatInfo.getRooms());
        flatInfoEntity.setFloor(flatInfo.getFloor());
        flatInfoEntity.setDescription(flatInfo.getDescription());
        return flatInfoEntity;
    }
}
