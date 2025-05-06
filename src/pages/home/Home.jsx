import { useState, useEffect, useRef, memo } from "react";
import Layout from "../../layout";
import Home1 from "../../assets/Home1.webp";
import Home2 from "../../assets/Home2.webp";

// Static slides data
const slides = [
  { src: Home1, alt: "Slide 1" },
  { src: Home2, alt: "Slide 2" },
];

// Memoized slide component with lazy-loaded <img>
const Slide = memo(({ image, isActive, title, subtitle }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
      isActive ? "opacity-100 z-10" : "opacity-0"
    }`}
  >
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute right-12 lg:right-24 top-1/2 transform -translate-y-1/2 text-right text-shadow-lg">
      <h1 className="m-0 font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
        {title}
      </h1>
      <p className="mt-2 text-lg md:text-2xl lg:text-3xl text-white">
        {subtitle}
      </p>
    </div>
  </div>
));

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      10000
    );
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <Layout>
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, idx) => (
          <Slide
            key={idx}
            image={slide}
            isActive={idx === currentSlide}
            title="The Dispute Resolution Centre"
            subtitle="Your Essential Partner in Transforming Conflict"
          />
        ))}
      </div>
    </Layout>
  );
}
