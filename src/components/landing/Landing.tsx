import Hero from './hero/Hero'
import LandingSection from './landing-section/LandingSection'
import SkillCard from '../cards/SkillCard'
import './Landing.css'
import Timeline from '../timeline/Timeline'
import TimelineItem from '../timeline/TimelineItem'
import Header from '../header/Header'
import React, {createRef, MutableRefObject, useEffect, useRef, useState} from 'react'
import {NavLink} from 'react-router-dom'
import useOnScreen from '../../hooks/useOnScreen'

import AdrienDudonPhoto from '../../assets/img/me.jpg'
import RLLoopImage from '../../assets/img/RL_loop.png'
import SwinTransformerIllustration from '../../assets/img/swin_transformer_schematic.webp'
import CnnIllustration from '../../assets/img/cnn_schematic_illustration.png'
import DeepQLearningAlgorithmImage from '../../assets/img/deep_q-learning-algorithm.png'

import CnnDDQNMeanRewardChartImg from '../../assets/img/results/cnn/rollout_ep_rew_mean.svg'
import CnnDDQNTrainLossChartImg from '../../assets/img/results/cnn/train_loss.svg'

import SwinDDQNMeanRewardChartImg from '../../assets/img/results/swin/rollout_ep_rew_mean.svg'
import SwinDDQNTrainLossChartImg from '../../assets/img/results/swin/train_loss.svg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {icon, solid, brands} from '@fortawesome/fontawesome-svg-core/import.macro'

