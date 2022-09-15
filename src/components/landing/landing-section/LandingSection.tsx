import './LandingSection.css'

type Props = {
  color: 'primary' | 'secondary',
  children: React.ReactNode
}

function LandingSection(props: Props) {
  return (
    <section className={`landing-section ${props.color == 'primary' ? 'landing-section--color-primary' : 'landing-section--color-secondary'}`}>

    </section>
  )
}

export default LandingSection