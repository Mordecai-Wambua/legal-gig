import React from "react";
import "./hero.css";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.hero_content}`}>
        <div className={styles.hero_image}>
          <img
            src="/courses/Collection.jpeg"
            alt="Dispute Resolution Illustration"
            style={{ mixBlendMode: "multiply", width: 400, height: 400 }}
            loading="lazy"
          />
        </div>
        <div className={styles.hero_text}>
          <h1>Mediation Training Center</h1>
          <p>
            At <strong>Mediation Training Center</strong>, we believe that every
            conflict has a resolution — it's all about finding the right tools
            and approaches! Whether you're an aspiring mediator, a seasoned
            negotiator, or just someone eager to handle conflicts better,{" "}
            <strong>you're in the right place</strong>!
          </p>
          <a href="#" className={styles.hero_btn}>
            START NOW
          </a>
        </div>
      </div>
    </section>
  );
}
