import React from 'react';
import './About.css';
import Image from '../../assets/profilePhoto.jpg';
import Resume from '../../assets/CV-Javier-Jose-Gonzalez-Pacheco.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt=""/>

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        I am a Backend Developer with experience in web development and software engineering. I have a strong understanding of object-oriented programming and database design. I have worked with multiple languages, including Java and Javascript. I have experience building robust, scalable web applications using the latest technologies and frameworks.

I am a quick learner and strive to stay up-to-date with the latest technologies in the software engineering space. I am passionate about creating quality software and am always looking for ways to improve my workflow. I am a self-motivated individual and enjoy working with a team to solve complex problems. I am comfortable working with tight deadlines and can handle multiple tasks at once.

I am looking to join a team where I can continue to learn and grow as a developer while contributing to the success of the organization.
                        </p>

                        <h4 >Tech Skills</h4>
                        <br></br>
                        <ul className="about__list">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>Java</li>
                            <li>SpringBoot</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>AWS</li>
                            <li>React</li>
                            <li>Adavanced English(C1)</li>
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
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>


                </div>
            </div>
            <AboutBox/>

        </section>
    )
}

export default About