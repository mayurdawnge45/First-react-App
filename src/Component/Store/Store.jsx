import React from "react";
import { Link } from "react-router-dom";
import "./store.scss";
import storeImg1 from "../../Assets/Img/store_img1.png";
import storeImg2 from "../../Assets/Img/store_img2.png";
import storeImg3 from "../../Assets/Img/store_img3.png";

const Store = () => {
  const mgArr = [
    {
      image: storeImg1,
      title: "Black Wine",
      subtitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages",
    },
    {
      image: storeImg3,
      title: "White Wine",
      subtitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages",
    },
    {
      image: storeImg2,
      title: "Red Wine",
      subtitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages",
    },
  ];
  return (
    <>
      <div className="store">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>
                  Best Wines <span className="red">In Our Store</span>{" "}
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {mgArr.map((imageArr, index) => (
                <div key={index} className="black_bg">
                  <div className="row d_flex align-items-center">
                    <div className="col-md-4">
                      <div className="store_box ">
                        <figure>
                          <img src={imageArr.image} alt="storeImg1" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="store_box ">
                        <h3>{imageArr.title}</h3>
                        <p>{imageArr.subtitle}</p>
                        <Link className="read_more" to="">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
