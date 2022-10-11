import './Projects.css'
import Header from '../header/Header'
import React from 'react'
import Clouds from '../../assets/img/clouds.svg'

type Props = {
  title: string
  headerImg: string
  headerImgPosition?: 'bottom' | 'center'
  children?: React.ReactNode
}

function Projects(props: Props) {
  return (
    <div className="projects">
      <Header />
      <section
        className="projects-header"
        style={{
          background:
            `radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%), 
            url("${props.headerImg}") ${props.headerImgPosition ? props.headerImgPosition : 'bottom'}/cover`,
        }}>
        <div>{props.title}</div>
        <img className="projects-header-clouds" src={Clouds} alt="Clouds" />
      </section>


      <section className="projects-content">
        <p style={{color: 'white', textAlign: 'center', fontSize: 'larger'}}>Click on a card to see more information on one of my project</p>

        <div className="projects-list">
          {props.children}
        </div>
      </section>
    </div>
  )
}

export default Projects