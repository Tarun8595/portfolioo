import React, { useState, useRef } from "react";
import { motion } from 'framer-motion'
import "./Projects.css";

const projects = [
    {
        id: 1,
        name: "GlowUp",
        tool: "React",
        link: "https://glow-up-ecommerce.onrender.com/",
        image: "glowup2.png",
        bg: "#50065b",
    },
    {
        id: 2,
        name: "FasHub",
        tool: "NextJS",
        link: "https://fashub.onrender.com/",
        image: "fasHub2.png",
        bg: "#165713",
    },
    {
        id: 3,
        name: "Kutto",
        tool: "Html, Css",
        link: "https://kutto.onrender.com/index.html",
        image: "kutto.png",
        bg: "#844f17",
    },
    {
        id: 4,
        name: "CoffeeHub",
        tool: "Bootstrap",
        link: "https://coffeehub-p4ut.onrender.com/index.html",
        image: "coffeehub.png",
        bg: "#862707",
    },
    {
        id: 5,
        name: "Natural Makeup",
        tool: "Html, Css",
        link: "https://h-tarun-c.github.io/Natural-Makeup/",
        image: "natural.png",
        bg: "#200a80",
    },
    {
        id: 6,
        name: "Booth",
        tool: "Bootstrap",
        link: "https://booth-app.onrender.com/index.html",
        image: "booth.png",
        bg: "#065b3d",
    },
    {
        id: 7,
        name: "GYMON",
        tool: "React, Next",
        link: "https://gymon-9k6r.onrender.com/",
        image: "gymon.png",
        bg: "#4a087c",
    },
    {
        id: 8,
        name: "Hunger Rest",
        tool: "Bootstrap",
        link: "https://hunger-rest.onrender.com/",
        image: "hunger.png",
        bg: "#076a42",
    },
    {
        id: 9,
        name: "BabyGez",
        tool: "React, Next",
        link: "https://babygen-8y4f.onrender.com/",
        image: "baby.png",
        bg: "#06335b",
    },
    {
        id: 10,
        name: "Porsche Showcase",
        tool: "Html, Css",
        link: "https://porsche-car-website.onrender.com/",
        image: "porsche.png",
        bg: "#763109",
    },
    {
        id: 11,
        name: "Once Love",
        tool: "React",
        link: "https://once-love.onrender.com/",
        image: "love.png",
        bg: "#196e08",
    },

];

function Projects() {
    const [hovered, setHovered] = useState(null);
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        if (imgRef.current) {
            imgRef.current.style.left = e.clientX;
            imgRef.current.style.top = e.clientY;
        }
    };


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
    const textLetter = {
        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.4
            }
        }
    }

    return (
        <div className="project_section">
            <div
                className="projects-container"
                style={{
                    background:
                        hovered !== null ? projects[hovered].bg : "black",
                }}
            >
                {/* HEADER */}
                <motion.div
                    className="project-row header"
                    style={{ border: "none" }}
                    variants={textLetter}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}>
                    <span>S.No</span>
                    <span>Name</span>
                    <span>Tool</span>
                    <span>View Project</span>
                </motion.div>

                {/* LIST */}
                {projects.map((item, index) => (
                    <motion.div
                        variants={textLetter}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        key={item.id}
                        className={`project-row ${hovered === index ? "active" : ""
                            }`}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        onMouseMove={handleMouseMove}
                    >
                        <span>{index + 1}</span>
                        <span className="project-name">{item.name}</span>
                        <span>{item.tool}</span>
                        <span>
                            <a href={item.link} target="_blank">VIEW ↗</a>
                        </span>

                        {hovered === index && (
                            <img
                                ref={imgRef}
                                src={item.image}
                                alt=""
                                className="preview-img"
                            />
                        )}
                    </motion.div>
                ))}
            </div>
            <motion.div className="project_last"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-200px" }}>
                <div className="last_container">
                    <p className="last_text1 last_text">BEYOND <br /> DESIGN</p>
                    <img className="last_head" src="last_head.png" alt="" />
                </div>
                <div className="last_container">
                    <img className="last_person" src="fall_men.png" alt="" />
                    <p className="last_text2 last_text ">INTO <br /> EXPERIENCE</p>
                </div>
            </motion.div>

        </div>
    );
}

export default Projects;
