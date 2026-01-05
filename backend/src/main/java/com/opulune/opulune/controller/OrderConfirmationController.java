package com.opulune.opulune.controller;

import com.opulune.opulune.model.OrderConfirmation;
import com.opulune.opulune.repository.OrderConfirmationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
@CrossOrigin(origins = {"https://opulune.netlify.app", "http://localhost:3000"})  // <-- allow your React app
public class OrderConfirmationController {

    private final OrderConfirmationRepository repository;

    public OrderConfirmationController(OrderConfirmationRepository repository) {
        this.repository = repository;
    }

    // ✅ SAVE confirmation
    @PostMapping("/save-confirmation")
    public ResponseEntity<OrderConfirmation> save(
            @RequestBody OrderConfirmation confirmation) {

        OrderConfirmation saved = repository.save(confirmation);
        return ResponseEntity.ok(saved);
    }

}
