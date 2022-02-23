import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/auth/action";
import { countries_code } from "../../constants/countries_code";
import HeaderLogo from "../../assets/images/header-logo.svg";
import HeaderLogoMob from "../../assets/images/mobile-logo.svg";
// import dailingCode64 from "../../assets/icons/dailing-code_64.svg";
import spriteIconFacebook from "../../assets/icons/sprite_icon_facebook.svg";
import photoOne from "../../assets/images/photo-1546552356-3fae876a61ca.jpeg";
import photoTwo from "../../assets/images/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg";
import photoThree from "../../assets/images/photo-1581141849291-1125c7b692b5.jpeg";
import photoFour from "../../assets/images/construction-worker-with-hard-hat-sanding-down-wood-piece_23-2148748860.jpg";
import photoFive from "../../assets/images/photo-1574757987642-5755f0839101.jpeg";
import SignupPopup from "./signup-verification_popup.js";
import FacebookLogin from "react-facebook-login";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import IntlTelInput from "react-intl-tel-input";
import tradieTv_1 from "../../assets/icons/tradieTV-title-after.svg";
import libPhoneNumber from "react-intl-tel-input/dist/libphonenumber.js";
import "../../../node_modules/react-intl-tel-input/dist/main.css";
import Modals from "../../components/UserSignupModal";
import ModalR from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { Modal } from "react-bootstrap";
import FirstMembershipSignup from "../TradieMembership/FirstMembershipSignup";
import CardAddForm from "../TradieMembership/CardAddForm";

toast.configure();

