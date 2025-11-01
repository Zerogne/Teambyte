"use client"
import React from 'react'
import Hero from './Sections/Hero'
import StaggeredMenu from './Sections/StagerredMenu'
import Values from './Sections/Values'
import Projects from './Sections/Projects'
import Team from './Sections/Team'
import Footer from './Sections/Footer'
export default function Home() {
  return (
    <>
    <div style={{ display: 'none' }}>
        <StaggeredMenu />
      </div>
      <Hero />
      <Values />
      <div style={{ display: 'none' }}>
        <Projects />
      </div>
      <Team />
      <Footer /> 
    </>
  )
}