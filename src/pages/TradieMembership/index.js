import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import tradie_membership_1 from "../../assets/icons/tradieTV-title-after.svg";
import tradie_membership_2 from "../../assets/icons/icon-credit-card.png";
import tradie_membership_3 from "../../assets/icons/icon-edit.png";
import tradie_membership_4 from "../../assets/images/professional-tradie.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import tradie_directory_1 from "../../assets/icons/section-top-directory-before.svg";
import {
  tradie_cancel_subscription_request,
  tradie_payment_history_request,
  tradie_subscription_list_request,
} from "../../redux/directory/action";
import Modal from "react-modal";
import "./styles.css";
import CardAddForm from "./CardAddForm";
import Swal from "sweetalert2";
import moment from "moment";

const Index = () => {
  const dispatch = useDispatch();
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  const { userData } = useSelector((state) => state.auth);
  const { subscription_list, payment_history, cancel_subs_Res } = useSelector(
    (state) => state.directory
  );

  useEffect(() => {
    dispatch(tradie_subscription_list_request());
    dispatch(tradie_payment_history_request());
  }, [cancel_subs_Res]);

  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  function openModal(data) {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const cancelSubs = (sub_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: " ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(tradie_cancel_subscription_request(sub_id));
      }
    });
  };
  const planEnd = moment(payment_history?.end_date * 1000).format(
    "YYYY MMM DD"
  );
  const RenewDate = moment(payment_history?.end_date * 1000)
    .add("days", 1)
    .format("YYYY MMM DD");
  return (
    <div>
      <Header />

      {/* <!-- Frequently Asked Questions --> */}
      <section className="directory-top-section section-top--membership">
        <div className="section-top__before">
          <img src={tradie_directory_1} alt="" />
        </div>
        <h2 className="section-top__title">
          My <span>Membership</span>
          <img className="section-top__title-after" src={tradie_membership_1} />
        </h2>
      </section>

      {/* <!-- My Subscription --> */}
      <section className="section section--membership">
        <div className="membership">
          <div className="membership__subscription">
            {Object.keys(payment_history).length > 0 ? (
              <>
                {" "}
                <h4>My Subscription</h4>
                <ul>
                  <h6>Standard Adverts</h6>

                  <li>7 days (auto renew)</li>
                  <li>Appear above free members</li>
                  <li>Included for all tradies user</li>
                  <li>Unlimited leads</li>
                  <li>Directory listing</li>
                  <li>Photo Gallery</li>
                </ul>
                <div className="membership__subscription-plan">
                  <h3 className="pricing__price">
                    ${payment_history?.amount} <span>/ week</span>
                  </h3>
                  <p>
                    Plan Start Date :{" "}
                    {moment(payment_history?.start_date * 1000).format(
                      "YYYY MM DD"
                    )}
                  </p>
                  <p>Plan End Date : {planEnd}</p>
                  <p>Plan Renew Date: {RenewDate}</p>
                  <nav className="membership__subscription-links">
                    {/* <a href="#">upgrade</a> */}
                    <a
                      onClick={() =>
                        cancelSubs(payment_history?.subscription_id)
                      }
                    >
                      Cancel Subscription
                    </a>
                  </nav>
                </div>
              </>
            ) : (
              <>
                <h4>My Subscription</h4>
                <ul>
                  <h6>Free Advert</h6>
                  {/* <li>Get a webpage on our website</li>
                  <li>
                    Receive leads direct from clients 24-7 up to a 25km radius
                  </li>
                  <li>
                    Show your phone, email and full profile with contact details
                  </li> */}
                </ul>
                <div className="membership__subscription-plan">
                  <h3 className="pricing__price">$0</h3>
                </div>
              </>
            )}
          </div>
          {/* <div className="membership__card">
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
          </div> */}
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button className="close-btn" onClick={closeModal}>
          close
        </button>
        <div className="img-show">
          <CardAddForm />
        </div>
      </Modal>
      {Object.keys(payment_history).length > 0 ? (
        ""
      ) : (
        <section className="section">
          <div className="pricing">
            <div className="pricing__free">
              <h4 className="pricing__title">Free Advert</h4>
              <h3 className="pricing__price">$0</h3>
              <ul className="pricing__list">
                <li>Get a webpage on our website</li>
                {/* <li>
                  Receive leads direct from clients 24-7 up to a 25km radius
                </li> */}
                <li>
                  Show your phone, email and full profile with contact details
                </li>
              </ul>
              {/* <a href="#" className="pricing__choose">
              Choose Plan
            </a> */}
            </div>
            <div className="pricing__standard">
              <h4 className="pricing__title">Standard Advert</h4>
              <h3 className="pricing__price">
                ${subscription_list[0]?.amount} <span>/ week</span>
              </h3>
              <ul className="pricing__list">
                <li>Appear above free members</li>
                <li>
                  Get a webpage on our website with your logo and up to 5
                  pictures of your work.
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
              <a onClick={openModal} className="pricing__choose choose-plan">
                Choose Plan
              </a>
            </div>
            <div>
              {/* <div className="pricing__premium"> 
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
            </a> */}
            </div>
          </div>
        </section>
      )}
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
              <img src={tradie_membership_4} alt="" />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Index;
