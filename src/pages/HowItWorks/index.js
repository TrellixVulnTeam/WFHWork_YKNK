import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import how_it_works_1 from "../../assets/icons/how-it-works-1.svg";
import how_it_works_2 from "../../assets/icons/how-it-works-2.svg";
import how_it_works_3 from "../../assets/images/construction-worker-with-hard-hat-sanding-down-wood-piece_23-2148748860.jpg";
import how_it_works_4 from "../../assets/images/photo-1593313637552-29c2c0dacd35.jpeg";
import how_it_works_5 from "../../assets/icons/download-app-after.svg";
import contact_us_9 from "../../assets/icons/download-app-tradies-left.svg";
import contact_us_10 from "../../assets/icons/qr.png";
import contact_us_7 from "../../assets/icons/qr.png";
import contact_us_6 from "../../assets/icons/download-app-customers-left.svg";
import how_it_works_11 from "../../assets/icons/download-app-tradies-right.svg";
import how_it_works_12 from "../../assets/images/professional-tradie.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const { userData } = useSelector((state) => state.auth);
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  return (
    <div>
      <Header />

      {/* <!-- How it Works --> */}
      <section className="section-top section-top--htws">
        <h2 className="section-top__title">
          How it <span>Works</span>
        </h2>
      </section>
      {/* <!-- It’s as Easy as 1 - 2 - 3, Here’s how it works --> */}
      <section className="section section--htws">
        <h2 className="section__title">
          It’s as Easy as 1 - 2 - 3, Here’s how it works
        </h2>
        <div className="how-it-works">
          <div className="how-it-works__item">
            <img src={how_it_works_1} />
            <span>1</span>
            <h3>Tell us what you need</h3>
            <p>Choose a Trade and what you need done.</p>
          </div>
          <div className="how-it-works__item">
            <img src={how_it_works_2} />
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
      {/* <!-- Register as a Tradie Today! --> */}
      {userInfo?.fullname  ? (
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
      <section className="section">
        {/* <!-- htws === How it Works   --> */}
        <div className="htws">
          <h2 className="section__title section__title--gradient">Tradies</h2>
          <div className="htws__row">
            <div className="htws__text">
              <h4 className="section__title">
                What Tap A Tradie does for you?
              </h4>
              <ul>
                <li>
                  The App notifies and introduces you to clients seeking works
                  completed in the area you are currently living or working in.
                </li>
                <li>
                  Earn extra money on your way to or from the jobsite for
                  emergency call outs.
                </li>
                <li>
                  Get notifications of work in your area any time, day or night.
                  Work your own hours.
                </li>
                <li>
                  Helps you connect with other Tradies working in your area that
                  you may need to use on your job.
                </li>
                <li>
                  Helps you recruit casual labour in the area you're working in.
                  Browse people available for work and view their profiles.
                </li>
                <li>
                  Showcase your own profile and business for potential clients
                  to view.
                </li>
              </ul>
            </div>
            <div className="htws__image">
              <img src={how_it_works_3} alt="" />
            </div>
          </div>
          <div className="htws__row">
            <div className="htws__image">
              <img src={how_it_works_4} alt="" />
            </div>
            <div className="htws__text">
              <h4 className="section__title">How it works?</h4>
              <ul>
                <li>
                  Download the Tap a Tradie app on your Android or iPhone.
                </li>
                <li>
                  Fill in your profile and company details. Add a few pictures
                  and let your future clients know a little about you. Enter
                  your work experience, the services your offer, and your
                  hobbies if you wish.
                </li>
                <li>
                  Upload your trade license if required for your particular
                  trade. Upload your insurance certificates and any
                  documentation you have to make your profile professional.
                </li>
                <li>
                  Stay logged into the app and get alerted when work becomes
                  available in your area.
                </li>
                <li>
                  You deal directly with the client, you negotiate your own
                  rates, and more importantly, you collect the payment on your
                  terms.
                </li>
                <li>
                  When a customer is seeking a trade, they simply post the
                  required works in the trade section they require.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- There’s so much more to love in the apps --> */}
      <section className="section section--center">
        <h2 className="section__title">
          There’s so much more to love in the apps
        </h2>
        <div className="download-app">
          <img className="download-app__after" src={how_it_works_5} />
          <div className="download-app__customers">
            <h2>Customer App Download here</h2>
            <img src={contact_us_6} />
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.si.tapatradie&hl=en_IN"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_7} />
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/android-512.png"
                style={{ height: "8rem", width: "8rem", padding: "16px" }}
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              <a
                href="https://apps.apple.com/us/app/tap-a-tradie/id1473400994"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_7} />
              <img
                src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
                style={{ height: "8rem", width: "8rem", padding: "16px" }}
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
                style={{  height: "8rem", width: "8rem", padding:"16px" }}
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
                src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
                style={{  height: "8rem", width: "8rem", padding:"16px" }}
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
              If you would like to be part of our Tradie community and are ready
              to meet new clients today please continue so we can welcome you
              onboard.
            </p>
            <Link to="/about-us" className="btn-primary">
              Learn More
            </Link>
          </div>
          <div className="professional-tradie__image">
            <img src={how_it_works_12} alt="" />
          </div>
        </div>
      </section>
      {/* )} */}
      <Footer />
    </div>
  );
};

export default Index;
