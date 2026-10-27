import React from 'react'
import Hero from './Hero'
import About from './About'

import Projects from './Projects'
import Experience from './Experience'

import Skills from './Skills'
import ContactMe from './ContactMe'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}

export default Home
