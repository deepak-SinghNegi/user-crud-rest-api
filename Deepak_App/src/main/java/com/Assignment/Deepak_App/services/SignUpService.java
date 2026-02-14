package com.Assignment.Deepak_App.services;


import com.Assignment.Deepak_App.controller.SignUp;
import com.Assignment.Deepak_App.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SignUpService {
    @Autowired
    SignUpRepository signUpRepository;
    public List<SignUp> display (){
        return signUpRepository.findAll();
    }
    public SignUp addUser(SignUp signUp){
        return signUpRepository.save(signUp);
    }
}
