package com.example.server.controller;

import com.example.server.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/currency")
@CrossOrigin("*")
public class CurrencyController {

    @Autowired
    CurrencyService currencyService;
    @PostMapping("/getPrice")
    public ResponseEntity getConvertPrice(@RequestBody Map<String, Object> requestMap){
        try {
            Double price = Double.parseDouble(requestMap.get("price").toString());
            return ResponseEntity.ok().body(currencyService.getPrice(price));
        } catch (Exception e) {
            throw new RuntimeException("Не удалось получить сконвертированную цену");
        }
    }

}
