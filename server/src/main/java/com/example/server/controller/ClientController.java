package com.example.server.controller;

import com.example.server.entity.ClientEntity;
import com.example.server.model.Client;
import com.example.server.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client")
@CrossOrigin("*")
public class ClientController {

    @Autowired
    ClientService clientService;

    @PostMapping("/registration")
    public ResponseEntity registration(@RequestBody ClientEntity clientEntity){
        try {
            return ResponseEntity.ok().body(clientService.registration(clientEntity));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody ClientEntity clientEntity){
        try {
            return ResponseEntity.ok().body(clientService.login(clientEntity));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/favorite")
    public ResponseEntity getFavoriteFlat(@RequestHeader String token){
        return ResponseEntity.ok().body(Client.toJson(clientService.getFavorite(token)));
    }
}
