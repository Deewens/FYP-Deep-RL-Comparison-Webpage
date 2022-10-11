import web from '../../../database/apps.json'
import ProjectCard from '../../cards/ProjectCard'
import Projects from '../Projects'
import React from 'react'
import AppsHeader from '../../../assets/img/projects-apps-header.jpg';

function AppsProjects() {
  return (
    <Projects title="Applications" headerImg={AppsHeader} headerImgPosition="center">
      {
        web.map((project, i) => (
          <ProjectCard key={i} seeMoreURL={project.seeMoreURL} title={project.title} image={process.env.PUBLIC_URL + project.imagePath} style={project.style}>
            {project.shortDescription}
          </ProjectCard>
        ))
      }
    </Projects>
  )
}

export default AppsProjects