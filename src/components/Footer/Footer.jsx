import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Ryan's Portfolio. All rights reserved.</p>
      <ul className='footer-links'>
        
         <li className='footer-li'><a href="https://github.com/RyanPersaud03" target='_blank'>Github</a></li>
        
         <li className='footer-li'><a href="https://www.linkedin.com/in/ryanp03" target='_blank'>LinkedIn</a></li>
        
         <li className='footer-li'><a href="" target='_blank'>Twitter</a></li> 
      
      </ul>
    </footer>
  )
}

export default Footer