package com.project.winewithme.service;

import com.project.winewithme.model.Winery;
import com.project.winewithme.repository.WineryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class IWineryService implements WineryService {
    private final WineryRepository wineryRepository;

    @Override
    public List<Winery> getAllWineries() {
        return wineryRepository.findAll();
    }

    @Override
    public Optional<Winery> getWineryById(Long id) {
        return wineryRepository.findById(id);
    }
}
