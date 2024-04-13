package com.project.winewithme.web.controller;

import com.project.winewithme.model.Winery;
import com.project.winewithme.repository.WineryRepository;
import com.project.winewithme.service.WineryService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/api/winery")
public class WineryController {
    private final WineryService wineryService;
    @GetMapping("/list")
    public List<Winery>getAllWineries(){
        return this.wineryService.getAllWineries();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Winery>findWineryById(@PathVariable Long id){
        return this.wineryService.getWineryById(id).map(i->ResponseEntity.ok().body(i)).
                orElse(ResponseEntity.notFound().build());
    }
}
