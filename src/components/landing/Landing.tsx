import Hero from './hero/Hero'
import LandingSection from './landing-section/LandingSection'
import Card from '../card/Card'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Landing.css'
import Timeline from '../timeline/Timeline'
import TimelineItem from '../timeline/TimelineItem'

function Landing() {
  return (
    <>
      <Hero />
      <LandingSection className="skill-section" color="primary" title="Main Skills">
        <div className="cards-container">
          <Card
            className="card"
            title="Programming"
            icon={solid('computer')}
          >
            Strong web and software development experiences
          </Card>
          <Card
            className="card"
            title="Game development"
            icon={solid('gamepad')}
          >
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </Card>
          <Card
            className="card"
            title="Curiosity"
            icon={solid('eye')}
          >
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </Card>
          <Card
            className="card"
            title="Perseverance"
            icon={solid('person-falling')}
          >
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
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
            <ul>
              <li>2D and 3D games development with SFML and Unity</li>
              <li>AI courses and pathfinding</li>
              <li>Development of mobile games</li>
              <li>Web Development</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </TimelineItem>
        </Timeline>
      </LandingSection>
      <LandingSection title="Work Experience" color="primary">
        <Timeline color="secondary">
          <TimelineItem color="secondary" period="March 2022 - August 2022" title="Expleo" subtitle="Intern Full Stack Engineer">
            a
          </TimelineItem>
        </Timeline>
      </LandingSection>
    </>
  )
}

export default Landing