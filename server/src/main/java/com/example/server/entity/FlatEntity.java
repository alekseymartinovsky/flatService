package com.example.server.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@MappedSuperclass
@Table(name = "flat")
public class FlatEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    private List<FlatImageEntity> flatImageEntities;

    @OneToOne
    private FlatInfoEntity flatInfoEntity;

    @ManyToOne
    private ManagerEntity managerEntity;
}
