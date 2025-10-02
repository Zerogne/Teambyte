"use client"

import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import Offers from "@/components/sections/offers"
import Motto from "@/components/sections/motto"
import Contact from "@/components/sections/contact"
import StaggeredMenu from "@/components/StaggeredMenu"

const menuItems = [
  { label: 'HOME', ariaLabel: 'Go to home page', link: '/' },
  { label: 'ABOUT', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'PROJECTS', ariaLabel: 'View our projects', link: '#projects' },
  { label: 'CONTACT', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        // logoUrl="/placeholder-logo.svg"
        accentColor="#ff6b6b"
      />
      <main>
        <Hero />
        <Projects />
        <Offers />
        <Motto />
        <Contact />
      </main>
    </div>
  )
}
