import React from 'react'
import './header.css'
// import navigation from '../Navigation/navigation'

const Header = () => {
  return (
    <header>
    <h1>Ryan's Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#About">About</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Resume">Resume</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header