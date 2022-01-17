import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import pricing_1 from "../../assets/images/header-logo.svg";
import pricing_2 from "../../assets/images/mobile-logo.svg";
import pricing_3 from "../../assets/images/photo-1546552356-3fae876a61ca.jpeg";
import pricing_4 from "../../assets/images/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg";
import pricing_5 from "../../assets/images/photo-1581141849291-1125c7b692b5.jpeg";
import pricing_6 from "../../assets/images/construction-worker-with-hard-hat-sanding-down-wood-piece_23-2148748860.jpg";
import pricing_7 from "../../assets/images/photo-1574757987642-5755f0839101.jpeg";
import pricing_8 from "../../assets/icons/tradieTV-title-after.svg";
import pricing_9 from "../../assets/images/modal-partner-logo.png";
import pricing_10 from "../../assets/images/modal-partner-image.jpg";

const Index = () => {
  return (
    <div>
      <Header />

      <section className="section section--sign-up">
        <div className="sign-up">
          <div className="sign-up__left">
            <nav className="nav">
              <a className="nav__left" href="/">
                <img className="nav__logo" src={pricing_1} />
                <img className="nav__logo--md" src={pricing_2} hidden />
              </a>
            </nav>
            <h3 className="section__title sign-up__title">Sign Up</h3>
            <p className="sign-up__description">
              Welcome you to our website and we are excited to have you onboard.
              Please signup to continue
            </p>
            <div className="sign-up-form">
              <form action="#">
                <div className="sign-up-form__navigation">
                  <nav>
                    <a href="#" className="active">
                      As Tradie
                    </a>
                    <a href="#">As User</a>
                  </nav>
                </div>

                <div className="sign-up-form__mobile">
                  <p>Mobile Number</p>
                  <div className="sign-up-form__inputs">
                    <label htmlFor="mobile-number">
                      <svg>
                        {/* <use xlink:href="/assets/icons/sprite.svg#icon-country-code-61"></use> */}
                      </svg>
                    </label>
                    <input
                      type="text"
                      className="sign-up-form__country-code"
                      value="+61"
                    />
                    <input
                      type="number"
                      className="sign-up-form__mobile-number"
                      id="mobile-number"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  className="sign-up-form__submit btn-primary"
                  value="Sign Up"
                />
              </form>
              <div className="sign-up-form__or">
                <p>OR</p>
                <a href="#">
                  <svg>
                    {/* <use xlink:href="/assets/icons/sprite.svg#icon-facebook"></use> */}
                  </svg>
                  Continue with Facebook
                </a>
              </div>
              <div className="sign-up-form__sign-in">
                <p>You do not have an account?</p>
                <a href="#"> Sign In </a>
              </div>
            </div>
          </div>
          <div className="sign-up__right">
            <div className="sign-up__right-column">
              <div>
                <img src={pricing_3} alt="" />
              </div>
              <div>
                <img src={pricing_4} alt="" />
              </div>
            </div>
            <div className="sign-up__right-column sign-up__right-column--center">
              <div>
                <img src={pricing_5} alt="" />
              </div>
            </div>
            <div className="sign-up__right-column">
              <div>
                <img src={pricing_6} alt="" />
              </div>
              <div>
                <img src={pricing_7} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="backdrop"></div>
      <modal className="modal">
        <div className="section-top section-top--modal">
          <h2 className="section-top__title">
            <span>Welcome</span>
          </h2>
          <h4 className="section-top__sub-title">
            Please select one of the below adverts and let’s get you started.
          </h4>
          <img className="section-top__title-after" src={pricing_8} />
        </div>
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
        <div className="modal-partner">
          <p className="modal-partner__description">
            We have partnered with credshare to help you store and showcase your
            credentials to customers.
          </p>
          <img className="modal-partner__logo" src={pricing_9} alt="" />
          <img src={pricing_10} alt="" className="modal-partner__image" />
        </div>
      </modal>

      <Footer />
    </div>
  );
};

export default Index;
