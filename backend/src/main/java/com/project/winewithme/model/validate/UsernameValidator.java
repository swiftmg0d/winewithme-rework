package com.project.winewithme.model.validate;

import lombok.Data;

@Data
public class UsernameValidator {
    private boolean valid;
    private boolean unique;

    public UsernameValidator() {
        this.valid = false;
        this.unique = false;
    }

    public boolean isValid() {
        return valid && unique;
    }
}
