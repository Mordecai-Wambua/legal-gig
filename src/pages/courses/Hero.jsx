import React from "react";
import HeroImage from "/courses/Collection.jpeg"; // Adjust path as needed
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src={HeroImage}
            alt="Dispute Resolution Illustration"
            style={{ mixBlendMode: "multiply", width: 500, height: 500 }}
            loading="lazy"
          />
        </div>
        <div className="hero-text">
          <h1>Mediation Training Center</h1>
          <p>
            At <strong>Mediation Training Center</strong>, we believe that every
            conflict has a resolution - it's all about finding the right tools
            and approaches!
          </p>
          <a href="#" className="btn">
            START NOW
          </a>
        </div>
      </div>
    </section>
  );
}
