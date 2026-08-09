import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython ,faReact, faNodeJs, faHtml5, faCss3Alt, faLaravel} from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faDatabase } from "@fortawesome/free-solid-svg-icons";



gsap.registerPlugin(ScrollTrigger)
export default function Skills(){

    const containerRef = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      card1.current,
      { 
        opacity: 0, 
        y: 50
      },
      {
        opacity: 1,
        y: 0, 
        duration: 3.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card1.current, 
          start: 'top 70%', 
          toggleActions: 'play reverse play reverse', 
        }
      }
    );
   
  }, { scope: containerRef }); 


  return(
    <section ref={containerRef} className="skills-container inline-flex flex-col justify-center items-center w-full min-h-screen mt-20  p-8 gap-8" id="skills">
      <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl">My Skills</h1><br/>
      <div ref={card1} className="skills w-full max-w-6xl rounded-[2rem] border border-slate-200 bg-slate-100 p-8 shadow-xl shadow-slate-200/70 backdrop-blur-sm sm:p-10 lg:p-14">
        <span className="multi grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <font color='orange'><FontAwesomeIcon icon={faHtml5} size="2x" />  HTML</font>
          <font color='yellow'><FontAwesomeIcon icon={faCss3Alt} size="2x" />  CSS</font>
            <font color='yellow'><FontAwesomeIcon icon={faJs} size="2x" />  Java Script</font>
             <font color='light-blue'><FontAwesomeIcon icon={faPython} size="2x" />  Python</font>
              <font color='black'><FontAwesomeIcon icon={faTerminal} size="2x" />  Bash</font>
              <font color='#05f9bc'><FontAwesomeIcon icon={faReact} size="2x" />  React</font>
            <font color='black'> Express</font>
            <font color='black'> <FontAwesomeIcon icon={faNodeJs} size="2x" />  Node.js</font>
            <font color='orange'> <FontAwesomeIcon icon={faDatabase} size="2x" />  MySQL</font>
            <font color='red'> <FontAwesomeIcon icon={faLaravel} size="2x" />  Laravel</font>
        
        </span>
        </div>
    </section>
  )
}