import { useState, useEffect } from 'react'
import NavBar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import CardName from '../components/Aboutme.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import ContactMe from '../components/Contact.jsx'




export default function Portofolio(){
    

    return(
        <>
        <NavBar />
        <Hero />
      <CardName />
      <Skills/>
      <Projects/>
      <ContactMe />
      </>
    )
}