import React from 'react';
import './Home.css';
import Me from '../../assets/profileIMG.jfif'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='200' />
                <h1 className="home__name">Javier Gonzalez</h1>
                <span className="home__education">I'm a Backend web developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn" id='btnHome'> Contact Me</a>
              

                <ScrollDown />
            </div>

        </section>
    )
}

export default Home