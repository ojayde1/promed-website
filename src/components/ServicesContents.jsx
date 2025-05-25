import React from "react";
import Image from "next/image";

const ServicesContents = () => {
  return (
    <div>
      {/* Subpage Hero Section Start */}
      <div className="subpage-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Sub page Header start */}
              <div className="subpage-header-box">
                <h1 className="text-anime-style-3">Services</h1>
                <ol className="breadcrumb wow fadeInUp">
                  <li>
                    <a href="index-2.html">Home</a>
                  </li>
                  <li>services</li>
                </ol>
              </div>
              {/* Sub page Header End */}
            </div>
          </div>
        </div>
      </div>
      {/* Subpage Hero Section End */}
      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-3">
                  Providing Medical Care For TheSickest In Our Community.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Our Service Item Start */}
              <div className="our-services-item wow fadeInUp">
                <div className="service-item-image">
                  <Image
                    src="/images/icon-service-page-1.svg"
                    alt="Cardiology"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="services-item-content">
                  <h3>cardiology clinic</h3>
                  <p>
                    Expert consultations with board-certified cardiologists to
                    assess heart health, discuss symptoms, and develop
                    personalized treatment.
                  </p>
                  <ul>
                    <li>Cardiac Electrophysiology</li>
                    <li>Cardiac Catheterization</li>
                    <li>Arrhythmia Management</li>
                  </ul>
                </div>
                <div className="services-item-btn">
                  <a href="#" className="btn-default">
                    Read More
                  </a>
                </div>
              </div>
              {/* Our Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Our Service Item Start */}
              <div
                className="our-services-item wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <div className="service-item-image">
                  <Image
                    src="/images/icon-service-page-2.svg"
                    alt="Cardiology"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="services-item-content">
                  <h3>pathology clinic</h3>
                  <p>
                    Comprehensive tests to analyze body fluids, aiding in the
                    diagnosis and monitoring of organ function and metabolic
                    disorders.
                  </p>
                  <ul>
                    <li>Molecular Pathology</li>
                    <li>Cytogenetics</li>
                    <li>Immunology</li>
                  </ul>
                </div>
                <div className="services-item-btn">
                  <a href="#" className="btn-default">
                    Read More
                  </a>
                </div>
              </div>
              {/* Our Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Our Service Item Start */}
              <div
                className="our-services-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item-image">
                  <Image
                    src="/images/icon-service-page-3.svg"
                    alt="Cardiology"
                    width={32}
                    height={32}
                  />
                  c
                </div>
                <div className="services-item-content">
                  <h3>laboratory analysis</h3>
                  <p>
                    Our Laboratory Analysis Services offer a comprehensive range
                    of advanced tests to aid in the accurate diagnosis.
                    metabolic disorders.
                  </p>
                  <ul>
                    <li>Comprehensive Test Menu</li>
                    <li>Timely Turnaround</li>
                    <li>Advanced Diagnostic Tests</li>
                  </ul>
                </div>
                <div className="services-item-btn">
                  <a href="#" className="btn-default">
                    Read More
                  </a>
                </div>
              </div>
              {/* Our Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Our Service Item Start */}
              <div
                className="our-services-item wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div className="service-item-image">
                  <Image
                    src="/images/icon-service-page-4.svg"
                    alt="Cardiology"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="services-item-content">
                  <h3>pediatric clinic</h3>
                  <p>
                    Comprehensive well-child checkups, growth monitoring, and
                    developmental assessments to ensure your child&apos;s health
                    track.
                  </p>
                  <ul>
                    <li>Nutrition Counseling</li>
                    <li>Pediatric Dermatology</li>
                    <li>Developmental Evaluations</li>
                  </ul>
                </div>
                <div className="services-item-btn">
                  <a href="#" className="btn-default">
                    Read More
                  </a>
                </div>
              </div>
              {/* Our Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Our Service Item Start */}
              <div
                className="our-services-item wow fadeInUp"
                data-wow-delay="1s"
              >
                <div className="service-item-image">
                  <Image
                    src="/images/icon-service-page-5.svg"
                    alt="Cardiology"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="services-item-content">
                  <h3>cardiac clinic</h3>
                  <p>
                    Find comprehensive care and support for heart failure
                    patients, including lifestyle recommendations and advanced
                    therapies.
                  </p>
                  <ul>
                    <li>Heart Failure Program</li>
                    <li>Cardiac Rehabilitation</li>
                    <li>Lipid Management</li>
                  </ul>
                </div>
                <div className="services-item-btn">
                  <a href="#" className="btn-default">
                    Read More
                  </a>
                </div>
              </div>
              {/* Our Service Item End */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Our Service Item Start */}
              <div
                className="our-services-item wow fadeInUp"
                data-wow-delay="1.25s"
              >
                <div className="service-item-image">
                  <Image
                    src="/images/icon-service-page-6.svg"
                    alt="Cardiology"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="services-item-content">
                  <h3>neurology clinic</h3>
                  <p>
                    Consultations with specialized neurologists to address
                    various neurological concerns, symptoms, and disorders.
                  </p>
                  <ul>
                    <li>Epilepsy Management</li>
                    <li>Headache and Migraine Clinic</li>
                    <li>Neurological Examinations</li>
                  </ul>
                </div>
                <div className="services-item-btn">
                  <a href="#" className="btn-default">
                    Read More
                  </a>
                </div>
              </div>
              {/* Our Service Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section End */}
      {/* Services Specialist Section Start */}
      <div className="service-specialist">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-md-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">top service</h3>
                <h2 className="text-anime-style-3">
                  We Are a Pogressive Medical Clinic.
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-md-6">
              {/* Section Title Content Start */}
              <div className="section-title-content">
                <p className="wow fadeInUp">
                  Welcome to our comprehensive medical services designed to
                  cater to your diverse healthcare needs. We are committed to
                  delivering top-notch medical care with a patient-centered
                  approach.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-6">
              {/* Specialist Item Start */}
              <div className="specialist-item wow fadeInUp">
                <div className="icon-box">
                  <Image
                    src="/images/icon-specialist-1.svg"
                    alt="specialist"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="specialist-content">
                  <h3>cardiology</h3>
                  <a href="#">
                    <i className="fas fa-arrow-alt-circle-right" />
                  </a>
                </div>
              </div>
              {/* Specialist Item End */}
            </div>
            <div className="col-md-3 col-6">
              {/* Specialist Item Start */}
              <div
                className="specialist-item wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <div className="icon-box">
                  <Image
                    src="/images/icon-specialist-2.svg"
                    alt="specialist"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="specialist-content">
                  <h3>diagnostics</h3>
                  <a href="#">
                    <i className="fas fa-arrow-alt-circle-right" />
                  </a>
                </div>
              </div>
              {/* Specialist Item End */}
            </div>
            <div className="col-md-3 col-6">
              {/* Specialist Item Start */}
              <div
                className="specialist-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="icon-box">
                  <Image
                    src="/images/icon-specialist-3.svg"
                    alt="specialist"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="specialist-content">
                  <h3>virology</h3>
                  <a href="#">
                    <i className="fas fa-arrow-alt-circle-right" />
                  </a>
                </div>
              </div>
              {/* Specialist Item End */}
            </div>
            <div className="col-md-3 col-6">
              {/* Specialist Item Start */}
              <div
                className="specialist-item wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div className="icon-box">
                  <Image
                    src="/images/icon-specialist-4.svg"
                    alt="specialist"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="specialist-content">
                  <h3>therapy</h3>
                  <a href="#">
                    <i className="fas fa-arrow-alt-circle-right" />
                  </a>
                </div>
              </div>
              {/* Specialist Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Services Specialist Section End */}
      {/* Meet Our Team Start */}
      <div className="meet-our-team service-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">our best doctor</h3>
                <h2 className="text-anime-style-3">Meet Our Doctors.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div className="team-member-item wow fadeInUp">
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <Image
                      src="/images/team-1.jpg"
                      alt="teams"
                      width={32}
                      height={32}
                    />
                  </figure>
                  {/* Team Social List Start */}
                  <div className="team-social-list">
                    <ul>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Social List End */}
                </div>
                {/* Team Image End */}
                {/* Team Body Start */}
                <div className="team-body">
                  <div className="team-content">
                    <h3>family physician</h3>
                    <h2>
                      <a href="#">dr. elizabeth foster</a>
                    </h2>
                    <p>Compassionate care for all ages.</p>
                  </div>
                </div>
                {/* Team Body End */}
              </div>
              {/* Team Member Item End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div
                className="team-member-item wow fadeInUp"
                data-wow-delay="0.25s"
              >
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <Image
                      src="/images/team-2.jpg"
                      alt="teams"
                      width={32}
                      height={32}
                    />
                  </figure>
                  {/* Team Social List Start */}
                  <div className="team-social-list">
                    <ul>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Social List End */}
                </div>
                {/* Team Image End */}
                {/* Team Body Start */}
                <div className="team-body">
                  <div className="team-content">
                    <h3>surgeon</h3>
                    <h2>
                      <a href="#">dr. david lee</a>
                    </h2>
                    <p>Skillful hands, transforming lives.</p>
                  </div>
                </div>
                {/* Team Body End */}
              </div>
              {/* Team Member Item End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div
                className="team-member-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <Image
                      src="/images/team-3.jpg"
                      alt="teams"
                      width={32}
                      height={32}
                    />
                  </figure>
                  {/* Team Social List Start */}
                  <div className="team-social-list">
                    <ul>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Social List End */}
                </div>
                {/* Team Image End */}
                {/* Team Body Start */}
                <div className="team-body">
                  <div className="team-content">
                    <h3>cardiologist</h3>
                    <h2>
                      <a href="#">dr. ava white</a>
                    </h2>
                    <p>Mental wellness and guiding.</p>
                  </div>
                </div>
                {/* Team Body End */}
              </div>
              {/* Team Member Item End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Team Member Item Start */}
              <div
                className="team-member-item wow fadeInUp"
                data-wow-delay="0.75s"
              >
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <Image
                      src="/images/team-4.jpg"
                      alt="teams"
                      width={32}
                      height={32}
                    />
                  </figure>
                  {/* Team Social List Start */}
                  <div className="team-social-list">
                    <ul>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Social List End */}
                </div>
                {/* Team Image End */}
                {/* Team Body Start */}
                <div className="team-body">
                  <div className="team-content">
                    <h3>dermatologist</h3>
                    <h2>
                      <a href="#">dr. daniel brown</a>
                    </h2>
                    <p>Focuses on skin, hair disorders.</p>
                  </div>
                </div>
                {/* Team Body End */}
              </div>
              {/* Team Member Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Meet Our Team End */}
      {/* Our Culture Section Start */}
      <div className="our-culture">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-md-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our culture</h3>
                <h2 className="text-anime-style-3">
                  Our Infrastructure &amp; Culture
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-md-6">
              {/* Section Title Content Start */}
              <div className="section-title-content">
                <p className="wow fadeInUp">
                  At our medipro , we pride ourselves on fostering a culture of
                  care, where every individual’s well-being is our utmost
                  priority. Our commitment to excellence in healthcare is
                  grounded.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="culture-image-gallery wow fadeInUp">
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-1.jpg">
                    <Image
                      src="/images/cultuer-1.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-2.jpg">
                    <Image
                      src="/images/cultuer-2.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-3.jpg">
                    <Image
                      src="/images/cultuer-3.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-4.jpg">
                    <Image
                      src="/images/cultuer-4.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-5.jpg">
                    <Image
                      src="/images/cultuer-5.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-6.jpg">
                    <Image
                      src="/images/cultuer-6.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-7.jpg">
                    <Image
                      src="/images/cultuer-7.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-8.jpg">
                    <Image
                      src="/images/cultuer-8.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-9.jpg">
                    <Image
                      src="/images/cultuer-9.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
              <div className="caulture-img">
                <div className="photo-gallery">
                  <a href="images/cultuer-10.jpg">
                    <Image
                      src="/images/cultuer-10.jpg"
                      alt="culture"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Culture Section End */}
      {/* App Download Section Start */}
      <div className="download-apps">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 order-lg-1 order-md-1 order-2">
              {/* Download Apps Description Start */}
              <div className="download-apps-description">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">app download</h3>
                  <h2 className="text-anime-style-3">
                    Download MediPro App &amp; Get 100$ Healthcase.
                  </h2>
                </div>
                {/* Section Title End */}
                {/* Download Apps Body Start */}
                <div className="download-apps-body">
                  <p className="wow fadeInUp">
                    Welcome to the convenient world of our Medical Website App,
                    where taking control of your health has never been easier.
                    Download our user-friendly app now to access a wide range of
                    medical services and resources right at your fingertips.
                  </p>
                </div>
                {/* Download Apps Body End */}
                {/* Download Apps Footer Start */}
                <div
                  className="download-apps-footer wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="download-apps-image">
                    <a href="#">
                      <Image
                        src="/images/google-play-img.png"
                        alt="culture"
                        width={32}
                        height={32}
                      />
                    </a>
                  </div>
                  <div className="download-apps-image">
                    <a href="#">
                      <Image
                        src="/images/app-store-img.png"
                        alt="culture"
                        width={32}
                        height={32}
                      />
                    </a>
                  </div>
                </div>
                {/* Download Apps Footer End */}
              </div>
              {/* Download Apps Description End */}
            </div>
            <div className="col-lg-6 col-md-5 order-lg-2 order-md-2 order-1">
              {/* Download Apps Image Start */}
              <div className="download-apps-img">
                <figure>
                  <Image
                    src="/images/app-download.png"
                    alt="culture"
                    width={32}
                    height={32}
                  />
                </figure>
              </div>
              {/* Download Apps Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* App Download Section End */}
    </div>
  );
};

export default ServicesContents;
