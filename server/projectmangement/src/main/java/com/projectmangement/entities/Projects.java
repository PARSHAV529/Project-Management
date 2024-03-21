package com.projectmangement.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Projects {
    

   

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "Project_id")
    private int id ;
    private String Title;
    private String Description;
    private String dueDate;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    @Override
    public String toString() {
        return "Projects [Title=" + Title + ", Description=" + Description + ", dueDate=" + dueDate + "]";
    }

    public Projects() {
    }

    public Projects(String title, String description, String dueDate) {
        Title = title;
        Description = description;
        this.dueDate = dueDate;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

}
