import React from "react";
import Image from "next/image";

const BlogDetails = ({ blogTitle, contents, image }) => {
  return (
    <div>
      {/* Subpage Header Start */}
      <div className="subpage-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Sub page Header start */}
              <div className="subpage-header-box">
                <h1 className="text-anime-style-3">{blogTitle}</h1>
                <div className="post-single-meta wow fadeInUp">
                  <ul>
                    <li>Fab 26, 2024</li>
                    <li>fields of medicine</li>
                  </ul>
                </div>
              </div>
              {/* Sub page Header End */}
            </div>
          </div>
        </div>
      </div>
      {/* Subpage Header End */}
      {/* Post Single Page Start */}
      <div className="page-post-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Post Single Content Start */}
              <div className="post-content">
                {/* Post Single Image Start */}
                <div className="post-image">
                  <figure className="image-anime reveal">
                    <Image src={image} alt="" unoptimized />
                  </figure>
                </div>
                {/* Post Single Image End */}
                {/* Post Entry Start */}
                <div className="post-entry"></div>
                <div className="post-entry">
                  <h2 className="wow fadeInUp" data-wow-delay="0.25s">
                    {blogTitle}
                  </h2>
                  {contents?.map((item) => (
                    <>
                      <h3 className="wow fadeInUp" data-wow-delay="0.25s">
                        {item?.subTitle}
                      </h3>
                      <p className="wow fadeInUp" data-wow-delay="0.5s">
                        {item?.content}
                      </p>
                    </>
                  ))}

                  <blockquote className="wow fadeInUp" data-wow-delay="1s">
                    <p>
                      Thankfully, hypertension can be managed effectively
                      through a combination of lifestyle modifications and
                      medical interventions.
                    </p>
                  </blockquote>
                </div>
                {/* Post Entry End */}
              </div>
              {/* Post Single Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Post Single Page End */}
    </div>
  );
};

export default BlogDetails;
