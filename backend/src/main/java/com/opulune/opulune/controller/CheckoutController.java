package com.opulune.opulune.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import com.opulune.opulune.DTO.CheckoutDTO;
import com.opulune.opulune.DTO.ContactRequest;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"https://opulune.netlify.app", "http://localhost:3000"})  // <-- allow your React app
public class CheckoutController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/checkout")
public String checkout(@RequestBody CheckoutDTO request) {
    if (request.getEmail() == null || request.getEmail().isBlank()) {
        throw new IllegalArgumentException("Email is required for checkout.");
    }

    sendEmail(request);
    return "Checkout successful, email sent to " + request.getEmail();
}

private void sendEmail(CheckoutDTO request) {
    // --- Email to Buyer ---
    SimpleMailMessage buyerMessage = new SimpleMailMessage();
    buyerMessage.setTo(request.getEmail());
    buyerMessage.setFrom("iskanderbrahim2024@gmail.com");
    buyerMessage.setSubject("Order Confirmation");
    StringBuilder buyerText = new StringBuilder("Hi " + request.getFirstName() + ",\n\nYour order details:\n");

    request.getProducts().forEach(item -> {  
        buyerText.append("Product ID: ").append(item.getId())
                 .append(", Name: ").append(item.getName())
                 .append(", Qty: ").append(item.getQuantity())
                 .append(", Price: ").append(item.getPrice()).append("\n");
    });

    buyerText.append("\nTotal: ").append(request.getTotal());
    buyerText.append("\n\nThank you for shopping with us!");
    buyerMessage.setText(buyerText.toString());
    mailSender.send(buyerMessage);

    // --- Email to Seller ---
    SimpleMailMessage sellerMessage = new SimpleMailMessage();
    sellerMessage.setTo("iskander.skan05@gmail.com"); // replace with your email
    sellerMessage.setFrom("iskanderbrahim2024@gmail.com");
    sellerMessage.setSubject("New Order Placed by " + request.getFirstName() + " " + request.getLastName());
    StringBuilder sellerText = new StringBuilder("New order received:\n\nCustomer Info:\n");
    sellerText.append("Name: ").append(request.getFirstName()).append(" ").append(request.getLastName()).append("\n")
              .append("Email: ").append(request.getEmail()).append("\n")
              .append("Phone: ").append(request.getPhone()).append("\n")
              .append("Address: ").append(request.getAddress()).append(", ")
              .append(request.getCity()).append(", ")
              .append(request.getZipCode()).append(", ")
              .append(request.getCountry()).append("\n\nOrder Details:\n");

    request.getProducts().forEach(item -> {
        sellerText.append("Product ID: ").append(item.getId())
                  .append(", Name: ").append(item.getName())
                  .append(", Qty: ").append(item.getQuantity())
                  .append(", Price: ").append(item.getPrice()).append("\n");
    });

    sellerText.append("\nTotal: ").append(request.getTotal());
    sellerMessage.setText(sellerText.toString());
    mailSender.send(sellerMessage);
}
@PostMapping("/contact")
    public ResponseEntity<?> sendContact(@RequestBody ContactRequest request) {

        if (request.getEmail() == null || request.getEmail().isBlank()) {
            return ResponseEntity.badRequest().body("Email is required");
        }

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("iskander.skan05@gmail.com"); // your email
            message.setFrom("iskanderbrahim2024@gmail.com");
            message.setSubject("📩 New Contact Message");
            message.setText(
                    "Name: " + request.getName() + "\n" +
                    "Email: " + request.getEmail() + "\n\n" +
                    "Phone: " + request.getPhone() + "\n" +
                    "Subject: " + request.getSubject() + "\n\n" +
                    "Message:\n" + request.getMessage()
            );

            mailSender.send(message);

            return ResponseEntity.ok("Email sent successfully ✅");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity
                    .status(500)
                    .body("Failed to send email ❌" + e.getMessage());
        }
    }

}
