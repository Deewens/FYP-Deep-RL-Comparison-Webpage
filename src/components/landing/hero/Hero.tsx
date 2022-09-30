import Header from '../../header/Header'
import './Hero.css'
import AdrienDudonPhoto from '../../../assets/img/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__main-content">
        <section className="hero__catchphrase">
          <h1 className="hero__title">
            I'm <span className="hero__title--bold">Adrien Dudon</span>
          </h1>
          <div className="hero__subtitle">
            Passionate about computer science and technologies. I am studying Computer Games Development in Ireland!
          </div>
          <div className="hero__socials">
            <FontAwesomeIcon icon={brands('github')} size={'2x'} />
            <FontAwesomeIcon icon={brands('linkedin')} size={'2x'} />
            <FontAwesomeIcon icon={solid('envelope')} size={'2x'} />
          </div>
        </section>


        <img className="hero__photo" src={AdrienDudonPhoto} alt="Adrien Dudon outside" />

      </div>
    </div>
  )
}

export default Hero