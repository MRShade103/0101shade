import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './src/about'
import Contact from './src/contact'
import Services from './src/Services'
import Projects from './src/Projects'

// File: MainRouter.jsx
// Student: David Wald
// StudentID: 301273421
// Date: 9/27/2024
const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
 <Route exact path="/" element={<Home />} />
 <Route exact path="/about" element={<About />} />
 <Route exact path="/Services" element={<Services />} />
 <Route exact path="/Projects" element={<Projects />} />
 <Route exact path="/contact" element={<Contact />} />
 

 
 </Routes>
 </div>
)
}
export default MainRouter
