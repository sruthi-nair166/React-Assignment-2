import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-50 text-sky-900">
      <h1 className="text-6xl font-bold mb-4">Page Not Found</h1>

      <p className="mb-8">The requested URL was not found on this server.</p>

      <Link to="/" className="bg-sky-600 text-white px-6 py-2 rounded-md">
        Back
      </Link>
    </div>
  );
}

export default ErrorPage;
