import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import tradie_public_profile_1 from "../../assets/images/1601545174666_user-profile_2020_10_01_17_39_31_786_ 1.jpg";
import tradie_directory_3 from "../../assets/images/user.png";
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
import Modal from "react-modal";
import moment from "moment";

const Index = () => {
  let subtitle;
  const Subs = 1;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imgData, setImagData] = useState();

  useEffect(() => {
    dispatch(get_provider_profile_request({ provider_id: id }));
    dispatch(get_provider_reviewList_request(id));
  }, []);

  function openModal(data) {
    setIsOpen(true);
    setImagData(data);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const dispatch = useDispatch();
  const { id } = useParams();

  const { get_provider_profile_request, get_provider_reviewList_request } =
    Actions;
  const { getProviderProfile, getProviderReviewList } = useSelector(
    (state) => state.directory
  );
  const { userData } = useSelector((state) => state.auth);
  const { profile_pic } = userData;

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
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",

      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Header />

      {/* <!-- Any Trade. Any Time.  Any Where --> */}
      <section className="section-top">
        <h2 className="section-top__title directory-title">
          Any Trade. Any Time. <span>Any Where</span>
        </h2>
      </section>

      <section className="section section--tradie-profile">
        {getProviderProfile ? (
          getProviderProfile?.map((tradiePersonalInfo, i) => {
            return (
              <>
                <div className="tradie-profile tradie-profile--public" key={i}>
                  <div className="tradie-profile__image">
                    <img
                      onClick={() =>
                        openModal(
                          tradiePersonalInfo?.user_data?.profile_pic
                            ? `https://api.tapatradie.com/profile/${tradiePersonalInfo?.user_data?.id}/` +
                                tradiePersonalInfo?.user_data?.profile_pic
                            : tradie_directory_3
                        )
                      }
                      src={
                        tradiePersonalInfo?.user_data?.profile_pic
                          ? `https://api.tapatradie.com/profile/${tradiePersonalInfo?.user_data?.id}/` +
                            tradiePersonalInfo?.user_data?.profile_pic
                          : tradie_directory_3
                      }
                      alt=""
                    />
                  </div>
                  <div style={{ display: "inline-block" }}>
                    <div>
                      <div
                        className="tradie-profile__rating"
                        style={{ display: "flex" }}
                      >
                        <h4 className="tradie-profile__name text-left">
                          {tradiePersonalInfo.user_data.full_name}
                        </h4>

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
                          starDimension="20px"
                        />
                        <p style={{ margin: "3px" }}>
                          {Math.round(
                            Number(tradiePersonalInfo.user_data.rating) * 10
                          ) / 10}
                        </p>
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
                        {tradiePersonalInfo?.business_data?.house_no &&
                        tradiePersonalInfo?.business_data?.street &&
                        tradiePersonalInfo?.business_data?.city &&
                        tradiePersonalInfo?.business_data?.state &&
                        tradiePersonalInfo?.business_data?.country
                          ? `${tradiePersonalInfo?.business_data?.house_no}, ${tradiePersonalInfo?.business_data?.street}, ${tradiePersonalInfo?.business_data?.city} , ${tradiePersonalInfo?.business_data?.state} , ${tradiePersonalInfo?.business_data?.country}`
                          : ""}
                      </p>
                      <a
                        href={`tel: ${tradiePersonalInfo.user_data.mobile}`}
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
                        href={`mailto: ${tradiePersonalInfo.user_data.email}`}
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
                        tradiePersonalInfo.isMember == "active" ? (
                          <Link
                            className="btn-primary"
                            to={{
                              pathname: "/tradie-request",
                              state: {
                                id: [id],
                              },
                            }}
                          >
                            Request Job
                          </Link>
                        ) : (
                          ""
                        )
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
                      <h4>About Us</h4>
                      <p>{tradiePersonalInfo.user_data.about_me}</p>
                    </div>
                    <div className="tradie-profile__work-photos">
                      <h4>Work Photos</h4>
                      <div>
                        {tradiePersonalInfo.gallery.map((galleryImage) => {
                          return (
                            <div>
                              <img
                                onClick={() =>
                                  openModal(
                                    `https://api.tapatradie.com/gallery/${tradiePersonalInfo?.user_data?.id}/` +
                                      galleryImage.image
                                  )
                                }
                                src={
                                  `https://api.tapatradie.com/gallery/${tradiePersonalInfo?.user_data?.id}/` +
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
          })
        ) : (
          <center>
            <img
              src="https://i.pinimg.com/originals/43/c7/a0/43c7a0928088b901910ab187816c8f65.gif"
              alt="avatar"
              width={100}
              height={100}
            />
          </center>
        )}
      </section>
      <div className="tradie-profile__about">
        <h4>What our customer say</h4>
        <div style={{ maxHeight: "50rem", overflowY: "scroll" }}>
          {Object.keys(getProviderReviewList).length > 0 ? (
            getProviderReviewList?.map((res) => (
              <div className="input-group review" key={res.id}>
                <div>
                  <div
                    style={{
                      width: "7rem",
                      height: "7rem",
                      flexShrink: 0,
                      marginRight: "10px",
                      flexGrow: 0,
                      float: "left",
                      borderRadius: "50%",
                      overflow: "hidden",
                      // marginBottom: "1rem !important",
                    }}
                  >
                    <img
                      src={
                        res?.profile_pic
                          ? `https://api.tapatradie.com/profile/${res.updated_by}/${res.profile_pic}`
                          : tradie_directory_3
                      }
                      alt="avatar"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        border: "2px solid black",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <h4 key={res.id}>
                    {res?.full_name?.charAt(0).toUpperCase() +
                      res?.full_name?.slice(1)}
                  </h4>
                  <p style={{ float: "right", fontSize: "16px" }}>
                    {moment(res.created_on, "x").format("DD MMM YYYY")}
                  </p>
                  <p>
                    {" "}
                    <StarRatings
                      rating={
                        res?.rating
                          ? Math.round(Number(res?.rating) * 10) / 10
                          : 0
                      }
                      starRatedColor="orange"
                      numberOfStars={5}
                      name="rating"
                      starSpacing="1px"
                      starDimension="17px"
                    />
                  </p>
                </div>
                <div>
                  <div className="review-decs">
                    <h5> Reviews:</h5> <p> {res.review}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <center>No review/rating found</center>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button className="close-btn" onClick={closeModal}>
          close
        </button>
        <div className="img-show">
          <img src={imgData} />
        </div>
      </Modal>

      {/* <!-- Register as a Tradie Today! --> */}

      {userInfo?.access ? (
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
              Register Now
            </a>
          </div>
        </section>
      )}

      {/* <!-- Are you a Professional Tradie? --> */}
      {userInfo.role === "provider" ? (
        ""
      ) : (
        <section className="section section--left">
          <div className="professional-tradie">
            <div className="professional-tradie__description">
              <h2 className="section__title">Are you a Professional Tradie?</h2>
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
              <img src={tradie_public_profile_11} alt="" />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Index;
