package com.project.winewithme.repository;

import com.project.winewithme.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WineryRepository extends JpaRepository<Winery, Long> {
}
