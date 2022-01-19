import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/auth/action";
import { useForm } from "react-hook-form";
import FooterLogo from "../../assets/images/footer-logo.png";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import YoutubeIcon from "../../assets/icons/youtubeicon.svg";
import FacebookIcon from "../../assets/icons/sprite_icon_facebook.svg";

import footer_1 from "../../assets/icons/download-apple.svg";
import footer_2 from "../../assets/icons/download-google.svg";
import * as action from "../../redux/directory/action";
const Index = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const Dispatch = useDispatch();
  const { cookiePolicy_Action } = Actions;
  const { send_newsLetter_request } = action;
  const { cookiePolicy } = useSelector((state) => state.auth);

  function scrollToTop() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }

  const onSubmit = (data) => {
    Dispatch(send_newsLetter_request({ subscrib_email: data.subscrib_email }));
    reset();
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer__row">
          <div className="footer__column">
            <div className="footer__logo">
              <img src={FooterLogo} alt="Company logo" />
            </div>
            <div className="footer__newsletter">
              <h6 className="footer__title">Newsletter</h6>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  placeholder="Please enter email"
                  {...register("subscrib_email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Enter Valid Email",
                    },
                  })}
                />
                {errors.subscrib_email && (
                  <span style={{ color: "red" }}>
                    {errors.subscrib_email.message}
                  </span>
                )}
                <input
                  type="submit"
                  className="btn-primary"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>

          <div className="footer__column">
            <h6 className="footer__title">Resources</h6>
            <ul className="footer__list">
              <li onClick={scrollToTop}>
                <Link to="tradieTV">Tradie TV</Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/articles">Articles</Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/faq">FAQs</Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h6 className="footer__title">Company</h6>
            <ul className="footer__list">
              <li onClick={scrollToTop}>
                <Link to="about-us">About Us</Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <div className="footer__questions">
              <h6 className="footer__title">Questions?</h6>
              <p>
                You can reach us any time at &nbsp;
                <a
                  href="mailto:info@tapatradie.com"
                  style={{ color: "#fffff !important" }}
                >
                  info@tapatradie.com
                </a>
                &nbsp; we will get back to you shortly!
              </p>
            </div>
            <div className="footer__apps">
              <h6 className="footer__title">Download Our apps</h6>
              <div>
                <a
                  href="https://apps.apple.com/us/app/tap-a-tradie/id1473400994"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={footer_1} alt="Apple Store Icon" loading="lazy" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.si.tapatradie&hl=en_IN"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={footer_2}
                    alt="Google Play Store Icon"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__row footer__row--bottom">
          <a
            href="https://twitter.com/tapatradie?lang=en"
            target="_blank"
            className="footer__icon"
          >
            <img src={TwitterIcon} alt="Twitter icon" loading="lazy" />
            {/* <svg>
              <use xlinkHref="/assets/icons/sprite.svg#icon-twitter"></use>
            </svg> */}
          </a>
          <a
            href="https://www.facebook.com/TapATradie/"
            target="_blank"
            className="footer__icon"
          >
            <img src={FacebookIcon} alt="Facebbok icon" loading="lazy" />
            {/* <svg>
              <use xlink:href="/assets/icons/sprite.svg#icon-facebook"></use>
            </svg> */}
          </a>
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEJGN2ilnpLQgAAAX4kx46INwj8zNZ37FbjQ7WwRe0X-4BrbNGYWH_nxhqriT9CM5SOj80RcKhzzWC-AyHUKfqHff_MURUvbVUni5ecfaCrzDV3df2jZNDk6SsNCrRhWtoscIk=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftap-a-tradie"
            target="_blank"
            className="footer__icon"
          >
            <img src={LinkedinIcon} alt="LinkedIn icon" loading="lazy" />
            {/* <svg>
              <use xlink:href="/assets/icons/sprite.svg#icon-linkedin"></use>
            </svg> */}
          </a>
          <a
            href="https://www.youtube.com/channel/UC7Sr9gtZEYd2Te0tB7MeKHg/videos"
            target="_blank"
            className="footer__icon"
          >
            <img src={YoutubeIcon} alt="YouTube icon" loading="lazy" />
          </a>
        </div>
      </footer>
      {!cookiePolicy ? (
        <div className="alert alert-dismissible coocky_tab">
          We use cookies to personalise content and ads, to provide social media
          features and to analyse our traffic. We also share information about
          your use of our site with our social media, advertising and analytics
          partners who may combine it with other information that you've
          provided to them or that they've collected from your use of their
          services. By clicking ok you continuing to use this site you agree to
          our{" "}
          <span
            className="text-underline color-red a_hover_red popup_terms"
            data-access="user"
            data-type="policy"
          >
            cookie/privacy policy.
          </span>
          <div
            className="buttons"
            onClick={() => {
              Dispatch(cookiePolicy_Action(true));
            }}
          >
            <button className="btn btn-orange btn-small">Ok</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Index;
