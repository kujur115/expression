import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Error404 = () => {
  return (
    <div className="h-100 d-flex text-center text-bg-dark">
      <div
        className="cover-container d-flex w-100 p-3 mx-auto flex-column bg-secondary"
        style={{ height: "100vh" }}
      >
        <header className="mb-auto">
          <h3 className="float-md-start mb-0 text"> Error Page</h3>
        </header>
        <main className="px-3">
          <h1>Page Not Found: Code 404</h1>
          <p className="lead">
            "The requested page is not found. Please navigate to a Home page"
          </p>
          <p className="lead">
            <Link
              to={"/"}
              className="btn btn-lg btn-light fw-bold border-white bg-white"
            >
              Home
            </Link>
          </p>
        </main>
        <footer className="mt-auto text-white-50">
          Made by{" "}
          <Link
            to={"https://github.com/kujur115"}
            className="text-decoration-none"
          >
            Pratik Kujur
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Error404;
