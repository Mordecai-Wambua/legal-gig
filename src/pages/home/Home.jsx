import { useState, useEffect } from "react";
import Layout from "../../layout";
import Home1 from "../../assets/Home1.webp";
import Home2 from "../../assets/Home2.webp";
import styles from "./home.module.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Home1, Home2];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <Layout>
      <div className="relative w-full h-screen text-white flex-1 z-10 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`fixed w-full min-h-screen flex flex-col bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          >
            {/* Optional overlay div to replace ::before */}
            <div className="fixed top-0 left-0 w-full h-full -z-10"></div>

            {/* Text */}
            <div className={styles.textcontainer}>
              <h1 className={styles.htext}>The Dispute Resolution Centre</h1>
              <p className={styles.ptext}>
                Your Essential Partner in Transforming Conflict
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
