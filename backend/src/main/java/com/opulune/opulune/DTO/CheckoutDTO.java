package com.opulune.opulune.DTO;

import java.util.List;

public class CheckoutDTO {

    // Customer info
    private String firstName;
    private String lastName;
    private String email;
    private String phone;

    // Shipping info
    private String address;
    private String city;
    private String zipCode;
    private String country;

    // Order info
    private double total;
    private List<ProductItem> products;

    // Getters and Setters
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getZipCode() { return zipCode; }
    public void setZipCode(String zipCode) { this.zipCode = zipCode; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public double getTotal() { return total; }
    public void setTotal(double total) { this.total = total; }

    public List<ProductItem> getProducts() { return products; }
    public void setProducts(List<ProductItem> products) { this.products = products; }

    // Inner class for product items
    public static class ProductItem {
        private String id;
        private String name;
        private double price;
        private int quantity;
        private String url;

        // Getters and Setters
        public String getId() { return id; }
        public void setId(String id) { this.id = id; }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public double getPrice() { return price; }
        public void setPrice(double price) { this.price = price; }

        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }

        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
    }
}
