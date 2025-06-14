"use client"

import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "../components/AboutMe"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
