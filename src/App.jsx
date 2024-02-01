import './App.css'
// IMPORT Pages
import Home from './pages/home/home.jsx'
import Portfolio from './pages/portfolio/portfolio.jsx'
import Contact from './pages/contact/contact.jsx'
import Resume from './pages/resume/resume.jsx'
// IMPORT Components
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