function Landing() {
    const heroRef = createRef<HTMLDivElement>()
    const isHeroOnScreen = useOnScreen(heroRef)

    const [headerColour, setHeaderColour] = useState<'primary' | 'transparent'>("transparent")

    useEffect(() => {
      if (isHeroOnScreen)
        setHeaderColour("transparent")
      else
        setHeaderColour("primary")
    }, [isHeroOnScreen])

    return (
        <div>
            <Header color={headerColour} position="fixed"/>
            <Hero ref={heroRef}/>
            <div className="landing-content">
                <LandingSection id="aboutSection" className="landing-section--first-section text-section"
                                color="primary">
                    <div className="landing-section__content">
                        <h2>About my project</h2>
                        <p style={{fontSize: "larger"}}>
                            Deep Reinforcement Learning is a subfield of machine learning that combines the principles
                            of
                            reinforcement learning and deep learning. When applied to video games, Deep RL represents a
                            promising alternative to traditional AI algorithms because it enables the agent to learn and
                            act
                            in
                            its environment without any prior knowledge or interference from a human player.
                        </p>
                        <p style={{fontSize: "larger"}}>
                            An agent can use various algorithms, supported by a neural network, to learn. This neural
                            network
                            processes the input the agent "sees", passing through hidden layers before reaching the
                            output
                            layers. The best action is selected from the output layer, and the agent continues to
                            progress
                            through the environment.
                        </p>
                        <p className="landing-section--center"><img src={RLLoopImage} className="landing-section__image"
                                                                    alt="RL Illustration"/></p>
                        <p style={{fontSize: "larger"}}>
                            In this context, my project aims to compare two types of neural networks: Convolutional
                            Neural
                            Networks and Vision Transformers. These networks use images as input, allowing them to
                            generalize to
                            various visual environments.
                        </p>
                        <p style={{fontSize: "larger"}}>
                            Convolutional Neural Networks are still the go-to neural networks used in a variety of
                            image-recognition tasks. The goal of this project is to see if Vision Transformer, which is
                            a recent architecture can perform better in the same kind of tasks, and in this case, in the
                            field of Deep Reinforcement Learning.
                        </p>

                        <h3 className="landing-section__h3">Technologies</h3>
                        <p style={{fontSize: "larger"}}>
                            To effectively carry out my project within a reasonable timeframe, I needed to use a
                            language
                            with a
                            robust ecosystem to avoid reinventing the wheel. Python emerged as the ideal choice, as it
                            is
                            the
                            primary language used for developing neural networks, thanks to two of its most prominent
                            frameworks: TensorFlow and PyTorch.
                            <br/>
                            Below is a list of the main technologies I used for this project:
                            <ul>
                                <li><b>Python</b>: One of the best languages to use for this type of project due to the
                                    extensive Python ecosystem.
                                </li>
                                <li><b>TensorFlow and PyTorch</b>: Two machine learning frameworks that offer a vast
                                    ecosystem
                                    and utilities for deep learning purposes.
                                </li>
                                <li><b>Stable-Baselines3</b>: A set of reliable implementations of reinforcement
                                    learning
                                    algorithms.
                                </li>
                                <li><b>Gymnasium</b>: Gymnasium is a standard API for reinforcement learning, featuring
                                    a
                                    diverse collection of reference environments.
                                </li>
                            </ul>
                        </p>
                    </div>
                </LandingSection>

                <LandingSection id="researchQuestionSection" className="text-section" color="secondary">
                    <h2 className="landing-section__h2">Research Question</h2>
                    <p style={{fontSize: "larger"}}>
                        <i>What benefits can be gained from using Vision Transformers instead of Convolutional Neural
                            Networks for modern computer games?</i>
                    </p>
                    <p style={{fontSize: "larger"}}>
                        To explore the research question, I have formulated three smaller questions that will be
                        addressed:
                        <ul>
                            <li>How effective are Convolutional Neural Networks (CNN) in solving computer vision
                                problems in
                                video games?
                            </li>
                            <li>How effective are Vision Transformers (ViT) in solving computer vision problems in video
                                games?
                            </li>
                            <li>What performance advantages do Vision Transformers offer over Convolutional Neural
                                Networks
                                in video games?
                            </li>
                        </ul>
                    </p>
                    <p style={{fontSize: "larger"}}>
                        When comparing two different neural network models, it is important to establish clear criteria
                        that
                        can be used to evaluate the performance of each model. These criteria can include various
                        factors
                        such as accuracy, speed, scalability, and ease of implementation. For example, one criterion
                        might
                        be the accuracy of the model in correctly identifying objects within a video game environment.
                        Another criterion could be the speed at which the model is able to process and respond to new
                        information. </p>
                    <p style={{fontSize: "larger"}}>
                        CNN and ViT will be tested and compared in different video game contexts, with a focus on
                        problems
                        that can only be solved by image recognition neural networks. The ease of implementation for
                        each
                        model will also be compared in this paper.
                        The conclusions drawn from this research will provide information on each neural network and
                        their
                        suitability for different video game contexts. This will help video game developers choose the
                        most
                        appropriate neural network model for their needs.
                    </p>
                </LandingSection>

                <LandingSection id="experimentsSection" className="text-section" color="primary">
                    <h2 className="landing-section__h2">Experiments</h2>
                    <p style={{fontSize: "larger"}}>
                        To evaluate the performance of the two neural networks, I conducted experiments on the popular
                        Atari
                        2600 video game environment using the Standard and Double DQN algorithms. The experiments were
                        conducted using two neural networks: Convolutional Neural Networks (CNN) and Swin Transformer, a
                        state-of-the-art vision transformer architecture.
                    </p>
                    <p style={{fontSize: "larger"}}>
                        I ran experiments on two Atari games Breakout, and Pong. These experiments aimed to
                        measure
                        the effectiveness of the two neural networks at solving the game environments, with a focus on
                        their
                        ability to learn and improve their performance over time.
                    </p>
                    <p style={{fontSize: "larger"}}>
                        I measured the performance of each neural network by tracking the average reward and maximum
                        score
                        achieved during gameplay over time. The results of these experiments are analyzed and presented
                        in
                        the next section.
                    </p>
                    <h3 className="landing-section__h3">Convolutional Neural Network</h3>
                    <p className="landing-section--center">
                        <img src={CnnIllustration} className="landing-section__image" alt="RL Illustration"/><br/>
                        <i>Schematic representation of a CNN model (<a
                            href="https://www.researchgate.net/figure/A-schematic-illustration-of-the-convolutional-neural-network-CNN-architecture-The_fig5_339892439">source</a>)
                        </i>
                    </p>
                    <p style={{fontSize: "larger"}}>
                        Convolutional Neural Networks (CNNs) are a type of machine learning algorithm commonly used in
                        image recognition tasks. CNNs work by learning to recognize different patterns and features in
                        images, such as edges, corners, and textures. They do this by breaking down the image into
                        smaller pieces called "convolutional filters," which are passed through multiple layers of the
                        network to extract more and more complex features. The final layer of the network then uses
                        these features to classify the image into different categories, such as "cat" or "dog". CNNs
                        have been shown to be very effective at recognizing patterns in images and are widely used in
                        applications such as facial recognition, autonomous vehicles, and medical imaging.
                    </p>

                    <h3 className="landing-section__h3">Swin Transformer</h3>
                    <p className="landing-section--center">
                        <img src={SwinTransformerIllustration} className="landing-section__image"
                             alt="RL Illustration"/><br/>
                        <i>Schematic representation of the Swin Transformer architecture (<a
                            href="https://towardsdatascience.com/a-comprehensive-guide-to-swin-transformer-64965f89d14c">source</a>)
                        </i>
                    </p>
                    <p style={{fontSize: "larger"}}>
                        Swin Transformer is a type of neural network architecture that uses self-attention mechanisms to
                        process and extract features from input images. It is a variant of the more commonly known
                        Transformer architecture, which was originally developed for natural language processing tasks.
                        Unlike Convolutional Neural Networks, which rely on a fixed-size kernel to convolve over an
                        image, Swin Transformer uses a hierarchical design that gradually increases the receptive field
                        of the network as it processes the image. This allows it to capture both local and global
                        features of an image in a more efficient and effective way, making it a promising alternative to
                        traditional convolutional networks for image recognition tasks.
                    </p>

                    <h3 className="landing-section__h3">Deep Q Network</h3>
                    <p style={{fontSize: "larger"}}>
                        The Deep Q-Network (DQN) algorithm is a type of reinforcement learning method used to train
                        agents to make decisions in an environment. The goal of the DQN algorithm is to teach an agent
                        to select the best possible action in a given situation, based on the rewards it receives. The
                        algorithm does this by using a neural network to estimate the value of each action in a given
                        state, and then selecting the action with the highest estimated value. In this case, DQN will
                        use either a CNN or a Swin Transformer. Over time, the DQN algorithm learns to improve its
                        estimates of the value of each action, allowing it to make
                        better decisions and achieve higher rewards. The algorithm has been shown to be effective in a
                        variety of tasks, including playing video games and controlling robots.
                    </p>
                    <p className="landing-section--center">
                        <img src={DeepQLearningAlgorithmImage} className="landing-section__image"
                             alt="RL Illustration"/><br/>
                        <i>Standard Deep Q-Learning algorithm (<a href="https://arxiv.org/pdf/1312.5602.pdf">source</a>)
                        </i>
                    </p>
                    <p style={{fontSize: "larger"}}>
                        For my experiments, I also used a variation of the Deep Q Network, the Double Deep
                        Q-Network. Double DQN aims to address the issue of overestimation of action values that can
                        occur in standard DQN. In standard DQN, the maximum action value of the next state is selected
                        using the same neural network that is being used to estimate action values. This can lead to
                        overestimation of action values and result in unstable training. Double DQN addresses this issue
                        by using a separate neural network to select the action with the maximum value in the next
                        state. This approach reduces the overestimation of action values and leads to more stable
                        training. Essentially, Double DQN separates the selection of the best action from the estimation
                        of its value. This modification has been shown to improve the performance of the DQN algorithm
                        in various tasks, including playing video games.
                    </p>

                    <h3 className="landing-section__h3">Experimentation details</h3>
                    <p style={{fontSize: "larger"}}>
                        For each game, the CNN and the Swin Transformer models were trained and tested on the same
                        number of steps using the same learning rate, batch size, and number of iterations.
                        The performance of each model was evaluated based on the average score achieved during training.
                        The hyperparameters used for the experiments were all the same (except of course for the
                        parameters specifics to the used neural network)
                    </p>

                    <p style={{fontSize: "larger"}}>
                        I will add more details on the specific parameters I used later. This part of the webpage is
                        still in redaction.
                    </p>
                </LandingSection>

                <LandingSection id="resultsSection" className="text-section" color="secondary">
                    <h2 className="landing-section__h2">Results</h2>
                    <p style={{fontSize: "larger"}}>
                        This section presents the results of training an agent on the game Pong using the Double Deep
                        Q-Network with CNN and Swin Transformer. A link to the TensorBoard is provided for detailed
                        comparison between the neural networks and algorithms used for each game.
                    </p>
                    <h3 className="landing-section__h3">Pong</h3>
                    <h3 className="landing-section__h4">Convolutional Neural Networks</h3>
                    <p style={{fontSize: "larger"}}>
                        The agent trained on CNN required a relatively small training time of 7 hours and 36 minutes on
                        a GTX 970 GPU. The hardware limitations did not pose a significant bottleneck to the agent's
                        ability to learn to play in the Pong environment.
                    </p>
                    <p className="landing-section--center">
                        <img src={CnnDDQNMeanRewardChartImg}
                             className="landing-section__image landing-section__image--background"
                             alt="CNN Double DQN Episode Reward Mean"/><br/>
                        <i>Evolution of the mean reward per episode over time</i>
                    </p>
                    <p>
                        The CNN agent started to converge from approximately 500,000 steps, with a stable increase until
                        3.5 million steps where it stabilized. The curve shows a linear increase with no major dropouts
                        even after hours of training. However, the agent did not reach a
                        mean reward of +/- 20 as some other implementations did. This may be due to the chosen
                        environment seed (42 in this case).
                    </p>

                    <p className="landing-section--center">
                        <img src={CnnDDQNTrainLossChartImg}
                             className="landing-section__image landing-section__image--background"
                             alt="Evolution of the loss over time"/><br/>
                        <i>Evolution of the loss, over time</i>
                    </p>
                    <p>
                        The loss evolution was somewhat chaotic, even close to the end of training, with large spikes
                        indicating that the agent was still making mistakes. However, this is likely good news as it
                        suggests the agent was not overwriting its learning and was instead exploring and learning new
                        behaviors.
                    </p>
                    <h3 className="landing-section__h4">Swin Transformer</h3>
                    <p style={{fontSize: "larger"}}>
                        Compared to the CNN model, the Swin Transformer model required a much longer training time of 3
                        days and 7 hours on an RTX 3080 GPU. I also tried to train the model on my laptop, equipped
                        with a GTX 1660 Ti but it would have taken even longer.
                    </p>
                    <p className="landing-section--center">
                        <img src={SwinDDQNMeanRewardChartImg}
                             className="landing-section__image landing-section__image--background"
                             alt="Swin Double DQN Episode Reward Mean"/><br/>
                        <i>Evolution of the mean reward per episode, over time</i>
                    </p>
                    <p>
                        The Swin DQN agent took much longer to converge, almost 1 million steps. While the CNN model
                        stabilized at 3.5 million steps with a mean reward of +/- 13, the Swin DQN model was still
                        scoring in the negative at this point and only began to reach positive scores at around 4
                        million steps. The curve was also less linear, with constant drops to a lower score for a
                        certain amount of time before increasing again.<br/>
                        The curve was also less linear, with constant drops to a lower score for a certain amount of
                        time before increasing again.
                        In the end, Swin DQN has not been able to reach the same mean
                        reward as CNN, achieving a mean score of around ~12. However, Swin Transformer also show a
                        constant increase, compared to CNN which stabilised for the majority of its training time.
                    </p>

                    <p className="landing-section--center">
                        <img src={SwinDDQNTrainLossChartImg}
                             className="landing-section__image landing-section__image--background"
                             alt="Evolution of the loss over time"/><br/>
                        <i>Evolution of the loss, over time</i>
                    </p>
                    <p>
                        The loss is also quite different for Swin DQN. We can see a lower amount of spikes as time goes
                        on,
                        which can maybe show a more stable training.
                    </p>
                    <h3 className="landing-section__h3">Breakout</h3>
                    TODO.
                </LandingSection>


                <LandingSection id="conclusionSection" className="text-section" color="primary">
                    <h2 className="landing-section__h2">Conclusion</h2>
                    <p style={{fontSize: "larger"}}>
                        Throughout this project, my main concern was to produce meaningful results. Initially, I
                        implemented the Deep Q-Network algorithm, which is a well-known Reinforcement Learning
                        algorithm. My plan was to try a Vision Transformer variant and to compare it to its CNN
                        counterpart.
                        However, I came across a paper entitled <a
                        href="https://download.arxiv.org/pdf/2206.15269v1.pdf">"Deep Reinforcement Learning with Swin
                        Transformer"</a>, which had already replaced the Convolutional Neural Network with the Swin
                        Transformer in a similar algorithm. <br/>
                        I ended up implementing the Double Deep Q-Network algorithm, while only replacing the network,
                        as described in the paper above. The conclusion from this paper shows that Swin DQN achieved
                        superior performance than its CNN counterpart.
                        This is why my results ended up being still very interesting, particularly when compared to the
                        aforementioned paper. I found that the Swin DQN algorithm performed worse than the CNN DQN
                        algorithm in Atari Pong compared to what is mentioned in the paper.
                    </p>
                    <p style={{fontSize: "larger"}}>
                        Training an agent with the Swin Transformer can be achieved at the cost of increased
                        complexity and clock time. Training an agent with Swin Transformer is computationally intensive
                        and requires significant memory, which can be challenging for an average computer. Additionally,
                        my algorithm was trained for much less time than the paper's algorithm (10 million steps
                        compared to 50 million steps), and I found that the CNN version of my algorithm still performed
                        better than the Swin Transformer version. Thus, CNN remains a viable option for high-performance
                        algorithms when considering clock time.
                    </p>
                    <p style={{fontSize: "larger"}}>
                        Despite this, the Swin Transformer has certain advantages over the CNN that are not related to
                        raw performance. When testing the trained agent in an environment, the agent's movement appeared
                        smoother with the Swin Transformer than with the CNN. The CNN agent took action frenetically,
                        while the Swin Transformer appeared to "think more" before making a move. <br/>
                        I will provide a video illustrating this behaviour in the coming days.
                    </p>
                </LandingSection>

                <LandingSection id="contactSection" className="text-section" color="secondary">
                    <div className="landing-section-contact">
                        <div className="landing-section-contact__networks">
                            <h2 className="landing-section__h2">Contact</h2>
                            <p style={{fontSize: "larger"}}>
                                Hey, I'm <strong>Adrien Dudon</strong>, I am glad you scrolled until the end :-) !<br/>
                                Are you interested in my project or my profile? Do not hesitate to contact me either by
                                email or on LinkedIn. Also, have a look at my GitHub, where I show off a lot of the
                                projects I worked on.
                            </p>
                            <p style={{fontSize: "xx-large"}}>
                                <a className="contact-link" href="https://adriendudon.me/"
                                   target="_blank"><FontAwesomeIcon icon={icon({name: 'blog'})}/> <span
                                    className="contact-link--text">Personal website</span></a>
                            </p>
                            <p style={{fontSize: "xx-large"}}>
                                <a className="contact-link"
                                   href="mailto:dudonadrien@gmail.com">
                                    <FontAwesomeIcon
                                        icon={icon({name: 'envelope', style: "solid"})}/> <span
                                    className="contact-link--text">dudonadrien@gmail.com</span></a>
                            </p>
                            <p style={{fontSize: "xx-large"}}>
                                <a className="contact-link" href="https://github.com/Deewens"
                                   target="_blank"><FontAwesomeIcon icon={icon({name: 'github', style: "brands"})}/> <span className="contact-link--text"> GitHub</span></a>
                            </p>
                            <p style={{fontSize: "xx-large"}}>
                                <a className="contact-link"
                                   href="https://www.linkedin.com/in/adriendudon/" target="_blank">
                                    <FontAwesomeIcon
                                        icon={icon({name: 'linkedin', style: "brands"})}/> <span
                                    className="contact-link--text">LinkedIn</span></a>
                            </p>
                        </div>
                        <div className="landing-section-contact__photo">
                            <img className="landing-section-contact__photo--img" src={AdrienDudonPhoto}
                                 alt="Adrien Dudon outside"/>
                        </div>
                    </div>
                </LandingSection>
            </div>
        </div>
    )
}

export default Landing