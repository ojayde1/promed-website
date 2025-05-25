import { blogs } from "@/datas/blog";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const HomeContents = () => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      {/* Contact Us Section Start */}
      <div className="home-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              {/* Home Contact Start */}
              <div
                className="home-contact-item highlighted-box wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <div className="highlighted-box-title">
                  <div className="contact-content">
                    <h5>
                      {/* Drugs.ng is Nigeria’s first managed B2B */}
                      {/* Streamlined process of sourcing and receiving */}
                      {/* <strong> Marketplace </strong>   distributors, and
                      wholesalers */}
                      Connecting Manufacturers, Importers, etc. to Pharmacies,
                      Hospitals, NGOs etc. facilitated by a same-day delivery
                      logistics platform
                    </h5>
                  </div>
                </div>
                <div className="appointment-wrap">
                  <a className="appointment-btn" href="/appointment">
                    Join the waitlist <i className="far fa-calendar-alt" />{" "}
                  </a>
                </div>
              </div>
              {/* Home Contact End */}
            </div>
            <div className="col-lg-4 col-md-4">
              {/* Home Contact Item Start */}
              <div
                className="home-contact-item box-border wow fadeInUp"
                data-wow-delay="0.25s"
              >
                {/* contact Icon Start */}
                <div className="contact-icon">
                  <Image
                    src="images/icon-home-contact-1.svg"
                    alt="appointment"
                    width={32}
                    height={32}
                  />
                </div>
                {/* Contact Icon End */}
                {/* Home Contact Content Start */}
                <div className="contact-content">
                  <h3>Pharmaceutical Suppliers</h3>
                  <p>
                    Get your products to available to thousands of customers all
                    over Nigeria
                  </p>
                </div>
                {/* Home Contact Content End */}
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-lg-4 col-md-4">
              {/* Home Contact Item Start */}
              <div
                className="home-contact-item wow fadeInUp"
                data-wow-delay="0.25s"
              >
                {/* contact Icon Start */}
                <div className="contact-icon">
                  <Image
                    src="images/icon-home-contact-2.svg"
                    alt="appointment"
                    width={32}
                    height={32}
                  />
                </div>
                {/* Contact Icon End */}
                {/* Home Contact Content Start */}
                <div className="contact-content">
                  <h3>Retail Pharmacies/Hospitals</h3>
                  <p>
                    Shop from any supplier you like, and we guarantee same-day
                    delivery to you
                  </p>
                </div>
                {/* Home Contact Content End */}
              </div>
              {/* Service Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us Section End */}
      {/* About Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* About Image Start */}
              <div className="about-img">
                <div className="about-us-image">
                  <div className="about-us-image-1">
                    <figure className="image-anime reveal">
                      <Image
                        src="/pictures/promed-image-15.jpg"
                        alt="appointment"
                        width={32}
                        height={32}
                      />
                    </figure>
                  </div>
                  <div className="about-us-image-2">
                    <figure className="image-anime reveal">
                      <Image
                        src="/pictures/promed-hero-image-1.jpg"
                        alt="hero"
                        width={32}
                        height={32}
                      />
                    </figure>
                  </div>
                </div>
                <div className="about-video wow fadeInUp">
                  <figure className="image-anime">
                    <Image
                      src="/pictures/PHARMACY-IN-NIGERIA.jpg"
                      alt="pharmacy"
                      width={32}
                      height={32}
                    />
                    {/* <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      className="btn-video popup-youtube"
                    >
                      <i className="fas fa-play-circle" /> Watch Video
                    </a> */}
                  </figure>
                </div>
              </div>
              {/* About Image End */}
            </div>
            <div className="col-lg-6">
              {/* About Content Start */}
              <div className="about-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">about Promed Africa</h3>
                  <h2 className="text-anime-style-3">
                    Our Services &amp; The Problem We Solve.
                  </h2>
                </div>
                {/* Section Title End */}
                {/* About Content Body Start */}
                <div className="about-content-body">
                  <p className="wow fadeInUp">
                    Promed Africa is Nigeria’s first managed B2B marketplace for
                    connecting manufacturers, importers, distributors, and
                    wholesalers to pharmacies, hospitals, NGOs, and PPMVs
                    facilitated by a same-day delivery logistics platform. We
                    are Improving access to medications and products
                    availability while ensuring product quality and
                    affordability.
                  </p>
                </div>
                {/* About Content Body End */}
                {/* About Content Footer Start */}
                <div className="about-content-footer">
                  <ul className="wow fadeInUp" data-wow-delay="0.25s">
                    <li>Suppliers list their products</li>
                    <li>Retailers and hospitals pick items they need</li>
                    <li>We deliver to your shop / office the same day</li>
                  </ul>
                  <a
                    href="#"
                    className="btn-default wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    read more
                  </a>
                </div>
                {/* About Content Footer End */}
              </div>
              {/* About Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Section Start */}
      {/* Cta Section Start */}
      <div className="cta-box">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              {/* Cta Item Start */}
              <div className="cta-item">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <Image
                    src="images/icon-appointment.svg"
                    alt="appointment"
                    width={32}
                    height={32}
                  />
                </div>
                {/* Icon Box End */}
                {/* Cta Content Start */}
                <div className="cta-content">
                  <h3 className="text-anime-style-3">SIGN UP ON WAITLIST</h3>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    We are launching soon in Abuja. Sign up today to be an early
                    user and have access to free delivery for your first order!
                  </p>
                </div>
                {/* Cta Content End */}
              </div>
              {/* Cta Item End */}
            </div>
            <div className="col-lg-4">
              {/* Cta Btn Start */}
              <div className="cta-btn">
                <a href="#" className="appointment-btn wow fadeInUp">
                  Join the waitlist <i className="fa-solid fa-calendar-days" />
                </a>
              </div>
              {/* Cta Btn End */}
            </div>
          </div>
        </div>
      </div>
      {/* Cta Section End */}
      {/* How we Work Section Start */}
      <div className="how-we-work">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-md-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">how we work</h3>
                <h2 className="text-anime-style-3">
                  A one-stop shop for all your pharmaceutical and healthcare
                  needs.
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-md-6">
              <div className="section-title-content wow fadeInUp">
                <p>
                  we are your trusted one-stop destination for all your
                  healthcare needs. Promed Africa aims to be the operating
                  system for the Nigerian Pharmaceutical and Healthcare
                  industry.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-6">
              {/* Step Item Start */}
              <div className="work-step-item wow fadeInUp">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <Image
                    src="images/icon-work-step-1.svg"
                    alt="work"
                    width={32}
                    height={32}
                  />
                </div>
                {/* Icon Box End */}
                {/* Step Item Content Start */}
                <div className="step-item-content">
                  <h3>Register for an account</h3>
                </div>
                {/* Step Item Content End */}
              </div>
              {/* Step Item End */}
            </div>
            <div className="col-md-3 col-6">
              {/* Step Item Start */}
              <div
                className="work-step-item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* Icon Box Start */}
                <div className="icon-box">
                  <Image
                    src="images/icon-work-step-2.svg"
                    alt="appointment"
                    width={32}
                    height={32}
                  />
                </div>
                {/* Icon Box End */}
                {/* Step Item Content Start */}
                <div className="step-item-content">
                  <h3>Shop for items on your list</h3>
                </div>
                {/* Step Item Content End */}
              </div>
              {/* Step Item End */}
            </div>
            <div className="col-md-3 col-6">
              {/* Step Item Start */}
              <div
                className="work-step-item wow fadeInUp"
                data-wow-delay="0.75s"
              >
                {/* Icon Box Start */}
                <div className="icon-box">
                  <Image
                    src="images/icon-work-step-3.svg"
                    alt="work"
                    width={32}
                    height={32}
                  />
                </div>
                {/* Icon Box End */}
                {/* Step Item Content Start */}
                <div className="step-item-content">
                  <h3>Confirm your order and pay</h3>
                </div>
                {/* Step Item Content End */}
              </div>
              {/* Step Item End */}
            </div>
            <div className="col-md-3 col-6">
              {/* Step Item Start */}
              <div className="work-step-item wow fadeInUp" data-wow-delay="1s">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <Image
                    src="images/icon-work-step-4.svg"
                    alt="work"
                    width={32}
                    height={32}
                  />
                </div>
                {/* Icon Box End */}
                {/* Step Item Content Start */}
                <div className="step-item-content">
                  <h3>Wait for your item to be delivered same day</h3>
                </div>
                {/* Step Item Content End */}
              </div>
              {/* Step Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* How we Work Section End */}
      {/* Recent Posts Section Start */}
      <div className="recent-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">our blog</h3>
                <h2 className="text-anime-style-3">
                  Lates News &amp; Articles.
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            {blogs?.map((item) => (
              // <div className="col-lg-4 col-md-6">
              //   {/* Post Item Start */}
              //   <div className="post-item wow fadeInUp" data-wow-delay="0.25s">
              //     {/* Post Image Start */}
              //     <div className="post-featured-image">
              //       <figure className="image-anime">
              //         <a href="#">
              //           <img src={item?.image} alt />
              //         </a>
              //       </figure>
              //     </div>
              //     {/* Post Image End */}
              //     {/* Post Content Start */}
              //     <div className="post-item-body">
              //       <h2>
              //         <a href={`/blog/${item.id}`}>{item.title}</a>
              //       </h2>
              //       <p>{truncateText(`${item.contents[0]?.content}`, 20)}</p>
              //     </div>
              //     {/* Post Content End */}
              //     {/* Btn Readmore Start */}
              //     <div className="btn-readmore">
              //       <a href={`/blog/${item.id}`}>
              //         read more <i className="fa-solid fa-arrow-right-long" />
              //       </a>
              //     </div>
              //     {/* Btn Readmore End */}
              //   </div>
              //   {/* Post Item End */}
              // </div>

              <div className="col-lg-4 col-md-6" key={item.id || index}>
                {/* Post Item Start */}
                <div className="post-item wow fadeInUp" data-wow-delay="0.25s">
                  {/* Post Image Start */}
                  <div className="post-featured-image">
                    <figure className="image-anime">
                      {/* 2. FIX: Do not use an `<a>` element to navigate... Use `<Link />`
          // Replace <a href="#"> with <Link href="/blog/[id]">.
          */}
                      <Link href={`/blog/${item.id}`}>
                        {" "}
                        {/* Assuming you want to link to the blog post details */}
                        {/* 3. FIX: Using `<img>` could result in slower LCP... Use `<Image />`
            // 4. FIX: Invalid alt value for img.
            // Replace <img> with <Image />, add required 'alt', 'width', and 'height' props.
            */}
                        <Image
                          src={item?.image}
                          alt={item?.title || "Blog post image"} // Provide a descriptive alt text
                          width={400} // IMPORTANT: Replace with the actual intrinsic width of your images
                          height={250} // IMPORTANT: Replace with the actual intrinsic height of your images
                          layout="responsive" // Common for images that should scale
                        />
                      </Link>
                    </figure>
                  </div>
                  {/* Post Image End */}
                  {/* Post Content Start */}
                  <div className="post-item-body">
                    <h2>
                      {/* 5. FIX: Do not use an `<a>` element to navigate... Use `<Link />`
          // Replace <a> with <Link>.
          */}
                      <Link href={`/blog/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p>{truncateText(`${item.contents[0]?.content}`, 20)}</p>
                  </div>
                  {/* Post Content End */}
                  {/* Btn Readmore Start */}
                  <div className="btn-readmore">
                    {/* 6. FIX: Do not use an `<a>` element to navigate... Use `<Link />`
        // Replace <a> with <Link>. The nested <a> is for styling.
        */}
                    <Link href={`/blog/${item.id}`}>
                      <a>
                        read more <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </Link>
                  </div>
                  {/* Btn Readmore End */}
                </div>
                {/* Post Item End */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Recent Posts Section End */}
      {/* Footer Contact Form Start  */}
      <div className="home-contact-form parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">fill the form</h3>
                <h2 className="text-anime-style-3">Join Our Waitlist.</h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-5 col-12">
              {/* Contact Appointment Start */}
              <div className="contact-appointment">
                <div className="appointment-img">
                  <Image
                    src="images/contact-us-img.png"
                    alt="contact"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="appointment-content">
                  <h3>
                    Sign up to be an early user and enjoy <br />
                    <strong>Free Delivery!!! </strong>
                    {/* Make <strong>Appointment </strong>&amp; Take Care Of Your
                    Healthy Life */}
                  </h3>
                </div>
              </div>
              {/* Contact Appointment End */}
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              {/* Contact Form start */}
              <div className="contact-form">
                <form
                  id="appointmentForm"
                  action="#"
                  method="POST"
                  data-toggle="validator"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Name of Facility"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Contact person"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone number"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <textarea
                        name="msg"
                        className="form-control"
                        id="msg"
                        rows={3}
                        placeholder="Address"
                        required
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-12 form-group">
                      <button type="submit" className="btn-default">
                        Join
                      </button>
                      <div id="msgSubmit" className="h3 hidden" />
                    </div>
                  </div>
                </form>
              </div>
              {/* Contact Form end */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Contact Form End */}
    </>
  );
};

export default HomeContents;
