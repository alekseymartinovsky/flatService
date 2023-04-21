package com.example.server.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Client extends User {
    private String name;
    private String surname;
    private String phone;
    private String email;
}
