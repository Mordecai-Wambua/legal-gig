import Layout from "../../layout";
import styles from "./mediation.module.css";
import MediationModal from "./MediationModal";
import { useState, useEffect } from "react";

export default function MediationPage() {
  const [open, setOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");

  return (
    <Layout>
      <MediationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        courseName={modalCourse}
      />
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
            <h1>Join Our Global Dispute Resolution Community</h1>
            <p>
              <strong>Welcome!</strong> Becoming a member of{" "}
              <strong>The Dispute Resolution Centre</strong> connects you to an
              international network of dispute resolution professionals. Our
              membership framework is designed to be rigorous, inclusive, and
              rewarding—perfect for enhancing your CV and professional standing.
            </p>
            <a href="#" className={styles.hero_btn}>
              START NOW
            </a>
          </div>
        </div>
      </section>

      <section className={styles.courses}>
        <div className={styles.container}>
          <div className={styles.section_title}>
            <h2>Step-by-Step Application Process</h2>
          </div>

          <div className={styles.course_card}>
            <h3>1.Online Registration</h3>

            <ul>
              <li>
                <strong>Create Your Profile: </strong>Sign up via our membership
                portal with your basic information.
              </li>
              <li>
                <strong>Select Your Membership Category:</strong>: Choose one of
                the four categories listed below.
              </li>
            </ul>
          </div>

          <div className={styles.course_card}>
            <h3>2.Document Submission</h3>

            <ul>
              <li>
                <strong>Identification: </strong>Upload a valid photo ID or
                passport.
              </li>
              <li>
                <strong>Professional Credentials:</strong>Provide relevant
                certificates, diplomas, or licenses.
              </li>
              <li>
                <strong>Resume/CV: </strong>Submit a current resume highlighting
                your experience in dispute resolution or related fields.
              </li>
              <li>
                <strong>Additional Documents: </strong>Depending on your chosen
                category, include additional supporting documents (e.g.,
                recommendation letters, academic transcripts).
              </li>
            </ul>
          </div>

          <div className={styles.course_card}>
            <h3>3.Online Assessment & Interview</h3>
            <ul>
              <li>
                <strong>Digital Proficiency Test: </strong>Complete an online
                test covering essential dispute resolution concepts.
              </li>
              <li>
                <strong>Scenario Simulation: </strong>Participate in a virtual
                case study to demonstrate your problem-solving and negotiation
                skills.
              </li>
              <li>
                <strong>Virtual Interview: </strong>(If required) Engage in a
                brief online interview with our membership panel.
              </li>
            </ul>
          </div>

          <div className={styles.course_card}>
            <h3>4.Review & Approval</h3>
            <ul>
              <li>
                <strong>Evaluation: </strong>Our expert panel reviews your
                documents, test scores, and interview feedback.
              </li>
              <li>
                <strong>Notification: </strong>Receive an email with your
                application status.
              </li>
              <li>
                <strong>Onboarding: </strong>Once approved, gain full access to
                member benefits and our exclusive community platform.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.section_title}>
            <h2>Membership Categories</h2>
          </div>

          <div className={styles.gallery_container}>
            <div className={styles.gallery_card}>
              <div className={styles.gallery_card_content}>
                <h3>Student/Junior Member</h3>
                <p>
                  <strong>
                    Emerging Dispute Resolution Professional (EDRP)
                  </strong>
                  <br />
                  For students and young professionals aspiring to build a
                  career in dispute resolution
                  <br />
                  <strong>Benefits:</strong>
                  <br />o Reduced membership fees
                  <br />o Access to specialized career development programs
                  <br />o Internship and mentorship opportunities
                  <br />
                  <br />
                </p>

                <button
                  className={styles.hero_btn}
                  onClick={() => {
                    setOpen(true), setModalCourse("Student/Junior Member");
                  }}
                >
                  JOIN
                </button>
              </div>
            </div>

            <div className={styles.gallery_card}>
              <div className={styles.gallery_card_content}>
                <h3>Associate Member</h3>
                <p>
                  <strong>
                    Associate Dispute Resolution Practitioner (ADRP)
                  </strong>
                  <br />
                  For emerging professionals and early-career enthusiasts.
                  <br />
                  <strong>Benefits:</strong>
                  <br />o Access to foundational webinars and workshops
                  <br />o Mentorship opportunities
                  <br />o Networking events and community support
                  <br />
                  <br />
                  <br />
                </p>
                <button
                  className={styles.hero_btn}
                  onClick={() => {
                    setOpen(true), setModalCourse("Associate Member");
                  }}
                >
                  JOIN
                </button>
              </div>
            </div>

            <div className={styles.gallery_card}>
              <div className={styles.gallery_card_content}>
                <h3>Corporate Member</h3>
                <p>
                  <strong>Corporate Conflict Resolution Advisor (CCRA)</strong>
                  <br />
                  For organizations dedicated to integrating dispute resolution
                  best practices.
                  <br />
                  <strong>Benefits:</strong>
                  <br />o Organizational representation in our community
                  <br />o Customized training and consultancy sessions
                  <br />o Exclusive access to collaborative projects and
                  industry events
                </p>
                <button
                  className={styles.hero_btn}
                  onClick={() => {
                    setOpen(true), setModalCourse("Corporate Member");
                  }}
                >
                  JOIN
                </button>
              </div>
            </div>

            <div className={styles.gallery_card}>
              <div className={styles.gallery_card_content}>
                <h3>Full Member</h3>
                <p>
                  <strong>
                    Certified Dispute Resolution Specialist (CDRS)
                  </strong>
                  <br />
                  For established practitioners with significant experience in
                  dispute resolution.
                  <br />
                  <strong>Benefits:</strong>
                  <br />o Advanced training sessions and industry insights
                  <br />o Opportunities for publication and leadership roles
                  <br />
                  <br />
                  <br />
                </p>
                <button
                  className={styles.hero_btn}
                  onClick={() => {
                    setOpen(true), setModalCourse("Full Member");
                  }}
                >
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.final}>
        <div className={styles.endtext}>
          <h3>Membership Testing & Certification</h3>
          <p>
            To ensure that every member meets our high professional standards,
            all applicants will undergo:
          </p>
          <ul>
            <li>
              <strong>Digital Proficiency Test: </strong>An online test covering
              key dispute resolution concepts
            </li>
            <li>
              <strong>Scenario Simulation: </strong>An interactive module where
              you resolve a virtual case scenario.
            </li>
            <li>
              <strong>Certification: </strong>Successful candidates will receive
              a score and certification that is included in their membership
              profile. Continuing education and periodic reassessments help
              maintain professional standards
            </li>
          </ul>
        </div>
        <div className={styles.endtext}>
          <h3>Our Guiding Light</h3>
          <p>
            We empower professionals and organizations to transform conflicts
            into opportunities for growth and understanding. Through ethical
            excellence, continuous learning, and innovative practices, our
            community builds bridges where differences arise.
          </p>
        </div>
        <div className={styles.endtext}>
          <h3>Our Aspiration</h3>
          <p>
            We envision a future where dispute resolution is synonymous with
            compassion and precision
            <br />
            —creating lasting partnerships and inspiring transformative change
            across borders.
          </p>
        </div>
      </section>
    </Layout>
  );
}
