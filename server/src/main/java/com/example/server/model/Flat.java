package com.example.server.model;

import com.example.server.entity.FlatEntity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Flat {
    private Long id;
    private FlatInfo flatInfo;
    private Manager manager;

    public static Flat toModel(FlatEntity flatEntity){
        Flat flat = new Flat();
        flat.setId(flatEntity.getId());
        flat.setFlatInfo(FlatInfo.toModel(flatEntity.getFlatInfoEntity()));
        flat.setManager(Manager.toModel(flatEntity.getManagerEntity()));
        return flat;
    }
}
