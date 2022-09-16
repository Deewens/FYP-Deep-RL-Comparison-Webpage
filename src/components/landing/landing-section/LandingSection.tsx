import './LandingSection.css'
import { ReactNode } from 'react'

type Props = {
  title: string,
  color: 'primary' | 'secondary',
  className?: string
  children: ReactNode
}

function LandingSection(props: Props) {
  return (
    <section
      className={
        `landing-section 
        ${props.color === 'primary' ? 'landing-section--color-primary' : 'landing-section--color-secondary'}
        ${props.className}`
      }>
      <h2 className="landing-section__title">{props.title}</h2>
      {props.children}
    </section>
  )
}

export default LandingSection