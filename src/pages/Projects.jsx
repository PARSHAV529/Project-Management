import React from 'react';
import ProjectCard from '../components/ProjectCard';

export const Projects = ({ project ,projects,selectedProjectId,onSelectProject }) => {
  return (
    <div className='flex mx-10 my-10  flex-wrap items-start justify-start '>
      {project &&
        project.map((project, index) => (
          <div key={index} className='w-1/3 '>
            <ProjectCard projects={projects} id={project} selectedProjectId={selectedProjectId} onSelectProject={onSelectProject}  title={project.title} />
          </div>
        ))}
    </div>
  );
};
