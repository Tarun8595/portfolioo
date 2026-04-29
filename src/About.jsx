import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

function About() {

    const fadeUp = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const slideLeft = {
        hidden: { opacity: 0, x: -100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const slideRight = {
        hidden: { opacity: 0, x: 100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className="about_section">
            <div className="about_container">

                {/* TOP */}
                <motion.div
                    className="about_heading"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className="skills_heading">Skills</p>
                    <div className="about_circle about_circle1"></div>
                    <p className='about_subtext'>
                        Skills are frameworks of thinking, they allow me to transform ideas into structured, interactive environments
                    </p>
                </motion.div>

                <motion.div
                    className="about_heading"
                    style={{ border: "none" }}
                    variants={slideRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <p className='about_subtext'>
                        Vision defines why systems exist, purpose creates impact
                    </p>
                    <div className="about_circle about_circle2"></div>
                    <p className="skills_heading">Vision</p>
                </motion.div>

                {/* SKILLS */}
                <div className="skills-wrapper">

                    <motion.div
                        className="skill-col"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <span className="skill-number skill-number1">01</span>
                        <h2>DESIGN</h2>
                        <ul>
                            <li>Brand identity</li>
                            <li>Web design</li>
                            <li>UX & UI Design</li>
                            <li>Interaction design</li>
                            <li>Wireframe</li>
                        </ul>
                    </motion.div>

                    <motion.img
                        src="/public/headphone.png"
                        alt=""
                        className="headphone_skill"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        loading="lazy"
                    />

                    <motion.div
                        className="skill-col"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <span className="skill-number skill-number2">02</span>
                        <h2>DEVELOPMENT</h2>
                        <ul>
                            <li>Front-end development</li>
                            <li>Back-end development</li>
                            <li>SEO</li>
                            <li>Responsive Development</li>
                            <li>API Integration</li>
                            <li>Deployment & Hosting</li>
                            <li>Animation & Micro-interactions</li>
                        </ul>
                    </motion.div>

                    <motion.img
                        src="/public/coffee.png"
                        alt=""
                        className="coffee_skill"
                        variants={slideRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        loading="lazy"
                    />

                    <motion.div
                        className="skill-col"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <span className="skill-number skill-number3">03</span>
                        <h2>TECHNOLOGY</h2>
                        <ul>
                            <li>React</li>
                            <li>NextJS</li>
                            <li>TypeScript</li>
                            <li>Framer Motion</li>
                            <li>SASS</li>
                            <li>Git</li>
                        </ul>
                    </motion.div>

                </div>

                {/* JOURNEY */}
                <motion.div
                    className="about_journey"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <p className="journey_text">
                        Started my journey in 2023 with web development, quickly moving from an intern to a professional front-end developer. I’ve worked on multiple projects and delivered 12+ freelance solutions across different domains. I focus on creating smooth, high-performance web experiences with modern design and meaningful motion.
                    </p>

                    <motion.img
                        src="/public/playground.png"
                        alt=""
                        className="journey_img"
                        variants={slideRight}
                    />
                </motion.div>

            </div>
        </div>
    )
}

export default About