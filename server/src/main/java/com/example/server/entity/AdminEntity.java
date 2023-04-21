package com.example.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "administrator")
public class AdminEntity extends UserEntity {
}
