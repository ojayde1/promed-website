import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">
                  welcome to the future of pharmaceutical supply chain...
                </h3>
                <h1 className="text-anime-style-3">
                  The One-Stop Digital Marketplace for All Your Pharmaceutical
                  and Hospital Needs!
                  {/* We Are Providing Best &amp; Affordable Health Marketplace. */}
                </h1>
              </div>
              {/* Section Title End */}
              {/* Hero Body Start */}
              <div className="hero-body">
                <p className="wow fadeInUp">
                  {/* our is to deliver the highest quality healthcare services. We
                  believe that everyone deserves access to excellent medical
                  care without compromising on quality. */}
                  Promed Africa is Nigeria’s first managed B2B marketplace for
                  connecting manufacturers, importers, distributors, and
                  wholesalers to pharmacies, hospitals, NGOs, and PPMVs
                  facilitated by a same-day delivery logistics platform. We are
                  Improving access to medications and products availability
                  while ensuring product quality and affordability.
                </p>
              </div>
              {/* Hero Body End */}
              {/* Hero Footer Start */}
              <div className="hero-footer">
                <a
                  href="/about-us"
                  className="btn-default wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  read more
                </a>
                <a
                  href="https://promed-inventoryless-webapp.vercel.app/"
                  className="btn-default popup-youtube wow fadeInUp"
                  // data-wow-delay="0.25s"
                >
                  View demo
                </a>
              </div>
              {/* Hero Footer Start */}
            </div>
            {/* Hero Content Start */}
          </div>
          <div className="col-lg-6">
            {/* Hero Image Start */}
            <div className="hero-images">
              <div className="hero-image-1">
                <figure className="image-anime reveal">
                  <Image
                    src="/pictures/promed-hero-image-1.jpg"
                    alt="hero"
                    unoptimized
                  />
                </figure>
              </div>
              <div className="hero-image-2">
                <figure className="image-anime reveal">
                  <Image
                    src="/pictures/promed-hero-image-2.jpg"
                    alt="Cardiology"
                    unoptimized
                  />
                </figure>
              </div>
            </div>
            {/* Hero Image End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
