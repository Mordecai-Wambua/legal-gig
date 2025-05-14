import React from "react";
import PropTypes from "prop-types";
import Layout from "../../layout";
import services from "../../data/servicesData";

// Service card component
const ServiceCard = ({ title, description, benefits, image, isReversed }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-12 md:mb-20 py-4 md:py-6 px-3 md:px-8 rounded-xl transition-all duration-300 hover:bg-white/70 hover:shadow-xl">
      <div
        className={`w-full md:w-1/2 flex flex-col ${
          isReversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="relative">
          <div className="absolute -top-4 md:-top-8 -left-2 md:-left-4 text-6xl md:text-8xl text-gray-200 font-serif">
            "
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 md:mb-4 text-gray-800">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-2 md:space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center bg-blue-100 text-blue-600 h-5 w-5 md:h-6 md:w-6 rounded-full mr-2 md:mr-3 mt-0.5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 md:h-4 md:w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-sm md:text-base text-gray-700">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
          <div className="absolute -bottom-4 md:-bottom-8 -right-2 md:-right-4 text-6xl md:text-8xl text-gray-200 font-serif">
            "
          </div>
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 mt-6 md:mt-0 ${
          isReversed ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="relative overflow-hidden rounded-lg shadow-md group transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ mixBlendMode: "multiply" }}
            loading="lazy"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.any.isRequired,
  isReversed: PropTypes.bool,
};

export default function ServicesPage() {
  // Safe way to get origin for structured data
  const getOrigin = () => {
    return typeof window !== "undefined" ? window.location.origin : "";
  };

  return (
    <>
      {/* Schema.org structured data for services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Our Services | The Dispute Resolution Centre",
          description:
            "Explore our range of dispute resolution services including mediation, negotiation, arbitration, restorative justice, and conciliation.",
          url: getOrigin() + "/services",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "Service",
              position: index + 1,
              name: service.title,
              description: service.description,
              provider: {
                "@type": "Organization",
                name: "The Dispute Resolution Centre",
              },
            })),
          },
        })}
      </script>

      <article className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <header className="pt-24 md:pt-32 pb-16 md:pb-20 text-center bg-gradient-to-r from-blue-800 to-indigo-700 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 right-20 w-32 h-32 bg-indigo-500/20 rounded-full mb-10"></div>
          <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
              Are you experiencing family disputes, corporate disputes, land
              disputes, or any other conflict and would like to resolve it
              without the expensive, time-consuming court systems? At our
              Dispute Resolution Centre, we believe in resolving conflicts
              through methods that focus on rebuilding relationships, restoring
              trust, and fostering excellence.
            </p>
          </div>
        </header>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 py-10 md:py-16 -mt-4 md:-mt-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6 md:p-8 mb-12 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-6 md:mb-8 text-center text-gray-800">
              How Our Dispute Resolution Methods Can Benefit You
            </h2>

            <div className="divide-y divide-gray-100">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                  image={service.image}
                  isReversed={index % 2 !== 0}
                />
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4 text-gray-800">
              Ready to Resolve Your Dispute?
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-3xl mx-auto">
              Our expert team is here to help you find the best resolution
              method for your specific situation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
