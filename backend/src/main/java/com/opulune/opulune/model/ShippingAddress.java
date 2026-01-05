package com.opulune.opulune.model;

import lombok.Data;

@Data
public class ShippingAddress {
    private String name;
    private String street;
    private String city;
    private String country;
}
