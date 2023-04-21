package com.example.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class CreditParams {

    @Id
    private Long id;

    private Double rate;

    private Date updateDate;

    private Integer maxMonths;
}
