import React from "react";
import { Link } from "react-router-dom";
import "./banner.scss";
import banner from "../../Assets/Img/box_img.png";

const Banner = () => {
  return (
    <div>
      <section className="banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="text-img">
                <figure>
                  <img src={banner} alt="#" width="100%" />
                </figure>
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-bg">
                <h1>Spent the best time with best wine</h1>
                <Link to="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
