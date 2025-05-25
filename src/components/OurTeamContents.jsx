import { teamList } from "@/datas/teams";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurTeamContents = () => {
  return (
    <>
      {/* Subpage Hero Section Start */}
      <div className="subpage-header mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Sub page Header start */}
              <div className="subpage-header-box">
                <h1 className="text-anime-style-3">Our Team</h1>
                <ol className="breadcrumb wow fadeInUp">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>our team</li>
                </ol>
              </div>
              {/* Sub page Header End */}
            </div>
          </div>
        </div>
      </div>
      {/* Subpage Hero Section End */}

      {/* <!-- Our Team Member Section Start --> */}
      {teamList.map((item, key) => (
        <div className="member-details" key={key}>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-4">
                {/* Image Box Start */}
                <div className="team-member-img">
                  <figure className="image-anime">
                    <Image
                        src={item.image}
                        alt=""
                        unoptimized
                      />
                  </figure>
                </div>
                {/* Image Box End */}
              </div>
              <div className="col-md-8">
                {/* Member Details Start */}
                <div className="member-info">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h3 className="wow fadeInUp">{item.title}</h3>
                    <h2 className="text-anime-style-3">{item.name}</h2>
                  </div>
                  {/* Section Title End */}
                  <div className="member-about-data">
                    <p className="wow fadeInUp">{item.details}</p>
                  </div>
                  <div className="member-social-icon">
                    <ul className="wow fadeInUp" data-wow-delay="0.25s">
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="blank"
                          href={item.LinkedIn}
                          className="social-icon"
                        >
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Member Details End */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <!-- Our Team Member Section End --> */}
    </>
  );
};

export default OurTeamContents;
