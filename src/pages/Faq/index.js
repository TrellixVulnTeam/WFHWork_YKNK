import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import faq_1 from "../../assets/icons/tradieTV-title-after.svg";
import faq_2 from "../../assets/images/professional-tradie.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const [changeToggle, setChangeToggle] = useState("1");
  const [faqData, setFaqData] = useState([]);
  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    let coll = document.getElementsByClassName("collapsible");

    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }, []);

  const setActiveTab = (e) => {
    if (e) {
      setChangeToggle(e);
    } else {
      setChangeToggle("");
    }
  };

  useEffect(() => {
    axios
      .get("https://api.tapatradie.com/backend/v2/faq")
      .then((res) => setFaqData(res?.data.data));
  }, []);
  const faQContent = () => {
    if (changeToggle == "1") {
      return (
        <>
          <h4 class="collapsible">User Registration</h4>

          <div class="content">
            {faqData.map((val, i) => {
              if (val.faq_category == 1) {
                return (
                  <>
                    {/* <h5>{val.faq_title}</h5> */}
                    <ul style={{ listStyle: "none" }}>
                      <li>{val.faq_description}</li>
                    </ul>
                  </>
                );
              }
            })}
          </div>
        </>
      );
    } else if (changeToggle == "2") {
      return (
        <>
          <h4 class="collapsible">Tradie Registration</h4>

          <div class="content">
            {faqData.map((val, i) => {
              if (val.faq_category == 2) {
                return (
                  <>
                    {/* <h5>{val.faq_title}</h5> */}
                    <ul style={{ listStyle: "none" }}>
                      <li>{val.faq_description}</li>
                    </ul>
                  </>
                );
              }
            })}
          </div>
        </>
      );
    } else if (changeToggle == "3") {
      return (
        <>
          <h4 class="collapsible">Booking a Job</h4>

          <div class="content">
            {faqData.map((val, i) => {
              if (val.faq_category == 3) {
                return (
                  <>
                    {/* <h5>{val.faq_title}</h5> */}
                    <ul style={{ listStyle: "none" }}>
                      <li>{val.faq_description}</li>
                    </ul>
                  </>
                );
              }
            })}
          </div>
        </>
      );
    } else if (changeToggle == "4") {
      return (
        <>
          <h4 class="collapsible">Rating & Reviews</h4>
      
          <div class="content">
            {faqData.map((val, i) => {
              if (val.faq_category == 4) {
                return (
                  <>
                    {/* <h5>{val.faq_title}</h5> */}
                    <ul style={{ listStyle: "none" }}>
                      <li>{val.faq_description}</li>
                    </ul>
                  </>
                );
              }
            })}
          </div>
        </>
      );
    } else if (changeToggle == "5") {
      return (
        <>
          <h4 class="collapsible">Payment & Subscriptions</h4>

          <div class="content">
            {faqData.map((val, i) => {
              if (val.faq_category == 5) {
                return (
                  <>
                    {/* <h5>{val.faq_title}</h5> */}
                    <ul style={{ listStyle: "none" }}>
                      <li>{val.faq_description}</li>
                    </ul>
                  </>
                );
              }
            })}
          </div>
        </>
      );
    } else if (changeToggle == "6") {
      return (
        <>
          <h4 class="collapsible">Membership</h4>

          <div class="content">
            {faqData.map((val, i) => {
              if (val.faq_category == 6) {
                return (
                  <>
                    {/* <h5>{val.faq_title}</h5> */}
                    <ul style={{ listStyle: "none" }}>
                      <li>{val.faq_description}</li>
                    </ul>
                  </>
                );
              }
            })}
          </div>
        </>
      );
    } else {
      return null;
    }
  };
  return (
    <div>
      <Header />

      {/* <!-- Frequently Asked Questions --> */}
      <section className="section-top">
        <h2 className="section-top__title">
          Frequently Asked <span>Questions</span>
          <img className="section-top__title-after" src={faq_1} alt="" />
        </h2>
      </section>
      {/* <!-- FAQ --> */}
      <section className="section">
        <div className="faq">
          <div className="faq__left">
            <ul className="faq__list">
              <li>
                <a
                  href="javascript:void(0)"
                  className="faq__question"
                  onClick={() => setActiveTab("1")}
                >
                  User Registration
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="faq__question"
                  onClick={() => setActiveTab("2")}
                >
                  Tradie Registration
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="faq__question"
                  onClick={() => setActiveTab("3")}
                >
                  Bookings
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="faq__question"
                  onClick={() => setActiveTab("4")}
                >
                  Rating & Reviews{" "}
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="faq__question"
                  onClick={() => setActiveTab("5")}
                >
                  Payment & Subscriptions
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="faq__question"
                  onClick={() => setActiveTab("6")}
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>
          <div className="faq__right">
            {faQContent()}
            {/* {-----------------------} */}
          </div>
        </div>
      </section>

      {/* <!-- Are you a Professional Tradie? --> */}
      {/* {userData?.access === "provider" ? (
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
            <img src={faq_2} alt="" loading="lazy" />
          </div>
        </div>
      </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
