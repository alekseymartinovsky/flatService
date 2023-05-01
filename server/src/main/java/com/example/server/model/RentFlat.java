package com.example.server.model;

import com.example.server.entity.FlatImageEntity;
import com.example.server.entity.RentFlatEntity;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class RentFlat {
    private Long id;
    private FlatInfo flatInfo;
    private List<String> images;
    private Boolean longTermRental;
    private Amenities amenities;
    private Manager manager;

    public static RentFlat toModel(RentFlatEntity rentFlatEntity){
        RentFlat rentFlat = new RentFlat();
        rentFlat.setId(rentFlatEntity.getId());
        rentFlat.setFlatInfo(FlatInfo.toModel(rentFlatEntity.getFlatInfoEntity()));
        rentFlat.setAmenities(Amenities.toModel(rentFlatEntity.getAmenities()));
        List<String> imagesPath = new ArrayList<>();
        for(FlatImageEntity image : rentFlatEntity.getFlatImageEntities()) {
            imagesPath.add(image.getName());
        }
        rentFlat.setImages(imagesPath);
        rentFlat.setLongTermRental(rentFlatEntity.getLongTermRental());
        rentFlat.setManager(Manager.toModel(rentFlatEntity.getManagerEntity()));
        return rentFlat;
    }


}
