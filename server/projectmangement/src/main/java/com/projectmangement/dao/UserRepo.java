package com.projectmangement.dao;
import org.springframework.data.repository.CrudRepository;

import com.projectmangement.entities.User;

public interface UserRepo extends CrudRepository<User,Integer> {
    public User findById(int id );

    
}
