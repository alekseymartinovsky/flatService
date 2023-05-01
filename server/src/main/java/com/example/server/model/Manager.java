package com.example.server.model;

import com.example.server.entity.ManagerEntity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Manager extends User{
    private String phone;
    private String email;

    static public Manager toModel(ManagerEntity managerEntity){
        Manager manager = new Manager();
        manager.setId(managerEntity.getId());
        manager.setLogin(managerEntity.getLogin());
        manager.setPhone(managerEntity.getPhone());
        manager.setEmail(managerEntity.getEmail());
        return manager;
    }

}
