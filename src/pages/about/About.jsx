import React from "react";
import PropTypes from "prop-types";

// Content section component
const ContentSection = ({ title, children, className = "" }) => (
  <section
    className={`mb-16 ${className}`}
    aria-labelledby={title.toLowerCase().replace(/\s+/g, "-")}
  >
    <h2
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="text-3xl font-serif font-bold mb-6 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-blue-600"
    >
      {title}
    </h2>
    {children}
  </section>
);

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function AboutPage() {
  return (
    <article className="relative min-h-screen pb-16">
      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "The Dispute Resolution Centre",
          description:
            "A team of seasoned dispute resolution experts helping individuals and organizations navigate conflicts.",
          foundingDate: "2010",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressRegion: "Kenya",
          },
        })}
      </script>

      {/* Background image with overlay */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <img
          src="/about/About.webp"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Page header */}
      <header className="pt-32 pb-12 text-center">
        <div className="bg-white/70 backdrop-blur-sm inline-block px-12 py-6 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-wide text-gray-900">
            ABOUT US
          </h1>
        </div>
      </header>

      {/* Main content container */}
      <main className="max-w-5xl mx-auto px-6 py-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl">
        <ContentSection title="The Dispute Resolution Centre">
          <div className="space-y-6 text-gray-700 leading-relaxed">
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
              understands that conflict can arise in many forms — whether it's
              within the workplace, between family members, or within
              communities — and we are here to guide you through the process of
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
          </div>
        </ContentSection>

        <ContentSection title="Our Mission">
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 shadow-inner">
            <p className="text-xl text-blue-800 font-medium italic">
              "To transform conflict into opportunity through compassionate,
              expert-led dispute resolution that rebuilds relationships and
              creates lasting harmony."
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Our Services">
          <div className="space-y-6 text-gray-700">
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
          </div>
        </ContentSection>

        <div className="text-center mt-12 py-6 border-t border-gray-200">
          <p className="text-xl text-blue-700 font-semibold">
            Welcome to the heart of resolution.
          </p>
        </div>
      </main>
    </article>
  );
}
