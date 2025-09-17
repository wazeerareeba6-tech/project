import React from "react";
import "./index.css";

function Contact() {
  return (
    <>
      <div className="contact-hero">
        <div className="contact-hero-text">
          <h1>Contact Us</h1>
          <p>We’re here to help! Reach out anytime.</p>
        </div>
      </div>

      <div className="contact-info">
        <h2>📞 Get in Touch</h2>
        <ul>
          <li>📱 Phone: <a href="tel:+923001234567">+92 300 1234567</a></li>
          <li>📧 Email: <a href="mailto:cafeteria@iiu.edu.pk">cafeteria@iiu.edu.pk</a></li>
          <li>🌐 Website: <a href="https://www.iiu.edu.pk" target="_blank" rel="noreferrer">www.iiu.edu.pk</a></li>
          <li>📘 Facebook: <a href="https://facebook.com" target="_blank" rel="noreferrer">facebook.com/iiu.cafeteria</a></li>
          <li>📸 Instagram: <a href="https://instagram.com" target="_blank" rel="noreferrer">@iiu_cafeteria</a></li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;