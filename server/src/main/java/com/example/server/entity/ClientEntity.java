package com.example.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "client")
public class ClientEntity extends UserEntity {
    private String name;
    private String surname;
    private String phone;
    private String email;

    @ManyToMany
    private List<RentFlatEntity> favoriteRentFlat;

    @ManyToMany
    private List<SaleFlatEntity> favoriteSaleFlat;
}
