package com.projectmangement.entities;

public class Projects {
    private String Title;
    private String Description;
    private String dueDate;

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
