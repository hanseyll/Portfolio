import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev , FaInstagram} from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/hanseyll' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/javier-jos%C3%A9-gonzalez-pacheco-791721244/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.instagram.com/hanseyll/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>

        </div>
    );
};

export default HeaderSocials;
