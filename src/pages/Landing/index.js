import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import landing_1 from "../../assets/icons/how-it-works-1.svg";
import landing_2 from "../../assets/icons/how-it-works-2.svg";
import landing_3 from "../../assets/images/features-right.png";
import landing_4 from "../../assets/icons/features-after.svg";
import landing_5 from "../../assets/icons/download-app-after.svg";
import contact_us_9 from "../../assets/icons/download-app-tradies-left.svg";
import contact_us_10 from "../../assets/icons/qr.png";
import contact_us_7 from "../../assets/icons/qr.png";
import contact_us_6 from "../../assets/icons/download-app-customers-left.svg";
import landing_10 from "../../assets/icons/qr.png";
import landing_11 from "../../assets/icons/download-app-tradies-right.svg";
import landing_12 from "../../assets/images/professional-tradie.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <div>
      <Header />

      {/* <!-- Any Trade, Anywhere, Anytime --> */}
      <section className="section section--center top-mobile">
        <div className="download-app app-section">
          <img className="download-app__after" src={landing_1} />
          <div className="">
            <img className="phone-img" src="/assets/phones.png" />
          </div>
          <div className="download-app__tradies tradies_section_two t-bg">
            <h2 className="section-top__title text-center-top">
              <span>Any Trade</span>, <br />
              Anywhere, <br />
              Anytime <br />
            </h2>
            <div className="btn-w">
              <a href="#" className="btn-primary btn-download">
                <img src="assets/traide.png" alt="" />
                Download Customer App
              </a>
              <a href="#" className="btn-primary btn-download float-right">
                <img src="assets/traide-black.png" alt="" />
                Download Tradie App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Register as a Tradie Today! --> */}

      {/* <!-- Gallery --> */}

      {/* <!-- It’s as Easy as 1 - 2 - 3, Here’s how it works --> */}
      <section className="section">
        <h2 className="section__title">
          It’s as Easy as 1 - 2 - 3, Here’s how it works
        </h2>
        <div className="how-it-works">
          <div className="how-it-works__item">
            <img src={landing_1} />
            <span>1</span>
            <h3>Tell us what you need</h3>
            <p>Choose a Trade and what you need done.</p>
          </div>
          <div className="how-it-works__item">
            <img src={landing_2} />
            <span>2</span>
            <h3>Send to one or all Tradies in your area</h3>
            <p>
              Your job is sent out to all the relevant Tradies in your area.
            </p>
          </div>
          <div className="how-it-works__item">
            <span>3</span>
            <h3>Choose the best Tradie for your job</h3>
            <p>
              Compare profiles, previous work and ratings to find the best
              Tradie for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Trending Services --> */}

      {/* <!-- Our Features --> */}
      <section className="section">
        <h2 className="section__title">Our Features</h2>
        <div className="features">
          <div className="features__left">
            <p>
              Discover and reach registered tradies working and living in your
              local area quickly.
            </p>
            <p>
              Your privacy is important as your location is private, until you
              request to share with your tradie.
            </p>
            <p>
              Gives you a full profile of the tradie so you can read up on them.
            </p>
            <p>
              Locate and track the tradie via our map so you can watch as they
              drive to you.
            </p>
            <p>
              Rate a tradie after your job is completed and read other customers
              experiences.
            </p>
          </div>
          <div className="features__right">
            <img src={landing_3} />
            <img src={landing_4} />
          </div>
        </div>
      </section>

      {/* <!-- There’s so much more to love in the apps --> */}
      <section className="section section--center">
        <h2 className="section__title">
          There’s so much more to love in the apps
        </h2>
        <div className="download-app">
          <img className="download-app__after" src={landing_5} />
          <div className="download-app__customers">
            <h2>Customer App Download here</h2>
            <img src={contact_us_6} />
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.si.tradie"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_10} />
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/android-512.png"
                style={{  height: "8rem", width: "8rem"}}
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              <a
                href="https://apps.apple.com/us/app/tradie/id1473400813"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_10} />
              <img
                src="https://www.freeiconspng.com/uploads/ios-png-6.png"
                style={{  height: "8rem", width: "8rem"}}
              />
            </div>
          </div>
          <div className="download-app__tradies">
            <h2>Tradie App Download here</h2>
            <img src={contact_us_9} />
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.si.tradie"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_10} />
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/android-512.png"
                style={{ height: "6rem", width: "6rem" }}
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              <a
                href="https://apps.apple.com/us/app/tradie/id1473400813"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_10} />
              <img
                src="https://icons.iconarchive.com/icons/iconsmind/outline/512/iOS-Apple-icon.png"
                style={{ height: "6rem", width: "6rem" }}
              />
            </div>
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
              <img src={landing_12} alt="" />
            </div>
          </div>
        </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
