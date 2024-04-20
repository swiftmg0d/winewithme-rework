package com.project.winewithme.web.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.winewithme.model.Winery;
import com.project.winewithme.service.WineryService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/api/winery")
public class WineryController {
    private final WineryService wineryService;

    @GetMapping("/list")
    public final List<Winery> getAllWineries() {
        return this.wineryService.getAllWineries();
    }

    /**
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public final ResponseEntity<Winery> findWineryById(@PathVariable final Long id) {
        return this.wineryService.getWineryById(id).map(i -> ResponseEntity.ok().body(i))
                .orElse(ResponseEntity.notFound().build());
    }
}
