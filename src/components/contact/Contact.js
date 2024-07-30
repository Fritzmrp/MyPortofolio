import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="icon" />
            <h4>Email</h4>
            <h5>Fritzmarpaung19@gmail.com</h5>
            <a
              href="mailto:Fritzmarpaung19@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://wa.me/+6281263632874"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
