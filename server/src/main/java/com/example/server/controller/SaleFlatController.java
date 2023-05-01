package com.example.server.controller;

import com.example.server.entity.SaleFlatEntity;
import com.example.server.model.SaleFlat;
import com.example.server.service.AuthService;
import com.example.server.service.SaleFlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/saleFlat")
@CrossOrigin("*")
public class SaleFlatController {

    @Autowired
    SaleFlatService saleFlatService;

    @Autowired
    AuthService authService;

    @PostMapping("/add")
    public ResponseEntity add(@RequestBody SaleFlat saleFlat, @RequestHeader String token){
        try {
            authService.managerAuth(token);
            return ResponseEntity.ok().body(saleFlatService.addSaleFlat(saleFlat, token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/edit")
    public ResponseEntity edit(@RequestBody SaleFlat saleFlat, @RequestHeader String token){
        try {
            authService.managerAuth(token);
            return ResponseEntity.ok().body(saleFlatService.editSaleFlat(saleFlat, token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity getAll(){
        return ResponseEntity.ok().body(saleFlatService.getAllSaleFlats());
    }

    @GetMapping("/getById")
    public ResponseEntity getById(@RequestHeader Long id){
        try {
            return ResponseEntity.ok().body(saleFlatService.getSaleFlatById(id));
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/getByManager")
    public ResponseEntity getByManager(@RequestHeader String token){
        try {
            return ResponseEntity.ok().body(saleFlatService.getSaleFlatByManager(token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping(path = "/document", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity getPdf(@RequestParam Long saleId){

        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDisposition(ContentDisposition.builder("inline")
                    .filename("document.pdf").build());
            return ResponseEntity.ok().headers(headers).body(saleFlatService.getPdf(saleId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Не удалось создать pdf документ");
        }
    }

    @PostMapping("/addToFavorite")
    public ResponseEntity saveToFavorite(@RequestHeader String token, @RequestBody SaleFlatEntity saleFlatEntity){
        return ResponseEntity.ok().body(saleFlatService.addToFavorite(saleFlatEntity, token));
    }

    @PostMapping("/removeFromFavorite")
    public ResponseEntity removeFromFavorite(@RequestHeader String token, @RequestBody SaleFlatEntity saleFlatEntity){
        return ResponseEntity.ok().body(saleFlatService.removeFromFavorite(saleFlatEntity, token));
    }

}
