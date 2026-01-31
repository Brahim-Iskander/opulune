package com.opulune.opulune.controller;

import com.opulune.opulune.model.User;
import com.opulune.opulune.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // DEV ONLY
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Register endpoint
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            // Check if email already exists
            if (userRepository.existsByEmail(user.getEmail())) {
                response.put("success", false);
                response.put("message", "Email already exists");
                return new ResponseEntity<>(response, HttpStatus.CONFLICT);
            }
            
            // Validate input
            if (user.getEmail() == null || user.getEmail().isEmpty()) {
                response.put("success", false);
                response.put("message", "Email is required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            
            if (user.getPassword() == null || user.getPassword().isEmpty()) {
                response.put("success", false);
                response.put("message", "Password is required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            
            if (user.getName() == null || user.getName().isEmpty()) {
                response.put("success", false);
                response.put("message", "Name is required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            
            user.setPassword(passwordEncoder.encode(user.getPassword()));

            // Save user to database
            User savedUser = userRepository.save(user);


            
            response.put("success", true);
            response.put("message", "User registered successfully");
            response.put("user", savedUser);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
            
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Registration failed: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Login endpoint
    @PostMapping("/login")
public ResponseEntity<Map<String, Object>> login(@RequestBody User loginRequest) {
    Map<String, Object> response = new HashMap<>();

    Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());
    if (userOptional.isEmpty() || !passwordEncoder.matches(loginRequest.getPassword(), userOptional.get().getPassword())) {
        response.put("success", false);
        response.put("message", "Invalid email or password");
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    User user = userOptional.get();
    response.put("success", true);
    response.put("message", "Login successful");
    response.put("user", user);

    // Add redirect based on role
    if ("admin".equals(user.getRole())) {
        response.put("redirect", "/admin/dashboard");
    } else {
        response.put("redirect", "/"); // normal user home page
    }

    return new ResponseEntity<>(response, HttpStatus.OK);
}
}
