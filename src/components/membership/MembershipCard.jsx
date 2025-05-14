import React from "react";
import PropTypes from "prop-types";

export default function MembershipCard({ category, onJoin }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
      <div className="bg-gradient-to-r from-gray-300/90 to-gray-100/90 py-3 sm:py-4 px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl font-bold text-blue-700">
          {category.title}
        </h3>
      </div>

      <div className="p-4 sm:p-6 flex-grow">
        <p className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
          {category.designation}
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
          {category.description}
        </p>

        <div className="mb-3 sm:mb-4">
          <h4 className="font-bold text-gray-900 mb-1 sm:mb-2">Benefits:</h4>
          <ul className="space-y-1 sm:space-y-2">
            {category.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-500 mr-2">&#8226;</span>
                <span className="text-sm sm:text-base text-gray-700">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-4 sm:pb-6 mt-auto">
        <button
          onClick={() => onJoin(category.title)}
          className="w-full bg-gradient-to-r from-blue-400 to-purple-600 text-white py-2 sm:py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg font-medium text-sm sm:text-base"
          aria-label={`Join as ${category.title}`}
        >
          Join
        </button>
      </div>
    </div>
  );
}

MembershipCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onJoin: PropTypes.func.isRequired,
};
