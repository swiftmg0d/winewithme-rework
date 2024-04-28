package com.project.winewithme.service;

import com.project.winewithme.model.User;
import com.project.winewithme.model.dto.UserLoginDto;
import com.project.winewithme.model.dto.UserRegisterDto;
import com.project.winewithme.model.validate.PasswordValidator;
import com.project.winewithme.model.validate.UsernameValidator;
import com.project.winewithme.model.validate.ValidateUser;
import com.project.winewithme.model.validate.Validator;
import com.project.winewithme.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@AllArgsConstructor
public class IUserService implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public Optional<ValidateUser> registerUser(UserRegisterDto user) {

        ValidateUser validateUser=new ValidateUser();

        if(findByUsername(user.getUsername()).isEmpty()){
            validateUser.getUsernameValidator().setUnique(true);
        }
        if(Validator.checkValidation(user,validateUser.getPasswordValidator(),validateUser.getUsernameValidator())){
            userRepository.save(new User(user.getUsername(),user.getName(),user.getSurname(), passwordEncoder.encode(user.getPassword())));
        }

       return Optional.of(validateUser);

    }

    @Override
    public Optional<User> loginUser(UserLoginDto user) {

        Optional<User>currentUser=userRepository.findByUsername(user.getUsername());

        if(currentUser.isPresent()){
            if(passwordEncoder.matches(user.getPassword(),currentUser.get().getPassword())){
                return currentUser;
            }
        }
        return Optional.empty();
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
