import Hero from './hero/Hero'
import LandingSection from './landing-section/LandingSection'
import './Landing.css'
import Header from '../header/Header'
import React, {createRef} from 'react'
import useOnScreen from '../../hooks/useOnScreen'

import AdrienDudonPhoto from '../../assets/img/me.jpg'
import RLLoopImage from '../../assets/img/RL_loop.png'
import SwinTransformerArchitectureImg from '../../assets/img/swin_architecture.jpg'
import CnnArchitectureImg from '../../assets/img/cnn_architecture.jpg'

import PongEpisodeMeanRewardImg from '../../assets/img/pong_episode_reward_mean.png'
import PongEpisodicReturnImg from '../../assets/img/pong_episodic_return.png'

import BreakoutEpisodeMeanRewardImg from '../../assets/img/breakout_episode_reward_mean.png'
import BreakoutEpisodicReturnImg from '../../assets/img/breakout_episodic_return.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {icon} from '@fortawesome/fontawesome-svg-core/import.macro'
import Latex from "react-latex-next";
import ReactMarkdown from "react-markdown";

function Landing() {
    const heroRef = createRef<HTMLDivElement>()
    /*const isHeroOnScreen = useOnScreen(heroRef)

    const [headerColour, setHeaderColour] = useState<'primary' | 'transparent'>("transparent")

    useEffect(() => {
        if (isHeroOnScreen)
            setHeaderColour("transparent")
        else
            setHeaderColour("primary")
    }, [isHeroOnScreen])*/

    return (
        <div>
            <Header /*color={headerColour}*/ position="fixed"/>
            <Hero ref={heroRef}/>
            <div className="landing-content">
                <LandingSection id="aboutSection" className="landing-section--first-section text-section"
                                color="primary">
                    <div className="landing-section__content">
                        <h2 className="landing-section__h2">About my project</h2>
                        <h3 className="landing-section__h3">Abstract</h3>
                        <p className="landing-section__paragraph">
                            Recent studies have suggested that the Vision Transformer (ViT) architecture could
                            potentially outperform Convolutional Neural Network (CNN) in solving complex game
                            environments. However, the full potential of ViT in replacing CNN has yet to be realized.
                            This research project aims to explore the efficacy of the Swin Transformer, a recently
                            introduced ViT model, as the primary network backbone in the Double Deep Q Network (Double
                            DQN) algorithm. The objective is to determine if ViT can achieve results that are as good as
                            or better than those achieved by CNN.
                        </p>
                        <p className="landing-section__paragraph">
                            During the course of my research, I came across a paper titled "Deep Reinforcement Learning
                            with Swin Transformer" by Meng et al. (2022), which had already implemented Swin Transformer
                            and conducted a comparison with CNN. I attempted to replicate their experimentation to
                            determine if I could achieve similar results. However, my findings were different from
                            theirs.
                        </p>
                        <p className="landing-section__paragraph">
                            My results indicate that CNN outperforms Swin Transformer, especially with a smaller number
                            of training steps. CNN also requires less computing power and memory compared to Swin
                            Transformer, which necessitates more data and a recent GPU with sufficient VRAM. To achieve
                            better results than CNN, Swin Transformer may require a higher number of training steps, as
                            demonstrated by Meng et al. (2022).
                        </p>
                        <h3 className="landing-section__h3">Introduction</h3>
                        <p className="landing-section__paragraph">
                            Deep Reinforcement Learning is a subfield of machine learning that combines the principles
                            of reinforcement learning and deep learning. When applied to video games, Deep RL represents
                            a promising alternative to traditional AI algorithms because it enables the agent to learn
                            and act in its environment without any prior knowledge or interference from a human player.
                        </p>
                        <p className="landing-section__paragraph">
                            An agent can use various algorithms, supported by a neural network, to learn. This neural
                            network processes the input the agent "sees", passing through hidden layers before reaching
                            the output layers. The best action is selected from the output layer, and the agent
                            continues to progress through the environment.
                        </p>
                        <p className="landing-section--center">
                            <img src={RLLoopImage} className="landing-section__image" alt="RL Illustration"/>
                        </p>
                        <p className="landing-section__paragraph">
                            Convolutional Neural Networks are still the go-to neural networks used in a variety of
                            image-recognition tasks. The goal of this project is to see if Vision Transformer, which is
                            a recent architecture can perform better in the same kind of tasks, and in this case, in the
                            field of Deep Reinforcement Learning.
                        </p>
                        <p className="landing-section__paragraph">
                            The present research aims to provide a fresh perspective on the usage of Convolutional
                            Neural Networks and its modern alternative, Vision Transformers, in video game environments.
                            The central research question that guides this investigation is: <strong>“What advantages
                            does using
                            a Vision Transformer model offer over CNN in playing video games?”</strong> To delve deeper
                            into this
                            research question, three sub-questions have been formulated, namely:
                            <ul>
                                <li>
                                    How effective are CNNs in addressing computer vision challenges in video games?
                                </li>
                                <li>
                                    Which Vision Transformer architecture would be most effective in addressing computer
                                    vision problems in video games?
                                </li>
                                <li>
                                    What challenges are associated with training a neural network agent using Vision
                                    Transformers compared to CNNs?
                                </li>
                            </ul>

                            To ensure a fair comparison of the neural networks, precise criteria must be used
                            consistently throughout the experiments. This research also include tables and graphics
                            displaying the data collected through the research.
                        </p>

                        <p className="landing-section__paragraph">
                            CNN and ViT are tested and compared on the Atari games Pong and Breakout.
                            The conclusions drawn from this research provide information on each neural network and
                            their suitability for different video game contexts. This will help video game developers
                            choose the most appropriate neural network model for their needs.
                        </p>
                    </div>
                </LandingSection>

                <LandingSection id="technologiesSection" className="text-section" color="secondary">
                    <h2 className="landing-section__h2">Technologies</h2>
                    <p className="landing-section__paragraph">
                        In order to ensure a fair and unbiased comparison, state-of-the-art software libraries and
                        frameworks were used for this project. All tools utilized were open source and widely recognized
                        in the research community.
                    </p>
                    <h3 className="landing-section__h3">Frameworks and Libraries</h3>
                    <p className="landing-section__paragraph">
                        Python was chosen as the primary programming language for this project due to its widespread use
                        in the machine learning community and the wealth of technical resources available in Python.
                    </p>
                    <p className="landing-section__paragraph">
                        I exclusively utilize open-source libraries and frameworks. Although not exhaustive, the
                        following list comprises the principal and most critical libraries used in my work.
                    </p>
                    <table className="table-technology">
                        <thead>
                        <tr>
                            <th>Technology</th>
                            <th>Version</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a href="https://pytorch.org/">PyTorch</a></td>
                            <td>2.0</td>
                            <td>
                                Machine Learning framework for deep neural networks developed by the Linux Foundation
                                umbrella.
                            </td>
                        </tr>
                        <tr>
                            <td><a href="https://gymnasium.farama.org/">Gymnasium</a></td>
                            <td>0.28.1</td>
                            <td>
                                Standard API for reinforcement learning, and a diverse collection of reference
                                environments.
                            </td>
                        </tr>
                        <tr>
                            <td><a href="https://stable-baselines3.readthedocs.io/en/master/">Stable Baselines3</a></td>
                            <td>1.8.0</td>
                            <td>Set of reliable implementations of reinforcement learning algorithms in PyTorch.</td>
                        </tr>
                        <tr>
                            <td><a href="https://jupyter.org/">Jupyter Notebook</a></td>
                            <td>6.5.4</td>
                            <td>Interactive web-based Python code interface.</td>
                        </tr>
                        <tr>
                            <td><a href="https://huggingface.co/docs/transformers/index">Transformers</a></td>
                            <td>4.28.1</td>
                            <td>
                                State-of-the-art collection of Transformers neural network architectures developed by
                                Hugging Face.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <h3 className="landing-section__h3">Development Tools</h3>
                    <p className="landing-section__paragraph">
                        <ul>
                            <li><strong>Linux</strong> – Ubuntu-based Operating System (i.e. Pop!_OS or Ubuntu) version
                                22.04
                            </li>
                            <li><strong>Miniconda:</strong> small bootstrapped version of Anaconda. Anaconda is an
                                open-source package
                                and environment management system that improve the default Python environment management
                                and pip package manager.
                            </li>
                            <li><strong>JetBrains PyCharm Professional:</strong> my favourite multipurpose Python IDE
                            </li>
                            <li><strong>Git:</strong> version control system to manage code</li>
                        </ul>
                    </p>
                </LandingSection>

                <LandingSection id="experimentsSection" className="text-section" color="primary">
                    <h2 className="landing-section__h2">Experiments</h2>
                    <p className="landing-section__paragraph">
                        The present study sought to replicate the approach of Meng et al. (2022), which entailed
                        employing the Double DQN algorithm in conjunction with a Convolutional Neural Network, and
                        subsequently replacing the CNN with a Swin Transformer. For
                        each experiment, identical algorithmic and hyper-parameter settings were employed.
                    </p>
                    <p className="landing-section__paragraph">
                        I ran experiments on two Atari games Breakout, and Pong. These experiments aimed to
                        measure the effectiveness of the two neural networks at solving the game environments, with a
                        focus on their ability to learn and improve their performance over time.
                    </p>
                    <p className="landing-section__paragraph">
                        I measured the performance of each neural network by tracking the average reward and maximum
                        score achieved during gameplay over time. The results of these experiments are analyzed and
                        presented in the next section.
                        The input to both the CNN and Swin Transformer networks is a stack of four grayscale frames
                        reduced to a size of 84×84.
                    </p>
                    <h3 className="landing-section__h3">Double Deep Q Network</h3>
                    <p className="landing-section__paragraph">
                        The Double Deep Q Network algorithm is the core component of the experiment. The exact
                        hyperparameters used in the algorithm are described below.
                    </p>
                    <p className="landing-section__paragraph">
                        <table className="table-hyperparmeters">
                            <tbody>
                            <tr>
                                <td>Input</td>
                                <td>4x84x84</td>
                            </tr>
                            <tr>
                                <td>Optimiser</td>
                                <td>Adam</td>
                            </tr>
                            <tr>
                                <td>Adam learning rate</td>
                                <td>0.0001</td>
                            </tr>
                            <tr>
                                <td>Loss function</td>
                                <td>Smooth L1</td>
                            </tr>
                            <tr>

                                <td>Max timesteps</td>
                                <td>10,000,000</td>
                            </tr>
                            <tr>
                                <td>Target update interval</td>
                                <td>1,000</td>
                            </tr>
                            <tr>

                                <td>Learning starts</td>
                                <td>100,000</td>
                            </tr>
                            <tr>
                                <td>Train frequency</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Replay buffer size</td>
                                <td>10,000</td>
                            </tr>
                            <tr>
                                <td>Batch size</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td>Discount rate (gamma)</td>
                                <td>0.99</td>
                            </tr>
                            <tr>
                                <td>Exploration fraction</td>
                                <td>0.1</td>
                            </tr>
                            <tr>
                                <td>Final exploration rate (epsilon)</td>
                                <td>0.01</td>
                            </tr>
                            </tbody>
                        </table>
                    </p>

                    <h3 className="landing-section__h3">Convolutional Neural Network</h3>
                    <p className="landing-section--center">
                        <img src={CnnArchitectureImg} className="landing-section__image" alt="CNN Architecture Schema"/><br/>
                        <i>Schematic representation of the CNN model used</i>
                    </p>
                    <p className="landing-section__paragraph">
                        The CNN architecture is based on the one used by Mnih et al. (2015) in their Nature paper on
                        DQN, which includes a 32-filter convolutional layer with 8×8 filters and stride 4, a 64-filter
                        convolutional layer with 4×4 filters and stride 2, a 64-filter convolutional layer with 3×3
                        filters and stride 1, a fully-connected hidden layer with 512 units, and a fully-connected
                        linear output layer with a single output for each valid action in the environment.
                    </p>
                    <p className="landing-section__paragraph">
                        <table className="table-network-architecture">
                            <tbody>
                            <tr>
                                <th>Layers</th>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th>Blocks each layer</th>
                                <td>2, 3, 2</td>
                            </tr>
                            <tr>
                                <th>Heads each layer</th>
                                <td>3, 3, 6</td>
                            </tr>
                            <tr>
                                <th>Patch size</th>
                                <td>3x3</td>
                            </tr>
                            <tr>
                                <th>Window size</th>
                                <td>7x7</td>
                            </tr>
                            <tr>
                                <th>Embedding dimension</th>
                                <td>96</td>
                            </tr>
                            <tr>
                                <th>MLP ratio</th>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th>Drop path rate</th>
                                <td>0.1</td>
                            </tr>
                            </tbody>
                        </table>
                    </p>

                    <h3 className="landing-section__h3">Swin Transformer</h3>
                    <p className="landing-section--center">
                        <img src={SwinTransformerArchitectureImg} className="landing-section__image"
                             alt="Swin Transformer architecture schematic representation"/><br/>
                        <i>Schematic representation of the Swin Transformer architecture</i>
                    </p>
                    <p className="landing-section__paragraph">
                        For the Swin Transformer architecture, the complexity of the model makes finding good parameters
                        challenging. The architecture used in this project was adapted from Meng et al. (2022) and
                        includes three layers of Swin Blocks, each containing 2, 3, and 2 blocks and 3, 3, and 6
                        attention heads, respectively. The patch size is set to 3×3, which yields 28×28 patches given
                        the input size of 84×84 for the four channels. The embedding dimension for each patch is 96,
                        resulting in a token size of 784×96 after patch embedding. The local window size is 7×7 and the
                        windows are shifted by 3 patches for the first and third blocks. The MLP ratio is 4, indicating
                        that the linear layers within Swin Blocks have 4 times the embedding dimension hidden units,
                        i.e., 384. The drop path rate is set to 0.1, indicating a 10% chance that the input is kept as
                        it is in skip connections (Meng et al. 2022).
                    </p>
                    <p className="landing-section__paragraph">
                        <table className="table-network-architecture">
                            <tbody>
                            <tr>
                                <th>Layers</th>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th>Filters per layer</th>
                                <td>32, 64, 64</td>
                            </tr>
                            <tr>
                                <th>Strides per layer</th>
                                <td>4, 2, 1</td>
                            </tr>
                            <tr>
                                <th>Kernel size per layer</th>
                                <td>8, 4, 3</td>
                            </tr>
                            <tr>
                                <th>MLP Units</th>
                                <td>64x7x7 = 512</td>
                            </tr>
                            </tbody>
                        </table>
                    </p>
                </LandingSection>

                <LandingSection id="resultsSection" className="text-section" color="secondary">
                    <h2 className="landing-section__h2">Results</h2>
                    <p className="landing-section__paragraph">
                        This section presents the findings of my research, in which an agent was trained on Pong and
                        Breakout environments using the Double Deep Q-Network with both CNN and Swin Transformer
                        architectures. For a more detailed explanation of the results, please refer to my thesis, as the
                        content on this webpage has been kept concise.
                    </p>
                    <h3 className="landing-section__h3">Pong</h3>
                    <div className="chart-results">
                        <div>
                            <img src={PongEpisodeMeanRewardImg}
                                 alt="Evolution of the mean reward per episode over time on Pong"/><br/>
                            <i>Evolution of the mean reward per episode over time on Pong</i>
                        </div>
                        <div>
                            <img src={PongEpisodicReturnImg}
                                 alt="Evolution of the score per episode over time on Pong"/><br/>
                            <i>Evolution of the score per episode over time on Pong</i>
                        </div>
                    </div>

                    <p className="landing-section__paragraph">
                        The CNN agent achieved good performance and required a relatively short training time of 7 hours
                        and 36 minutes on a GTX 970 GPU. It began to converge around 500,000 steps, with a stable
                        increase until it reached 3.5 million steps, where it stabilized. However, it did not achieve a
                        mean reward of +/- 20.
                    </p>

                    <p className="landing-section__paragraph">
                        The Swin Transformer-based DQN agent required a substantially longer training period of 3 days
                        and 7 hours on an RTX 3080 GPU. It only began to score positively at around 4 million steps, but
                        showed a constant increase in performance compared to the CNN model. However, it was not able to
                        achieve the same mean reward as the CNN model, achieving only around ~12. Its performance curve
                        was less linear, exhibiting consistent drops to lower scores for a certain period before
                        increasing again.
                    </p>

                    <p className="landing-section__paragraph">
                        Also, an interesting comparison can be made between CNN and Swin, by observing the agents playing
                        directly. The agent trained with CNN took actions in an erratic manner, whereas the Swin
                        Transformer appeared to be smoother, despite its lower mean reward. This behavior is critical in
                        video games since the smoother it is, the more appealing it will be to a human player. This
                        behaviour can be seen in the video below and gives the impression that the Swin DQN agent thinks
                        more before taking an action than the CNN agent (the agent is the right paddle, left paddle is a
                        dummy computer AI).
                        <iframe className="youtube-video" src="https://www.youtube.com/embed/2WXqowueAFE"
                                title="CNN vs Swin Comparison on Atari Pong" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </p>

                    <h3 className="landing-section__h3">Breakout</h3>
                    <div className="chart-results">
                        <div>
                            <img src={BreakoutEpisodeMeanRewardImg}
                                 alt="Evolution of the mean reward per episode over time on Breakout"/><br/>
                            <i>Evolution of the mean reward per episode over time on Breakout</i>
                        </div>
                        <div>
                            <img src={BreakoutEpisodicReturnImg}
                                 alt="Evolution of the score per episode over time on Breakout"/><br/>
                            <i>Evolution of the score per episode over time on Breakout</i>
                        </div>
                    </div>
                    <p className="landing-section__paragraph">
                        The CNN agent was trained for 1 day and 7 hours on an NVIDIA GTX 970 GPU, while the Swin agent
                        required a significantly longer training period of 3 days and 6 hours on an NVIDIA RTX 3080 GPU.
                        Interestingly, the Swin Breakout agent required less time to train than the Swin Pong agent,
                        while the CNN Breakout agent required more time than the CNN Pong agent, despite being trained
                        on the same hardware and under the same conditions. The reasons for these results are not
                        immediately clear and may be due to random factors rather than the neural networks themselves.
                    </p>
                    <p className="landing-section__paragraph">
                        In terms of performance, the CNN agent outperformed the Swin agent in Breakout, achieving a mean
                        reward of almost 50 and a better episodic return overhaul, while the Swin DQN agent occasionally
                        performed better for a few episodes. Overall, the Swin agent's performance was worse than Pong,
                        with a mean reward that was more than double that of the CNN agent. The convergence point for
                        both agents started early in training, before 1 million steps. These results suggest that
                        Breakout requires more than 10 million steps for proper training, although the CNN agent was
                        able to achieve better results in less time.
                    </p>
                    <p className="landing-section__paragraph">
                        Compared to Meng et al. (2022), my results on Breakout show lower scores for the first 10
                        million steps. This difference may be due to random factors or the choice of seed. In their
                        paper, Swin DQN and CNN DQN achieved relatively similar results, which became sparser closer to
                        2 million steps. This suggests that the Swin agent requires more time and data to achieve
                        optimal performance compared to the CNN agent.
                    </p>
                </LandingSection>


                <LandingSection id="conclusionSection" className="text-section" color="primary">
                    <h2 className="landing-section__h2">Conclusion</h2>
                    <p className="landing-section__paragraph">
                        The primary objective of this project was to compare the performance of a Vision Transformer
                        variant with its CNN counterpart using the Deep Q Network (DQN) algorithm, a widely recognized
                        Reinforcement Learning (RL) algorithm. However, during the research phase, a paper titled “Deep
                        Reinforcement Learning with Swin Transformer” (Meng et al. 2022) was encountered, which had
                        already replaced the CNN with the Swin Transformer model. Despite this, the idea of replicating
                        their work and comparing my results with theirs remained intriguing, especially given my limited
                        knowledge of hyperparameter tuning if I were to try a completely different architecture.
                    </p>
                    <p className="landing-section__paragraph">
                        The conclusion of the Meng et al. paper showed that the Swin DQN outperformed its CNN
                        counterpart. However, my results indicated that the CNN outperformed the Swin DQN in the two
                        tested games, Pong and Breakout. Despite this, the results were still significant and
                        interesting compared to the paper, indicating that the Swin Transformer's computational
                        complexity and time requirements for training an agent are higher than those of the CNN. The
                        higher results obtained by Meng et al. (2022) demonstrate that the Swin Transformer requires a
                        significantly higher number of training steps.
                    </p>
                    <p className="landing-section__paragraph">
                        Training an agent with Swin Transformer is computationally intensive and requires significant
                        GPU memory, making it challenging for an average computer and not feasible for consumer video
                        games due to the low number of individuals who own such hardware. Therefore, the CNN remains a
                        viable option for high-performance algorithms, considering the hardware of the end-user machine.
                    </p>
                    <p className="landing-section__paragraph">
                        Despite this, the Swin Transformer offers certain advantages over the CNN that are not related
                        to raw performance. A fascinating comparison can be made between the CNN and Swin by observing
                        the agents playing directly. The agent trained with CNN took actions in an erratic manner,
                        whereas the Swin Transformer appeared to be smoother, despite its lower mean reward. This
                        behavior is critical in video games since the smoother it is, the more appealing it will be to a
                        human player.
                    </p>
                </LandingSection>

                <LandingSection id="contactSection" className="text-section" color="secondary">
                    <div className="landing-section-contact">
                        <div className="landing-section-contact__networks">
                            <h2 className="landing-section__h2">Contact</h2>
                            <p className="landing-section__paragraph">
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
                                   target="_blank"><FontAwesomeIcon icon={icon({name: 'github', style: "brands"})}/>
                                    <span className="contact-link--text"> GitHub</span></a>
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