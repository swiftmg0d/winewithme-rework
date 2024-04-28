package com.project.winewithme.model.validate;

import lombok.Data;

@Data
public class ValidateUser {
    private UsernameValidator usernameValidator;
    private PasswordValidator passwordValidator;

    public ValidateUser() {
        usernameValidator = new UsernameValidator();
        passwordValidator = new PasswordValidator();
    }
    public boolean isValid(){
        return usernameValidator.isValid() && passwordValidator.isValid();
    }
}
