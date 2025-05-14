import React, { useState } from "react";
import MembershipModal from "./MembershipModal";
import ApplicationStep from "../../components/membership/ApplicationStep";
import MembershipCard from "../../components/membership/MembershipCard";
import { Button, Section, ListItem } from "../../components/ui";
import {
  applicationSteps,
  membershipCategories,
} from "../../data/membershipData";

export default function MembershipPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleJoin = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsModalOpen(true);
  };

  // Safe way to get origin for structured data
  const getOrigin = () => {
    return typeof window !== "undefined" ? window.location.origin : "";
  };

  return (
    <>
      {/* Schema.org structured data for membership */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Membership | The Dispute Resolution Centre",
          description:
            "Join our global dispute resolution community and become a recognized member of The Dispute Resolution Centre.",
          url: getOrigin() + "/membership",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: membershipCategories.map((category, index) => ({
              "@type": "Offer",
              position: index + 1,
              name: category.title,
              description: category.description,
              offeredBy: {
                "@type": "Organization",
                name: "The Dispute Resolution Centre",
              },
            })),
          },
        })}
      </script>

      {/* Modal for membership registration */}
      <MembershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categoryName={selectedCategory}
      />

      {/* Hero Section - Using original purple styling */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-purple-100 text-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-purple-300/20 rounded-full -mt-16 -mr-16"></div>
        <div className="absolute bottom-0 right-20 w-24 sm:w-32 h-24 sm:h-32 bg-purple-400/20 rounded-full mb-10 hidden sm:block"></div>
        <div className="absolute top-20 left-10 w-32 sm:w-48 h-32 sm:h-48 bg-purple-200/30 rounded-full hidden sm:block"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-purple-900">
                Join Our Global Dispute Resolution Community
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-700">
                <strong>Welcome!</strong> Becoming a member of{" "}
                <strong>The Dispute Resolution Centre</strong> connects you to
                an international network of dispute resolution professionals.
                Our membership framework is designed to be rigorous, inclusive,
                and rewarding—perfect for enhancing your CV and professional
                standing.
              </p>
              <Button
                href="#membership-categories"
                className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-500"
                variant="primary"
                size="lg"
              >
                Explore Membership
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src="/courses/Collection.jpeg"
                alt="Dispute Resolution Community"
                className="w-full max-w-md rounded-xl object-cover"
                style={{ mixBlendMode: "multiply" }}
                loading="lazy"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="bg-white">
        {/* Application Process Section */}
        <Section
          title="Step-by-Step Application Process"
          subtitle="Our membership process is designed to be straightforward while ensuring we maintain the highest standards of professionalism."
          background="white"
          centered={true}
        >
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {applicationSteps.map((step) => (
              <ApplicationStep key={step.id} step={step} />
            ))}
          </div>
        </Section>

        {/* Membership Categories Section */}
        <Section
          id="membership-categories"
          title="Membership Categories"
          subtitle="Choose the membership category that best fits your experience and career goals in dispute resolution."
          background="light"
          centered={true}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {membershipCategories.map((category) => (
              <MembershipCard
                key={category.id}
                category={category}
                onJoin={handleJoin}
              />
            ))}
          </div>
        </Section>

        {/* Certification Section */}
        <Section background="white">
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                    Membership Testing & Certification
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    To ensure that every member meets our high professional
                    standards, all applicants will undergo:
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    <li>
                      <ListItem
                        variant="primary"
                        className="bg-purple-100 text-purple-600"
                      >
                        <span className="font-medium text-gray-800">
                          Digital Proficiency Test:{" "}
                        </span>
                        <span className="text-gray-600">
                          An online test covering key dispute resolution
                          concepts
                        </span>
                      </ListItem>
                    </li>
                    <li>
                      <ListItem
                        variant="primary"
                        className="bg-purple-100 text-purple-600"
                      >
                        <span className="font-medium text-gray-800">
                          Scenario Simulation:{" "}
                        </span>
                        <span className="text-gray-600">
                          An interactive module where you resolve a virtual case
                          scenario.
                        </span>
                      </ListItem>
                    </li>
                    <li>
                      <ListItem
                        variant="primary"
                        className="bg-purple-100 text-purple-600"
                      >
                        <span className="font-medium text-gray-800">
                          Certification:{" "}
                        </span>
                        <span className="text-gray-600">
                          Successful candidates receive a certification included
                          in their membership profile.
                        </span>
                      </ListItem>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 sm:mt-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                    Our Guiding Light
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    We empower professionals and organizations to transform
                    conflicts into opportunities for growth and understanding.
                    Through ethical excellence, continuous learning, and
                    innovative practices, our community builds bridges where
                    differences arise.
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                    Our Aspiration
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    We envision a future where dispute resolution is synonymous
                    with compassion and precision—creating lasting partnerships
                    and inspiring transformative change across borders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="light">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
              Ready to Join Our Community?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 max-w-3xl mx-auto">
              Our expert team is here to help you become a recognized member of
              our dispute resolution network.
            </p>
            <Button
              href="#membership-categories"
              className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-500"
            >
              Become a Member
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
}
