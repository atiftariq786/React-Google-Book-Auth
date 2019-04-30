import React from "react";
import { Link } from "react-router-dom"



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light grey darken-4">
      <Link className="navbar-brand text-white center-align" to="/google-books/">
        Google Books
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item btn m-2 orange accent-3">
            <Link
              to="/google-books/"
              className={
                window.location.pathname === "/google-books/" || window.location.pathname === "/google-books/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item btn m-2 deep orange accent-3">
            <Link
              to="/google-books/saved"
              className={window.location.pathname === "/google-books/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;