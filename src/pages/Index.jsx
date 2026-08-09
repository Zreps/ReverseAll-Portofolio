import { useState, useEffect } from 'react'
import NavBar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import CardName from '../components/Aboutme.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import ContactMe from '../components/Contact.jsx'
import { Helmet } from 'react-helmet-async'



export default function Portofolio(){
    

    return(
        <>
        
      <Helmet>
        <title>Portofolio Rafi Rhamadan | Web Developer & UI Designer</title>
        <meta name="description" content="Selamat datang di portofolio resmi Rafi Rhamadan. Keahlian dalam pembuatan website modern yang responsif." />
      </Helmet>
        <NavBar />
        <Hero />
      <CardName />
      <Skills/>
      <Projects/>
      <ContactMe />
      </>
    )
}