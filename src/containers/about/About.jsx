import React from 'react'
import portrait from '../../assets/pictures/porträtt.JPEG';
import designIcon from '../../assets/icons/design.png';
import langIcon from '../../assets/icons/lang.png';
import './about.css';

const About = () => {
  return (
    <div>
        <div className='aboutContainer'>
            <div className='flex-item'>
                <div className='pictureContainer'>
                    <img className='picture' src={portrait} alt="Portrait" />
                </div>
                <div className='textcontainer'> 
                    <h2>About me</h2>
                    <p>
                        My name is Linus Markstrom and I am a secound year M.Sc student in computer science at
                        KTH Royal Institute of Technology.
                        <br/> <br/>
                        On this page i show my previus work and experience. My special areas are back-end 
                        structure and design. As shown in my previus project I have worked alot in design and
                        front-end work. But i thrive just as much building a stable backbone of the project.
                        
                    </p>
                </div>
            </div>
        </div>
        <div className='skillsContainer'>
            <div className='flex-item'>
                <img className='icon' src={designIcon} alt="Design Icon" />
                <div className='textP'>
                    <h2>Design Skills</h2>
                    <p>
                        I have wide skills in digital design and interaction design. I have worked on the graphic design 
                        in mulitple projects, building the foundation of that projects visual aspect. The projects both involve 
                        game graphic design, webpage graphic component design and logo designs. 
                        <br /> <br />
                        When it comes to interaction design, I have worked on multple websites and interactive systems. In these projects I worked 
                        on the front-end and developed the interative system for the users. See more in my projects page.
                    </p>
                </div>
            </div>
            <div className='flex-item'> 
                <img className='icon' src={langIcon} alt="Lang Icon" />
                <div className='textP'>
                    <h2>Language Skills</h2>
                    <p>
                        My name is Linus Markstrom and I am a secound year M.Sc student in computer science at
                        KTH Royal Institute of Technology.
                        <br/> <br/>
                        On this page i show my previus work and experience. My special areas are back-end 
                        structure and design. As shown in my previus project I have worked alot in design and
                        front-end work. But i thrive just as much building a stable backbone of the project.
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
  );

};

export default About