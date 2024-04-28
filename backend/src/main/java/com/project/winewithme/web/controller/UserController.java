package com.project.winewithme.web.controller;

import com.project.winewithme.model.Contact;
import com.project.winewithme.model.User;
import com.project.winewithme.model.dto.ContactDto;
import com.project.winewithme.model.dto.UserLoginDto;
import com.project.winewithme.model.dto.UserRegisterDto;
import com.project.winewithme.model.validate.ValidateUser;
import com.project.winewithme.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@AllArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<ValidateUser> findWineryById(@RequestBody UserRegisterDto userRegisterDto){
        return ResponseEntity.ok().body(this.userService.registerUser(userRegisterDto).get());
    }
    @PostMapping("/login")
    public ResponseEntity<Optional<User>> findWineryById(@RequestBody UserLoginDto userLoginDto){
        return ResponseEntity.ok().body(this.userService.loginUser(userLoginDto));
    }
}
