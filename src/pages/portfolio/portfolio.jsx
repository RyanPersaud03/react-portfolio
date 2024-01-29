import React from 'react'
import './portfolio.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Portfolio = () => {
  return (
    <>
        <Header />
        <h2>Portfolio</h2>

        <div className='project-container'>

          <div className='project-result'>
        <img src="https://placekitten.com/200/300" alt="cat" />
        <a href='https://google.com' target='_blank'>Project One</a>
        </div>

          <div className='project-result'>
        <img src="https://placekitten.com/200/300" alt="cat" />
        <a href='https://google.com' target='_blank'>Project One</a>
        </div>

          <div className='project-result'>
        <img src="https://placekitten.com/200/300" alt="cat" />
        <a href='https://google.com' target='_blank'>Project One</a>
        </div>
        
          <div className='project-result'>
        <img src="https://placekitten.com/200/300" alt="cat" />
        <a href='https://google.com' target='_blank'>Project One</a>
        </div>

        </div>
        <Footer />
    </>
  )
}

export default Portfolio