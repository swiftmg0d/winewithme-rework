package com.project.winewithme.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String address;
    private String street;
    private String city;
    private String countryCode;
    private String location;
    private String plusCode;
    private String postalCode;

    public Address(String address, String street, String countryCode, String city, String location, String postalCode, String plusCode) {
        this.address = address;
        this.street = street;
        this.countryCode = countryCode;
        this.city = city;
        this.location = location;
        this.postalCode = postalCode;
        this.plusCode = plusCode;
    }
}
