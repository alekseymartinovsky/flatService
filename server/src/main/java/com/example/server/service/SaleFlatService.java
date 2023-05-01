package com.example.server.service;

import com.example.server.entity.*;
import com.example.server.model.FlatInfo;
import com.example.server.model.SaleFlat;
import com.example.server.repository.*;
import com.example.server.utils.PdfBuilder;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
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

    @Autowired
    ClientRepository clientRepository;

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
        List<FlatImageEntity> flatImageEntities = flatImageRepository.findAllByManagerIdAndIsNewUpload(managerEntity.getId(), true);
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

    public ClientEntity addToFavorite(SaleFlatEntity saleFlatEntity, String token){
        SaleFlatEntity saveSaleFlat = saleFlatRepository.findFirstById(saleFlatEntity.getId());
        ClientEntity client = clientRepository.findOneByToken(token);
        List<SaleFlatEntity> favoriteSaleFlat = client.getFavoriteSaleFlat();
        favoriteSaleFlat.add(saveSaleFlat);
        client.setFavoriteSaleFlat(favoriteSaleFlat);
        return clientRepository.save(client);
    }

    public ClientEntity removeFromFavorite(SaleFlatEntity saleFlatEntity, String token){
        SaleFlatEntity saveSaleFlat = saleFlatRepository.findFirstById(saleFlatEntity.getId());
        ClientEntity client = clientRepository.findOneByToken(token);
        List<SaleFlatEntity> favoriteSaleFlat = client.getFavoriteSaleFlat();
        favoriteSaleFlat.remove(saveSaleFlat);
        client.setFavoriteSaleFlat(favoriteSaleFlat);
        return clientRepository.save(client);
    }

    public byte[] getPdf(Long id) throws DocumentException, IOException {
        SaleFlatEntity saleFlat = saleFlatRepository.findFirstById(id);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfBuilder pdfBuilder = new PdfBuilder();
        Document document =pdfBuilder.createPDFfromRentFlat(saleFlat, baos);
        byte[] pdfBytes = baos.toByteArray();
        return pdfBytes;
    }
}
