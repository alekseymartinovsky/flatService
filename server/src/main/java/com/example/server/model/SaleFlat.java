package com.example.server.model;

import com.example.server.entity.FlatImageEntity;
import com.example.server.entity.SaleFlatEntity;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class SaleFlat {
    private Long id;
    private FlatInfo flatInfo;

    private List<String> images;

    public static SaleFlat toModel(SaleFlatEntity flatEntity){
        SaleFlat saleFlat = new SaleFlat();
        saleFlat.setId(flatEntity.getId());
        saleFlat.setFlatInfo(FlatInfo.toModel(flatEntity.getFlatInfoEntity()));
        List<String> imagesPath = new ArrayList<>();
        for(FlatImageEntity image : flatEntity.getFlatImageEntities()) {
            imagesPath.add(image.getName());
        }
        saleFlat.setImages(imagesPath);
        return saleFlat;
    }

}
