import { useEffect, useState } from "react";
import './Home.css'
import './App.css'
import About from "./About";
import Navbar from "./Navbar";
import MarqueeSection from "./MarqueeSection";
import Projects from "./Projects";
import Contact from "./Contact";
import WhyWorkWithMe from "./WhyWorkWithMe";
import LastCompanys from "./LastCompanys";
import Talk from "./Talk";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <div className="home_section" id="HOME">
                <Navbar />
                {/* NAVBAR */}
                {/* MENU OVERLAY */}
                {/* ABOUT */}
                <div className="aboutME_content">
                    <p className='aboutME'>
                        Hey, I’m a frontend developer who approaches websites with a different mindset. I create modern, visually striking interfaces that go beyond just showing data—they become the true face of a brand. My focus is on smooth interactions, clean design, and building digital experiences that leave a lasting impression.
                    </p>
                </div>

                {/* HEADING */}
                <div className="main_heading_content">
                    <div className="aboutME_option">
                        <p>New Delhi, India</p>
                        <p>2+ years Experience</p>
                        <p>18+ Completed Projects</p>
                    </div>

                    <p className="main_heading">
                        {["T", "A", "₹", "U", "N"].map((char, i) => (
                            <span className="letter" key={i}>
                                <span className="letter_inner">
                                    <span className="front">{char}</span>
                                    <span className="back">{char}</span>
                                </span>
                            </span>
                        ))}
                    </p>
                </div>

            </div>

            <div id="ABOUT"><About /></div>

            <MarqueeSection />
            <div id="WITHME"><WhyWorkWithMe /></div>

            <div id="PROJECTS"><Projects /></div>


            <div id="CONTACT"><Talk /></div>

            <LastCompanys />

            <Footer />
        </>
    )
}

export default Home