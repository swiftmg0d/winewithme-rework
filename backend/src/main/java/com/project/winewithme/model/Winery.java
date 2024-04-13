package com.project.winewithme.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Winery {
    @Id
    private Long id;
    private String title;
    private String categoryName;
    private String website;
    private String phone;
    private String totalScore;
    private String reviewsCount;
    @ManyToOne(cascade = CascadeType.ALL)
    private Address address;
}
