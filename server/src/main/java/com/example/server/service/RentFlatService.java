package com.example.server.service;

import com.example.server.entity.FlatImageEntity;
import com.example.server.entity.FlatInfoEntity;
import com.example.server.entity.ManagerEntity;
import com.example.server.entity.RentFlatEntity;
import com.example.server.model.FlatInfo;
import com.example.server.model.RentFlat;
import com.example.server.repository.FlatImageRepository;
import com.example.server.repository.FlatInfoRepository;
import com.example.server.repository.ManagerRepository;
import com.example.server.repository.RentFlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RentFlatService {

    @Autowired
    RentFlatRepository rentFlatRepository;

    @Autowired
    FlatInfoRepository flatInfoRepository;

    @Autowired
    ManagerRepository managerRepository;

    @Autowired
    FlatImageRepository flatImageRepository;

    public List<RentFlat> getAllRentFlats(){
        Iterable<RentFlatEntity> rentFlatEntities = rentFlatRepository.findAll();
        List<RentFlat> rentFlats = new ArrayList<RentFlat>();
        for(RentFlatEntity rentFlatEntity : rentFlatEntities){
            rentFlats.add(RentFlat.toModel(rentFlatEntity));
        }
        return rentFlats;
    }

     public RentFlat addRentFlat(FlatInfoEntity flatInfoEntity, String token){
        ManagerEntity managerEntity = managerRepository.findOneByToken(token);
        List<FlatImageEntity> flatImageEntities = flatImageRepository.findAllByManagerIdAndIsNewUpload(managerEntity.getId(), true);
        for(FlatImageEntity image: flatImageEntities){
            image.setIsNewUpload(false);
            flatImageRepository.save(image);
        }
        FlatInfoEntity saveFlatInfoEntity = flatInfoRepository.save(flatInfoEntity);
        RentFlatEntity rentFlatEntity = new RentFlatEntity();
        rentFlatEntity.setFlatInfoEntity(saveFlatInfoEntity);
        rentFlatEntity.setFlatImageEntities(flatImageEntities);
        rentFlatEntity.setManagerEntity(managerEntity);
        return RentFlat.toModel(rentFlatRepository.save(rentFlatEntity));
     }

     public RentFlat getRentFlatById(Long id) throws Exception {
        RentFlatEntity rentFlat = rentFlatRepository.findOneById(id);
        if(rentFlat == null){
            throw new Exception("Квартира с таким id не найдена");
        }
        return RentFlat.toModel(rentFlat);
     }

     public List<RentFlat> getRentFlatByManager(String token){
        ManagerEntity managerEntity = managerRepository.findOneByToken(token);
        List<RentFlatEntity> rentFlatEntities = rentFlatRepository.findAllByManagerEntity(managerEntity);

        List<RentFlat> rentFlats = new ArrayList<RentFlat>();
        for(RentFlatEntity rentFlatEntity : rentFlatEntities){
            rentFlats.add(RentFlat.toModel(rentFlatEntity));
        }
        return rentFlats;
    }

    public FlatInfo update(FlatInfoEntity flatInfo, String token){
        FlatInfoEntity flatInfoOld = flatInfoRepository.findById(flatInfo.getId()).get();
        if(flatInfoOld != null){
            return FlatInfo.toModel(flatInfoRepository.save(flatInfo));
        }
        return null;
    }

}
