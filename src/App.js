import React from 'react';
import {HashRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './Navbar.css';
import Inventarie from './pages/Inventarie';

function App() {
  return (
    <HashRouter>
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '90vh'}}>
        <nav className='navbar'>
          <ul>
            <li>
              {/* <Link to={Home}>Home</Link> */}
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to= "/about">About</Link>
            </li>
            <li>
              <Link to= "/contact">Contact</Link>
            </li>
            <li>
              <Link to= "/projects">Projects</Link>
            </li>
            <li>
              <Link to= "/inventarie">Inventarie</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/inventarie' element={<Inventarie/>}/>
        </Routes>
        {/*Konfiguration av Routingen*/}
      </div>
      <Footer/>
    </HashRouter>
  );
}

export default App;
