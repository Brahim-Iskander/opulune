package com.opulune.opulune.config;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class ResetTokenUtil {

    // ✅ MUST be at least 32 chars
    private static final String SECRET =
            "super-secret-reset-password-key-32chars!";

    private static final long EXPIRATION =
            15 * 60 * 1000; // 15 minutes

    public String generateResetToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .claim("type", "RESET")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(
                        Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8)),
                        SignatureAlgorithm.HS256
                )
                .compact();
    }

    public String validateResetToken(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(SECRET.getBytes(StandardCharsets.UTF_8))
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            if (!"RESET".equals(claims.get("type"))) {
                throw new IllegalArgumentException("Invalid token type");
            }

            return claims.getSubject(); // email

        } catch (ExpiredJwtException e) {
            throw new IllegalArgumentException("Reset token expired");
        } catch (JwtException e) {
            throw new IllegalArgumentException("Invalid reset token");
        }
    }
}
