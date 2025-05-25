import { blogs } from "@/datas/blog";
import Link from "next/link";
import Image from "next/image";

import { teamList } from "@/datas/teams";
import React from "react";

const AboutContents = () => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  return (
    <>
      {/* Subpage Header Start */}
      <div className="subpage-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Sub page Header start */}
              <div className="subpage-header-box">
                <h1 className="text-anime-style-3">About Us</h1>
                <ol className="breadcrumb wow fadeInUp">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About Us</li>
                </ol>
              </div>
              {/* Sub page Header End */}
            </div>
          </div>
        </div>
      </div>
      {/* Subpage Header End */}
      {/* About Us Caring Section End */}
      <div className="page-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Page About Content Start */}
              <div className="page-about-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-3">
                    This is ENFORCA TECHNOLOGIES AWS AMPLIFY PROJECT
                    {/* Drugs.ng is Nigeria’s first fully managed B2B marketplace
                    tailored to meet the unique needs of the pharmaceutical and
                    healthcare sectors. */}
                  </h2>
                </div>
                {/* Section Title End */}
                {/* Page About Body Start */}
                <div className="page-about-body">
                  <p className=" wow fadeInUp">
                    <ul>
                      <li>
                        {" "}
                        Currently, retail pharmacy outlets, PPMVs and hospitals
                        go through a hectic process when purchasing
                        pharmaceutical items and medical consumables from
                        wholesalers{" "}
                      </li>
                      <li>
                        {" "}
                        We want to make the process seamless by bringing all the
                        stakeholders together to a single platform.{" "}
                      </li>
                      <li>
                        {" "}
                        Distributors and wholesalers can connect directly with
                        retail pharmacy outlets, hospitals, NGOs and others
                        through promed.africa platform.{" "}
                      </li>
                      <li>
                        {" "}
                        That means both the demand and supply players are linked
                        together in a single marketplace{" "}
                      </li>
                      <li>
                        {" "}
                        Suppliers list their products on to the platform, while
                        customers can buy from any supplier they like at the
                        click of a button{" "}
                      </li>
                      <li>
                        {" "}
                        We guarantee same-day delivery of confirmed orders to
                        the customers{" "}
                      </li>
                      <li>
                        {" "}
                        The platform is available 24/7... you can order anytime
                        you like, and we deliver when the supplier opens{" "}
                      </li>
                      <li> Everybody is happy. </li>
                    </ul>
                  </p>
                  {/* <p>
                    Via our platform, wholesalers and manufacturers can register
                    and list their products which will be available for
                    registered users to purchase from. Our users are registered
                    and licensed retail pharmacy outlets, PPMVs, hospitals,
                    doctors, nurses, NGOs and clinics. Instead of spending five
                    to eight hours visiting these wholesale outlets to purchase,
                    simply stay in your office and make your purchases via our
                    website. You are still buying from your favorite wholesalers
                    or manufacturers, easily and securely through our platform.
                  </p> */}
                  <p>
                    {/* We go beyond just connections; our same-day delivery service
                    ensures timely access to vital products, helping healthcare
                    providers offer better services without delay. By leveraging
                    technology, we empower healthcare facilities to streamline
                    their supply chain, improve patient outcomes, and reduce
                    operational costs. Whether it's life-saving medications,
                    hospital equipment, or everyday supplies, we are the trusted
                    partner that simplifies the procurement process across
                    Nigeria. */}
                  </p>
                </div>
              </div>
              {/* Page About Content End */}
            </div>
            <div className="col-lg-6">
              <div className="about-page-img">
                {/* About Image Start */}
                <div className="page-about-image">
                  <div className="page-about-image-1">
                    <figure className="image-anime reveal">
                      <Image
                        src="/pictures/promed-image-15.jpg"
                        alt="picture"
                        unoptimized
                      />
                    </figure>
                  </div>
                  <div className="page-about-image-2">
                    <figure className="image-anime reveal">
                      <Image
                        src="/pictures/promed-hero-image-1.jpg"
                        alt="hero image"
                        unoptimized
                      />
                    </figure>
                  </div>
                </div>
                {/* About Image End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Caring Section End */}
      {/* We Improving Section Start */}
      <div className="we-improving">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Improving Image Start */}
              <div className="improving-img">
                <figure className="image-anime reveal">
                  <Image
                    src="/pictures/promed-image-4.jpg"
                    alt="picture"
                    unoptimized
                  />
                </figure>
              </div>
              {/* Improving Image End */}
            </div>
            <div className="col-lg-6">
              {/* Improving Content Start */}
              <div className="improving-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">who we are</h3>
                  <h2 className="text-anime-style-3">
                    Our mission at promed africa
                  </h2>
                </div>
                {/* Section Title End */}
                {/* Improving Body Start */}
                <div className="improving-body">
                  <p className="wow fadeInUp">
                    Our mission is to transform healthcare delivery by promoting
                    better access, quality assurance, and affordability, making
                    our platform the one-stop solution for all pharmaceutical
                    and hospital needs.
                  </p>
                </div>
                {/* Improving Body End */}
                {/* Improving Btn Start */}
                <div
                  className="improving-btn wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <a
                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                    className="btn-video popup-youtube"
                  >
                    Join the waitlist
                  </a>
                </div>
                {/* Improving Btn End */}
              </div>
              {/* Improving Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* We Improving Section End */}

      {/* Meet Our Team Start */}
      <div className="meet-our-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">The team</h3>
                <h2 className="text-anime-style-3">
                  Meet the team behind promed.africa
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {teamList.map((item, key) => (
              <div className="col-lg-3 col-md-6" key={key}>
                {/* Team Member Item Start */}
                <div className="team-member-item wow fadeInUp">
                  {/* Team Image Start */}
                  <div className="team-image">
                    <figure className="image-anime">
                      <Image src={item.image} alt="image" unoptimized />
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
                      <h3>{item.title}</h3>
                      <h2>
                        <a href="#">{item?.name}</a>
                      </h2>
                      {/* <p>{item?.details}</p> */}
                    </div>
                  </div>
                  {/* Team Body End */}
                </div>
                {/* Team Member Item End */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Meet Our Team End */}

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
                    unoptimized
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

              <div className="col-lg-4 col-md-6" key={item.id}>
                {/* Post Item Start */}
                <div className="post-item wow fadeInUp" data-wow-delay="0.25s">
                  {/* Post Image Start */}
                  <div className="post-featured-image">
                    <figure className="image-anime">
                      {/* Fix 2: Use Link for navigation - replace <a href="#"> with Link */}
                      <Link href={`/blog/${item.id}`}>
                        {" "}
                        {/* Assuming you want to link to the blog post details */}
                        {/* Fix 3: Use Image component and add alt, width, height */}
                        <Image
                          src={item?.image}
                          alt={item?.title || "Blog Post Image"} // Provide a meaningful alt or empty string if decorative
                          width={400} // Replace with appropriate width for your image
                          height={250} // Replace with appropriate height for your image
                          layout="responsive" // Common layout for responsive images in lists
                        />
                      </Link>
                    </figure>
                  </div>
                  {/* Post Image End */}
                  {/* Post Content Start */}
                  <div className="post-item-body">
                    <h2>
                      {/* Fix 4: Use Link for navigation */}
                      <Link href={`/blog/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p>{truncateText(`${item.contents[0]?.content}`, 20)}</p>
                  </div>
                  {/* Post Content End */}
                  {/* Btn Readmore Start */}
                  <div className="btn-readmore">
                    {/* Fix 5: Use Link for navigation */}
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
    </>
  );
};

export default AboutContents;
