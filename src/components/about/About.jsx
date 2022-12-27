import React from 'react';
import './About.css';
import Image from '../../assets/profilePhoto.jpg';
import Resume from '../../assets/Javier_Gonzalez_Pacheco.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" id='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Im a Backend developer with approximately 700+ hours of programming with techs such as Javascript, HTML, CSS Node, React, Redux,Git and SQL. I'm a minimalist, objective and peaceful person, I am attracted to the issue of dealing with errors that may arise when coding because I like to test myself... I consider myself a proactive person who is always looking to go beyond what he knows Through perseverance and tenacity, I am usually very honest with myself and with others, I faithfully believe that this is what has helped me advance on my path as a programmer since it has allowed me to draw strong lines between what I should do a review and which I really couldn't understand. I enjoy talking to people and it doesn't really bother me that some people think differently to me, on the contrary, it is enriching for me to know different points of view, which has led me to be a very flexible person and open to new Ideas.
                        </p>

                        <h4 >Tech Skills</h4>
                        <br></br>
                        <ul className="about__list">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            <li>AWS</li>
                            <li>SQL</li>
                            <li>Prisma</li>
                            <li>Express</li>
                            <li>Docker</li>
                        </ul>
                        <h4>Soft Skills</h4>
                        <br></br>
                        <ul className="about__list">
                            <li>Resilience</li>
                            <li>Empathy</li>
                            <li>Teamwork</li>
                            <li>Agile learning</li>
                            <li>Tenacity</li>
                            <li>Versatility</li>
                            <li>Adaptability</li>
                            <li>Problem Analysis</li>
                            <li>Problem Solving</li>
                            <li>Emotional intelligence</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>


                </div>
            </div>
            <AboutBox/>

        </section>
    )
}

export default About