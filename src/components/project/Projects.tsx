import './Projects.css'
import Header from '../header/Header'
import React, { useEffect } from 'react'
import Clouds from '../../assets/img/clouds.svg'
import SkillCard from '../cards/SkillCard'
import ProjectCard from '../cards/ProjectCard'
import Cyberpunk2077Draw from '../../assets/img/projects-games-header.jpg'
import { useNavigate } from 'react-router-dom'
import games from '../../database/games.json'

type Props = {
  title: string
  headerImg: string
  children?: React.ReactNode
}

function Projects(props: Props) {
  return (
    <div>
      <Header />
      <section className="project-header" style={{backgroundImage: `url("${props.headerImg}")`}}>
        <div>{props.title}</div>
      </section>
      <div className="project-header-clouds">
        <img src={Clouds} alt="Clouds" />
      </div>

      <p>Click on a card to see more information on one of my project</p>

      <section className="project-list">
        {props.children}
      </section>
    </div>
  )
}

export default Projects