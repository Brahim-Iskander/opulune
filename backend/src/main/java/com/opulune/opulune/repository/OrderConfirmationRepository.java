package com.opulune.opulune.repository;
import java.util.List;

import com.opulune.opulune.model.OrderConfirmation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface OrderConfirmationRepository
        extends MongoRepository<OrderConfirmation, String> {

    Optional<OrderConfirmation> findByOrderNumber(String orderNumber);
    List<OrderConfirmation> findByEmail(String email);
}
