import './ProjectCard.css'
import React, { MouseEventHandler, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  title: string
  image: string
  seeMoreURL: string
  children: ReactNode
}

function ProjectCard(props: Props) {
  const goToURL = () => {
    //navigate('/')
    window.open(
      props.seeMoreURL,
      '_blank',
    )
  }

  return (
    <div onClick={goToURL} className="project-card">
      <div
        className="project-card__image"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <h4 className="project-card__image-title">See more</h4>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">
          {props.title}
        </h3>
        <p className="project-card__description">
          {props.children}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard