import React from "react";
import { newsItems } from "./data";
import Layout from "../../layout";
import "./news.css";

export default function NewsPage() {
  return (
    <Layout>
      <div className="news-container">
        <header className="page-header">
          <h1>News & Events</h1>
        </header>

        <section className="news-gallery">
          {newsItems.map(({ id, link, image, title, description }) => (
            <div key={id} className="news-item">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={typeof image === "string" ? image : image.default || ""}
                  alt={title}
                  style={{
                    mixBlendMode: "multiply",
                    width: "300px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />

                <div className="news-text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
