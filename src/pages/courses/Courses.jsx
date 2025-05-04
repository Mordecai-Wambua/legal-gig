import React, { useState, useEffect, lazy, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../layout.jsx";
import { courseData } from "./courses.js"; // your course data array
import Hero from "./Hero";

const Gallery = lazy(() => import("./Gallery"));
const FAQs = lazy(() => import("./FAQs"));

import "./courses.css";
import styles from "./loading.module.css"; // CSS module for loading spinner

export default function CoursesPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  const toggleVideo = (videoNumber) => {
    setActiveVideo((prev) => (prev === videoNumber ? null : videoNumber));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll(".lazy-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen w-screen bg-[#f9f9f9] bg-cover bg-center bg-fixed">
        {/* Hero Section */}
        <Hero />

        {/* Courses Section */}
        <section className="courses">
          <div className="course-container">
            <div className="section-title">
              <h2>OUR COURSES</h2>
            </div>

            {courseData.map((course) => (
              <div className="course-card" key={course.id}>
                <h3>
                  {course.id}. {course.title}
                </h3>
                <ul>
                  <li>
                    <strong>Overview</strong>: {course.overview}
                  </li>
                  <li>
                    <strong>Interactive</strong>: {course.interactive}
                  </li>
                  <li>
                    <strong>Outcome</strong>: {course.outcome}
                  </li>
                </ul>

                <div
                  className="play-video"
                  onClick={() => toggleVideo(course.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleVideo(course.id);
                    }
                  }}
                  aria-pressed={activeVideo === course.id}
                  aria-label={
                    activeVideo === course.id
                      ? `Collapse preview for ${course.title}`
                      : `Watch course preview for ${course.title}`
                  }
                >
                  <FontAwesomeIcon icon={faPlayCircle} size="1x" color="blue" />
                  &nbsp;{" "}
                  {activeVideo === course.id
                    ? "Collapse Preview"
                    : "Watch Course Preview"}
                </div>

                {activeVideo === course.id && (
                  <div className="video-container open">
                    <iframe
                      src={course.videoUrl}
                      title={`${course.title} Preview`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Lazy-loaded Gallery Section */}
        <div id="gallery-section" className="lazy-section">
          {visibleSections["gallery-section"] ? (
            <Suspense fallback={<LoadingSpinner />}>
              <Gallery />
            </Suspense>
          ) : (
            <Placeholder text="Scroll down to load Gallery..." />
          )}
        </div>

        {/* Lazy-loaded FAQ Section */}
        <div id="faqs-section" className="lazy-section">
          {visibleSections["faqs-section"] ? (
            <Suspense fallback={<LoadingSpinner />}>
              <FAQs />
            </Suspense>
          ) : (
            <Placeholder text="Scroll down to load FAQs..." />
          )}
        </div>
      </div>
    </Layout>
  );
}

// Loading animation component
function LoadingSpinner() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p>Loading content...</p>
    </div>
  );
}

// Placeholder for sections before they load
function Placeholder({ text }) {
  return <div className="text-gray-500 text-center py-4">{text}</div>;
}
