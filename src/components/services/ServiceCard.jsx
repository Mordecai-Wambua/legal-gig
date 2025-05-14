import React from "react";
import PropTypes from "prop-types";
import { ListItem, Card, Heading } from "../ui";
import { colors, shadows } from "../ui/theme";

/**
 * ServiceCard Component
 *
 * A component to display service information with consistent styling.
 * Based on the Services page aesthetic, featuring an image, title, description, and benefits.
 */
const ServiceCard = ({ title, description, benefits, image, isReversed }) => {
  return (
    <Card
      variant="transparent"
      padding="lg"
      shadow="md"
      hover={true}
      className="flex flex-col md:flex-row items-center gap-8 mb-20 hover:bg-white/70"
    >
      <div
        className={`md:w-1/2 flex flex-col ${
          isReversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="relative">
          <div className="absolute -top-8 -left-4 text-8xl text-gray-200 font-serif">
            "
          </div>
          <Heading level={2} variant="primary" serif={true} className="mb-4">
            {title}
          </Heading>
          <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <ListItem variant="primary">
                  <span className="text-gray-700">{benefit}</span>
                </ListItem>
              </li>
            ))}
          </ul>

          <div className="absolute -bottom-8 -right-4 text-8xl text-gray-200 font-serif">
            "
          </div>
        </div>
      </div>

      <div className={`md:w-1/2 ${isReversed ? "md:order-1" : "md:order-2"}`}>
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
    </Card>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.any.isRequired,
  isReversed: PropTypes.bool,
};

export default ServiceCard;
