package com.example.server.service;

import com.example.server.entity.FlatEntity;
import com.example.server.entity.FlatImageEntity;
import com.example.server.entity.ManagerEntity;
import com.example.server.repository.FlatImageRepository;
import com.example.server.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Null;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ImageService {

    @Autowired
    ManagerRepository managerRepository;

    @Autowired
    FlatImageRepository flatImageRepository;

    public void uploadImage(MultipartFile imageFile, String token) throws Exception {
        try {
            ManagerEntity manager = managerRepository.findOneByToken(token);
            FlatImageEntity flatImageEntity = new FlatImageEntity();
            flatImageEntity.setManagerId(manager.getId());


            List<FlatImageEntity> images = flatImageRepository.findAllByManagerId(manager.getId());
            String newName = "";
            if(images.size() != 0){
                String lastImageName = images.get(images.size()-1).getName();
                Integer lastImageNumber = Integer.parseInt(lastImageName.substring(lastImageName.indexOf("-") + 1, lastImageName.indexOf(".")));
                lastImageNumber++;
                newName = manager.getId().toString() + "-" + lastImageNumber + ".jpg";
            }else{
                newName = manager.getId().toString() + "-" + "1" + ".jpg";
            }

            byte[] bytes = imageFile.getBytes();
            Path path = Paths.get("D:\\university\\cp\\flatService\\server\\src\\main\\resources\\static\\images\\" + newName);
            Files.write(path, bytes);

            FlatImageEntity newFlatImage = new FlatImageEntity();
            newFlatImage.setIsNewUpload(true);
            newFlatImage.setName(newName);
            newFlatImage.setManagerId(manager.getId());
            flatImageRepository.save(newFlatImage);
        } catch (IOException e) {
            throw new Exception("Не удалось загрузить картинку");
    }
    }
}
