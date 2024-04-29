import React from 'react'
import './Footer.css';
import logoGit from '../../assets/icons/git.png';
import logoLi from '../../assets/icons/li.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socials'>
        <a className='iconsContainer' href="https://github.com/lmarkstrom" target="_blank" rel="noopener noreferrer">
          <img className='icons' src={logoGit} alt="Github Logo" />
        </a>
        <a className='iconsContainer' href="https://www.linkedin.com/in/linusmarkstrom/" target="_blank" rel="noopener noreferrer">
          <img className='icons' src={logoLi} alt="LinkedIn Logo" />
        </a>
      </div>
        
    </div>
  );

};

export default Footer