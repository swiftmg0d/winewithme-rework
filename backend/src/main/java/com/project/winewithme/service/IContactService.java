package com.project.winewithme.service;

import com.project.winewithme.model.Contact;
import com.project.winewithme.model.dto.ContactDto;
import com.project.winewithme.repository.ContactRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class IContactService implements ContactService {
    private final ContactRepository contactRepository;

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @Override
    public Contact saveContact(ContactDto contactDto) {
        return contactRepository.save(new Contact(contactDto.getName(),contactDto.getEmail(),contactDto.getSubject(),contactDto.getMessage()));
    }


}
