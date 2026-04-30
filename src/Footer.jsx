import React, { useEffect, useRef } from "react";
import "./Footer.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

const projects = [
    "gymon.png",
    "baby.png",
    "coffeehub.png",
    "fasHub2.png",
    "kutto.png",
    "porsche.png",
    "natural.png",
    "love.png",
    "hunger.png",
    "booth.png",
    "glowup2.png",
];

function Footer() {

    const Fheading = "TA₹UN";
    const SplitText = ({ text }) => {
        return (
            <>
                {text.split("").map((char, i) => (
                    <span className="letter_wrap" key={i}>
                        <span className="top">{char}</span>
                        <span className="bottom">{char}</span>
                    </span>
                ))}
            </>
        );
    };

    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            const animateCards = () => {
                const tl = gsap.timeline();

                cards.forEach((card, i) => {
                    const randomX = gsap.utils.random(-300, 300);
                    const randomRotate = gsap.utils.random(-180, 180);
                    const randomHeight = gsap.utils.random(-250, -150);

                    tl.fromTo(
                        card,
                        {
                            y: 500,
                            x: 0,
                            rotate: 0,
                            scale: 0.95,
                            opacity: 1,
                        },
                        {
                            keyframes: [
                                {
                                    y: randomHeight,
                                    x: randomX,
                                    rotate: randomRotate,
                                    duration: 1.2,
                                    ease: "power3.out",
                                },
                                {
                                    y: 500,
                                    x: randomX * 0.6,
                                    rotate: randomRotate * 1.5,
                                    duration: 1.2,
                                    ease: "power2.in",
                                },
                            ],
                        },
                        i * 0.08
                    );
                });
            };

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 80%",
                onEnter: animateCards,
                onEnterBack: animateCards,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer className="footer_section" ref={containerRef}>

            <div className="footer_container">
                {/* TOP GRID */}
                <div className="footer_grid">

                    {/* LEFT */}
                    <div className="footer_left">
                        <a href="#HOME" className="footer_heading">
                            <p className="logo hover_text">
                                <SplitText text="TA₹UN" />
                            </p>
                        </a>

                        <p className="footer_desc">
                            I craft modern web experiences combining design,
                            performance and interaction to create meaningful web pages.
                        </p>

                        <div className="footer_contact">
                            <a href="mailto:tarunkhuswaha456@gmail.com">tarunkhuswaha456@gmail.com</a>
                        </div>
                    </div>

                    {/* CENTER */}
                    <div className="footer_links">
                        <a href="#HOME">
                            <p className="hover_text">
                                <SplitText text="Home ↗" />
                            </p>
                        </a>
                        <a href="#PROJECTS">
                            <p className="hover_text">
                                <SplitText text="Projects ↗" />
                            </p>
                        </a>
                        <a href="#ABOUT">
                            <p className="hover_text">
                                <SplitText text="What I Do ↗" />
                            </p>
                        </a>
                        <a href="#WITHME">
                            <p className="hover_text">
                                <SplitText text="Execution ↗" />
                            </p>
                        </a>
                    </div>

                    {/* RIGHT CTA */}
                    <div className="footer_cta">
                        <h2>Ready to build something great?</h2>
                        <p>
                            Let’s turn your ideas into real digital experiences.
                        </p>

                        <div className="footer_social">
                            <a href="#CONTACT" className="footer_btn">
                                <p className="hover_text">
                                    <SplitText text="CONTACT ↗" />
                                </p>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/" className="footer_btn">
                                <p className="hover_text">
                                    <SplitText text="INSTAGRAM ↗" />
                                </p>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/tarun-kushwaha-web/" className="footer_btn">
                                <p className="hover_text">
                                    <SplitText text="LINKEDIN ↗" />
                                </p>
                            </a>
                            <a target="_blank" href="https://wa.me/918595703558?text=Hello%20Tarun" className="footer_btn">
                                <p className="hover_text">
                                    <SplitText text="WHATSAPP ↗" />
                                </p>
                            </a>
                        </div>

                        {/* <button className="footer_btn">
                            Start a Project <span>↗</span>
                        </button> */}
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="footer_line"></div>

                {/* BOTTOM */}
                <div className="footer_bottom">
                    <p>© 2026 tarun</p>
                    <a href="#HOME"><p>Back To Top</p></a>
                </div>

                {/* 🎴 PROJECTS (UNCHANGED EFFECT) */}
                <div className="projects_layer">
                    {projects.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="project_card"
                            alt=""
                        />
                    ))}
                </div>

                {/* BIG TEXT */}
                {/* <p className="footer_main_heading">
                    {["T", "A", "₹", "U", "N"].map((char, i) => (
                        <span className="footer_letter" key={i}>
                            <span className="footer_letter_inner">
                                <span className="footer_front">{char}</span>
                                <span className="footer_back">{char}</span>
                            </span>
                        </span>
                    ))}
                </p> */}
                {/* <p className="footer_bg_text">TARUN KUSHWAHA</p> */}
                <div className="Fheading">
                    {Fheading.split("").map((Fletter, index) => (
                        <span key={index} className="Fletter">
                            {Fletter}
                        </span>
                    ))}
                </div>
            </div>

        </footer>
    );
}

export default Footer;
