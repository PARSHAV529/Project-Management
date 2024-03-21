package com.projectmangement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectmangement.entities.User;
import com.projectmangement.service.UserService;

@RestController
public class userController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {

        List<User> list = userService.getAllUsers();

        if (list.size() <= 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(list);

    }


    @PostMapping("/users")
    public ResponseEntity<User> addProject(@RequestBody User user) {

        try {
            User p = userService.addUser(user);
            System.out.println("hello");
            return ResponseEntity.status(HttpStatus.CREATED).body(p);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("error");

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

        }

    }

    

    


    
}
