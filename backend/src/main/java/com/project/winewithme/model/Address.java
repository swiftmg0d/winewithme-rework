package com.project.winewithme.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    @Id
    private  Long id;
    private String address;
    private String street;
    private String city;
    private String countryCode;
    private String location;
    private String plusCode;
    private String postalCode;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Winery>list0fWineries;
}
