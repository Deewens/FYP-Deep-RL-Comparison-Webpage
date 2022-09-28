import Hero from './hero/Hero'
import LandingSection from './landing-section/LandingSection'
import Card from '../card/Card'
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
          <Card
            className="card"
            title="Programming"
            icon={solid('computer')}
          >
            Strong web and software development experiences with many languages and frameworks. I can develop any full
            stack application.
          </Card>
          <Card
            className="card"
            title="Game development"
            icon={solid('gamepad')}
          >
            Good knowledge of game development using the Unity game engine and the SFML Framework.
          </Card>
          <Card
            className="card"
            title="Curiosity"
            icon={solid('eye')}
          >
            Curious person with a strong desire to learn new things and be good at it. I like to learn new stuff and
            technologies as required by the project I am working on.
          </Card>
          <Card
            className="card"
            title="Perseverance"
            icon={solid('person-falling')}
          >
            Strong problem-solving skills and perseverance that help me solve many problems. I am confident on what I am
            doing.
          </Card>
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
            <ul>
              <li>2D and 3D games development with SFML and Unity</li>
              <li>AI courses and pathfinding</li>
              <li>Development of mobile games</li>
              <li>Web Development</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            className="timeline-item"
            period="2020 - 2021"
            title="Professional Degree and Apprenticeship in Computer Science"
            subtitle="Robert Schuman University Institute of Technology - Strasbourg, France"
            direction="left"
          >
            <p>Third Year university degree in Computer Science (Ordinary Bachelor Degree)</p>
            <ul>
              <li>Web and Mobile development, testing, API design and development</li>
              <li>Writing of technical an design documents</li>
              <li>Initiation to video game development with Unity and Unreal Engine thank to an elective course</li>
              <li>
                <ul>
                  <b>Run4Exp Project</b>: running app where the player's real movements are transmitted to a virtual
                  map.
                  <li><b>Web App:</b> developed with ReactJS in TypeScript</li>
                  <li><b>Mobile App:</b> React Native with TypeScript</li>
                  <li><b>REST API:</b> Spring framework (Java EE)</li>
                </ul>
              </li>
              <li><b>GPA: 14.682/20</b></li>
            </ul>
          </TimelineItem>

          <TimelineItem
            className="timeline-item"
            period="2018 - 2020"
            title="University Diploma of Technology in Computer Science"
            subtitle="Metz University Institute of Technology (University of Lorraine)"
            direction="right"
          >
            <p>Two-year university degree in Computer Science</p>
            <ul>
              <li><b>IT Basics:</b> computer architecture and algorithms, procedural programming and Object Oriented
                Programming, Systems and Networks, relational databases
              </li>
              <li>Full stack application development</li>
              <li>Business management, law, economics, mathematics, project management</li>
              <li>Three-month internship at the end of the second year</li>
              <li>Top of the class at the end of the second year</li>
              <li>
                <b>Projects (see more on GitHub)</b>
                <ul>
                  <li><b>Company Scrapper:</b> data scrapper targeting companies employees on LinkedIn - developed with
                    Python and Selenium
                  </li>
                  <li><b>RevuesOnLine:</b> software for managing a database of magasines - Java and JavaFX</li>
                </ul>
              </li>
              <li><b>GPA: 13.94/20</b></li>
            </ul>
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