import React, { useState, useEffect, useRef } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/auth/action";
import { Redirect } from "react-router-dom";

const SignupPopup = (props) => {
  const submitBtnRef = useRef();
  const Dispatch = useDispatch();
  const [redirectpPage, setRedirectpPage] = useState(false);
  const [OTP, setOTP] = useState("");
  const { verify_otp_Action, Reset_Signup_Otp_Action, getCountryList_Action } =
    Actions;
  const [fillBoxesMsg, setFillBoxesMsg] = useState(false);
  const state = useSelector((state) => state.auth.verify_OTP);
  const [isTimer, setIsTimer] = useState(true);
  const [invalidOptpMessage, setInvalidOptpMessage] = useState(false);

  useEffect(() => {
    const resendOtpEl = document.querySelector(".resendOTP");
    const timerContent = resendOtpEl.querySelector("span").textContent;
    const resendOtpBtn = resendOtpEl.querySelector("button");

    let timeout;
    // getting time from timer element
    const time = Number(timerContent.split(" ")[0]);

    if (isTimer) {
      resendOtpBtn.style.cursor = "default";
      submitBtnRef.current.style.cursor = "pointer";

      timeout = setTimeout(() => {
        setIsTimer(false);
      }, time * 1000);
    } else {
      resendOtpBtn.style.cursor = "pointer";
      submitBtnRef.current.style.cursor = "default";
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isTimer]);

  // if (login === '') {
  // 	return <Redirect to={`/tradie-my-profile`} />;
  // }

  const submitOtpCode = () => {
    setInvalidOptpMessage(false);
    if (OTP.length <= 3) {
      setFillBoxesMsg(true);
    } else {
      Dispatch(
        verify_otp_Action({
          otpcode: OTP,
          mobileNumber: `${props.mobileNumber}`,
          tab: props.btnTab ? "provider" : "user",
        })
      );
      setTimeout(() => {
        Dispatch(getCountryList_Action());
      }, 300);
      setInvalidOptpMessage(true);
      setFillBoxesMsg(false);
    }
    setRedirectpPage(true);
    if (props.btnTab == false) {
      props.setnamePopup(true);
    } else {
      props.setnamePopup(false);
    }
  };

  const resendOtp = () => {
    setIsTimer(true);
    const data = {
      mobileNumber: props.mobileNumber,
      tab: props.btnTab ? "provider" : "user",
      countryCode: props.countryCode.split("+")[1],
    };
    Dispatch(Reset_Signup_Otp_Action(data));
  };
  const { message } = state;
  console.log("invalidOptpMessage :", invalidOptpMessage);
  console.log("Message :", message);
  return (
    <div className="otp_popup">
      <div className="otp_popup__box">
        <span className="otp_popup__close_icon" onClick={props.handleClose}>
          x
        </span>
        <h4 className="otp_popup__heading">Enter Verification code</h4>
        <p className="otp_popup__paragraph">
          We have sent you a 4 digit verification Code on {""}
          <span>
            {props.countryCode} {props.mobileNumber}
          </span>
        </p>
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          maxTime={30}
          className="OTPInput"
        />
        {fillBoxesMsg && (
          <p className="otp_popup__msg">Please fill all the boxes</p>
        )}
        {message === "Invalid Otp." && invalidOptpMessage === true ? (
          <p className="otp_popup__msg" style={{ color: "red" }}>
            {message} Try again
          </p>
        ) : null}
        <button
          ref={submitBtnRef}
          className="otp_popup__submit"
          onClick={submitOtpCode}
        >
          Submit
        </button>
        <ResendOTP
          maxTime={30}
          onResendClick={resendOtp}
          style={{
            marginTop: "26px",
          }}
          className="resendOTP"
        />
      </div>
    </div>
  );
};

export default SignupPopup;
