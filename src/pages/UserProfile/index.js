import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import * as AuthActions from "../../redux/auth/action";

import user_profile_1 from "../../assets/icons/tradieTV-title-after.svg";
import user_profile_2 from "../../assets/images/1601545174666_user-profile_2020_10_01_17_39_31_786_ 1.jpg";
import user_profile_3 from "../../assets/icons/icon-location.png";
import user_profile_4 from "../../assets/icons/icon-phone.png";
import user_profile_5 from "../../assets/icons/icon-email.png";
import user_profile_6 from "../../assets/images/professional-tradie.jpg";
import { Link } from "react-router-dom";
import Section_top_1 from "../../assets/icons/section-top-directory-before.svg";


const Index = () => {
  const dispatch = useDispatch();
  const { User_Profile_Get_Information_Action } = AuthActions;
  useEffect(() => {
    dispatch(User_Profile_Get_Information_Action());
  }, []);
  const { userData } = useSelector((state) => state.auth);

  const { full_name, mobile, email, profile_pic, id, online_address ,country_code} =
    userData;
  return (
    <div>
      <Header />

      {/* <!-- My Profile --> */}
      <section className="directory-top-section section-top--user-profile">
      <div className="section-top__before">
          <img src={Section_top_1} alt="" />
        </div>
        <h2 className="section-top__title">
          My <span>Profile</span>
          <img
            className="section-top__title-after"
            src={user_profile_1}
            alt=""
          />
        </h2>
      </section>

      <section className="section section--user-profile">
        <div className="user-profile">
          <div className="tradie-profile__image">
            <img
              src={
                profile_pic
                  ? `https://api.tapatradie.com/uploads/` + profile_pic
                  : user_profile_1
              }
              alt=""
              style={{border:"1 px solid black"}}
            />
          </div>
          <br />
          {/* <a href="#" className="tradie-profile__change-photo">
						Change photo
					</a> */}

          <h4 className="tradie-profile__name">
            {full_name}
            <Link to="/user-update-profile">
              <span>Edit profile</span>
            </Link>
          </h4>
          <div>
            <p className="tradie-profile__address">
              <img
                className="tradie-profile__icon"
                src={user_profile_3}
                alt=""
              />
              {online_address}
            </p>
            <a href="tel:0412 345 678" className="tradie-profile__tel">
              <img
                className="tradie-profile__icon"
                src={user_profile_4}
                alt=""
              />
              {country_code+" "+mobile}
            </a>
            <a
              href="mailto:tradiename@email.com"
              className="tradie-profile__email"
            >
              <img
                className="tradie-profile__icon"
                src={user_profile_5}
                alt=""
              />
              {email}
            </a>
          </div>
          <Link to="/user-bookings" className="btn-primary">
            My Bookings
          </Link>
        </div>
      </section>

      {/* <!-- Are you a Professional Tradie? --> */}
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
            <img src={user_profile_6} alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
