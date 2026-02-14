package com.Assignment.Deepak_App.controller;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "SignUp")
public class SignUp {
    @Id
    private String id;
    private String name;
    private String dob;
    private String email;
    private String password;

    public SignUp() {
    }

    public SignUp(String name, String dob, String eMail, String password) {
        this.name = name;
        this.dob = dob;
        this.email = eMail;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
