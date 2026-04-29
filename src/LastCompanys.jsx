import React from "react";
import "./LastCompanys.css";

const companies = [
  "Suganta International",
  "✺",
  "Galway",
  "✺",
  "GTSyntax",
  "✺",
  "Poliarc",
  "✺",
];

const LastCompanys = () => {
  return (
    <section className="company_section">


            <h2 className="company_heading">Trusted by</h2>
      <div className="company_marquee">
        <div className="marquee_track">
          {[...companies, ...companies].map((company, index) => (
              <span key={index} className="company_item">
              {company}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default LastCompanys;