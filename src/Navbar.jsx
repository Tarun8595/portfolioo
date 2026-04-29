import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import "./Home.css";
import "./Navbar.css";
import Contact from "./Contact";

function Navbar() {

  // ✅ MENU LINKS
  const menuLinks = [
    { name: "HOME", link: "#HOME" },
    { name: "PROJECT", link: "#PROJECTS" },
    { name: "ABOUT", link: "#ABOUT" },
    { name: "WHATIDO", link: "#WHATIDO" },
  ];

  // ✅ SPLIT TEXT EFFECT
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

  // ✅ TIME STATE
  const [time, setTime] = useState({
    main: "",
    period: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      let period = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      hours = hours.toString().padStart(2, "0");
      minutes = minutes.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");

      setTime({
        main: `${hours}:${minutes}:${seconds}`,
        period: period,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // ✅ STATES
  const [menuState, setMenuState] = useState("closed");
  const [contactState, setContactState] = useState("closed");

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <a href="#">
          <p className="logo hover_text">
            <SplitText text="TA₹UN" />
          </p>
        </a>

        <p className="nav_time">
          {time.main} <span className="period">{time.period}</span>
        </p>

        <div className="nav_option">

          {/* CONTACT BUTTON */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setContactState("open");
            }}
          >
            <span className="hover_text">
              <SplitText text="CONTACT" />
            </span>
          </a>

          {/* MENU BUTTON */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuState("open");
            }}
          >
            <span className="hover_text">
              <SplitText text="MENU" />
            </span>
          </a>

        </div>
      </div>

      {/* MENU OVERLAY */}
      {menuState !== "closed" && (
        <div className={`menu_overlay ${menuState}`}>

          {/* TOP */}
          <div className="menu_top">
            <h1 className="menu_logo">TA₹UN</h1>

            <p
              className="close_btn"
              onClick={() => {
                setMenuState("closing");
                setTimeout(() => setMenuState("closed"), 600);
              }}
            >
              ✕
            </p>
          </div>

          {/* MENU ITEMS */}
          <div className="menu_items">
            {menuLinks.map((item, i) => (
              <a
                href={item.link}
                className="menu_item"
                key={i}
                onClick={(e) => {
                  e.preventDefault();

                  // 🔥 CLOSE MENU
                  setMenuState("closing");
                  setTimeout(() => setMenuState("closed"), 600);

                  // 🎯 SCROLL TO SECTION
                  setTimeout(() => {
                    const section = document.querySelector(item.link);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 300);
                }}
              >

                <p className="hover_text">
                  <SplitText text={item.name} />
                </p>

                <span className="arrow">
                  <img src="right-arrow.png" alt="" />
                </span>

              </a>
            ))}
          </div>

          {/* FOOTER */}
          <div className="menu_footer">

            <div>
              <p>©2026 tarun</p>
            </div>

            <div>
              <p>New Delhi, India</p>
            </div>

            <div>
              <p>
                <a href="mailto:tarunkhuswaha456@gmail.com">
                  tarunkhuswaha456@gmail.com
                </a>
              </p>
            </div>

            <div>
              <a
                href="https://wa.me/918595703558?text=Hello%20Tarun"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}

      {/* CONTACT OVERLAY */}
      <Contact
        contactState={contactState}
        setContactState={setContactState}
        SplitText={SplitText}
      />
    </>
  );
}

export default Navbar;