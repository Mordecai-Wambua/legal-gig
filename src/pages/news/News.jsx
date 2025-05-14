import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { newsItems } from "./data";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

// Function to convert markdown-style text to HTML
const renderMarkdown = (text) => {
  if (!text) return "";

  // Handle paragraphs
  let html = text
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  // Handle bold text (**text**)
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Handle bullet points
  html = html.replace(
    /<p>(\s*)-\s+(.*?)<\/p>/g,
    '<p class="flex"><span class="mr-2">•</span>$2</p>'
  );

  return html;
};

// Modal component for detailed news view
const NewsModal = ({ isOpen, onClose, news }) => {
  if (!isOpen || !news) return null;

  const modalRef = useRef(null);

  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // Focus trap for the modal
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Focus the modal
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div className="relative">
          <img
            src={
              typeof news.image === "string"
                ? news.image
                : news.image.default || ""
            }
            alt={news.title}
            className="w-full h-64 object-cover"
            style={{ mixBlendMode: "multiply" }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <time
              dateTime={news.publishedDate}
              className="text-sm text-gray-500 mb-2 block"
            >
              {formatDate(news.publishedDate)}
            </time>
            <h2
              id="modal-title"
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              {news.title}
            </h2>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.03-.69-.08-1.021A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  The Dispute Resolution Centre
                </p>
                <p className="text-xs text-gray-500">Event Organizer</p>
              </div>
            </div>

            {news.tags && news.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {news.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg mb-4">{news.description}</p>

            {news.fullContent ? (
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: renderMarkdown(news.fullContent),
                }}
              />
            ) : (
              <p>
                More details about this event will be available soon. Please
                check back later or contact us for more information.
              </p>
            )}

            {news.location && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-md font-semibold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Location
                </h3>
                <p className="mt-1">{news.location}</p>
              </div>
            )}

            {news.eventDate && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-md font-semibold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Event Date
                </h3>
                <p className="mt-1">{news.eventDate}</p>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Visit Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 -mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <button
              onClick={onClose}
              className="ml-4 inline-flex items-center px-4 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  news: PropTypes.object,
};

// News Card Component
const NewsItem = ({ news, onClick }) => (
  <div
    className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 bg-white cursor-pointer w-full h-full flex flex-col"
    onClick={() => onClick(news)}
  >
    <div className="relative pt-[56.25%]">
      <img
        src={
          typeof news.image === "string" ? news.image : news.image.default || ""
        }
        alt={news.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ mixBlendMode: "multiply" }}
        loading="lazy"
        width={300}
        height={200}
      />
      {news.category && (
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          {news.category}
        </span>
      )}
    </div>

    <div className="p-5 flex-grow flex flex-col">
      <time
        dateTime={news.publishedDate}
        className="text-xs text-gray-500 mb-2 block"
      >
        {formatDate(news.publishedDate)}
      </time>
      <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2">
        {news.title}
      </h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow">
        {news.description}
      </p>

      {news.tags && news.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {news.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
          {news.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{news.tags.length - 2}
            </span>
          )}
        </div>
      )}

      <button
        className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center group"
        onClick={(e) => {
          e.stopPropagation();
          onClick(news);
        }}
      >
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
);

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Search form component
const SearchBar = ({
  searchQuery,
  setSearchQuery,
  onFilterChange,
  activeFilter,
  onSortChange,
  activeSort,
}) => {
  const filters = ["All", "Events", "News", "Workshops", "Press Releases"];
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search news and events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 pl-12 pr-10 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          aria-label="Search news"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center">
          <label htmlFor="sort-order" className="mr-2 text-sm text-gray-700">
            Sort by:
          </label>
          <select
            id="sort-order"
            value={activeSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  activeSort: PropTypes.string.isRequired,
};

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("newest");
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter and sort news items
  const getFilteredAndSortedItems = () => {
    // First filter by search query and category
    const filtered = newsItems.filter((item) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower);

      const matchesFilter =
        activeFilter === "All" ||
        (item.category && item.category === activeFilter);

      return matchesSearch && matchesFilter;
    });

    // Then sort by date
    return filtered.sort((a, b) => {
      const dateA = new Date(a.publishedDate);
      const dateB = new Date(b.publishedDate);

      return activeSort === "newest"
        ? dateB - dateA // newest first
        : dateA - dateB; // oldest first
    });
  };

  const filteredNewsItems = getFilteredAndSortedItems();

  const openNewsDetail = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeNewsDetail = () => {
    setIsModalOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = "auto";
  };

  // Safe way to get origin for structured data
  const getOrigin = () => {
    return typeof window !== "undefined" ? window.location.origin : "";
  };

  // Safe way to get URL for structured data
  const getCurrentUrl = () => {
    return typeof window !== "undefined" ? window.location.href : "";
  };

  return (
    <article className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Schema.org structured data for news */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          headline: "News & Events",
          description:
            "Latest news and events from The Dispute Resolution Centre",
          publisher: {
            "@type": "Organization",
            name: "The Dispute Resolution Centre",
            logo: {
              "@type": "ImageObject",
              url: `${getOrigin()}/logo.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": getCurrentUrl(),
          },
          itemListElement: newsItems.map((item, index) => ({
            "@type": "NewsArticle",
            position: index + 1,
            headline: item.title,
            description: item.description,
            image:
              typeof item.image === "string"
                ? item.image
                : item.image.default || "",
            datePublished: item.publishedDate,
            url: item.link,
          })),
        })}
      </script>

      <header className="w-full h-[40vh] bg-gradient-to-r from-blue-800 to-indigo-700 flex justify-center items-center text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -mt-16 -mr-16"></div>
        <div className="absolute bottom-0 right-20 w-32 h-32 bg-indigo-500/20 rounded-full mb-10"></div>
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full"></div>

        <div className="max-w-4xl px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg relative z-10">
            News & Events
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Stay updated with the latest happenings, workshops, and
            announcements from The Dispute Resolution Centre
          </p>
        </div>
      </header>

      <section className="w-full max-w-7xl mx-auto p-8 md:p-10 -mt-24 bg-gray-100 z-10 rounded-t-3xl shadow-xl">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onFilterChange={setActiveFilter}
          activeFilter={activeFilter}
          onSortChange={setActiveSort}
          activeSort={activeSort}
        />

        {filteredNewsItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNewsItems.map((item) => (
              <NewsItem key={item.id} news={item} onClick={openNewsDetail} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No results found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              We couldn't find any news or events matching your search criteria.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("All");
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset filters
              </button>
            </div>
          </div>
        )}
      </section>

      {/* News modal */}
      <NewsModal
        isOpen={isModalOpen}
        onClose={closeNewsDetail}
        news={selectedNews}
      />
    </article>
  );
}
