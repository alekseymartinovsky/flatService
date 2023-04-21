package com.example.server.entity;

import com.example.server.model.FlatInfo;
import com.example.server.model.SaleFlat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "flatInfo")
public class FlatInfoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String city; 
    private String street;
    private String house;
    private String flat;
    private Float price;
    private Float square;
    private Integer balcony;
    private String repair;
    private Integer rooms;
    private Integer floor;
    private String description;
}
