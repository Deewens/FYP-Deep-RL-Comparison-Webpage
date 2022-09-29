import games from '../../../database/games.json'
import ProjectCard from '../../cards/ProjectCard'
import React from 'react'
import './GameProjects.css'
import Projects from '../Projects'
import GameHeader from '../../../assets/img/projects-games-header.jpg'

function GameProjects() {
  return (
    <Projects title="Game Projects" headerImg={GameHeader}>
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

export default GameProjects