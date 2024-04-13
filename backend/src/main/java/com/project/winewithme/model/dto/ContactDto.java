package com.project.winewithme.model.dto;

import lombok.Data;
@Data
public class ContactDto {
    private String name;
    private String email;
    private String subject;
    private String message;

    public ContactDto() {
    }

    public ContactDto(String name, String email, String subject, String message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}