package com.project.winewithme.service;

import com.project.winewithme.model.Winery;

import java.util.List;
import java.util.Optional;

public interface WineryService {
    List<Winery> getAllWineries();

    Optional<Winery> getWineryById(Long id);
}
