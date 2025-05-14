import { useState, useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";
import Home1 from "../../assets/Home1.webp";
import Home2 from "../../assets/Home2.webp";
import { Heading } from "../../components/ui";
import { colors } from "../../components/ui/theme";

// Constant text to use for all slides
const SLIDE_TITLE = "The Dispute Resolution Centre";
const SLIDE_SUBTITLE = "Your Essential Partner in Transforming Conflict";

// Enhanced slides data with consistent text
const slides = [
  {
    src: Home1,
    alt: "Legal professionals in discussion",
    title: SLIDE_TITLE,
    subtitle: SLIDE_SUBTITLE,
    ariaLabel:
      "Slide showing legal professionals discussing dispute resolution",
  },
  {
    src: Home2,
    alt: "Mediation session in progress",
    title: SLIDE_TITLE,
    subtitle: SLIDE_SUBTITLE,
    ariaLabel: "Slide showing a mediation session between parties",
  },
];

// Memoized slide component with improved accessibility and semantics
const Slide = memo(({ image, isActive, title, subtitle, ariaLabel }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
      isActive ? "opacity-100 z-10" : "opacity-0"
    }`}
    role="group"
    aria-label={ariaLabel}
    aria-hidden={!isActive}
  >
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      className="absolute right-12 lg:right-24 top-1/2 transform -translate-y-1/2 text-right text-shadow-lg"
      aria-live={isActive ? "polite" : "off"}
    >
      <Heading
        level={1}
        variant="light"
        serif={true}
        className="m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white"
      >
        {title}
      </Heading>
      <p className="mt-2 text-lg md:text-2xl lg:text-3xl text-white">
        {subtitle}
      </p>
    </div>
  </div>
));

// PropTypes for Slide component
Slide.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

// Home component with improved semantics and metadata
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);
  const slidesContainerRef = useRef(null);

  // Handle auto rotation with proper cleanup
  useEffect(() => {
    // Pause slideshow when page is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(timerRef.current);
      } else {
        // Resume slideshow when page becomes visible again
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(
          () => setCurrentSlide((prev) => (prev + 1) % slides.length),
          10000
        );
      }
    };

    // Set up initial timer
    timerRef.current = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      10000
    );

    // Add visibility change listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SLIDE_TITLE,
          description: SLIDE_SUBTITLE,
          url: window.location.href,
        })}
      </script>

      {/* Semantic banner/slideshow */}
      <div
        className="relative w-full h-full"
        ref={slidesContainerRef}
        role="region"
        aria-label="Featured content slideshow"
        aria-roledescription="carousel"
      >
        {slides.map((slide, idx) => (
          <Slide
            key={idx}
            image={slide}
            isActive={idx === currentSlide}
            title={slide.title}
            subtitle={slide.subtitle}
            ariaLabel={slide.ariaLabel}
          />
        ))}

        {/* Screen reader status indicator */}
        <div className="sr-only" aria-live="polite">
          {`Showing slide ${currentSlide + 1} of ${slides.length}`}
        </div>
      </div>
    </section>
  );
}
