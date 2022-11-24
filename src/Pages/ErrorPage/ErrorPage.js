import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/images/error.png";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16  text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div>
          <img className="w-64" src={error} alt="" />
        </div>
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-6xl text-red-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry, the page in not found.
          </p>
          <Link
            to="/"
            className="px-6 py-2 font-semibold rounded bg-red-600 text-white"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
