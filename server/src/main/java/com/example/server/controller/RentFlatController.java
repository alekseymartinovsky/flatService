package com.example.server.controller;

import com.example.server.entity.FlatInfoEntity;
import com.example.server.entity.RentFlatEntity;
import com.example.server.entity.SaleFlatEntity;
import com.example.server.model.RentFlat;
import com.example.server.service.AuthService;
import com.example.server.service.ImageService;
import com.example.server.service.RentFlatService;
import com.itextpdf.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
@RequestMapping("/rentFlat")
@CrossOrigin("*")
public class RentFlatController {
    @Autowired
    RentFlatService rentFlatService;

    @Autowired
    AuthService authService;

    @Autowired
    ImageService imageService;

    @PostMapping("/add")
    public ResponseEntity add(@RequestBody RentFlat rentFlat, @RequestHeader String token){
        try {
            authService.managerAuth(token);
            RentFlat saveFlat = rentFlatService.addRentFlat(rentFlat, token);
            return ResponseEntity.ok().body(saveFlat);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity getAll(){
        return ResponseEntity.ok().body(rentFlatService.getAllRentFlats());
    }

    @GetMapping("/getById")
    public ResponseEntity getById(@RequestHeader Long id){
        try {
            return ResponseEntity.ok().body(rentFlatService.getRentFlatById(id));
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/uploadImage")
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile imageFile, @RequestHeader String token) {
        try {
            imageService.uploadImage(imageFile, token);
            return ResponseEntity.ok().body("Картинка загружена");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Ошибка загрузки картинки");
        }
    }

    @GetMapping("/getByManager")
    public ResponseEntity getByManager(@RequestHeader String token){
        try {
            return ResponseEntity.ok().body(rentFlatService.getRentFlatByManager(token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update")
    public ResponseEntity update(@RequestBody RentFlat rentFlat, @RequestHeader String token){
        try {
            authService.managerAuth(token);
            return ResponseEntity.ok().body(rentFlatService.update(rentFlat, token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity delete(@RequestParam Long id, @RequestHeader String token) {
        try {
            authService.managerAuth(token);
            rentFlatService.delete(id);
            return ResponseEntity.ok().body("Объявление успешно удалено");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping(path = "/document", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity getPdf(@RequestParam Long rentId){

        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDisposition(ContentDisposition.builder("inline")
                    .filename("document.pdf").build());
            return ResponseEntity.ok().headers(headers).body(rentFlatService.getPdf(rentId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Не удалось создать pdf документ");
        }
    }

    @PostMapping("/addToFavorite")
    public ResponseEntity saveToFavorite(@RequestHeader String token, @RequestBody RentFlatEntity rentFlatEntity){
        return ResponseEntity.ok().body(rentFlatService.addToFavorite(rentFlatEntity, token));
    }

    @PostMapping("/removeFromFavorite")
    public ResponseEntity removeFromFavorite(@RequestHeader String token, @RequestBody RentFlatEntity rentFlatEntity){
        return ResponseEntity.ok().body(rentFlatService.removeFromFavorite(rentFlatEntity, token));
    }

}
