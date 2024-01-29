import React from 'react'
import './contact.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
  return (
    <>
    <Header />
    <h3>Contact:</h3>

    <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>

    <Footer />
    </>
  )
}

export default Contact