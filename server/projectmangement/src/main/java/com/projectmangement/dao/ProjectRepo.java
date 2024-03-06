package com.projectmangement.dao;

import org.springframework.data.repository.CrudRepository;

import com.projectmangement.entities.Projects;

public interface ProjectRepo  extends CrudRepository<Projects,Integer>{
    public Projects findById(int id );
    
}