const Index = () => {
  const history = useHistory();
  const location = useLocation();

  const [btnTab, setBtnTab] = useState(true);
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [namePopup, setnamePopup] = useState(false);
  const [isValidationMessage, setIsValidationMessage] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    otp,
    loading,
    success,
    login,
    verify_OTP,
    otp_stateReg,
    otp_stateSignup,
  } = useSelector((state) => state.auth);
 
  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        localStorage.setItem("countryCode", JSON.stringify(data.country_code));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getGeoInfo();
  }, []);
  let deviceCountry = JSON.parse(localStorage.getItem("countryCode"));

  useEffect(() => {
    if (login && verify_OTP?.role === "provider") {
      history.push("/tradie-popup-step1");
      // setOpen(true);
    }
    if (verify_OTP?.fullname !== "" && verify_OTP?.role === "user") {
      history.push("/user-profile");
    }
    /*     if (login && verify_OTP?.role === "") {
          history.push("/");
        } */
  }, [login, verify_OTP]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const Dispatch = useDispatch();
  const {
    updateAccessToken_Action,
    otpRegister_Action,
    faceBookLogin_Action,
    otp_StateReg_Change_Action,
  } = Actions;

  const responseFacebook = (response) => {
    Dispatch(
      faceBookLogin_Action({
        facebook_id: response.id,
        tab: btnTab ? "provider" : "user",
        name: response.name,
      })
    );
  };
  const componentClicked = (data) => {
    console.warn("data", data);
  };

  const handleSubmit = (e) => {
    if (countryCode == "") {
      toast.error("Please fill Country code", {
        position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
    } else if (!countryCode.match(/^(\+?\d{1,3}|\d{1,4})$/g)) {
      toast.error("Please fill valid Country code", {
        position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
    } else {
      Dispatch(updateAccessToken_Action());
      Dispatch(
        otpRegister_Action({
          countryCode: `${Number(countryCode)}`,
          mobileNumber: `${mobileNumber}`,
          tab: btnTab ? "provider" : "user",
        })
      );
      setIsOpen(true);
    }
  };
  const handleMobileNo = (e) => {
    if (e.target.value.length <= 9) {
      setIsValidationMessage(true);
    }
    if (e.target.value.length >= 9) {
      setIsValidationMessage(false);
      Dispatch(otp_StateReg_Change_Action(true));
    }
    if (e.target.value.length <= 10) {
      setMobileNumber(e.target.value);
      Dispatch(otp_StateReg_Change_Action(true));
    }
  };

  if (
    location.pathname === "/sign-up" &&
    !otp_stateReg &&
    mobileNumber === ""
  ) {
    Dispatch(otp_StateReg_Change_Action(true));
  }
  const Back = () => {
    history.goBack();
  };

  const handlePhoneNumberChange = (value, country, e, formattedValue) => {
    // console.log("Country", country?.dialCode);
    // console.log("value", value);
    // console.log("formattedValue", formattedValue);
    let DialCode = country?.dialCode;
    let valueLength = value?.length;

    let result = value?.substr(
      DialCode?.length,
      valueLength - DialCode?.length
    );

    setCountryCode(DialCode);
    if (result.length <= 9) {
      setIsValidationMessage(true);
    }
    if (result.length >= 9) {
      setIsValidationMessage(false);
      Dispatch(otp_StateReg_Change_Action(true));
    }
    if (result.length <= 10) {
      setMobileNumber(result);
      Dispatch(otp_StateReg_Change_Action(true));
    }
  };

  let subtitle;
  // function openModal() {
  //   setIsOpen(true);
  //   // setOpen(false)
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "auto",
      marginRight: "-50%",
      zIndex: "9",
      transform: "translate(-50%, -50%)",
    },
  };
  const link = "/tradie-popup-step1";
  return (
    <>
      <section className="section section--sign-up">
        <div className="sign-up">
          <div className="sign-up__left">
            <nav className="nav">
              <Link className="nav__left" to="/">
                <img
                  className="nav__logo"
                  src={HeaderLogo}
                  title="header-logo"
                  alt="header-logo"
                />
                <img
                  className="nav__logo--md"
                  src={HeaderLogoMob}
                  hidden
                  title="header-logo-mob"
                  alt="header-logo-mob"
                />
              </Link>
              <button
                onClick={Back}
                style={{ cursor: "pointer" }}
                className=" btn-primary"
              >
                Back
              </button>
            </nav>
            <h3 className="section__title sign-up__title">Sign Up</h3>
            <p className="sign-up__description">
              Welcome, We are excited to have you onboard. Please sign up to
              continue.
            </p>
            <div className="sign-up-form">
              <div className="sign-up-form__navigation">
                <nav>
                  <button
                    className={btnTab ? "active" : ""}
                    onClick={() => {
                      setBtnTab(true);
                    }}
                  >
                    As Tradie
                  </button>
                  <button
                    className={!btnTab ? "active" : ""}
                    onClick={() => {
                      setBtnTab(false);
                    }}
                  >
                    As User
                  </button>
                </nav>
              </div>

              <div className="sign-up-form__mobile">
                <p>Mobile Number</p>

                <div className="sign-up-form__inputs">
                  {/* <label for="mobile-number">
                    {countries_code.map((country) => {
                      if (country.id === countryCode) {
                        return country.flag;
                      }
                    })}
                  </label>
                  <input
                    type="text"
                    className="sign-up-form__country-code"
                    value={countryCode}
                    onChange={(e) => {
                      setCountryCode(e.target.value);
                    }}
                    required={true}
                  /> */}

                  <PhoneInput
                    country={`${
                      deviceCountry ? deviceCountry?.toLowerCase() : "in"
                    }`}
                    onChange={handlePhoneNumberChange}
                  />
                  {/* <input
                    type="number"
                    className="sign-up-form__mobile-number"
                    id="mobile-number"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => {
                      handleMobileNo(e);
                    }}
                    // onKeyDown={handleKeyDown}
                    required
                  /> */}
                </div>
              </div>
              <div className="sign-up-form__error_msg">
                <p
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  {isValidationMessage
                    ? "Please Enter 9 to 10 digits number"
                    : ""}
                  {otp_stateSignup
                    ? "Mobie no is already resgistered please login"
                    : ""}
                </p>
              </div>
              <button
                type="submit"
                className="sign-up-form__submit btn-primary"
                onClick={handleSubmit}
                disabled={mobileNumber.length < 9}
              >
                Sign Up
              </button>
              <div className="sign-up-form__or">
                <p>OR</p>
                <FacebookLogin
                  appId="3141633349249902"
                  autoLoad={false}
                  icon={<img src={spriteIconFacebook} alt="kj" />}
                  textButton="Continue with Facebook"
                  fields="name,email,picture"
                  onClick={componentClicked}
                  callback={responseFacebook}
                />
              </div>
              <div className="sign-up-form__sign-in">
                <p>You have already account?</p>
                <Link to="/login"> Sign In </Link>
              </div>
            </div>
          </div>
          <div className="sign-up__right">
            <div className="sign-up__right-column">
              <div>
                <img src={photoOne} alt="" />
              </div>
              <div>
                <img src={photoTwo} alt="" />
              </div>
            </div>
            <div className="sign-up__right-column sign-up__right-column--center">
              <div>
                <img src={photoThree} alt="" />
              </div>
            </div>
            <div className="sign-up__right-column">
              <div>
                <img src={photoFour} alt="" />
              </div>
              <div>
                <img src={photoFive} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen && otp ? (
        <SignupPopup
          handleClose={togglePopup}
          countryCode={countryCode}
          mobileNumber={mobileNumber}
          btnTab={btnTab}
          setnamePopup={setnamePopup}
        />
      ) : null}
      {/* <Modal
        size="lg"
        centered
        show={open}
        onHide={() => setOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="subscription-plan-model"
      >
        <Modal.Header closeButton style={{ padding: "30px 0 15px 79px" }}>
          <h2 className="section-top__title">
            <span>Welcome</span>
            <br />
            <p className="member-pop-title">
              {" "}
              Please select one of the below adverts <br /> and let's get you
              started.
            </p>
            <img
              class="section-top__title-after member-pop-line "
              src={tradieTv_1}
              alt=""
            />
          </h2>
        </Modal.Header>
        <Modal.Body>
          <FirstMembershipSignup
            setModalIsOpen={setModalIsOpen}
            setOpen={setOpen}
          />
        </Modal.Body>
      </Modal> */}

      <ModalR
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
      </ModalR>

      {login && verify_OTP?.fullname === "" && namePopup ? (
        <Modals setnamePopup={setnamePopup} />
      ) : null}
    </>
  );
};

export default Index;
