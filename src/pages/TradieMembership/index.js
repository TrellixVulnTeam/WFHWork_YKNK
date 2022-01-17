import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import tradie_membership_1 from "../../assets/icons/tradieTV-title-after.svg";
import tradie_membership_2 from "../../assets/icons/icon-credit-card.png";
import tradie_membership_3 from "../../assets/icons/icon-edit.png";
import tradie_membership_4 from "../../assets/images/professional-tradie.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <div>
      <Header />

      {/* <!-- Frequently Asked Questions --> */}
      <section className="section-top section-top--membership">
        <h2 className="section-top__title">
          My <span>Membership</span>
          <img className="section-top__title-after" src={tradie_membership_1} />
        </h2>
      </section>

      {/* <!-- My Subscription --> */}
      <section className="section section--membership">
        <div className="membership">
          <div className="membership__subscription">
            <h4>My Subscription</h4>
            <ul>
              <h6>Standard Adverts</h6>
              <li>7 days (auto renew)</li>
              <li>Included for all tradies user</li>
              <li>Unlimited leads</li>
              <li>Directory listing</li>
              <li>Photo Gallery</li>
            </ul>
            <div className="membership__subscription-plan">
              <h3 className="pricing__price">
                $3.99 <span>/ week</span>
              </h3>
              <nav className="membership__subscription-links">
                <a href="#">upgrade</a>
                <a href="#">cancel subscription</a>
              </nav>
            </div>
          </div>
          <div className="membership__card">
            <h4>Manage card</h4>
            <div>
              <div>
                <img
                  className="icon-credit-card"
                  src={tradie_membership_2}
                  alt=""
                />
                <p>Visa Card</p>
              </div>
              <div>
                <input
                  type="text"
                  readonly
                  value="xxxx - xxxx - xxxx - xxxx - 7890"
                />
                <a href="#">
                  <img src={tradie_membership_3} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="pricing">
          <div className="pricing__free">
            <h4 className="pricing__title">Free Advert</h4>
            <h3 className="pricing__price">$0</h3>
            <ul className="pricing__list">
              <li>Get a webpage on our website</li>
              <li>
                Receive leads direct from clients 24-7 up to a 25km radius
              </li>
              <li>
                Show your phone, email and full profile with contact details
              </li>
            </ul>
            <a href="#" className="pricing__choose">
              Choose Plan
            </a>
          </div>
          <div className="pricing__standard">
            <h4 className="pricing__title">Standard Advert</h4>
            <h3 className="pricing__price">
              $3.99 <span>/ week</span>
            </h3>
            <ul className="pricing__list">
              <li>Appear above free members</li>
              <li>
                Get a webpage on our website with your logo and up to 5 pictures
                of your work.
              </li>
              <li>
                Receive leads direct from clients 24-7 up to a 50km radius
              </li>
              <li>
                Show your phone, email and full profile with contact details
              </li>
              <li>
                Customers can contact you direct and through our app via leads
              </li>
              <li>
                Get a Tap A Tradie standard verification if requirements are
                met.
              </li>
            </ul>
            <a href="#" className="pricing__choose">
              Choose Plan
            </a>
          </div>
          <div className="pricing__premium">
            <h4 className="pricing__title">Premium Advert</h4>
            <h3 className="pricing__price">
              $7.99 <span>/ week</span>
            </h3>
            <ul className="pricing__list">
              <li>Appear above standard and free members</li>
              <li>
                Get a webpage on our website with up to 10 pictures to showcase
                your work.
              </li>
              <li>
                Receive leads direct from clients 24-7 up to a 100km radius
              </li>
              <li>
                Show your phone, email and full profile with contact details
              </li>
              <li>
                Customers can contact you direct and through our app via leads
              </li>
              <li>
                Get a Tap A Tradie gold verification if requirements are met.
              </li>
            </ul>
            <a href="#" className="pricing__choose btn-primary">
              Choose Plan
            </a>
          </div>
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
              <img src={tradie_membership_4} alt="" />
            </div>
          </div>
        </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
