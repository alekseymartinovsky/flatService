package com.example.server.service;

import com.example.server.repository.AdminRepository;
import com.example.server.repository.ClientRepository;
import com.example.server.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return true; // TODO реализовать проверку
//        if(managerRepository.findOneByToken(token) != null){
//            return true;
//        }
//        throw new Exception("Необходимо авторизоваться");
    }


}
