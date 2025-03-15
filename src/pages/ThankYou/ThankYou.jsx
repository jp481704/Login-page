import { Link } from "react-router";

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-blue-800">Thank You!</h2>
        <p className="mt-4 text-gray-600">You have successfully logged in.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
