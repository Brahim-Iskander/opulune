package com.opulune.opulune.model;

import lombok.Data;

@Data
public class OrderItem {
    private String id;
    private String name;
    private double price;
    private int quantity;
    private String url;
}
