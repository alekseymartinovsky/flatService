package com.example.server.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "currency")
public class CurrencyEntity {
    @Id
    private Long id;

    private Double USD;
    private Double EUR;
    private Date updateDate;
}
