import Layout from "../../layout";
import styles from "./mediation.module.css";
import MediationModal from "./MediationModal";
import { useState, useEffect } from "react";
import { Button, Heading } from "../../components/ui";

export default function MediationPage() {
  const [open, setOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState("");

  return (
    <>
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
            <Heading level={1} variant="secondary" serif={true}>
              Join Our Global Dispute Resolution Community
            </Heading>
            <p>
              <strong>Welcome!</strong> Becoming a member of{" "}
              <strong>The Dispute Resolution Centre</strong> connects you to an
              international network of dispute resolution professionals. Our
              membership framework is designed to be rigorous, inclusive, and
              rewarding—perfect for enhancing your CV and professional standing.
            </p>
            <Button variant="secondary" className={styles.hero_btn}>
              START NOW
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.courses}>
        <div className={styles.container}>
          <div className={styles.section_title}>
            <Heading
              level={2}
              variant="default"
              serif={true}
              underlined={true}
              aligned="center"
            >
              Step-by-Step Application Process
            </Heading>
          </div>

          <div className={styles.course_card}>
            <Heading level={3} variant="secondary">
              1.Online Registration
            </Heading>

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
            <Heading level={3} variant="secondary">
              2.Document Submission
            </Heading>

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
            <Heading level={3} variant="secondary">
              3.Online Assessment & Interview
            </Heading>
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
            <Heading level={3} variant="secondary">
              4.Review & Approval
            </Heading>
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
            <Heading
              level={2}
              variant="default"
              serif={true}
              underlined={true}
              aligned="center"
            >
              Membership Categories
            </Heading>
          </div>

          <div className={styles.gallery_container}>
            <div className={styles.gallery_card}>
              <div className={styles.gallery_card_content}>
                <Heading level={3} variant="secondary">
                  Student/Junior Member
                </Heading>
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

                <Button
                  variant="secondary"
                  className={styles.hero_btn}
                  onClick={() => {
                    setOpen(true);
                    setModalCourse("Student/Junior Member");
                  }}
                >
                  JOIN
                </Button>
              </div>
            </div>

            <div className={styles.gallery_card}>
              <div className={styles.gallery_card_content}>
                <Heading level={3} variant="secondary">
                  Associate Member
                </Heading>
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
                <Button
                  variant="secondary"
                  className={styles.hero_btn}
                  onClick={() => {
                    setOpen(true);
                    setModalCourse("Associate Member");
                  }}
                >
                  JOIN
                </Button>
              </div>
            </div>

            <div className={styles.gallery_card}>
              <div className={styles.gallery_card_content}>
                <Heading level={3} variant="secondary">
                  Corporate Member
                </Heading>
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
                <Button
                  variant="secondary"
                  className={styles.hero_btn}
                  onClick={() => {
                    setOpen(true);
                    setModalCourse("Corporate Member");
                  }}
                >
                  JOIN
                </Button>
              </div>
            </div>

            <div className={styles.gallery_card}>
              <div className={styles.gallery_card_content}>
                <Heading level={3} variant="secondary">
                  Full Member
                </Heading>
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
                <Button
                  variant="secondary"
                  className={styles.hero_btn}
                  onClick={() => {
                    setOpen(true);
                    setModalCourse("Full Member");
                  }}
                >
                  JOIN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.final}>
        <div className={styles.endtext}>
          <Heading level={3} variant="secondary">
            Membership Testing & Certification
          </Heading>
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
          <Heading level={3} variant="secondary">
            Our Guiding Light
          </Heading>
          <p>
            We empower professionals and organizations to transform conflicts
            into opportunities for growth and understanding. Through ethical
            excellence, continuous learning, and innovative practices, our
            community builds bridges where differences arise.
          </p>
        </div>
        <div className={styles.endtext}>
          <Heading level={3} variant="secondary">
            Our Aspiration
          </Heading>
          <p>
            We envision a future where dispute resolution is synonymous with
            compassion and precision
            <br />
            —creating lasting partnerships and inspiring transformative change
            across borders.
          </p>
        </div>
      </section>
    </>
  );
}
