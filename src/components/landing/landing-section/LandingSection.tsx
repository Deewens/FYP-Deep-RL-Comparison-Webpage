import './LandingSection.css'
import { ReactNode } from 'react'

type Props = {
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
      {props.children}
    </section>
  )
}

export default LandingSection