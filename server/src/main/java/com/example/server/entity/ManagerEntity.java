package com.example.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "manager")
public class ManagerEntity extends UserEntity {
    private String phone;
    private String email;

}
