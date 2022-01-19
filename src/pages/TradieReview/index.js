import React, { Fragment, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import tradie_review_1 from "../../assets/images/1601545174666_user-profile_2020_10_01_17_39_31_786_ 1.jpg";
import tradie_review_2 from "../../assets/images/professional-tradie.jpg";
import NavigationLinks from "../../components/Tradie Name/Index";
import { useSelector, useDispatch } from "react-redux";
import { get_provider_reviewList_request } from "../../redux/directory/action";
import StarRatings from "react-star-ratings";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const { getProviderReviewList } = useSelector((state) => state.directory);
  useEffect(() => {
    dispatch(get_provider_reviewList_request());
  }, []);
  const { userData } = useSelector((state) => state.auth);

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
          <NavigationLinks />
          <form action="#" className="tradie-my-profile__form">
            <h4>My Reviews</h4>

            {/* <div className="input-group review">
              <h4>Great Services</h4>
              <div className="tradie-profile__rating">
                <svg>
                  {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> 
                </svg>
                <svg>
                  {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> 
                </svg>
                <svg>
                  {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> 
                </svg>
                <svg>
                  {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> 
                </svg>
                <svg>
                  {/* <use xlink:href="/assets/icons/sprite.svg#icon-star"></use> 
                </svg>
              </div>
              <p>
                Carpenter by trade with diploma in construction available for
                construction services
              </p>
            </div> */}

            {Object.keys(getProviderReviewList).length > 0 ? (
              getProviderReviewList.map((res, i) => (
                <div className="input-group review">
                  <div className="tradie-profile__rating">
                    <h4 key={i}>
                      Name:{" "}
                      <span style={{ fontSize: "17px" }}>
                        {res.full_name?.charAt(0).toUpperCase() +
                          res.full_name?.slice(1)}
                      </span>
                    </h4>
                    <span>
                      Ratings:
                      <StarRatings
                        rating={
                          res.rating
                            ? Math.round(Number(res.rating) * 10) / 10
                            : 0
                        }
                        starRatedColor="orange"
                        numberOfStars={5}
                        name="rating"
                        starSpacing="1px"
                        starDimension="17px"
                      />
                    </span>
                  
                  </div>
                  Reviews : { res.review}
                </div>
              ))
            ) : (
              <center>No Reviews yet!</center>
            )}
          </form>
        </div>
      </section>

      {/* // <!-- Are you a Professional Tradie? --> */}
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
              If you would like to be part of our Tradie community and are ready
              to meet new clients today please continue so we can welcome you
              onboard.
            </p>
            <Link to="/about-us" className="btn-primary">
              Learn More
            </Link>
          </div>
          <div className="professional-tradie__image">
            <img src={tradie_review_2} alt="" />
          </div>
        </div>
      </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
