import games from '../../../database/games.json'
import ProjectCard from '../../cards/ProjectCard'
import Projects from '../Projects'
import React from 'react'

function SoftwareProjects() {
  return (
    <Projects title="Software Project" headerImg="../../assets/img/projects-games-header.jpg">
      {
        games.map((game, i) => (
          <ProjectCard key={i} seeMoreURL={game.seeMoreURL} title={game.title} image={process.env.PUBLIC_URL + game.imagePath}>
            {game.shortDescription}
          </ProjectCard>
        ))
      }
    </Projects>
  )
}

export default SoftwareProjects