package com.opulune.opulune.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.opulune.opulune.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
}
