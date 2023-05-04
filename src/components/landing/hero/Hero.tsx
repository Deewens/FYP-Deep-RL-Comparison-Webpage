import './Hero.css'
import AdrienDudonPhoto from '../../../assets/img/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {ForwardedRef, forwardRef, MutableRefObject} from "react";

const Hero = forwardRef<HTMLDivElement>(function (props, ref) {
  return (
    <div className="hero" ref={ref}>
      <div className="hero__main-content">
        <section className="hero__catchphrase">
          <h1 className="hero__title">
            My <span className="hero__title--bold">Deep Reinforcement Learning</span> research project.
          </h1>
          <div className="hero__subtitle">
            A comparison of Convolutional Neural Networks and Vision Transformers as AI model for playing computer games
          </div>
          <div className="hero__socials">
            <button onClick={() => window.open("https://github.com/Deewens/FYP-Deep-RL-Comparison")} className="hero__button">Check on <FontAwesomeIcon icon={icon({name: 'github', style:"brands"})} /> GitHub</button>
          </div>
        </section>

        <iframe src="https://giphy.com/embed/4YWdFZAl1mQ9kplqRk" frameBorder="0"
                className="giphy-embed hero__img" allowFullScreen></iframe>

      </div>
    </div>
  )
})

export default Hero