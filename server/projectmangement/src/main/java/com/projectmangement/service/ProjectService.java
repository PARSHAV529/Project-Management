package com.projectmangement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.projectmangement.dao.ProjectRepo;
import com.projectmangement.entities.Projects;

@Component
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepo;

    public List<Projects> getAllProjects() {
        List<Projects> projects = (List<Projects>) this.projectRepo.findAll();
        return projects;
    }

    public Projects getProjectById(int id) {

        Projects projects = null;

        try {
            projects = this.projectRepo.findById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return projects;

    }

    public Projects addProject(Projects project) {
        Projects res = projectRepo.save(project);
        return res;
    }

    public void deleteProject(int id) {
        projectRepo.deleteById(id);
    }

    public void updateProject(Projects project,int id ){
        project.setId(id);

        projectRepo.save(project);

    }
}
