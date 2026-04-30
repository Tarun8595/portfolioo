import React, { useEffect, useState, useRef } from "react";
import "./Talk.css";
import Contact from "./Contact";

// 🎥 VIDEO LIST
const videos = [
    "/public/porscheV2.mp4",
];

function Talk() {

    const [contactState, setContactState] = useState("closed");

    const videoRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);

    // 🎛️ CONTROLS
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    // 🎬 VIDEO SWITCH
    const handleEnd = () => {
        setFade(true);

        setTimeout(() => {
            setIndex((prev) => (prev + 1) % videos.length);
            setFade(false);
        }, 200);
    };

    // 🎯 SYNC PLAY STATE WITH VIDEO
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        video.addEventListener("play", handlePlay);
        video.addEventListener("pause", handlePause);

        return () => {
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("pause", handlePause);
        };
    }, []);

    // 🔊 TOGGLE SOUND
    const toggleSound = () => {
        if (!videoRef.current) return;

        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);

        video.play().catch(() => { });
    };

    // ▶️ TOGGLE PLAY
    const togglePlay = () => {
        if (!videoRef.current) return;

        const video = videoRef.current;

        if (video.paused) {
            video.play().catch(() => { });
        } else {
            video.pause();
        }
    };

    // ⌨️ TYPING EFFECT
    const lines = [
        "HAVE A PROJECT IN MIND ?",
        "LET'S BUILD SOMETHING GREAT"
    ];

    const [lineIndex, setLineIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentLine = lines[lineIndex];
        const speed = isDeleting ? 50 : 70;

        const timeout = setTimeout(() => {

            if (!isDeleting) {
                setDisplayText(currentLine.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex === currentLine.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }

            } else {
                setDisplayText(currentLine.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setLineIndex((prev) => (prev + 1) % lines.length);
                }
            }

        }, speed);

        return () => clearTimeout(timeout);

    }, [charIndex, isDeleting, lineIndex]);

    return (
        <>
            <section className="talk_section">

                {/* 🎥 VIDEO */}
                <video
                    ref={videoRef}
                    src={videos[index]}
                    autoPlay
                    muted={isMuted}
                    loop={videos.length === 1}
                    playsInline
                    preload="auto"
                    onEnded={handleEnd}
                    className={`bg_video ${fade ? "fade" : ""}`}
                />

                {/* 🔊 SOUND BUTTON */}
                {/* 🔊 SOUND BUTTON */}
                <button className="control_btn sound_btn" onClick={toggleSound}>
                    <img
                        src={isMuted ? "mute.png" : "sound.png"}
                        alt="sound"
                    />
                </button>

                {/* ▶️ PLAY / PAUSE BUTTON */}
                <button className="control_btn play_btn" onClick={togglePlay}>
                    <img
                        src={isPlaying ? "pause.png" : "play.png"}
                        alt="play"
                    />
                </button>

                {/* CONTENT */}
                <div className="talk_content">
                    <h1 className="typing_text">{displayText}</h1>

                    <button onClick={() => setContactState("open")}>
                        Let's Talk <span>↗</span>
                    </button>
                </div>

            </section>

            {/* CONTACT */}
            <Contact
                contactState={contactState}
                setContactState={setContactState}
            />
        </>
    );
}

export default Talk;