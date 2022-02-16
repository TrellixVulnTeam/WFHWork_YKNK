import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import terms_conditions_1 from "../../assets/images/professional-tradie.jpg";
import axios from "axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import tradie_directory_1 from "../../assets/icons/section-top-directory-before.svg";

const Index = () => {
  const [termsData, setTerm] = useState([]);
  const { userData } = useSelector((state) => state.directory);
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

  useEffect(async () => {
    try {
      const response = await axios
        .get("https://api.tapatradie.com/backend/v2/pages/termsandconditions")
        .then((res) => res.data.data);
      setTerm(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <Header />

      {/* <!-- My Leads --> */}
      <section className="directory-top-section privacypolicy">
        <div className="section-top__before">
          <img src={tradie_directory_1} alt="" />
        </div>
        <h2 className="section-top__title">
          Terms and <span>Conditions</span>
        </h2>
      </section>
      <section className="section section--page page">
        <span>{termsData?.content ? parse(`${termsData?.content}`) : ""}</span>
      </section>
      {/* <!-- Are you a Professional Tradie? --> */}
      {userInfo?.role == "provider" ? (
        ""
      ) : (
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
              <img src={terms_conditions_1} alt="" />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Index;
