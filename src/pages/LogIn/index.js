import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
import LoginInPopup from "./login_verification_popop";
import FacebookLogin from "react-facebook-login";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import IntlTelInput from "react-intl-tel-input";

import libPhoneNumber from "react-intl-tel-input/dist/libphonenumber.js";
import "../../../node_modules/react-intl-tel-input/dist/main.css";
import Modal from "../../components/UserSignupModal";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

toast.configure();

const Index = () => {
  const history = useHistory();
  const location = useLocation();

  const Dispatch = useDispatch();
  const {
    updateAccessToken_Action,
    otpLogin_Action,
    faceBookLogin_Action,
    otp_State_Change_Action,
  } = Actions;
  const {
    opt_mesg,
    loading,
    success,
    login,
    verify_OTP,
    otp_state,
    otp_stateLogin,
  } = useSelector((state) => state.auth);

  const [btnTab, setBtnTab] = useState(true);
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isValidationMessage, setIsValidationMessage] = useState(false);
  const [regMsg, setRegMsg] = useState(false);
  const [namePopup, setnamePopup] = useState(false);
  const [details, setDetails] = useState(null);

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setDetails({
          countryName: data.country_name,
          countryDial: data.country_calling_code,
          countryCode: data.country_code,
        });
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
    if (location.state) {
      if (location.state?.access == "user") {
        setBtnTab(false);
      }
    }
  }, [location]);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const responseFacebook = (response) => {
    Dispatch(
      faceBookLogin_Action({
        facebook_id: response.id,
        tab: btnTab ? "provider" : "user",
        name: response.name,
      })
    );
  };
  const componentClicked = (data) => {};

  useEffect(() => {
    if (
      login &&
      verify_OTP?.role === "provider" &&
      verify_OTP?.fullname !== ""
    ) {
      // history.push("/tradie-popup-step1");
      if (Object.keys(verify_OTP?.current_membership)?.length > 0) {
        history.push("/tradie-my-profile");
      } else {
        history.push("/tradie-membership");
      }
    }
    if (verify_OTP?.fullname !== "" && verify_OTP?.role === "user") {
      history.push("/user-profile");
    }
    if (verify_OTP?.fullname === "") {
      setIsOpen(false);
    }
    if (login && verify_OTP?.role === "") {
      history.push("/");
    }
  }, [login]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (mobileNumber.length !== 0 && mobileNumber.length >= 9) {
        LoginBtn();
      }
    }
  };
  const LoginBtn = () => {
    if (countryCode == "") {
      toast.error("Please Select Country", {
        position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
      // } else if (!countryCode.match(/^(\+?\d{1,3}|\d{1,4})$/g)) {
      //   toast.error("Please fill valid Country code", {
      //     position: "bottom-left",
      //     autoClose: 2000,
      //     size: "small",
      //   });
    } else {
      Dispatch(updateAccessToken_Action());
      Dispatch(
        otpLogin_Action({
          countryCode: `${Number(countryCode)}`,
          mobileNumber: `${mobileNumber}`,
          tab: btnTab ? "provider" : "user",
        })
      );
      setRegMsg(true);
      setIsOpen(true);
    }
  };
  const handleMobileNo = (e) => {
    if (e.target.value.length <= 9) {
      setIsValidationMessage(true);
    }
    if (e.target.value.length >= 9) {
      setIsValidationMessage(false);
      Dispatch(otp_State_Change_Action(true));
    }
    if (e.target.value.length <= 10) {
      setMobileNumber(e.target.value);
      Dispatch(otp_State_Change_Action(true));
    }
  };

  // useEffect(() => {

  // }, [countryCode]);

  if (location.pathname === "/login" && !otp_state && mobileNumber === "") {
    Dispatch(otp_State_Change_Action(true));
  }
  const Back = () => {
    history.goBack();
  };
  // Country code Options
  const SelectOption = countries_code?.map((val) => {
    return { value: val.id, label: val.id };
  });

  const handlePhoneNumberChange = (value, country, e, formattedValue) => {
    // console.log("Country", country);

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
      Dispatch(otp_State_Change_Action(true));
    }
    if (result.length <= 10) {
      setMobileNumber(result);
      Dispatch(otp_State_Change_Action(true));
    }
  };

  return (
    <div>
      <section className="section section--sign-up">
        <div className="sign-up">
          <div className="sign-up__left">
            <nav className="nav">
              {/* <a className="nav__left" href="/"> */}
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
                {/* </a> */}
              </Link>
              <button
                onClick={Back}
                style={{ cursor: "pointer" }}
                className=" btn-primary"
              >
                Back
              </button>
            </nav>
            <h3 className="section__title sign-up__title">Log In</h3>
            <p className="sign-up__description">
              Welcome, Please Sign In to continue.
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
                    style={{ color: "#535353 !important" }}
                    required
                  /> */}

                  <PhoneInput
                    country={`${
                      deviceCountry ? deviceCountry?.toLowerCase() : "in"
                    }`}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter your mobile number"
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
                    onKeyDown={handleKeyDown}
                    required
                    h
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
                  {otp_stateLogin ? "You are not a registered user" : ""}
                </p>
              </div>

              <button
                type="submit"
                className="sign-up-form__submit btn-primary"
                onClick={LoginBtn}
                disabled={mobileNumber.length < 9}
              >
                Log In
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
                <p>Don't have an account?</p>
                <Link to="/sign-up"> Sign Up </Link>
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

      {isOpen && opt_mesg ? (
        <LoginInPopup
          handleClose={togglePopup}
          countryCode={countryCode}
          mobileNumber={mobileNumber}
          btnTab={btnTab}
          setnamePopup={setnamePopup}
        />
      ) : null}
      {login && verify_OTP?.fullname === "" && namePopup ? (
        <Modal setnamePopup={setnamePopup} />
      ) : null}
    </div>
  );
};

export default React.memo(Index);
