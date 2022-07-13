import React from "react";
import { Link } from "react-router-dom";
import { SiSpacex } from "react-icons/si";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>
            <Link to="/">
              space
              <span>
                <SiSpacex />
              </span>
            </Link>
          </h1>
        </div>
        <ul className="navbar">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
