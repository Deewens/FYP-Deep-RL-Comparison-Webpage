import Hero from './hero/Hero'
import LandingSection from './landing-section/LandingSection'
import SkillCard from '../cards/SkillCard'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Landing.css'
import Timeline from '../timeline/Timeline'
import TimelineItem from '../timeline/TimelineItem'
import Header from '../header/Header'
import React from 'react'

function Landing() {
  return (
    <div>
      <Header color="transparent" position="absolute" />
      <Hero />
      <LandingSection className="skill-section" color="primary" title="Main Skills">
        <div className="cards-container">
          <SkillCard
            className="card"
            title="Programming"
            icon={solid('computer')}
          >
            Strong web and software development experiences with many languages and frameworks. I can develop any full
            stack application.
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
            Curious person with a strong desire to learn new things and be good at it. I like to learn new stuff and
            technologies as required by the project I am working on.
          </SkillCard>
          <SkillCard
            className="card"
            title="Perseverance"
            icon={solid('person-falling')}
          >
            Strong problem-solving skills and perseverance that help me solve many problems. I am confident on what I am
            doing.
          </SkillCard>
        </div>
      </LandingSection>
      <LandingSection color="secondary" title="Education">
        <Timeline>
          <TimelineItem
            className="timeline-item"
            period="2021 - Present"
            title="Bachelor of Science (Honours) in Computer Games Development"
            subtitle="South East Technological University (formerly IT Carlow) - Carlow, Ireland"
            direction="right"
          >
            I decided to undertake this course in third year because I was really interested in specialising myself in
            the Game Development field. This courses allowed me to discor and live in another country.

          </TimelineItem>

          <TimelineItem
            className="timeline-item"
            period="2020 - 2021"
            title="Professional Degree and Apprenticeship in Computer Science"
            subtitle="Robert Schuman University Institute of Technology - Strasbourg, France"
            direction="left"
          >
            <p>
              Third Year university degree in Computer Science. I learnt how to develop full stacks web applications
              from the ground-up. This courses was an apprenticeship courses wich allowed me to gain one year of work
              experience at the same time.<br />
              <b>GPA: 14.682/20</b>
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
              My first two-year university degree in Computer Science.<br />
              I learnt the basic of computer science such as: computer architecture and algorithms, procedural programming and Object Oriented
              Programming, Systems and Networks, relational databases. I developed a lot of projects during this course.<br />
              <b>GPA: 13.94/20 (Top of the class in fourth semester)</b>
            </p>
          </TimelineItem>
        </Timeline>
      </LandingSection>
      <LandingSection title="Work Experience" color="primary">
        <Timeline color="secondary">
          <TimelineItem
            color="secondary"
            period="March 2022 - August 2022"
            title="Expleo"
            subtitle="Intern Full Stack Engineer">
            Developed an application for Renault Quality Department
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
              I created few programs using the Talend software and worked on the University's relational databases by
              making data correction. <br />
              I also developed Java Script for Talend
            </p>
          </TimelineItem>
        </Timeline>
      </LandingSection>
    </div>
)
}

export default Landing