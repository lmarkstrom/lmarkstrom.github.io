import React from 'react'
import './Footer.css';
import logoFb from '../../assets/icons/fb.png';
import logoInsta from '../../assets/icons/insta.png';
import logoLi from '../../assets/icons/li.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socials'>
        <a className='iconsContainer' href="https://sv-se.facebook.com/linus.markstrom.1" target="_blank" rel="noopener noreferrer">
          <img className='icons' src={logoFb} alt="Facebook Logo" />
        </a>
        <a className='iconsContainer' href="https://www.instagram.com/linusmarkstrom/" target="_blank" rel="noopener noreferrer">
          <img className='icons' src={logoInsta} alt="Instagram Logo" />
        </a>
        <a className='iconsContainer' href="https://www.linkedin.com/in/linusmarkstrom/" target="_blank" rel="noopener noreferrer">
          <img className='icons' src={logoLi} alt="LinkedIn Logo" />
        </a>
      </div>
        
    </div>
  );

};

export default Footer