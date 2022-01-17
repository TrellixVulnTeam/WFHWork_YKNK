import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import tradie_add_info_1 from "../../assets/images/professional-tradie.jpg";
import tradie_add_info_2 from "../../assets/images/1601545174666_user-profile_2020_10_01_17_39_31_786_ 1.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const { userData } = useSelector((state) => state.directory);
  return (
    <div>
      <Header />

      {/* <!-- My Profile--> */}
      <section className="section-top section-top--tradie-my-profile">
        <h2 className="section-top__title">
          My <span>Profile</span>
        </h2>
      </section>

      <section className="section section--tradie-my-profile">
        <div className="tradie-my-profile">
          <div className="tradie-my-profile__profile">
            <div className="tradie-profile__image">
              <img src={tradie_add_info_2} alt="" />
            </div>
            <h4 className="tradie-profile__name">TRADIE NAME</h4>
            <div className="tradie-profile__rating">
              <svg>
                {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> */}
              </svg>
              <svg>
                {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> */}
              </svg>
              <svg>
                {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> */}
              </svg>
              <svg>
                {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> */}
              </svg>
              <svg>
                {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> */}
              </svg>
            </div>
            <a href="#" className="tradie-profile__link">
              {" "}
              View Reviews{" "}
            </a>
            <p className="tradie-profile__text">
              You are only a few steps away from completing profile
            </p>
            <ul className="tradie-profile__list">
              <li>
                <a href="#">
                  {" "}
                  Identify verifications & about me{" "}
                  <svg>
                    {/* <use xlink:href="/assets/icons/sprite.svg#icon-arrow"></use> */}
                  </svg>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  Business details{" "}
                  <svg>
                    {/* <use xlink:href="/assets/icons/sprite.svg#icon-arrow"></use> */}
                  </svg>{" "}
                </a>
              </li>
              <li className="checked">
                <a href="tradie-my-profile-upload.html">
                  {" "}
                  Upload photos of your work{" "}
                  <svg>
                    {/* <use xlink:href="/assets/icons/sprite.svg#icon-arrow"></use> */}
                  </svg>{" "}
                </a>
              </li>
              <li className="checked">
                <a href="#">
                  {" "}
                  Additional service information{" "}
                  <svg>
                    {/* <use xlink:href="/assets/icons/sprite.svg#icon-arrow"></use> */}
                  </svg>{" "}
                </a>
              </li>
              <li className="checked">
                <a href="#">
                  {" "}
                  Add your service location{" "}
                  <svg>
                    {/* <use xlink:href="/assets/icons/sprite.svg#icon-arrow"></use> */}
                  </svg>{" "}
                </a>
              </li>
            </ul>
            <a href="#" className="btn-primary">
              Submit for approval
            </a>
            <a href="#" className="tradie-profile__link">
              View Profile
            </a>
          </div>
          <form action="#" className="tradie-my-profile__form">
            <h4>Additional Service Information </h4>

            <label className="m-b-1">Select your business category</label>
            <div className="input-group">
              <input
                className="w-100"
                type="text"
                placeholder="Search for a service"
              />
            </div>
            <label className="m-b-1">Select your service type</label>
            <div className="input-group">
              <button className="btn-sec" value="Residential">
                Residential
              </button>
              <button className="btn-sec" value="Commercial">
                Commercial
              </button>
            </div>
            <label className="m-b-1">All Categories</label>
            <div className="input-group mb-1">
              <label className="container">
                Bricklayer
                <input type="checkbox" checked="checked" />
                <span className="checkmark"></span>
                <hr />
              </label>
            </div>

            <div className="input-group mb-1">
              <label className="container">
                Builder
                <input type="checkbox" />
                <span className="checkmark"></span>
                <hr />
              </label>
            </div>
            <div className="input-group mb-1">
              <label className="container">
                Labourer
                <input type="checkbox" />
                <span className="checkmark"></span>
                <hr />
              </label>
            </div>

            <div className="input-group mb-1">
              <label className="container">
                Painter
                <input type="checkbox" />
                <span className="checkmark"></span>
                <hr />
              </label>
            </div>

            <div className="input-group mb-1">
              <label className="container">
                Landscaper
                <input type="checkbox" />
                <span className="checkmark"></span>
                <hr />
              </label>
            </div>

            <div className="input-group mb-1">
              <label className="container">
                Plasterer
                <input type="checkbox" />
                <span className="checkmark"></span>
                <hr />
              </label>
            </div>

            <div className="input-group mb-1">
              <label className="container">
                Electrician
                <input type="checkbox" />
                <span className="checkmark"></span>
                <hr />
              </label>
            </div>

            <div className="input-group mb-1">
              <label className="container">
                Plumber
                <input type="checkbox" />
                <span className="checkmark"></span>
                <hr />
              </label>
            </div>

            <div className="input-group mb-1">
              <label className="container text-others">
                <a
                  className="text-others"
                  href="tradie-additional-services.html"
                >
                  Other Categories
                </a>
                <input type="text" />
                <span className="text-others"></span>
                <hr />
              </label>
            </div>

            <div className="input-group btn">
              <input type="submit" className="btn-primary" value="Save" />
            </div>
          </form>
        </div>
      </section>

      {/* <!-- Are you a Professional Tradie? --> */}
      {/* {userData.access === "provider" ? (
        ""
      ) : ( */}
        <section className="section section--left">
          <div className="professional-tradie">
            <div className="professional-tradie__description">
              <h3 className="professional-tradie__title">
                Are you a Professional Tradie?
              </h3>
              <p>
                If you would like to be part of our Tradie community and are
                ready to meet new clients today please continue so we can
                welcome you onboard.
              </p>
              <Link to="/about-us" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="professional-tradie__image">
              <img src={tradie_add_info_1} alt="" />
            </div>
          </div>
        </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
