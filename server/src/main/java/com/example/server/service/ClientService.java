package com.example.server.service;

import com.example.server.entity.ClientEntity;
import com.example.server.model.Role;
import com.example.server.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;

    public String registration(ClientEntity clientEntity) throws Exception {
        ClientEntity findClient = clientRepository.findOneByLogin(clientEntity.getLogin());
        if(findClient != null){
            throw new Exception("Клиент с таким логином уже существует");
        }
        clientEntity.setToken("token");
        clientEntity.setRole(Role.CLIENT);
        clientRepository.save(clientEntity);
        return "token";
    }

    public String login(ClientEntity clientEntity) throws Exception {
        ClientEntity findClient = clientRepository.findOneByLogin(clientEntity.getLogin());
        if(findClient != null){
            if(findClient.getPassword().equals(clientEntity.getPassword())){
                return "token";
            }
        }
        throw new Exception("Неверный логин или пароль");
    }


}
