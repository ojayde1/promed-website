import { blogs } from "@/datas/blog";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const ProblemStatementContents = () => {
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
                <h1 className="text-anime-style-3">Problem Statement</h1>
                <ol className="breadcrumb wow fadeInUp">
                  {/* <li>
                    <a href="/">Home</a>
                  </li> */}
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <li>Problem statement</li>
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
                  <h3 className="wow fadeInUp">PROBLEM STATEMENT</h3>
                  <h2 className="text-anime-style-3">
                    What are the issues?
                    {/* Drugs.ng is Nigeria’s first fully managed B2B marketplace
                    tailored to meet the unique needs of the pharmaceutical and
                    healthcare sectors. */}
                  </h2>
                </div>
                {/* Section Title End */}
                {/* Page About Body Start */}
                <div className="page-about-body">
                  <p className=" wow fadeInUp">
                    Currently, retail pharmacy outlets and hospitals:
                    <ul>
                      <li>
                        spend between 3 to 5 hours in a wholesale shop to get
                        products they need
                      </li>
                      <li>
                        Visit about 2 or 3 different wholesale outlets to get
                        all the items on their out-of-stock list
                      </li>
                      <li>waste valuable hours at the wholesale outlet</li>
                      <li> Are frustrated with the purchase process </li>
                      <li>
                        Spend more money on transport to & fro to get the items
                        (with this high cost of fuel)
                      </li>
                    </ul>
                    <p>
                      We are on a mission to ensure all these problems are
                      addressed and customers can easily shop for items without
                      leaving the comfort of their shops and offices, while the
                      items are delivered to them same day!
                    </p>
                  </p>
                </div>
              </div>
              {/* Page About Content End */}
            </div>
            <div className="col-lg-6">
              {/* Improving Image Start */}
              <div className="improving-img">
                <figure className="image-anime reveal">
                  <Image
                    src="/pictures/kano-drug-shop.jpeg"
                    alt="appointment"
                    width={32}
                    height={32}
                  />
                </figure>
              </div>
              {/* Improving Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Us Caring Section End */}
      {/* We Improving Section Start */}
      <div className="we-improving">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Improving Content Start */}
              <div className="improving-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">PROBLEM STATEMENT</h3>
                  <h2 className="text-anime-style-3">
                    The problems we are solving at Promed Africa
                  </h2>
                </div>
                {/* Section Title End */}
                {/* Improving Body Start */}
                <div className="improving-body">
                  <p className=" wow fadeInUp">
                    In Nigeria, the current pharmaceutical distribution model is
                    two-fold: traditional open drug market system, and the
                    modern wholesale system. The open drug market system has
                    been in existence for decades, and consists of real
                    traditional markets where medicines are sold as commodities,
                    just like normal goods. Successive NAFDAC administrations
                    have tried to shut down this model and close such markets
                    since the days of Prof Dora Akinyuli through the use of
                    legislation and enforcement, but has been unsuccessful till
                    date. Examples of such markets are Idumota drug market in
                    Lagos, Headbridge market in Onitsha, Sabongari market in
                    Kano, Ariaria market in Aba etc. They are easier for
                    customers to access, and their complex operations span the
                    entire country, eve extending to our West African neighbors.
                  </p>
                  <p>
                    But quality control is lax, and several unethical practices
                    are conducted everyday across these markets, including drug
                    counterfeiting, improper storage practices, drug peddling
                    etc, making this model and archaic and dangerous model for a
                    sensitive products such as pharmaceuticals.
                  </p>
                  <p>
                    The modern wholesale model is what NAFDAC & PCN recommends,
                    which entails pharmacies registered as wholesalers only,
                    arranging their products on shelves for registered customers
                    (retail pharmacies and hospitals) to come and buy. These
                    outlets are more compliant to NAFDAC regulations, are
                    ethical and possess proper storage & temperature control
                    systems in place. Examples of such outlets include Hmedix
                    pharmacy in Abuja, Alpha Pharmacy in Lagos, Kuka medicals in
                    Kano, New Height Pharmacy Lagos etc. Their customers
                    oftentimes walk-in with the list of medications to purchase,
                    and walk round the store to pick them, often with the help
                    of shelf owners. Currently, most customers prefer to buy
                    through modern wholesalers due to the fact they are well
                    regulated, hence most products in their inventory are of
                    good quality, and NAFDAC conducts regular spot checks on
                    them to ensure they stick to the rules of engagement.
                  </p>
                  <p>
                    However, a lot of inefficiencies happen during this process,
                    with customers wasting precious time inside the outlets
                    selecting their items on the shelves, proceeding to
                    invoicing, then payments, and finally cross-checking. An
                    average customer spends a minimum of 3 hours in one of these
                    outlets to purchase the medications on their list, and
                    oftentimes they have to visit two or three of these outlets
                    in a day in order to get all the items they need because one
                    single wholesale outlet will most likely not have everything
                    they need. Recognizing this inefficiency, some outlets now
                    have whatsapp channels where customers can send their orders
                    in a list, and they package it for them to come and pick up.
                    Thus, most customers are craving for an improved process in
                    this pharmaceutical supply and delivery business.
                  </p>
                </div>
                {/* Improving Body End */}
                {/* Improving Btn Start */}
                <div
                  className="improving-btn wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <a href="/appointment" className="btn-video popup-youtube">
                    Join the waitlist
                  </a>
                </div>
                {/* Improving Btn End */}
              </div>
              {/* Improving Content End */}
            </div>
            <div className="col-lg-5 mx-auto">
              {/* Improving Image Start */}
              <div className="improving-img">
                <figure className="image-anime reveal">
                  <Image
                    src="/pictures/promed-image-8.jpg"
                    alt="appointment"
                    width={32}
                    height={32}
                  />
                </figure>
              </div>
              {/* Improving Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* We Improving Section End */}

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
                      {/* 2. Fix for: Error: Do not use an `<a>` element to navigate... Use `<Link />` from `next/link`
          // Replace <a href="#"> with <Link href="/blog/[id]">.
          // The `href="#"` typically indicates a non-functional or placeholder link.
          // For a blog post, it's almost certainly intended to go to the post's detail page.
          */}
                      <Link href={`/blog/${item.id}`}>
                        {/* 3. Fix for: Warning: Using `<img>` could result in slower LCP... Consider using `<Image />`
            // 4. Fix for: Warning: Invalid alt value for img.
            // Replace <img> with <Image />, and add required 'alt', 'width', and 'height' props.
            */}
                        <Image
                          src={item?.image}
                          alt={item?.title || "Blog post image"} // Provide a meaningful alt text for accessibility
                          width={400} // IMPORTANT: Replace with the actual intrinsic width of your image
                          height={250} // IMPORTANT: Replace with the actual intrinsic height of your image
                          layout="responsive" // A common layout for images that should scale within their container
                        />
                      </Link>
                    </figure>
                  </div>
                  {/* Post Image End */}
                  {/* Post Content Start */}
                  <div className="post-item-body">
                    <h2>
                      {/* 5. Fix for: Error: Do not use an `<a>` element to navigate... Use `<Link />` from `next/link`
          // Replace <a> with <Link>.
          */}
                      <Link href={`/blog/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p>{truncateText(`${item.contents[0]?.content}`, 20)}</p>
                  </div>
                  {/* Post Content End */}
                  {/* Btn Readmore Start */}
                  <div className="btn-readmore">
                    {/* 6. Fix for: Error: Do not use an `<a>` element to navigate... Use `<Link />` from `next/link`
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
    </>
  );
};

export default ProblemStatementContents;
