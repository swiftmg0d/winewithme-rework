package com.project.winewithme.service;

import com.project.winewithme.model.User;
import com.project.winewithme.model.dto.UserLoginDto;
import com.project.winewithme.model.dto.UserRegisterDto;
import com.project.winewithme.model.validate.ValidateUser;

import java.util.Optional;

public interface UserService {
    Optional<ValidateUser> registerUser(UserRegisterDto user);
    Optional<User>loginUser(UserLoginDto user);
    Optional<User>findByUsername(String username);
}
