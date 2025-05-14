import { Link } from "react-router-dom";
import { Button, Heading, Card } from "../../components/ui";

export default function NotFound() {
  return (
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

      <Card variant="transparent" padding="lg" className="text-center">
        <Card.Header>
          <Heading level={1} variant="default" className="text-4xl">
            404
          </Heading>
          <Heading level={2} variant="light" className="mt-2 text-lg">
            Page Not Found
          </Heading>
        </Card.Header>
        <Card.Body>
          <p className="mt-4 text-center text-gray-500 max-w-md">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" href="/" as={Link} to="/" className="mt-4">
            Go Back Home
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
