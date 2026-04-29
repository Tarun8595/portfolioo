import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./WhyWorkWithMe.css";


const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
};


const WhyWorkWithMe = () => {

    return (
        <>
            <section className="why_section">

                <div className="why_container">
                    {/* LEFT BIG TEXT */}
                    <div className="why_left">
                        <h1>
                            WHAT SETS<br /><span className="large_me">ME</span><br />APART
                        </h1>
                    </div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        className="why_right"
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >

                        {/* TOP PARA */}
                        <motion.p className="why_para" variants={fadeUp}>
                            I transform ideas into scalable and high-performing web solutions,
                            focusing on clean structure, usability, and real impact.
                        </motion.p>

                        {/* CARDS */}
                        <div className="why_cards">

                            {/* SKILLS */}
                            <motion.div className="card red" variants={fadeUp}>
                                <h3>Modern Tools & Skills</h3>
                                <ul>
                                    <li>✺ Create blueprint</li>
                                    <li>✺ React</li>
                                    <li>✺ API Integration</li>
                                    <li>✺ Git & GitHub</li>
                                </ul>
                            </motion.div>

                            {/* COMMUNICATION */}
                            <motion.div className="card green" variants={fadeUp}>
                                <h3>Easy & Clear Communication</h3>
                                <a target="_blank" href="https://www.linkedin.com/in/tarun-kushwaha-web/">✺ Linkedin <span>↗</span></a>
                                <a target="_blank" href="https://www.instagram.com/tarun.khus/">✺ Instagram <span>↗</span></a>
                                <a target="_blank" href="https://wa.me/918595703558?text=Hello%20Tarun">✺ Whatsapp <span>↗</span></a>
                                <a target="_blank" href="mailto:tarunkhuswaha456@gmail.com">✺ Email <span>↗</span></a>
                            </motion.div>

                            {/* CTA */}
                            <motion.div className="card black" variants={fadeUp}>
                                <h3>Always Work On Clients</h3>
                                <ul>
                                    <li>✺ Feedback</li>
                                    <li>✺ Requirement</li>
                                    <li>✺ Future Golas</li>
                                    <li>✺ Work Relationship</li>
                                </ul>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>

                {/* ROCK IMAGE */}
                <img src="/public/mountain.png" alt="rock" className="rock" />

            </section>
        </>
    );
};

export default WhyWorkWithMe;