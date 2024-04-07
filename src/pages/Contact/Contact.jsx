 
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();
  useEffect(()=>{window.scroll(0,0)},[])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Serive key', 'template key', form.current, {
        publicKey: 'public key',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19183.677594054763!2d77.598375323451!3d13.042462388935062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1782c59f1f99%3A0x536d89574c4f1216!2sNagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712452489073!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy"  style={{color:"white"}} referrerpolicy="no-referrer-when-downgrade"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form ref={form} onSubmit={sendEmail}>

          <div className="input-wrapper">
            <input type="text" name="user_name" className="form-input" placeholder="Full name" required data-form-input />

            <input type="email" name="user_email" className="form-input" placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

           

          <input type="submit" value="Send Mail"  className="form-btn"   data-form-btn>
                  
            
           
          </input>

        </form>

      </section>

       

    </section>

  );
};

export default Contact;
