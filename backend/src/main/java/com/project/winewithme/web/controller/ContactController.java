package com.project.winewithme.web.controller;

import com.project.winewithme.model.Contact;
import com.project.winewithme.model.Winery;
import com.project.winewithme.model.dto.ContactDto;
import com.project.winewithme.repository.WineryRepository;
import com.project.winewithme.service.ContactService;
import com.project.winewithme.service.WineryService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/api/contact")
public class ContactController {
    private final ContactService contactService;
    @GetMapping("/list")
    public List<Contact>getAllContacts(){
        return this.contactService.getAllContacts();
    }
    @PostMapping("/save")
    public ResponseEntity<Contact>findWineryById(@RequestBody ContactDto contactDto){
        return ResponseEntity.ok().body(this.contactService.saveContact(contactDto));
    }
}
