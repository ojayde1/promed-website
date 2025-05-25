import { blogs } from "@/datas/blog";
import Link from 'next/link';
import Image from 'next/image';
import React from "react";

const SolutionContents = () => {
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
                <h1 className="text-anime-style-3">Solution</h1>
                <ol className="breadcrumb wow fadeInUp">
                  {/* <li>
                    <a href="/">Home</a>
                  </li> */}
                  <Link href="/">
                   <a>Home</a>
                 </Link>
                  <li>Solution</li>
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
            <div className="col-lg-12">
              {/* Page About Content Start */}
              <div className="page-about-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">OUR SOLUTION</h3>
                  <h2 className="text-anime-style-3">
                    The Solution We Offer at Promed Africa
                    {/* Drugs.ng is Nigeria’s first fully managed B2B marketplace
                    tailored to meet the unique needs of the pharmaceutical and
                    healthcare sectors. */}
                  </h2>
                </div>
                {/* Section Title End */}
                {/* Page About Body Start */}
                <div className="page-about-body">
                  <p className=" wow fadeInUp">
                    Our solution is an inventory-less model that plugs into the
                    existing value-chain, where we bring the modern wholesale
                    distributors/wholesalers online. Essentially, Promed Africa
                    is a marketplace that connects the existing modern
                    pharmaceutical wholesalers, distributors and manufacturers
                    to hospitals, NGOs and retail pharmacy outlets. We act as
                    the bridge connecting the demand to the supply,
                    intermediating the process and making it more efficient,
                    effective, transparent and seamless.
                  </p>
                  <p>
                    Our solution will be available at{" "}
                    <a href="#">www.promed.africa</a> , which will come as a web
                    app and mobile app on both the iOS and Android platforms. We
                    aim to onboard all the registered wholesalers in the country
                    on the platform, and then get hospitals & retail outlets to
                    sign up as customers. Thus, customers will be able to search
                    for products, and place orders from their favorite
                    wholesalers, make payments, and get their orders delivered
                    to them without needing to leave their office. This enhances
                    efficiency, judicious use of time, transparency, ability to
                    get prices and quotations easily, and prompt delivery.
                  </p>
                  <p>
                    Finally, we ensure same-day delivery for all orders placed
                    through our platform, ensuring ease of access to these
                    medications. Future plans include order financing, access to
                    laboratory items, medical equipment, consumables and other
                    hospital needs.
                  </p>
                </div>
              </div>
              {/* Page About Content End */}
            </div>
            <div className="col-lg-6 mx-auto">
              {/* Improving Image Start */}
              <div className="improving-img">
                <figure className="image-anime reveal">
                 
                  <Image
                      src="/pictures/top-up-pharmacy.jpeg"
                      alt="teams"
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
          {/* 2. FIX: Do not use an `<a>` element to navigate... Use `<Link />` from `next/link` (ESLint Error)
          // For internal navigation in Next.js, always use <Link>.
          // The `href="#"` was likely a placeholder, now it links to the actual blog post.
          */}
          <Link href={`/blog/${item.id}`}>
            {/* 3. FIX: Using `<img>` could result in slower LCP... Use `<Image />` (ESLint Warning)
            // 4. FIX: Invalid alt value for img. (ESLint Warning)
            // Replace <img> with <Image />. It requires 'src', 'alt', 'width', and 'height'.
            */}
            <Image
              src={item?.image}
              alt={item?.title || "Blog post image"} // Provide meaningful alt text for accessibility
              width={400} // IMPORTANT: Replace with the actual intrinsic width of your images
              height={250} // IMPORTANT: Replace with the actual intrinsic height of your images
              layout="responsive" // Common layout to make images scale responsively
            />
          </Link>
        </figure>
      </div>
      {/* Post Image End */}
      {/* Post Content Start */}
      <div className="post-item-body">
        <h2>
          {/* 5. FIX: Do not use an `<a>` element to navigate... Use `<Link />` (ESLint Error)
          // Another internal link, so use <Link>.
          */}
          <Link href={`/blog/${item.id}`}>{item.title}</Link>
        </h2>
        <p>{truncateText(`${item.contents[0]?.content}`, 20)}</p>
      </div>
      {/* Post Content End */}
      {/* Btn Readmore Start */}
      <div className="btn-readmore">
        {/* 6. FIX: Do not use an `<a>` element to navigate... Use `<Link />` (ESLint Error)
        // Final internal link, use <Link>. The nested <a> is for styling.
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
    </>
  );
};

export default SolutionContents;
