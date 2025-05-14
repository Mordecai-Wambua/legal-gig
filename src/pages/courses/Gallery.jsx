import React from "react";
import PropTypes from "prop-types";
import { galleryCards } from "./data.js";

// Gallery card component
const GalleryCard = ({ card }) => (
  <div className="min-w-[300px] w-[300px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
    <div className="h-48 overflow-hidden">
      <img
        src={card.image}
        alt={card.alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        style={{ mixBlendMode: "multiply" }}
        loading="lazy"
        width={300}
        height={200}
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
      <a
        href={card.link}
        className="inline-block py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        aria-label={`Join the ${card.title} course`}
      >
        JOIN
      </a>
    </div>
  </div>
);

GalleryCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

// Section title component (reused from Courses.jsx)
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

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <span id="gallery-heading">MEDIATION COURSES</span>
        </SectionTitle>

        <div className="relative pb-10">
          <div className="flex overflow-x-auto pb-8 snap-x scrollbar-thin">
            <div className="flex space-x-6 px-2 pb-2">
              {galleryCards.map((card) => (
                <div key={card.id} className="snap-start flex-shrink-0">
                  <GalleryCard card={card} />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute left-0 right-0 bottom-0 flex justify-center">
            <div className="h-1 w-20 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated styling for scrollbar */}
      <style jsx="true">{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
        }
      `}</style>
    </section>
  );
}
