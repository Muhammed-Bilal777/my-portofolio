/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-design.svg",
    title: "RESTful API",
    description: "Hight quality and the most modern (MVC) approach for designing and developing."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Responsive and Cross browser compatibility",
    description: "Professional development of applications for different devices and browser."
  },
  {
    icon: "/images/access.png",
    title: "Accessibility Expert",
    description: "creating a user-friendly experience that caters to various types of disabled users, ensuring equal access and engagement for all"
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  useEffect(()=>{window.scroll(0,0)},[])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      Highly skilled MERN Stack developer bringing 2 years of experience in designing and developing
      robust web applications. Proficient in front-end and back-end technologies, including React.js,
Node.js, MongoDB, and Express.js. 

      </p>

      <p>
      Strong understanding of responsive design principles and crossbrowser compatibility. Proven ability to meet tight deadlines and deliver high-quality code. A
collaborative team player, dedicated to ensuring seamless user experiences and designing scalable
solutions.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Courses & Certifications</h3>

      <ul className="clients-list has-scrollbar">

      <li className="clients-item">
          <a href="#">
            <img src="images/reactjs.png" alt="reactjs"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/nodejs.png" alt="nodejs "/>
          </a>
        </li>

        

        <li className="clients-item">
          <a href="#">
            <img src="images/mern.png" alt="mern stack"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/api.png" alt="api development"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/web.png" alt="web development"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/wordpress.png"alt="wordpress development"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About