import './Hero.css'
import AdrienDudonPhoto from '../../../assets/img/me.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {icon} from '@fortawesome/fontawesome-svg-core/import.macro'
import {ForwardedRef, forwardRef, MutableRefObject} from "react";

const Hero = forwardRef<HTMLDivElement>(function (props, ref) {
    return (
        <div className="hero" ref={ref}>
            <div className="hero__main-content">
                <section className="hero__catchphrase">
                    <h1 className="hero__title">
                        <span className="hero__title--bold">Deep Reinforcement Learning</span> research project.
                    </h1>
                    <div className="hero__subtitle">
                        What advantages does using a Vision Transformer model offer over Convolutional Neural Network in
                        playing video games?
                    </div>
                    <div className="hero__socials">
                        <button
                            onClick={() => window.open("https://github.com/Deewens/FYP-DRL-Comparison/raw/master/docs/Project%20Report.pdf")}
                            className="hero__button">Read my <FontAwesomeIcon
                            icon={icon({name: 'book'})}/> Thesis
                        </button>
                        <button onClick={() => window.open("https://github.com/Deewens/FYP-Deep-RL-Comparison")}
                                className="hero__button">Check on <FontAwesomeIcon
                            icon={icon({name: 'github', style: "brands"})}/> GitHub
                        </button>
                    </div>
                </section>
                <section className="hero__illustration">
                    <div style={{width:"100%", height:"0", paddingBottom: "100%", position: "relative"}}>
                        <iframe src="https://giphy.com/embed/4YWdFZAl1mQ9kplqRk" width="100%" height="100%"
                                style={{position: "absolute"}} frameBorder="0" className="giphy-embed"
                                allowFullScreen></iframe>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Hero