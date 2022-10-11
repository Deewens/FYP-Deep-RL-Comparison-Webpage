import Hero from './hero/Hero'
import LandingSection from './landing-section/LandingSection'
import SkillCard from '../cards/SkillCard'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Landing.css'
import Timeline from '../timeline/Timeline'
import TimelineItem from '../timeline/TimelineItem'
import Header from '../header/Header'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <Header color="transparent" position="absolute" />
      <Hero />
      <LandingSection className="skill-section" color="primary">
        <h2 className="landing-section__title">Main Skills</h2>
        <div className="cards-container">
          <SkillCard
            className="card"
            title="Programming"
            icon={solid('computer')}
          >
            Strong web and software development experience with many languages and frameworks. I can develop any
            full-stack application.
          </SkillCard>
          <SkillCard
            className="card"
            title="Game development"
            icon={solid('gamepad')}
          >
            Good knowledge of game development using the Unity game engine and the SFML Framework.
          </SkillCard>
          <SkillCard
            className="card"
            title="Curiosity"
            icon={solid('eye')}
          >
            A curious person with a strong desire to learn new things and be good at them. I like to learn new stuff and
            technologies as required by the project I am working on.
          </SkillCard>
          <SkillCard
            className="card"
            title="Perseverance"
            icon={solid('person-falling')}
          >
            Strong problem-solving skills and perseverance help me solve many problems. I am confident in what I am
            doing.
          </SkillCard>
        </div>
      </LandingSection>
      <LandingSection color="secondary">
        <h2 className="landing-section__title">Education</h2>
        <p className="landing-section__description">Check my <NavLink to="/resume"><strong>Resume</strong></NavLink> for
          more details on my education.</p>

        <Timeline>
          <TimelineItem
            className="timeline-item"
            period="2021 - Present"
            title="Bachelor of Science (Honours) in Computer Games Development"
            subtitle="South East Technological University (formerly IT Carlow) - Carlow, Ireland"
            direction="right"
          >
            <p>
              I joined this course in my third year, after three years of general computer science studies in France.
              I decided to undertake this course because I am really interested in specialising in
              the Game Development field. Furthermore, this allows me to discover and live in another country.<br />
              <strong>Third Year GPA: 73.6%</strong>
            </p>
          </TimelineItem>

          <TimelineItem
            className="timeline-item"
            period="2020 - 2021"
            title="Professional Degree and Apprenticeship in Computer Science"
            subtitle="Robert Schuman University Institute of Technology - Strasbourg, France"
            direction="left"
          >
            <p>
              Third Year university degree in Computer Science. I learnt how to develop full-stack web applications
              from the ground up. This course was an apprenticeship undergraduate Bachelor which allowed me to gain one
              year of work
              experience at the same time.<br />
              <strong>GPA: 14.682/20</strong>
            </p>
          </TimelineItem>

          <TimelineItem
            className="timeline-item"
            period="2018 - 2020"
            title="University Diploma of Technology in Computer Science"
            subtitle="Metz University Institute of Technology (University of Lorraine)"
            direction="right"
          >
            <p>
              Two-year university degree in Computer Science.<br />
              I learnt the basics of computer science such as <strong>computer architecture and algorithms, procedural
              programming, Object Oriented Programming, Systems and Networks, relational databases...</strong> I also
              developed a lot of projects during this course.<br />
              <b>GPA: 13.94/20 (Top of the class in the fourth semester)</b>
            </p>
          </TimelineItem>
        </Timeline>
      </LandingSection>
      <LandingSection color="primary">
        <h2 className="landing-section__title">Work Experience</h2>
        <p className="landing-section__description">Check my <NavLink to="/resume"><strong>Resume</strong></NavLink> for
          more details on my Work Experience.</p>
        <Timeline color="secondary">
          <TimelineItem
            color="secondary"
            period="March 2022 - August 2022"
            title="Expleo"
            subtitle="Intern Full Stack Engineer">
            <p>I developed a full-stack web application for an Expleo Team working in the Renault Quality Department at
              the Renault Technocentre localised in Guyancourt in France. This application allows the team to better
              manage the return of defective car parts under the Renault Warranty.</p>
          </TimelineItem>

          <TimelineItem
            color="secondary"
            period="September 2020 - September 2021"
            title="CG Project Management - Strasbourg, France"
            subtitle="Apprentice Web Developer"
            direction="left"
          >
            <p>
              Apprenticeship as part of my Professional Degree.<br />
              I worked on a Project Management Application called Gouti (<a
              href="https://www.gouti.net/en/index">(https://www.gouti.net/en/index</a>).
              I added and improved the app's main features using web technologies like HTML/CSS, JS and PHP. I also
              wrote a REST API in PHP.
            </p>
          </TimelineItem>

          <TimelineItem
            color="secondary"
            period="May 2020 - July 2020"
            title="Versailles Saint-Quentin-en-Yvelines University - Remote"
            subtitle="Apprentice Web Developer">
            <p>
              I created a few programs using the Talend software and worked on the University's relational databases by
              making data corrections.
            </p>
          </TimelineItem>
        </Timeline>
      </LandingSection>
    </div>
  )
}

export default Landing