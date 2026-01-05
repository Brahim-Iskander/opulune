package com.opulune.opulune.controller;

import com.opulune.opulune.model.Product;
import com.opulune.opulune.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Public: anyone can see products
    @GetMapping("/getallproducts")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Admin-only endpoints: manual role check
    @PostMapping("/addproduct")
    public ResponseEntity<?> addProduct(@RequestBody Product product, HttpServletRequest request) {
        String role = request.getHeader("user-role");
        if (!"admin".equals(role)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("message", "Access denied: Admins only"));
        }
        return ResponseEntity.ok(productRepository.save(product));
    }

    @PutMapping("/updateproduct/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable String id, @RequestBody Product product,
                                           HttpServletRequest request) {
        String role = request.getHeader("user-role");
        if (!"admin".equals(role)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("message", "Access denied: Admins only"));
        }
        product.setId(id);
        return ResponseEntity.ok(productRepository.save(product));
    }

    @DeleteMapping("/deleteproduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable String id, HttpServletRequest request) {
        String role = request.getHeader("user-role");
        if (!"admin".equals(role)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("message", "Access denied: Admins only"));
        }
        productRepository.deleteById(id);
        return ResponseEntity.ok(Map.of("message", "Product deleted successfully"));
    }
}
