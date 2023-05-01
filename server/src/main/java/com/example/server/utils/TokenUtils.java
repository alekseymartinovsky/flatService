package com.example.server.utils;

import com.example.server.entity.UserEntity;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.util.Date;

public class TokenUtils {
    final static String secret = "qBTmv4oXFFR2GwjexDJ4t6fsIUIUhhXqlktXjXdkcyygs8nPVEwMfo29VDRRepYDVV5IkIxBMzr7OEHXEHd37w==";

    public static String generateToken(UserEntity user){
        try {
            Instant now = Instant.now();
            Instant accessExpirationInstant = now.plusSeconds(3600);
            Date accessExpiration = Date.from(accessExpirationInstant);
            SecretKey jwtAccessSecret = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));

            return Jwts.builder()
                    .setSubject(user.getLogin())
                    .setExpiration(accessExpiration)
                    .signWith(jwtAccessSecret)
                    .compact();
        }catch (Exception e){
            System.out.println(e.getMessage());
            return "";
        }
    }

}
