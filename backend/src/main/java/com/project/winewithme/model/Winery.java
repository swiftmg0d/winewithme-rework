package com.project.winewithme.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Winery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String categoryName;
    private String website;
    private String phone;
    private String totalScore;
    private String reviewsCount;
    @ManyToOne
    private Address address;

    public Winery(String title, String categoryName, String website, String phone, String totalScore, String reviewsCount, Address address) {
        this.title = title;
        this.categoryName = categoryName;
        this.website = website;
        this.phone = phone;
        this.totalScore = totalScore;
        this.reviewsCount = reviewsCount;
        this.address = address;
    }
}
