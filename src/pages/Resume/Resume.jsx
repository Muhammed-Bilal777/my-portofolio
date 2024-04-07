import React, { useEffect } from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  useEffect(()=>{
     window.scroll(0,0) 
     
  }
,[])
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Web Developer"
            date="Oct 2021 — Jan 2022"
            description="Worked as web developer in creating responsive and user-friendly websites by leveraging advanced front-end technologies, ensuring optimal user experience and seamless functionality."
          />
          <TimelineItem
            title="Frontend Developer"
            date="Feb 2022 — Dec 2022"
            description="I was employed as a web developer, where I specialized in working with WordPress and maintained numerous websites. I consistently updated them to adhere to the latest W3Schools guidelines, particularly focusing on accessibility (A11y), ensuring a better user experience for all. "
          />
          <TimelineItem
            title="MERN Developer"
            date="Dec 2022 — Dec 2023"
            description="Worked as a MERN stack developer, concentrating on the creation of robust RESTful APIs using Node.js and MongoDB for efficient data management. Additionally, I developed web applications by leveraging ReactJS, delivering high-quality user experiences."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="UBDT College Of Engineering"
            date="2021"
            description="Obtained a Bachelor's Degree in Computer Science and Engineering at the UBDT College of Engineering, Davangere."
          />
          <TimelineItem
            title="Anjum Pre-University College"
            date="2013-2015"
            description="Successfully graduated from Anjum PU College in Davangere, focusing on Science stream."
          />
          <TimelineItem
            title="High school"
            date="2011-2013"
            description="I attended Rural High School in Kerebilchi, Davangere, for my primary education."
          />
        </ol>
      </div>

      

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
        <SkillItem title="CSS3" value={90} />
        <SkillItem title="HTML5" value={90} />
        <SkillItem title="Javascript" value={70} />
          <SkillItem title="Web Developer" value={80} />
          <SkillItem title="Reactjs" value={70} />
          <SkillItem title="Nodejs" value={70} />
          <SkillItem title="WordPress" value={90} />
          <SkillItem title="MERN" value={60} />
          <SkillItem title="A11y" value={100} />
          <SkillItem title="Responsive and User-Freindly" value={100} />
          <SkillItem title="RESTful APIs" value={70} />
          <SkillItem title="MongoDB" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
