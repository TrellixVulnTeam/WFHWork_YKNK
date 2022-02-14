import React, { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import CardAddForm from "./CardAddForm";

const FirstMembershipSignup = ({ setModalIsOpen, setOpen }) => {
  const history = useHistory();
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  let subtitle;
  function openModal() {
    setModalIsOpen(true);
    setOpen(false);
  }
  // console.log("modalIsOpen :", modalIsOpen);
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     height: "auto",
  //     marginRight: "-50%",
  //     zIndex: "9",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };
  // const link = "/tradie-popup-step1";

  const freePlan = () => {
    history.push("/tradie-popup-step1");
  };
  return (
    <div>
      <section>
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
              onClick={freePlan}
              style={{ cursor: "pointer" }}
              className="pricing__choose"
            >
              Choose Plan
            </a>
          </div>
          <div className="pricing__standard">
            <h4 className="pricing__title">Standard Advert</h4>
            <h3 className="pricing__price">
              $3.99 <span>/ week</span>
            </h3>
            <ul className="pricing__list">
              <li>Appear above free members</li>
              <li>
                Get a webpage on our website with your logo and up to 5 pictures
                of your work.
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
            {/*  <div className="pricing__premium">
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
      {/* <Modal
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
          <CardAddForm link={link} />
        </div>
      </Modal> */}
    </div>
  );
};

export default FirstMembershipSignup;
