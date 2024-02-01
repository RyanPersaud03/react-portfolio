import React, { useState } from 'react';
import './contact.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!emailRegex.test(email)) {
      setInvalidEmail(true);
      return;
    }

    setInvalidEmail(false);

    // Perform the rest of the form submission logic here
    alert("Please enter valid email")
  };

  return (
    <>
      <h3>Contact:</h3>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {invalidEmail && <p className="error">Invalid email address</p>}

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <Footer />
    </>
  );
};

export default Contact;
