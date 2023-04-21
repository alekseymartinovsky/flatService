package com.example.server.service;

import com.example.server.entity.ManagerEntity;
import com.example.server.model.Role;
import com.example.server.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManagerService {

    @Autowired
    ManagerRepository managerRepository;

    public String add(ManagerEntity managerEntity){
        managerEntity.setToken("token");
        managerEntity.setRole(Role.MANAGER);
        managerRepository.save(managerEntity);
        return "Зарегистрирован";
    }
}
