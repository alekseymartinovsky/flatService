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
        manager.setId(manager.getId());
        manager.setLogin(manager.getLogin());
        manager.setPhone(manager.getPhone());
        manager.setEmail(manager.getEmail());
        return manager;
    }

}
