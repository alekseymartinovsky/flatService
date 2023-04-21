package com.example.server.controller;


import com.example.server.model.ParamsForCalcCredit;
import com.example.server.service.CreditService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Date;

@RestController
@RequestMapping("/creditInfo")
@CrossOrigin("*")
public class CreditParamsController {

    @Autowired
    CreditService creditService;

    @GetMapping("/getCreditRate")
    public ResponseEntity getCreditRate(){
        try {
            return ResponseEntity.ok().body(creditService.getCreditParams());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Не удалось получить доступ к ставке по кредиту");
        }
    }

    @PostMapping("/calcCredit")
    public ResponseEntity calcCredit(@RequestBody ParamsForCalcCredit paramsForCalcCredit){
        return ResponseEntity.ok().body(creditService.calcCredit(paramsForCalcCredit));
    }
}
