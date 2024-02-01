import React from 'react'
import './resume.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Resume = () => {
  return (
    <>
    <h2>Resume</h2>
    <p>Download my <a href='./assets/ryan-resume.pdf' download='ryan-resume.pdf' className='resume-link'>Resume</a></p>

    <h3>Front-end Proficiencies</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>javaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
    </ul>
    <h3>Back-end Proficiencies</h3>
    <ul>
        <li>API</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
    </ul>

    <br />
    <br />
    <Footer />
    </>
  )
}

export default Resume