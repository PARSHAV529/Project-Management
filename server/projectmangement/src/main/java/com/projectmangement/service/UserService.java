package com.projectmangement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.projectmangement.dao.UserRepo;
import com.projectmangement.entities.User;

@Component
public class UserService {

    @Autowired
    private UserRepo userRepo;



    public List<User> getAllUsers() {
        List<User> users = (List<User>) this.userRepo.findAll();
        return users;
    }

    public User addUser(User user) {
        User res = userRepo.save(user);
        return res;
    }

    
 
}
