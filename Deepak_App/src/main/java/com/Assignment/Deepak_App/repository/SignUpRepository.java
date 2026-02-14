package com.Assignment.Deepak_App.repository;


import com.Assignment.Deepak_App.controller.SignUp;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignUpRepository extends MongoRepository<SignUp,String> {
}
