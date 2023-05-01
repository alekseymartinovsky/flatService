package com.example.server.service;

import com.example.server.entity.UserEntity;
import com.example.server.repository.AdminRepository;
import com.example.server.repository.ClientRepository;
import com.example.server.repository.ManagerRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.util.Date;

@Service
public class AuthService {

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    ManagerRepository managerRepository;
    public boolean clientAuth(String token) throws Exception {
        //TODO: реализовать проверку токена по login
        if(clientRepository.findOneByToken(token) != null){
            return true;
        }
        throw new Exception("Необходимо авторизоваться");
    }

    public boolean adminAuth(String token) throws Exception {
        if(adminRepository.findOneByToken(token) != null){
            return true;
        }
        throw new Exception("Необходимо авторизоваться");
    }

    public boolean managerAuth(String token) throws Exception {
        if(managerRepository.findOneByToken(token) != null){
            return true;
        }
        throw new Exception("Необходимо авторизоваться");
    }
}
