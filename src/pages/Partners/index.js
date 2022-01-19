import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import partner_1 from "../../assets/images/our-partner-image.png";
import partner_2 from "../../assets/images/our-partner-logo.png";
import partner_3 from "../../assets/images/professional-tradie.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <div>
      <Header />

      <section class="partners-section">
        <h2 class="section-top__title">
          Our <span>Partners</span>
        </h2>
      </section>

      <section class="section section--our-partner">
        <div class="our-partner">
          <img src={partner_1} alt="" class="our-partner__image" />
          <div class="our-partner__info">
            <img src={partner_2} alt="" class="our-partner__logo" />
            <h6 class="our-partner__title">
              CredShare – All credentials. One Place
            </h6>
            <p class="our-partner__description">
              Tap A Tradie has partnered with CredShare to allow tradespeople to
              upload and keep track of their licences, insurance and other
              qualifications. This lets customers see that you have all the
              required certifications when they are choosing the right Tradie.
            </p>
            <a href="#" class="our-partner__read-more btn-primary">
              Read More
            </a>
          </div>
        </div>
        {/*  <div class="our-partner">
          <img src={partner_1} alt="" class="our-partner__image" />
          <div class="our-partner__info">
            <img src={partner_2} alt="" class="our-partner__logo" />
            <h6 class="our-partner__title">CredShare – All credentials. One Place</h6>
            <p class="our-partner__description">
              Tap A Tradie has partnered with CredShare to allow tradespeople to upload and keep track of their licences,
              insurance and other qualifications. This lets customers see that you have all the required certifications
              when they are choosing the right Tradie.
            </p>
            <a href="#" class="our-partner__read-more btn-primary">Read More</a>
          </div>
        </div>
         <div class="our-partner">
          <img src={partner_1} alt="" class="our-partner__image" />
          <div class="our-partner__info">
            <img src={partner_2} alt="" class="our-partner__logo" />
            <h6 class="our-partner__title">CredShare – All credentials. One Place</h6>
            <p class="our-partner__description">
              Tap A Tradie has partnered with CredShare to allow tradespeople to upload and keep track of their licences,
              insurance and other qualifications. This lets customers see that you have all the required certifications
              when they are choosing the right Tradie.
            </p>
            <a href="#" class="our-partner__read-more btn-primary">Read More</a>
          </div>
        </div>
        <div class="our-partner">
          <img src={partner_1} alt="" class="our-partner__image" />
          <div class="our-partner__info">
            <img src={partner_2} alt="" class="our-partner__logo" />
            <h6 class="our-partner__title">CredShare – All credentials. One Place</h6>
            <p class="our-partner__description">
              Tap A Tradie has partnered with CredShare to allow tradespeople to upload and keep track of their licences,
              insurance and other qualifications. This lets customers see that you have all the required certifications
              when they are choosing the right Tradie.
            </p>
            <a href="#" class="our-partner__read-more btn-primary">Read More</a>
          </div>
        </div> */}
      </section>

      {/* {userData.access === "provider" ? (
        ""
      ) : ( */}
        <section class="section section--left">
          <div class="professional-tradie">
            <div class="professional-tradie__description">
              <h3 class="professional-tradie__title">
                Are you a Professional Tradie?
              </h3>
              <p>
                If you would like to be part of our Tradie community and are
                ready to meet new clients today please continue so we can
                welcome you onboard.
              </p>
              <Link to="/about-us" class="btn-primary">
                Learn More
              </Link>
            </div>
            <div class="professional-tradie__image">
              <img src={partner_3} alt="" />
            </div>
          </div>
        </section>
      {/* )} */}
      <Footer />
    </div>
  );
};

export default Index;
