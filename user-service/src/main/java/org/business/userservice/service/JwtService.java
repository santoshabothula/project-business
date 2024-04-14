package org.business.userservice.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.business.commonservice.entity.TxnUserEntity;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    private final static String KEY = "5367566B59703373367639792F423F4528482B4D6251655468576D5A713474375367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";

    public String generateToken(TxnUserEntity user) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, user);
    }

    public void validateToken(final String token, String password) {
        Jwts.parserBuilder().setSigningKey(getSignKey(password)).build().parseClaimsJws(token);
    }

    private String createToken(Map<String, Object> claims, TxnUserEntity user) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30))
                .signWith(getSignKey(user.getPassword()), SignatureAlgorithm.HS256).compact();
    }

    private Key getSignKey(String password) {
        byte[] keyBytes = Decoders.BASE64.decode(getKey(password));
        return Keys.hmacShaKeyFor(keyBytes);
    }

    private String getKey(String password) {
        int start = password.length();
        int end = KEY.length();
        return password + KEY.substring(start, end - 1);
    }
}
