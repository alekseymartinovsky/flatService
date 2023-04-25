package com.example.server.service;

import com.example.server.entity.ClientEntity;
import com.example.server.model.Role;
import com.example.server.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;
    private static final String EMAIL_REGEX = "^[\\w\\d._%+-]+@[\\w\\d.-]+\\.[a-z]{2,}$";

    public String registration(ClientEntity clientEntity) throws Exception {
        Pattern emailPattern = Pattern.compile(EMAIL_REGEX);
        Matcher emailMatcher = emailPattern.matcher(clientEntity.getEmail());
        if (!emailMatcher.matches()) {
            throw new Exception("Введите правильный email");
        }

        if (clientEntity.getPassword().length() < 8) {
            throw new Exception("Короткий пароль");
        }
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
