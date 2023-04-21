package com.example.server.controller;

import com.example.server.entity.ManagerEntity;
import com.example.server.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manager")
@CrossOrigin("*")
public class ManagerController {

    @Autowired
    ManagerService managerService;

    @PostMapping("/registration")
    public String registration(@RequestBody ManagerEntity managerEntity){
        return managerService.add(managerEntity);
    }
}
