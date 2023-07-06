import React from "react";
// import Carousel from "react-bootstrap/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImage from "../../Assets/images/slider-bg.jpg";
import Slider from "react-slick";
import "../../Assets/stylesheet/style.css";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        class="slider_container"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "80vh",
          position: "relative",
        }}
      >
        <ol class="carousel-indicators">
          <li class="active"></li>
          <li class=""></li>
          <li class=""></li>
        </ol>
        <div className="slider_section">
          <div class="carousel-inner">
            <Slider {...settings}>
              <div class="carousel-item active">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                      <div class="detail-box">
                        <h2>Get Your Body</h2>
                        <h1>Fitness Here</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div class="btn-box">
                          <Link to="" class="btn-1">
                            Read More
                          </Link>
                          <Link to="" class="btn-2">
                            Get A Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                      <div class="detail-box">
                        <h2>Get Your Body</h2>
                        <h1>Fitness Here</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div class="btn-box">
                          <Link to="" class="btn-1">
                            Read More
                          </Link>
                          <Link to="" class="btn-2">
                            Get A Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 col-md-7 offset-md-6 offset-md-5">
                      <div class="detail-box">
                        <h2>Get Your Body</h2>
                        <h1>Fitness Here</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div class="btn-box">
                          <Link to="" class="btn-1">
                            Read More
                          </Link>
                          <Link to="" class="btn-2">
                            Get A Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
