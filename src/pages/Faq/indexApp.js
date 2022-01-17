import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import faq_1 from "../../assets/icons/tradieTV-title-after.svg";
import faq_2 from "../../assets/images/professional-tradie.jpg";
import "./indexApp.css"

const IndexApp = () => {
  return (
    <div>
      {/* <Header /> */}

      {/* <!-- Frequently Asked Questions --> */}
      <section className="section-top">
        <h2 className="section-top__title" style={{textAlign:"center"}}>
          Frequently<br/> Asked  <span>Questions</span>
          <img className="section-top__title-after" src={faq_1} alt="" />
        </h2>
      </section>
      {/* <!-- FAQ --> */}
      <section className="section">
        <div className="faqApp">
          <div className="faqApp__left">
            <ul className="faqApp__list">
              <li>
                <a href="#" className="faq__question faq__question--active">
                  User Registration
                </a>
              </li>
              <li>
                <a href="#" className="faq__question">
                  Tradie&nbsp;Registration
                </a>
              </li>
              <li>
                <a href="#" className="faq__question">
                  Bookings
                </a>
              </li>
              <li>
                <a href="#" className="faq__question">
                  Rating&nbsp;Reviews{" "}
                </a>
              </li>
              <li>
                <a href="#" className="faq__question">
                  Payment&nbsp;Subscriptions
                </a>
              </li>
              <li>
                <a href="#" className="faq__question">
                  Membership
                </a>
              </li>
            </ul>
          </div>
          <div className="faqApp__right">
            <h4>User Registration</h4>
            <br/>
            <ul>
              <li>Download the Tap a Tradie app on your Android or iPhone.</li>
              <li>Register your details</li>
              <li>Tell us what you need.</li>
              <li>Choose a Trade and what you need done</li>

              <li>Send to one or all Tradies in your area</li>

              <li>
                Your job is sent out to all the relevant Tradies in your area
              </li>

              <li>Choose the best Tradie for your job</li>

              <li>
                Compare profiles, previous work and ratings to find the best
                Tradie for your needs
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Are you a Professional Tradie? --> */}
      

      {/* <Footer /> */}
    </div>
  );
};

export default IndexApp;
