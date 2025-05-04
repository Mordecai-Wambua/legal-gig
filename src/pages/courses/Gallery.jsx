import React from "react";
import { galleryCards } from "./data"; // Make sure galleryCards is an array of objects with image URLs
import "./gallery.css";

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container-gallery">
        <div className="section-title">
          <h2>MEDIATION COURSES</h2>
        </div>
        <div className="gallery-container">
          {galleryCards.map((card) => (
            <div key={card.id} className="gallery-card">
              <img
                src={
                  typeof card.image === "string"
                    ? card.image
                    : card.image.default || ""
                }
                alt={card.alt}
                style={{
                  mixBlendMode: "multiply",
                  width: 300,
                  height: 200,
                  objectFit: "cover",
                }}
                loading="lazy"
              />

              <div className="gallery-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href={card.link} className="btn">
                  JOIN
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
