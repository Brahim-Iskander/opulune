package com.opulune.opulune.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "order_confirmations")
public class OrderConfirmation {

    @Id
    private String id;

    private String orderNumber;
    private String orderDate;
    private String email;

    private List<OrderItem> items;

    private double subtotal;
    private double tax;
    private double total;

    private ShippingAddress shippingAddress;
}
