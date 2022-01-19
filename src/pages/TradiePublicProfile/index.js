import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import tradie_public_profile_1 from "../../assets/images/1601545174666_user-profile_2020_10_01_17_39_31_786_ 1.jpg";
import tradie_public_profile_2 from "../../assets/icons/icon-location.png";
import tradie_public_profile_3 from "../../assets/icons/icon-phone.png";
import tradie_public_profile_4 from "../../assets/icons/icon-email.png";
import tradie_public_profile_5 from "../../assets/icons/electrician.png";
import tradie_public_profile_6 from "../../assets/icons/plumber.png";
import tradie_public_profile_7 from "../../assets/icons/painter.png";
import tradie_public_profile_8 from "../../assets/icons/bricklayer.png";
import tradie_public_profile_9 from "../../assets/icons/mowing.png";
import tradie_public_profile_10 from "../../assets/images/Rectangle-648.jpg";
import tradie_public_profile_11 from "../../assets/images/professional-tradie.jpg";
import { useSelector, useDispatch } from "react-redux";
import StarInactive from "../../assets/icons/star.svg";
import StarActive from "../../assets/icons/starActive.svg";
import * as Actions from "../../redux/directory/action";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Index = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { get_provider_profile_request } = Actions;
  const { getProviderProfile } = useSelector((state) => state.directory);
  const { userData } = useSelector((state) => state.auth);
  const { profile_pic } = userData;
  useEffect(() => {
    dispatch(get_provider_profile_request({ provider_id: id }));
  }, []);
  // console.log(getProviderProfile[0].user_data.rating);
  const loginData = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

  const [rating, setRating] = useState();
  useEffect(() => {
    setRating(
      Math.round(Number(getProviderProfile[0]?.user_data?.rating) * 10) / 10
    );
  }, [getProviderProfile]);

  let RatingStars;

  if (getProviderProfile) {
    getProviderProfile.map((item) => {
      if (item.user_data.rating === 5) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
          </>
        );
      }
      if (item.user_data.rating === 4) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarInactive} />
          </>
        );
      }
      if (item.user_data.rating === 3) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
          </>
        );
      }
      if (item.user_data.rating === 2) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
          </>
        );
      }
      if (item.user_data.rating === 1) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
          </>
        );
      }
      if (item.user_data.rating === 0 || item.user_data.rating === null) {
        RatingStars = (
          <>
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
          </>
        );
      }
    });
  }

  return (
    <div>
      <Header />

      {/* <!-- Any Trade. Any Time.  Any Where --> */}
      <section className="section-top">
        <h2 className="section-top__title">
          <span>Any Trade</span>, Anywhere, Anytime
        </h2>
      </section> 
      
      <section className="section section--tradie-profile">
        {getProviderProfile &&
          getProviderProfile?.map((tradiePersonalInfo, i) => {
            return (
              <>
                <div className="tradie-profile tradie-profile--public" key={i}>
                  <div className="tradie-profile__image">
                    <img
                      src={
                        profile_pic
                          ? `https://api.tapatradie.com/uploads/` + profile_pic
                          : tradie_public_profile_1
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <div>
                      <h4 className="tradie-profile__name">
                        {tradiePersonalInfo.user_data.full_name}
                      </h4>
                      <div
                        className="tradie-profile__rating"
                        style={{ height: "20px" }}
                      >
                        {/* {RatingStars} */}
                        {/* {loginData.access === "user" ? (
                          <StarRatings
                            rating={rating ? rating : 0}
                            changeRating={(newRating) => setRating(newRating)}
                            starRatedColor="orange"
                            numberOfStars={5}
                            name="rating"
                            starSpacing="1px"
                            starDimension="17px"
                          />
                        ) : ( */}
                        <StarRatings
                          rating={
                            tradiePersonalInfo.user_data.rating
                              ? Math.round(
                                  Number(tradiePersonalInfo.user_data.rating) *
                                    10
                                ) / 10
                              : 0
                          }
                          starRatedColor="orange"
                          numberOfStars={5}
                          name="rating"
                          starSpacing="1px"
                          starDimension="17px"
                        />
                        {/* )} */}
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
                      <ul className="tradie-profile__specialties">
                        {tradiePersonalInfo?.services.map((serviceType, i) => {
                          if (i == 0) {
                            if (
                              serviceType.service_type ==
                              "residential,commercial"
                            )
                              return (
                                <>
                                  <li>Residential</li>
                                  <li>Commercial</li>
                                </>
                              );
                            else if (serviceType.service_type == "residential")
                              return (
                                <>
                                  <li>Residential</li>
                                </>
                              );
                            else
                              return (
                                <>
                                  <li>Commercial</li>
                                </>
                              );
                          }
                        })}
                      </ul>
                    </div>

                    <div>
                      <p className="tradie-profile__address">
                        <img
                          className="tradie-profile__icon"
                          src={tradie_public_profile_2}
                          alt=""
                        />
                        {`${tradiePersonalInfo.business_data.house_no} ${""} ${
                          tradiePersonalInfo.business_data.city
                        } , ${tradiePersonalInfo.business_data.state} , ${
                          tradiePersonalInfo.business_data.country
                        } ${""} ${tradiePersonalInfo.business_data.pincode}`}
                      </p>
                      <a
                        href="tel:0412 345 678"
                        className="tradie-profile__tel"
                      >
                        <img
                          className="tradie-profile__icon"
                          src={tradie_public_profile_3}
                          alt=""
                        />
                        {tradiePersonalInfo.user_data.mobile}
                      </a>
                      <a
                        href="mailto:tradiename@email.com"
                        className="tradie-profile__email"
                      >
                        <img
                          className="tradie-profile__icon"
                          src={tradie_public_profile_4}
                        />

                        {tradiePersonalInfo.user_data.email}
                      </a>
                    </div>
                    <div>
                      {loginData.access === "user" ? (
                        <Link
                          className="btn-primary"
                          to={{
                            pathname: "/tradie-request",
                            state: {
                              id: id,
                            },
                          }}
                        >
                          Request Job
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>

                <div className="tradie-profile__row">
                  <div className="tradie-profile-service">
                    <h4>Services</h4>
                    {tradiePersonalInfo.services.map((service) => {
                      return (
                        <div href="#" className="tradie-profile-service__item">
                          <div>
                            <img
                              src={`https://sample.jploftsolutions.in/tapImages/${service.image}`}
                              height="23px"
                              width="33px"
                              alt=""
                            />
                          </div>
                          <h4 style={{ textTransform: "capitalize" }}>
                            {service.name}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                  <div className="tradie-profile__column">
                    <div className="tradie-profile__about">
                      <h4>About us</h4>
                      <p>{tradiePersonalInfo.user_data.about_me}</p>
                    </div>
                    <div className="tradie-profile__work-photos">
                      <h4>Work Photos</h4>
                      <div>
                        {tradiePersonalInfo.gallery.map((galleryImage) => {
                          return (
                            <div>
                              <img
                                src={
                                  `https://api.tapatradie.com/uploads/` +
                                  galleryImage.image
                                }
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </section>

      {/* <!-- Register as a Tradie Today! --> */}
      {userInfo.fullname ? (
        ""
      ) : (
        <section className="section--register-tradie">
          <div className="register-tradie">
            <h4>Register as a Tradie Today!</h4>
            <p>
              List your business here, fill in your profile, control when and
              where you work and meet some amazing new clients.
            </p>
            <a href="/sign-up" role="button">
              Register Now 10 
            </a>
          </div>
        </section>
      )}

      {/* <!-- Are you a Professional Tradie? --> */}
      {/* {userData.access === "provider" ? (
        ""
      ) : ( */}
      <section className="section section--left">
        <div className="professional-tradie">
          <div className="professional-tradie__description">
            <h2 className="section__title">Are you a Professional Tradie?</h2>
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
            <img src={tradie_public_profile_11} alt="" />
          </div>
        </div>
      </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
