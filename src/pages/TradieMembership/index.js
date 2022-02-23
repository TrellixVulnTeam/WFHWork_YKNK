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
  tradie_current_subscription_request,
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
  const {
    subscription_list,
    payment_history,
    cancel_subs_Res,
    current_subs_Data,
  } = useSelector((state) => state.directory);

  useEffect(() => {
    dispatch(tradie_subscription_list_request());
    dispatch(tradie_payment_history_request());
  }, [cancel_subs_Res]);

  useEffect(() => {
    dispatch(tradie_current_subscription_request());
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [subsId, setSubsId] = useState();

  let subtitle;
  function openModal(data) {
    setSubsId(data);
    setIsOpen(true);
    console.log("Id :", data);
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
  const planEnd =
    payment_history?.end_date?.toString().length > 10
      ? moment(payment_history?.end_date, "x").format("DD MMM YYYY hh:mm a")
      : moment(payment_history?.end_date * 1000).format("DD MMM YYYY hh:mm a");
  const RenewDate =
    payment_history?.end_date?.toString().length > 10
      ? moment(payment_history?.end_date * 1000)
          .add("days", 1)
          .format("DD MMM YYYY hh:mm a")
      : moment(payment_history?.end_date * 1000)
          .add("days", 1)
          .format("DD MMM YYYY hh:mm a");

  const IosAlert = () => {
    Swal.fire({
      title: "For canceled the subscription, Go to your IOS device",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
    <div>
      <Header />

      {/* <!-- Frequently Asked Questions --> */}
      <section className="directory-top-section section-top--membership">
        <div className="section-top__before">
          <img src={tradie_directory_1} alt="" />
        </div>
        <h2 className="section-top__title">
          My <span>Membership Plan</span>
          <img className="section-top__title-after" src={tradie_membership_1} />
        </h2>
      </section>

      {/* <!-- My Subscription --> */}
      <section className="section section--membership">
        <div className="membership">
          <div className="membership__subscription Subscription-section">
            {Object.keys(payment_history).length > 0 ? (
              <>
                {" "}
                <h4 className="Weekly-subs">
                  My Subscription{" "}
                  <span className="pricing__price price-sec">
                    {" "}
                    $ {payment_history?.amount} <span>/ week</span>
                  </span>
                </h4>
                <div className="w-100 membership-list-1">
                  <ul className="membership-list-sub">
                    {/* <h6>Standard Adverts</h6> */}

                    <li>7 days (auto renew)</li>
                    <li>Appear above free members</li>
                    <li>Included for all tradies user</li>
                    <li>Unlimited leads</li>
                    <li>Directory listing</li>
                    <li>Photo Gallery</li>
                  </ul>
                </div>
                <div className="membership__subscription-plan price-div plan-section">
                  {/* <h3 className="pricing__price">
                  
                  </h3> */}

                  <ul className="plan-sub-start-date">
                    {/* <li>
                      Plan Start Date :{" "}
                      {payment_history?.start_date?.toString().length > 10
                        ? moment(payment_history?.start_date, "x").format(
                            "DD MMM YYYY hh:mm a"
                          )
                        : moment(payment_history?.start_date * 1000).format(
                            "DD MMM YYYY hh:mm a"
                          )}
                    </li>
                    <li>Plan End Date : {planEnd}</li> */}
                    <li>Plan Renew Date: {planEnd}</li>
                  </ul>
                  {/* <p>
                  
                  </p>
                  
                  <p></p> */}
                  <nav className="membership__subscription-links date-plan">
                    {/* <a href="#">upgrade</a> */}
                    {payment_history?.android_customer_id ? (
                      <a
                        href="https://play.google.com/store/account/subscriptions?sku=new_tradie_weekly&package=com.si.tradie"
                        target="_blank"
                      >
                        Cancel Subscription
                      </a>
                    ) : payment_history?.ios_customer_id ? (
                      <a onClick={IosAlert}>Cancel Subscription</a>
                    ) : (
                      <a
                        onClick={() =>
                          cancelSubs(payment_history?.subscription_id)
                        }
                      >
                        Cancel Subscription
                      </a>
                    )}
                  </nav>
                </div>
              </>
            ) : (
              <>
                <h4 className="Weekly-subs">
                  Weekly Subscription{" "}
                  <span className="pricing__price price-sec">
                    {" "}
                    $ <span>{subscription_list[0]?.amount}</span>
                  </span>
                </h4>
                {/* <div className="membership__subscription-plan price-div">
                  <h3 className="pricing__price price-sec">
                   
                  </h3>
                </div> */}
                <div className="w-100 membership-list-1">
                  <ul className="membership-list-sub">
                    <li>7 Days auto renew</li>
                    <li>Included for all Tradie Users</li>
                    <li>Unlimited leads</li>
                    <li>Directory listing</li>
                    <li>Photo Gallery</li>
                  </ul>
                </div>

                <div className="membership__subscription-links button-subscription">
                  <a
                    className="subscribe-btn"
                    onClick={() => openModal(subscription_list[0]?.id)}
                  >
                    Subscribe Now
                  </a>
                  {Object.keys(current_subs_Data)?.length > 0 ? (
                    ""
                  ) : (
                    <Link to="/">
                      <a
                        className="skip-btn"
                        // onClick={() => openModal(subscription_list[0]?.id)}
                      >
                        Skip Now
                      </a>
                    </Link>
                  )}
                  <div></div>
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
        {Object.keys(current_subs_Data)?.length > 0 && current_subs_Data ? (
          ""
        ) : (
          <div className="trails-sec">
            30 days free trial for new signup. After that weekly subscription of
            $4.99 charged.
          </div>
        )}
        <div>
          A $4.99 weekly purchase will be applied to your Stripe at the end of
          trial period confirmation. Subscription will automatically renew
          unless canceled within 24-hours.
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
          <CardAddForm subsId={subsId} />
        </div>
      </Modal>

      {/* {Object.keys(payment_history).length > 0 ? (
        ""
      ) : (
        <section className="section">
          <div className="pricing">
            <div className="pricing__free">
              <h4 className="pricing__title">Free Advert</h4>
              <h3 className="pricing__price">$0</h3>
              <ul className="pricing__list">
                <li>30 Days Free Trial</li>
                <li>Get a webpage on our website</li>
                <li>
                  Receive leads direct from clients 24-7 up to a 25km radius
                </li>
                <li>
                  Show your phone, email and full profile with contact details
                </li>
              </ul>
              <a
                onClick={() => openModal(0)}
                style={{ cursor: "pointer" }}
                className="pricing__choose"
              >
                Choose Plan
              </a>
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
              <a
                onClick={() => openModal(subscription_list[0]?.id)}
                className="pricing__choose choose-plan"
              >
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
            </a>
            </div>
          </div>
        </section>
      )} */}
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
