package com.example.server.service;

import com.example.server.entity.*;
import com.example.server.model.FlatInfo;
import com.example.server.model.SaleFlat;
import com.example.server.repository.FlatImageRepository;
import com.example.server.repository.FlatInfoRepository;
import com.example.server.repository.ManagerRepository;
import com.example.server.repository.SaleFlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.ArrayList;
import java.util.List;

@Service
public class SaleFlatService {

    @Autowired
    SaleFlatRepository saleFlatRepository;

    @Autowired
    ManagerRepository managerRepository;

    @Autowired
    FlatImageRepository flatImageRepository;

    @Autowired
    FlatInfoRepository flatInfoRepository;

    public List<SaleFlat> getAllSaleFlats(){
        Iterable<SaleFlatEntity> saleFlatEntities = saleFlatRepository.findAll();
        List<SaleFlat> saleFlats = new ArrayList<SaleFlat>();
        for(SaleFlatEntity saleFlatEntity : saleFlatEntities){
            saleFlats.add(SaleFlat.toModel(saleFlatEntity));
        }
        return saleFlats;
    }

    public SaleFlat addSaleFlat(SaleFlat saleFlat, String token){
        ManagerEntity managerEntity = managerRepository.findOneByToken(token);
        List<FlatImageEntity> flatImageEntities = flatImageRepository.findAllByManagerId(managerEntity.getId());
        for(FlatImageEntity image: flatImageEntities){
            image.setIsNewUpload(false);
            flatImageRepository.save(image);
        }
        FlatInfoEntity saveFlatInfoEntity = flatInfoRepository.save(FlatInfo.toEntity(saleFlat.getFlatInfo()));

        SaleFlatEntity saleFlatEntity = new SaleFlatEntity();
        saleFlatEntity.setId(null);
        saleFlatEntity.setManagerEntity(managerEntity);
        saleFlatEntity.setFlatInfoEntity(saveFlatInfoEntity);
        saleFlatEntity.setFlatImageEntities(flatImageEntities);

        return SaleFlat.toModel(saleFlatRepository.save(saleFlatEntity));
    }

    public String editSaleFlat(SaleFlat saleFlat, String token){
        ManagerEntity managerEntity = managerRepository.findOneByToken(token);
        SaleFlatEntity saleFlatEntity = saleFlatRepository.findFirstById(saleFlat.getId());
        FlatInfoEntity flatInfoEntity = flatInfoRepository.findById(saleFlatEntity.getFlatInfoEntity().getId()).get();

        FlatInfoEntity newFlatInfoEntity = FlatInfo.toEntity(saleFlat.getFlatInfo());
        newFlatInfoEntity.setId(flatInfoEntity.getId());

        SaleFlatEntity editSaleFlatEntity = new SaleFlatEntity();
        editSaleFlatEntity.setManagerEntity(managerEntity);
        editSaleFlatEntity.setId(saleFlatEntity.getId());
        editSaleFlatEntity.setFlatImageEntities(saleFlatEntity.getFlatImageEntities());
        editSaleFlatEntity.setFlatInfoEntity(newFlatInfoEntity);

        flatInfoRepository.save(newFlatInfoEntity);
        saleFlatRepository.save(editSaleFlatEntity);
        return "Обновлено";
    }

    public SaleFlat getSaleFlatById(Long id) throws Exception {
        SaleFlatEntity saleFlat = saleFlatRepository.findFirstById(id);
        if(saleFlat == null){
            throw new Exception("Квартира с таким id не найдена");
        }
        return SaleFlat.toModel(saleFlat);
    }

    public List<SaleFlat> getSaleFlatByManager(String token){
        ManagerEntity managerEntity = managerRepository.findOneByToken(token);
        List<SaleFlatEntity> saleFlatEntities = saleFlatRepository.findAllByManagerEntity(managerEntity);

        List<SaleFlat> saleFlats = new ArrayList<SaleFlat>();
        for(SaleFlatEntity saleFlatEntity : saleFlatEntities){
            saleFlats.add(SaleFlat.toModel(saleFlatEntity));
        }
        return saleFlats;
    }
}
