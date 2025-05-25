import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <div className="header-logo">
              <Link className="navbar-brand" href="/">
               
                <Image
                  src="/images/promed_africa_logo.png"
                  alt="Africa logo"
                  unoptimized
                />
              </Link>
            </div>
            {/* Logo End */}
            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about-us">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/problem-statement">
                      Problem Statement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/solution">
                      Solution
                    </a>
                  </li>
                  <li className="nav-item highlighted-menu">
                    <a className="nav-link" href="/appointment">
                      JOIN THE WAITLIST
                      <i className="fa-solid fa-calendar-days" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle" />
          </div>
        </nav>
        <div className="responsive-menu" />
      </div>
    </header>
  );
};

export default Navbar;
