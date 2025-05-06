import { Link } from "react-router-dom";
import Layout from "../../layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-48 w-48 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="mt-6 text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-lg text-gray-600">Page Not Found</p>
        <p className="mt-4 text-center text-gray-500 max-w-md">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </Layout>
  );
}
