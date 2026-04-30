import { useEffect, useState } from "react";
import React from "react";
import "./Contact.css";

const Contact = ({ contactState, setContactState, SplitText }) => {

  // ✅ FIX: move inside component
  const [formOpen, setFormOpen] = useState(false);

  const handleCloseAll = (e) => {
    e.stopPropagation();

    // 1️⃣ Close form instantly
    setFormOpen(false);

    // 2️⃣ Then close contact AFTER form animation
    setTimeout(() => {
      setContactState("closing");

      setTimeout(() => {
        setContactState("closed");
      }, 600); // contact animation duration

    }, 300); // form closing duration (adjust if needed)
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess("Message sent successfully");
        e.target.reset();
      } else {
        setSuccess("Something went wrong ❌");
      }
    } catch (err) {
      setSuccess("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <div className={`contact_overlay ${contactState}`}>

      <marquee className="contact_heading" scrolldelay="150" behavior="alternate" direction="right">READY TO</marquee>
      <marquee className="contact_heading" scrolldelay="100" behavior="alternate" direction="left">DISCUSS YOUR</marquee>
      <marquee className="contact_heading" scrolldelay="200" behavior="alternate" direction="right">NEXT PROJECT?</marquee>

      {/* TOP BAR */}
      <div className="contact_top">
        <div className="contact_form">

          <div
            className={`contact_form_btn ${formOpen ? "expand" : ""}`}
            onClick={() => setFormOpen(true)}
          >

            {!formOpen && (
              <>
                Let's work together <span>↗</span>
              </>
            )}

            {/* FORM */}
            <div className={`form_container ${formOpen ? "show" : ""}`}>


              <p className="form_close" onClick={handleCloseAll}>✕</p>

              <div className="form_layout">

                {/* LEFT TEXT */}
                <div className="form_left">
                  <h1>
                    Get<br />In <img src="child_me.png" alt="" /><br />Touch
                  </h1>
                </div>

                {/* RIGHT FORM */}
                <form onSubmit={handleSubmit} className="modern_form">

                  <input name="name" placeholder="Full name*" required />

                  <div className="row">
                    <input name="email" type="email" placeholder="Email*" required />
                    <input name="phone" type="number" placeholder="Phone number" />
                  </div>


                  <textarea name="message" placeholder="Project details*" required />

                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Lets Connect"}
                  </button>

                  {loading && <div className="loader"></div>}
                  {success && <p className="success_msg">{success}</p>}

                </form>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
