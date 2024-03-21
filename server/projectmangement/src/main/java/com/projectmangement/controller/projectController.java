package com.projectmangement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectmangement.entities.Projects;
import com.projectmangement.service.ProjectService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class projectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping("/projects")
    public ResponseEntity<List<Projects>> getAllProjects() {

        List<Projects> list = projectService.getAllProjects();

        if (list.size() <= 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(list);

    }

    @PostMapping("/projects")
    public ResponseEntity<Projects> addProject(@RequestBody Projects project) {

        try {
            Projects p = projectService.addProject(project);
            System.out.println("hello");
            return ResponseEntity.status(HttpStatus.CREATED).body(p);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("error");

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

        }

    }

    @GetMapping("/projects/{projectId}")
    public ResponseEntity<Projects> getProjectById(@PathVariable("projectId") int id) {

        Projects projects = projectService.getProjectById(id);
            if(projects == null){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        return ResponseEntity.of(Optional.of(projects));
    }


    @DeleteMapping("/projects/{projectId}")
    public  ResponseEntity<Void> deleteProject(@PathVariable("projectId") int id){
        try{
            this.projectService.deleteProject(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

        }
    }



}
