package com.project.winewithme.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@Table(name="user-winery")
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String name;
    private String surname;
    private String password;
    @ManyToMany
    private List<Winery> favoritesWineries;
    @ElementCollection
    @CollectionTable(name = "winery_reviews", joinColumns = @JoinColumn(name = "user_id"))
    private Map<Winery, Integer> wineriesRatings;

    public User(String username, String name, String surname, String password) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.favoritesWineries=new ArrayList<>();
        this.wineriesRatings=new HashMap<>();
    }
}
