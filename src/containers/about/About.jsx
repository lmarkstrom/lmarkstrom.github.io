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
                    <h2>Linus Markström</h2>
                    <p>
                        My name is Linus Markstrom and I am a secound year M.Sc student in computer science at
                        KTH Royal Institute of Technology. I was born in Umeå Sweden the year 2000. I grew up there 
                        and later was called up for military service in the air force. In the air force i was a fighter 
                        jet mechanic. After my service I worked in the Navy for two years as a System Engineer before I 
                        began my studies at KTH.
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
                        I have worked with multiple programming languages during my studies and spare time. I have most experience in Java,
                        C, Assembler, Python, PSQL, Haskell, HTML, JS and Prolog. But I have also some experience in MatLab, Golang, PHP, SQLite, Clojure,
                        Smalltalk, Erlang, Rust and Cobolt.
                        <br/> <br/>
                        My knowledge in these language are varied but I have both a wide experience as shown above but also a deeper experince in more
                        limited amount of languages. I thrive learning me new things and therefor I enjoy getting a wide knowledge and try new things.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );

};

export default About