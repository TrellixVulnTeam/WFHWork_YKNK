import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import privacy_policy_1 from "../../assets/images/professional-tradie.jpg";
import tradie_directory_1 from "../../assets/icons/section-top-directory-before.svg";

import axios from "axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const [privacyData, setPrivacy] = useState([]);
  const { userData } = useSelector((state) => state.directory);
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

  useEffect(() => {
    axios
      .get("https://api.tapatradie.com/backend/v2/pages/privacypolicy")
      .then((res) => setPrivacy(res.data.data));
  }, []);
  return (
    <div>
      <Header />

      {/* <!-- Privacy Policy --> */}
      <section className="directory-top-section privacypolicy">
      <div className="section-top__before">
          <img src={tradie_directory_1} alt="" />
        </div>
        <h2 className="section-top__title">
          Privacy <span>Policy</span>
        </h2>
      </section>

      <section className="section section--page page">
        {parse(`${privacyData?.content}`)}
        <br />
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
              <img src={privacy_policy_1} alt="" />
            </div>
          </div>
        </section>
       )} 

      <Footer />
    </div>
  );
};

export default Index;
