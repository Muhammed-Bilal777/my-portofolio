import React, { useEffect } from 'react';
import { FaBookReader, FaRegBookmark } from 'react-icons/fa';
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
            title="Zopsmart | SDE2"
            date="Nov-2024 to Present"
            description="Spearheaded the development of a Node.js + Koa.js microservice framework in TypeScript with dynamic database support (MongoDB, SQL), containerized workflows (Docker), and observability (OpenTelemetry, Winston). Implemented health checks, metrics, and automated testing (Jest, JMeter) to ensure reliability and scalability. Led release management, documentation, and cross-team collaboration, streamlining adoption and developer onboarding. Additionally, contributed to frontend development of a hiring portal using React.js, enhancing UI/UX, resolving QA issues, and ensuring quality with Jest and RTL tests."
          />
          <TimelineItem
            title="Doodleblue | Frontend Developer"
            date="Aug-2024 to Nov-2024"
            description="Analyzed and translated Figma designs into responsive, user-friendly web applications, ensuring pixel-perfect implementation and adherence to design specifications.Implemented best practices in frontend development, including code reviews, version control, and performance optimization, to maintain high standards of code quality and efficiency."
          />
          <TimelineItem
            title="MERN Developer"
            date="Jan-2024 to Aug-2024"
            description="Worked as a MERN stack developer, concentrating on the creation of robust RESTful APIs using Node.js and MongoDB for efficient data management. Additionally, I developed web applications by leveraging ReactJS, delivering high-quality user experiences."
          />
          <TimelineItem
            title="Thomson Reuters | Web Develoer"
            date="Jan-2024 to Aug-2024"
            description="Developed robust and scalable e-commerce platforms using the MERN stack, delivering seamless user experiences and driving business growth.Built responsive and user-friendly e-commerce storefronts that enhance brand image and drive sales.Utilized React to create dynamic and interactive product displays, search functionalities, and personalized recommendations. Collaborated with cross-functional teams including design, marketing, and QA to deliver high-quality e-commerce solutions. "
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
          <SkillItem title="Docker" value={70} />
          <SkillItem title="Jest" value={70} />
          <SkillItem title="Observability" value={70} />
          <SkillItem title="Grafana" value={70} />
          <SkillItem title="Bootstrap" value={70} />
          <SkillItem title="RabbitMQ" value={70} />
          <SkillItem title="CICD" value={70} />
          <SkillItem title="MongoDB" value={70} />
 
        </ul>
      </div>
    </section>
  );
};

export default Resume;
