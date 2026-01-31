package com.opulune.opulune.controller;

import com.opulune.opulune.config.ResetTokenUtil;
import com.opulune.opulune.model.User;
import com.opulune.opulune.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // DEV ONLY
public class ResetPasswordController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ResetTokenUtil resetTokenUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;

    // ========== MOBILE VERSION ==========
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPasswordMobile(@RequestBody Map<String, String> body) {

        String email = body.get("email");

        if (!userRepository.existsByEmail(email)) {
            return ResponseEntity.ok(
                Map.of(
                    "success", true,
                    "message", "If email exists, link sent"
                )
            );
        }

        String token = resetTokenUtil.generateResetToken(email);
        System.out.println("Generated reset token: " + token);

        String link = "http://192.168.1.17:8081/reset-password?token=" + token;

        String message =
                "Hello,\n\n" +
                "You requested a password reset. Click the link below:\n\n" +
                link + "\n\n" +
                "This link will expire in 15 minutes.\n\n" +
                "If you did not request this, ignore this email.\n\n" +
                "Thanks,\nOpulune Team";

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(email);
        mailMessage.setFrom("jpfdjxymjg72@melbourne.edu.pl");
        mailMessage.setSubject("Reset your password");
        mailMessage.setText(message);

        mailSender.send(mailMessage);

        return ResponseEntity.ok(
            Map.of(
                "success", true,
                "message", "Reset link sent"
            )
        );
    }

    // ========== WEB VERSION ==========
    @PostMapping("/forgot-password-web")
    public ResponseEntity<?> forgotPasswordWeb(@RequestBody Map<String, String> body) {

        String email = body.get("email");

        if (!userRepository.existsByEmail(email)) {
            return ResponseEntity.ok(
                Map.of(
                    "success", true,
                    "message", "If email exists, link sent"
                )
            );
        }

        String token = resetTokenUtil.generateResetToken(email);
        System.out.println("Generated web reset token: " + token);

        // Change this URL to your web frontend
        String link = "http://localhost:3000/auth/reset-password?token=" + token;

        String message =
                "Bonjour,\n\n" +
                "Vous avez demandé une réinitialisation de mot de passe. Cliquez sur le lien ci-dessous :\n\n" +
                link + "\n\n" +
                "Ce lien expirera dans 15 minutes.\n\n" +
                "Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.\n\n" +
                "Merci,\nOpulune Team";

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(email);
        mailMessage.setFrom("jpfdjxymjg72@melbourne.edu.pl");
        mailMessage.setSubject("Réinitialisation de votre mot de passe");
        mailMessage.setText(message);

        mailSender.send(mailMessage);

        return ResponseEntity.ok(
            Map.of(
                "success", true,
                "message", "Reset link sent"
            )
        );
    }

    // ========== COMMON RESET PASSWORD ==========
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> body) {

        String token = body.get("token");
        String newPassword = body.get("password");

        String email = resetTokenUtil.validateResetToken(token);

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        return ResponseEntity.ok(
            Map.of(
                "success", true,
                "message", "Password updated successfully"
            )
        );
    }
}
