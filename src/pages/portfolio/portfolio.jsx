import React from 'react'
import './portfolio.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Portfolio = () => {
  return (
    <>
        <h2>Portfolio</h2>

        <div className='project-container'>

          <div className='project-result'>
            <img src="./assets/noteApp.png" alt="cat" />
            <p>Note App</p>
            <a href="https://github.com/RyanPersaud03/note-taker" target='_blank'>Source code</a>
        </div>

          <div className='project-result'>
        <img src="./assets/password-generator-screenshot.png" alt="cat" />
        <p>Password Generator</p>
        <a href="https://github.com/RyanPersaud03/password-generator" target='_blank'>Source code</a>
        </div>

          <div className='project-result'>
        <img src="./assets/techblog-screenshot.png" alt="cat" />
        <p>Tech Blog</p>
        <a href="https://github.com/RyanPersaud03/tech-blog" target='_blank'>Source code</a>
        </div>
        
          <div className='project-result'>
        <img src="./assets/workday-screenshot.png" alt="cat" />
        <p>Workday Schedule</p>
        <a href="https://github.com/RyanPersaud03/work-day-scheduler" target='_blank'>Source code</a>
        </div>

        </div>
        <Footer />
    </>
  )
}

export default Portfolio