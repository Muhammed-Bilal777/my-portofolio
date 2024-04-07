import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import image from "../../public/images/my-pic.jpg"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
 import { FaFilePdf, FaGithub, FaInstagramSquare, FaLinkedin  } from "react-icons/fa";
 
import { useEffect } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Aside = () => {

  
  const [text] = useTypewriter({
    words: ['MERN Stack Developer', 'Web Developer', 'Woordpress Developer!','A11y Expert'],
    loop: true,
    typeSpeed:70,
    deleteSpeed:40,
    delaySpeed:2000,

    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })


  
  

   

  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={image}
              alt="Muhammed Bilal"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Muhammed Bilal
            </h1>

            <p className="title">{text} <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#dfbc52"
                className="blinking-cursor"
            /></p>
            
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">

          <li className="contact-item">
              <div className="icon-box">
              <FaFilePdf />
               
              </div>

              <div className="contact-info">
                <p className="contact-title">My Resume</p>

                  
                  <a href="https://drive.google.com/file/d/1gaW2sNHEb2nlKR17zJTIgWz98RHMMjsS/view" target="_blank" className="contact-link" downloadable download={true}>Download pdf</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <MdMarkEmailRead />
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:mdbilaal777@gmail.com" className="contact-link">
                  mdbilaal777@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+918123673585" className="contact-link">
                  +91 8123673585
                </a>
              </div>
            </li>

            

            <li className="contact-item">
              <div className="icon-box">
              <FaLocationDot />
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Nagwara, Bangaluru</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
             

            <li className="social-item">
              <a href="https://www.instagram.com/muhammed_bilal_07_/" className="social-link  " target="_blank" >
                <ion-icon name="logo-twitter logos">
                <FaInstagramSquare/>
                </ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="https://in.linkedin.com/in/muhammed-bilal-409343218" target="_blank"   className="social-link">
                <ion-icon name="logo-instagram logos">
                  <FaLinkedin />
                </ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/Muhammed-Bilal777" target="_blank"  className="social-link">
                <ion-icon name="logo-instagram logos">
                <FaGithub />
                </ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside