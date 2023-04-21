package com.example.server.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PriceConverter {
    private Double bun;
    private Double eur;
    private Double usd;
}
