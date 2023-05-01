package com.example.server.model;

import com.example.server.entity.ClientEntity;
import com.example.server.entity.RentFlatEntity;
import com.example.server.entity.SaleFlatEntity;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class Client extends User {
    private String name;
    private String surname;
    private String phone;
    private String email;

    private List<RentFlat> favoriteRentFlat;
    private List<SaleFlat> favoriteSaleFlat;

    public static Client toJson(ClientEntity clientEntity){
        Client client = new Client();
        client.setLogin(clientEntity.getLogin());
        client.setName(client.getName());
        client.setPhone(client.getPhone());
        client.setSurname(client.getSurname());

        List<RentFlat> rentFlats = new ArrayList<>();
        for(RentFlatEntity rentFlat: clientEntity.getFavoriteRentFlat()){
            rentFlats.add(RentFlat.toModel(rentFlat));
        }
        client.setFavoriteRentFlat(rentFlats);

        List<SaleFlat> saleFlats = new ArrayList<>();
        for(SaleFlatEntity saleFlat: clientEntity.getFavoriteSaleFlat()){
            saleFlats.add(SaleFlat.toModel(saleFlat));
        }
        client.setFavoriteSaleFlat(saleFlats);

        return client;
    }
}
