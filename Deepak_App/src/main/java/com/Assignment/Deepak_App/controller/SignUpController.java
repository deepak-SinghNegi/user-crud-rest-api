package com.Assignment.Deepak_App.controller;

import com.Assignment.Deepak_App.services.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class SignUpController {
    @Autowired
    SignUpService signUpService ;
    @RequestMapping(value = "/allUsers")
    public List<SignUp> getAllUsers(SignUp signUp){
        return signUpService.display();
    }
    @RequestMapping(value = "/newUser" , method = RequestMethod.POST)
    public SignUp addUser(@RequestBody SignUp signUp){
        return signUpService.addUser(signUp);
    }
}
