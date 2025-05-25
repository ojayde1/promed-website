import React from "react";
import Image from "next/image";

const FaqContents = () => {
  return (
    <>
      {/* Subpage Hero Section Start */}
      <div className="subpage-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Sub page Header start */}
              <div className="subpage-header-box">
                <h1 className="text-anime-style-3">Help &amp; FAQs</h1>
                <ol className="breadcrumb wow fadeInUp">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>FAQs</li>
                </ol>
              </div>
              {/* Sub page Header End */}
            </div>
          </div>
        </div>
      </div>
      {/* Subpage Hero Section End */}
      {/* FAQS Section Start */}
      <div className="faqs-page">
        <div className="container">
          <div className="row section-row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="text-anime-style-3">FAQs.</h2>
                <p className="wow fadeInUp">
                  we have compiled a list of commonly asked questions related to
                  various medical topics to provide you with quick and reliable
                  information. Our goal is to address your queries.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="faq-accordion" id="accordion1">
                {/* FAQ Item start */}
                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What exactly are you doing at Promed Africa?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion1"
                  >
                    <div className="accordion-body">
                      <p>
                        We provide a simple online interface to connect
                        pharmaceutical wholesalers and manufacturers to retail
                        outlets, hospitals, PPMVs and NGOs who need these
                        products without leaving their offices. We equally
                        deliver the items within one hour of order confirmation.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item end */}
                {/* FAQ Item start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do I place an order?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion1"
                  >
                    <div className="accordion-body">
                      <p>
                        To place an order is very easy. Simple register on the
                        platform, and after submitting all necessary details,
                        your registration will be approved within an hour. Once
                        approved, you can log in with your secure username and
                        password and start shopping from your favorite
                        wholesales and manufacturers. Add items to cart, submit
                        your order, make payment and your order will be
                        delivered within the next one hour. Yes, we are that
                        efficient!
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item end */}
                {/* FAQ Item start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      {" "}
                      What are your working hours?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion1"
                  >
                    <div className="accordion-body">
                      <p>
                        Our platform operates 24/7, meaning you can place orders
                        anytime you like. However, order confirmation and
                        delivery will be done when our wholesalers open Opening
                        hours are usually Monday to Saturday, 8am to 6pm.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item end */}
                {/* FAQ Item start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can you deliver the order to my facility?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordion1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, we deliver your order directly to the address
                        provided by you. Our promise is to deliver within one
                        hour of order packaging. We will keeo you abreast of
                        your order delivery status at every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item end */}
                {/* FAQ Item start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How to see medical records?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordion1"
                  >
                    <div className="accordion-body">
                      <p>
                        Patients can access their medical records through our
                        secure patient portal. You can log in using your unique
                        username and password provided during your first visit.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item end */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-accordion" id="accordion2">
                {/* FAQ Item start */}
                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="true"
                      aria-controls="collapseSix"
                    >
                      Are you accepting new patients?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordion2"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, we are always open to new patients. Feel free to
                        contact us to schedule an appointment or for any
                        inquiries you may have.
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Item end */}
                {/* FAQ Item start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      What should I bring for my first appointment?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordion2"
                  >
                    <div className="accordion-body">
                      <p>
                        For your first visit, please bring your photo ID,
                        insurance card (if applicable), a list of current
                        medications, and any relevant medical records or test
                        results.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Faqs Item End */}
                {/* Faqs Item Start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      What should I do in case of a emergency?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordion2"
                  >
                    <div className="accordion-body">
                      <p>
                        In case of a medical emergency, call 911 immediately or
                        go to the nearest emergency room. If it’s not a
                        life-threatening emergency but you need urgent medical
                        assistance.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Faqs Item End */}
                {/* Faqs Item Start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <h2 className="accordion-header" id="headingNine">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      Do you offer telemedicine consultations?
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordion2"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, we do offer telemedicine consultations for certain
                        medical conditions. Please call our clinic to check if
                        your condition is eligible for a virtual appointment.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Faqs Item End */}
                {/* Faqs Item Start */}
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <h2 className="accordion-header" id="headingTen">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      Can I request prescription refills online?
                    </button>
                  </h2>
                  <div
                    id="collapseTen"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTen"
                    data-bs-parent="#accordion2"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, you can request prescription refills through our
                        patient portal. Alternatively, you can also call our
                        clinic, and our staff will assist you with the process.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Faqs Item End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Faqs Section End */}
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
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
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
                  data-wow-delay="0.5s"
                >
                  <div className="download-apps-image">
                    <a href="#">
                      <Image
                        src="images/google-play-img.png"
                        alt="appointment"
                        unoptimized
                      />
                    </a>
                  </div>
                  <div className="download-apps-image">
                    <a href="#">
                      <Image
                        src="images/app-store-img.png"
                        alt="appointment"
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
              <div className="download-apps-img wow fadeInUp">
                <figure>
                  <img src="images/app-download.png" alt />
                  <Image
                    src="images/app-download.png"
                    alt="appointment"
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
    </>
  );
};

export default FaqContents;
