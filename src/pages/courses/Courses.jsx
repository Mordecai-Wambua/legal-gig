import React, { useState, useEffect, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { courseData } from "./courseData.js";

// Lazy-loaded components with explicit file extensions
const Gallery = lazy(() => import("./Gallery.jsx"));
const FAQs = lazy(() => import("./FAQs.jsx"));

// Section Title component for consistent styling
const SectionTitle = ({ children }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gray-900">
      {children}
    </h2>
  </div>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

// Course Card component
const CourseCard = ({ course, isActive, toggleVideo }) => (
  <div
    className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    id={`course-${course.id}`}
  >
    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
      {course.id}. {course.title}
    </h3>
    <ul className="space-y-3 mb-5">
      {course.overview && (
        <li className="pb-3 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Overview</span>:{" "}
          {course.overview}
        </li>
      )}
      {course.interactive && (
        <li className="pb-3 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Interactive</span>:{" "}
          {course.interactive}
        </li>
      )}
      {course.outcome && (
        <li className="pb-3 border-b border-gray-200 last:border-0">
          <span className="font-semibold text-gray-800">Outcome</span>:{" "}
          {course.outcome}
        </li>
      )}
    </ul>

    <button
      onClick={() => toggleVideo(course.id)}
      className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md py-2 px-3"
      aria-expanded={isActive}
      aria-controls={`video-${course.id}`}
    >
      <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
      {isActive ? "Collapse Preview" : "Watch Course Preview"}
    </button>

    {isActive && (
      <div
        id={`video-${course.id}`}
        className="mt-6 relative rounded-lg overflow-hidden shadow-md transition-all duration-700 opacity-100 max-h-[500px]"
        style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio
      >
        <iframe
          src={course.videoUrl}
          title={`${course.title} Preview`}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    )}
  </div>
);

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    interactive: PropTypes.string,
    outcome: PropTypes.string,
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  toggleVideo: PropTypes.func.isRequired,
};

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center py-16">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="text-gray-600">Loading content...</p>
  </div>
);

// Placeholder for lazy-loaded sections
const Placeholder = ({ text }) => (
  <div className="text-gray-500 text-center py-16 bg-gray-50 rounded-lg">
    {text}
  </div>
);

Placeholder.propTypes = {
  text: PropTypes.string.isRequired,
};

// Main Courses component
export default function CoursesPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  const toggleVideo = (videoId) => {
    setActiveVideo((prev) => (prev === videoId ? null : videoId));
  };

  // Intersection Observer for lazy-loading sections
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
      { threshold: 0.3, rootMargin: "100px" }
    );

    const sections = document.querySelectorAll(".lazy-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Schema.org structured data for courses */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: courseData.map((course, index) => ({
            "@type": "Course",
            position: index + 1,
            name: course.title,
            description: course.overview,
            provider: {
              "@type": "Organization",
              name: "The Dispute Resolution Centre",
              sameAs: window.location.origin,
            },
          })),
        })}
      </script>

      {/* Hero Section */}
      <header className="bg-purple-100 py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-purple-900 mb-6">
                Mediation Training Center
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                At <strong>Mediation Training Center</strong>, we believe that
                every conflict has a resolution — it's all about finding the
                right tools and approaches! Whether you're an aspiring mediator,
                a seasoned negotiator, or just someone eager to handle conflicts
                better, <strong>you're in the right place</strong>!
              </p>
              <a
                href="#courses-section"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                EXPLORE COURSES
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="/courses/Collection.jpeg"
                alt="Diverse group of professionals in a mediation training session"
                className="rounded-xl  w-full max-w-md mx-auto"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>
        </div>

        {/* Decorative circle elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full -mt-16 -mr-16 opacity-50"></div>
        <div className="absolute bottom-0 right-20 w-32 h-32 bg-purple-300 rounded-full mb-10 opacity-40"></div>
      </header>

      {/* Courses Section */}
      <section id="courses-section" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>OUR COURSES</SectionTitle>
          <div className="space-y-8">
            {courseData.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isActive={activeVideo === course.id}
                toggleVideo={toggleVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lazy-loaded Gallery Section */}
      <div id="gallery-section" className="lazy-section py-8">
        {visibleSections["gallery-section"] ? (
          <Suspense fallback={<LoadingSpinner />}>
            <Gallery />
          </Suspense>
        ) : (
          <Placeholder text="Loading gallery..." />
        )}
      </div>

      {/* Lazy-loaded FAQ Section */}
      <div id="faqs-section" className="lazy-section py-8">
        {visibleSections["faqs-section"] ? (
          <Suspense fallback={<LoadingSpinner />}>
            <FAQs />
          </Suspense>
        ) : (
          <Placeholder text="Loading FAQs..." />
        )}
      </div>
    </article>
  );
}
