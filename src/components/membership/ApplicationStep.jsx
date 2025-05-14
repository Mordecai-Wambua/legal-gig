import React from "react";
import PropTypes from "prop-types";

export default function ApplicationStep({ step }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-all duration-300">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
        <span className="bg-gray-200 text-gray-800 rounded-full w-7 h-7 sm:w-8 sm:h-8 inline-flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
          {step.id}
        </span>
        {step.title}
      </h3>

      <ul className="space-y-2 sm:space-y-3">
        {step.steps.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center bg-gray-100 text-purple-600 h-5 w-5 sm:h-6 sm:w-6 rounded-full mr-2 sm:mr-3 mt-0.5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4"
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
            <div>
              <span className="font-medium text-gray-900 text-sm sm:text-base">
                {item.label}:{" "}
              </span>
              <span className="text-gray-700 text-sm sm:text-base">
                {item.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ApplicationStep.propTypes = {
  step: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
