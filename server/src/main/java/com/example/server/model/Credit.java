package com.example.server.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Credit {
    private Double sumCredit;
    private Integer month;
    private Double rate;
    private Double overpayment;
    private Double resultSum;
}
