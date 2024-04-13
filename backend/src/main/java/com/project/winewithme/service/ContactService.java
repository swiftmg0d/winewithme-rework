package com.project.winewithme.service;

import com.project.winewithme.model.Contact;
import com.project.winewithme.model.dto.ContactDto;

import java.util.List;

public interface ContactService {
    List<Contact> getAllContacts();

    Contact saveContact(ContactDto contact);
}
