import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  console.log(document.location)
  class Link {
    constructor(name, href){
      this.name = name
      this.href = href
    }
  }
  const links = [new Link("About", "/"), new Link("Portfolio", "/portfolio"), new Link ("Contact", "/contact"), new Link("Resume", "/resume")]

  return (
    <header>
      <h1>Ryan's Portfolio</h1>
      <nav>
        <ul>
          {links.map(link => 
          <li className={document.location.pathname == link.href ? "active currentLink" : "currentLink" }><a href={link.href} >{link.name}</a></li>
          )}     
        </ul>
      </nav>
    </header>
  )
}

export default Header