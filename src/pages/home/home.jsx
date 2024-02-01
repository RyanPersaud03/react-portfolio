import React from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <h2>About me</h2>
      <img src="./assets/profile-pic.jpg" className='profile-img' alt="cat" />
      <h3>About Me</h3>
      <p>
        Hi my name's Ryan Persaud, a enthusiastic and recently graduated full-stack developer from the prestigious University of Toronto. 
        My journey into the world of programming began with a deep curiosity and a commitment to creating impactful digital experiences.
        


      
      </p>
      <h3>Education:</h3>
      <p>
          I hold a diploma in Full-stack web development. During my time at the University of Toronto, I honed my skills in both front-end and back-end 
          technologies, gaining a solid foundation in languages such as JavaScript, React, and MySQL. I also had the opportunity to collaborate on diverse projects, giving me valuable 
          insights into the entire development life cycle.
      </p>
      <h3>Skills:</h3>
      <p>
        As a junior full-stack developer, I bring a robust skill set to the table. From crafting responsive and user-friendly interfaces using HTML, CSS, and JavaScript
        to implementing server-side logic with Node.js, I am well-versed in the tools and technologies that power modern web applications.
        My proficiency extends to working with databases, API integration, and version control systems like Git.
      </p>
      
      <h3>What Sets Me Apart:</h3>
      <p>
          What sets me apart is not just my technical acumen but also my dedication to continuous learning. I am always eager to explore emerging technologies and methodologies, 
          ensuring that I stay ahead in this ever-evolving field.
      </p>
      <Footer />
    </>
  )
}

export default Home