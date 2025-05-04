import React from "react";
import Layout from "../../layout";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <Layout>
      <div className={styles.about_page}>
        <div className={styles.bg_image}>
          <img
            src="/about/About.webp"
            alt="Background Image"
            className={styles.bg_img}
            loading="lazy"
          />
        </div>

        <header className={styles.page_header}>
          <h1>ABOUT US</h1>
        </header>

        <section className={styles.about_container}>
          <h2>The Dispute Resolution Centre</h2>

          <div className={styles.about_content}>
            <p>
              Welcome to The Dispute Resolution Centre situated in the vibrant
              heart of Nairobi, Kenya. We are a team of seasoned dispute
              resolution experts, each bringing years of experience and a deep
              commitment to helping individuals and organizations navigate
              conflicts with understanding and respect.
            </p>
            <p>
              At our Centre, we believe that every conflict, no matter how
              complex, has the potential for resolution. Our experienced team
              understands that conflict can arise in many forms whether it's
              within the workplace, between family members, or within
              communities and we are here to guide you through the process of
              finding amicable solutions.
            </p>
            <p>
              With years of expertise in mediation, negotiation, and conflict
              management, we've built a reputation for helping clients find
              common ground and move forward with stronger, more collaborative
              relationships. We approach every dispute with a human-centered
              mindset, ensuring that all parties are heard and respected
              throughout the process. Our goal is not just to settle
              disagreements, but to create lasting solutions that benefit
              everyone involved.
            </p>
            <p>
              Our services range from individual mediation to corporate dispute
              management, training programs, and conflict resolution workshops.
              No matter the scale of the issue, we tailor our approach to fit
              your unique needs, offering personalized support at every step.
            </p>
            <p>
              Based in Nairobi but with a reach that extends across Kenya and
              beyond, we are passionate about creating spaces where people can
              rebuild trust, restore relationships, and work together to find
              common ground. We believe that with the right tools,
              communication, and guidance, conflict can lead to growth and
              positive change.
            </p>
            <p>
              At the heart of everything we do is a deep belief in the power of
              resolution. Let us bring our years of expertise and compassion to
              help you find a way forward.
            </p>
            <p>Welcome to the heart of resolution.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
