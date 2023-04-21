package com.example.server.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@MappedSuperclass
@Table(name = "flat")
public class FlatEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private FlatInfoEntity flatInfoEntity;

    @ManyToOne
    private ManagerEntity managerEntity;
}
