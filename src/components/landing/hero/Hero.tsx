import './Hero.css'
import AdrienDudonPhoto from '../../../assets/img/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__main-content">
        <section className="hero__catchphrase">
          <h1 className="hero__title">
            I'm <span className="hero__title--bold">Adrien Dudon</span>.
          </h1>
          <div className="hero__subtitle">
            Passionate about computer science and technologies. I am studying Computer Games Development in Ireland!
          </div>
          <div className="hero__socials">
            <a className="hero__socials--link" href="https://github.com/Deewens" target="_blank"
               rel="noreferrer"><FontAwesomeIcon icon={brands('github')} size={'2x'} />
            </a>
            <a className="hero__socials--link" href="https://www.linkedin.com/in/adriendudon/" target="_blank"
               rel="noreferrer"><FontAwesomeIcon icon={brands('linkedin')} size={'2x'} />
            </a>
            <a className="hero__socials--link" href="mailto:dudonadrien@gmail.com" target="_blank"
               rel="noreferrer"><FontAwesomeIcon icon={solid('envelope')} size={'2x'} />
            </a>
          </div>
        </section>


        <img className="hero__photo" src={AdrienDudonPhoto} alt="Adrien Dudon outside" />

      </div>
    </div>
  )
}

export default Hero