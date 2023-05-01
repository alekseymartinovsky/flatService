package com.example.server.service;

import com.example.server.entity.*;
import com.example.server.model.Amenities;
import com.example.server.model.FlatInfo;
import com.example.server.model.RentFlat;
import com.example.server.repository.*;
import com.example.server.utils.PdfBuilder;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
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

    @Autowired
    AmenitiesRepository amentitesRepository;

    @Autowired
    ClientRepository clientRepository;


    public List<RentFlat> getAllRentFlats(){
        Iterable<RentFlatEntity> rentFlatEntities = rentFlatRepository.findAll();
        List<RentFlat> rentFlats = new ArrayList<RentFlat>();
        for(RentFlatEntity rentFlatEntity : rentFlatEntities){
            rentFlats.add(RentFlat.toModel(rentFlatEntity));
        }
        return rentFlats;
    }

     public RentFlat addRentFlat(RentFlat rentFlat, String token){
        ManagerEntity managerEntity = managerRepository.findOneByToken(token);
        List<FlatImageEntity> flatImageEntities = flatImageRepository.findAllByManagerIdAndIsNewUpload(managerEntity.getId(), true);
        for(FlatImageEntity image: flatImageEntities){
            image.setIsNewUpload(false);
            flatImageRepository.save(image);
        }
        FlatInfoEntity saveFlatInfoEntity = flatInfoRepository.save(FlatInfo.toEntity(rentFlat.getFlatInfo()));
         AmenitiesEntity saveAmenitiesEntity = amentitesRepository.save(Amenities.toEntity(rentFlat.getAmenities()));

        RentFlatEntity rentFlatEntity = RentFlatEntity.create(saveFlatInfoEntity, flatImageEntities, managerEntity, saveAmenitiesEntity);
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

    public RentFlat update(RentFlat rentFlat, String token){
        ManagerEntity managerEntity = managerRepository.findOneByToken(token);
        RentFlatEntity rentFlatEntity = rentFlatRepository.findOneById(rentFlat.getId());
        FlatInfoEntity flatInfoEntity = flatInfoRepository.findById(rentFlatEntity.getFlatInfoEntity().getId()).get();

        AmenitiesEntity newAmenities = Amenities.toEntity(rentFlat.getAmenities());
        newAmenities.setId(rentFlat.getAmenities().getId());
        amentitesRepository.save(newAmenities);

        FlatInfoEntity newFlatInfoEntity = FlatInfo.toEntity(rentFlat.getFlatInfo());
        newFlatInfoEntity.setId(flatInfoEntity.getId());
        flatInfoRepository.save(newFlatInfoEntity);

        rentFlatEntity.setAmenities(newAmenities);
        rentFlatEntity.setFlatInfoEntity(newFlatInfoEntity);
        return RentFlat.toModel(rentFlatRepository.save(rentFlatEntity));
    }
    public void delete(Long id){
        rentFlatRepository.deleteById(id);
    }

    public byte[] getPdf(Long id) throws DocumentException, IOException {
        RentFlatEntity rentFlatEntity = rentFlatRepository.findOneById(id);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfBuilder pdfBuilder = new PdfBuilder();
        Document document =pdfBuilder.createPDFfromRentFlat(rentFlatEntity, baos);
        byte[] pdfBytes = baos.toByteArray();
        return pdfBytes;
    }

    public ClientEntity addToFavorite(RentFlatEntity rentFlat, String token){
        RentFlatEntity saveRentFlat = rentFlatRepository.findOneById(rentFlat.getId());
        ClientEntity client = clientRepository.findOneByToken(token);
        List<RentFlatEntity> favoriteRentFlat = client.getFavoriteRentFlat();
        favoriteRentFlat.add(saveRentFlat);
        client.setFavoriteRentFlat(favoriteRentFlat);
        return clientRepository.save(client);
    }

    public ClientEntity removeFromFavorite(RentFlatEntity rentFlatEntity, String token){
        RentFlatEntity saveRentFlat = rentFlatRepository.findOneById(rentFlatEntity.getId());
        ClientEntity client = clientRepository.findOneByToken(token);
        List<RentFlatEntity> favoriteRentFlat = client.getFavoriteRentFlat();
        favoriteRentFlat.remove(saveRentFlat);
        client.setFavoriteRentFlat(favoriteRentFlat);
        return clientRepository.save(client);
    }

}
