package com.example.server.controller;

import com.example.server.entity.FlatInfoEntity;
import com.example.server.entity.RentFlatEntity;
import com.example.server.model.RentFlat;
import com.example.server.service.AuthService;
import com.example.server.service.ImageService;
import com.example.server.service.RentFlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    public ResponseEntity add(@RequestBody FlatInfoEntity flatInfo, @RequestHeader String token){
        try {
            authService.managerAuth(token);
            RentFlat rentFlat = rentFlatService.addRentFlat(flatInfo, token);
            return ResponseEntity.ok().body(rentFlat);
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

    @PostMapping("/update")
    public ResponseEntity update(@RequestBody FlatInfoEntity flatInfo, @RequestHeader String token){
        try {
            authService.managerAuth(token);
            return ResponseEntity.ok().body(rentFlatService.update(flatInfo, token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
