package com.project.winewithme.model.validate;

import com.project.winewithme.model.dto.UserRegisterDto;

import java.util.regex.Pattern;

public class Validator {

    public static boolean checkValidation(UserRegisterDto user, PasswordValidator passwordValidator, UsernameValidator usernameValidator){

        if(user.getPassword().length()>6) passwordValidator.setMinLength(true);

        if(Pattern.compile ("[!@#$%&*()_+=|<>?{}\\[\\]~-]").matcher(user.getPassword()).find()) passwordValidator.setSpecialChars(true);

        if(Pattern.compile("[A-Z]+").matcher(user.getPassword()).find()) passwordValidator.setUppercaseChars(true);

        if(Pattern.compile("[0-9]").matcher(user.getPassword()).find()) passwordValidator.setNumericChars(true);

        if(Pattern.compile("[a-zA-z]").matcher(user.getPassword()).find()) passwordValidator.setLetters(true);

        if(user.getPassword().equals(user.getConfirmPassword())) passwordValidator.setMatched(true);

        if(Pattern.compile("^[A-Za-z]\\w{5,29}$").matcher(user.getUsername()).find()) usernameValidator.setValid(true);

        return passwordValidator.isValid() && usernameValidator.isValid();
    }
}
