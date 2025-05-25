import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer Start */}
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              {/* About Footer Start */}
              <div className="about-footer">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <figure>
                    <Image
                      src="/images/logo-promed.png"
                      alt="Cardiology"
                      unoptimized
                    />
                  </figure>
                </div>
                {/* Footer Logo End */}
                {/* Footer Content Start */}
                <div className="footer-content">
                  <p>
                    We are the one-stop shop for all your pharmaceutical and
                    healthcare needs.
                  </p>
                </div>
                {/* Footer Content End */}
                {/* Footer Social Links Start */}
                <div className="footer-social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Social Links End */}
              </div>
              {/* About Footer End */}
            </div>
            <div className="col-lg-2 col-md-3 col-5">
              {/* Footer Quick Links Start */}
              <div className="footer-quick-links">
                <h2>quick links</h2>
                <ul>
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">TEAM</a>
                  </li>
                  <li>
                    <a href="#">PROBLEM STATEMENT</a>
                  </li>
                  <li>
                    <a href="#">SOLUTION</a>
                  </li>
                </ul>
              </div>
              {/* Footer Quick Links End */}
            </div>
            <div className="col-lg-3 col-md-4 col-7">
              {/* Footer Contact Details Start */}
              <div className="footer-contact-details">
                <h2>contact details</h2>
                {/* Footer Contact Info Box Start */}
                <div className="footer-contact-box">
                  {/* Info Box Start */}
                  <div className="footer-info-box">
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    {/* Icon Box End */}
                    <p>No 5, kwaji close, Maitama Abuja</p>
                  </div>
                  {/* Info Box End */}
                  {/* Info Box Start */}
                  <div className="footer-info-box">
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <i className="fa-solid fa-envelope-open-text" />
                    </div>
                    {/* Icon Box End */}
                    <p>johntoby007@gmail.com</p>
                  </div>
                  {/* Info Box End */}
                  {/* Info Box Start */}
                  <div className="footer-info-box">
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <i className="fa-solid fa-phone" />
                    </div>
                    {/* Icon Box End */}
                    <p>+234 810 373 4621</p>
                  </div>
                  {/* Info Box End */}
                </div>
                {/* Footer Contact Info Box End */}
              </div>
              {/* Footer Contact Details End */}
            </div>
            <div className="col-lg-3 col-md-5">
              {/* Footer Newsletter Start */}
              <div className="footer-newsletter">
                <h2>newsletter</h2>
                <div className="subscribe-content">
                  <h3>subscribe to our newsletter</h3>
                  <p>
                    Stay informed and never miss out on the latest news, health
                    tips.
                  </p>
                </div>
                <div className="footer-newsletter-form">
                  <form id="newslettersForm" action="#" method="POST">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="mail"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="btn-default">
                        send{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Footer Newsletter End */}
            </div>
          </div>
          {/* Footer Copyright Section Start */}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-12">
                {/* Footer Copyright Start */}
                <div className="footer-copyright-text">
                  <p>
                    copyright 2024 © <span>Promed Africa</span> all right
                    reserved.
                  </p>
                </div>
                {/* Footer Copyright End */}
              </div>
            </div>
          </div>
          {/* Footer Copyright Section End */}
        </div>
      </div>
      {/* Main Footer End */}
    </footer>
  );
};

export default Footer;
