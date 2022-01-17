import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/auth/action";

const SignupPopup = (props) => {
  const Dispatch = useDispatch();
  const {
    verify_otp_Action,
    updateAccessToken_Action,
    Reset_Login_Otp_Action,
  } = Actions;
  const [OTP, setOTP] = useState("");
  const [propsState] = useState(props);
  const [invalidOptpMessage, setInvalidOptpMessage] = useState(false);
  const [fillBoxesMsg, setFillBoxesMsg] = useState(false);
  const state = useSelector((state) => state.auth.verify_OTP);
  const sendNumberLogin = () => {
    setInvalidOptpMessage(false);
    if (OTP.length <= 3) {
      setFillBoxesMsg(true);
    } else {
      Dispatch(updateAccessToken_Action());
      Dispatch(
        verify_otp_Action({
          otpcode: OTP,
          mobileNumber: `${props.mobileNumber}`,
          tab: props.btnTab ? "provider" : "user",
        })
      );
      setInvalidOptpMessage(true);
      props.setnamePopup(true);
    }
  };
  const resendOTP = (evt) => {
    const { countryCode, mobileNumber, btnTab } = propsState;
    Dispatch(
      Reset_Login_Otp_Action({
        countryCode: countryCode,
        mobileNumber: mobileNumber,
        tab: btnTab ? "provider" : "user",
      })
    );
  };
  const { message } = state;

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
        {fillBoxesMsg === true ? (
          <p className="otp_popup__msg">Please fill all boxes</p>
        ) : null}
        {message === "Invalid Otp." && invalidOptpMessage === true ? (
          <p className="otp_popup__msg" style={{ color: "red" }}>
            {message} Try again
          </p>
        ) : null}
        {/* if condtn reducr data coming fill box not show */}
        <button className="otp_popup__submit" onClick={sendNumberLogin}>
          Submit
        </button>
        <ResendOTP
          maxTime={30}
          onResendClick={resendOTP}
          style={{
            marginTop: "26px",
            background: "#f5f5f5",
          }}
          className="resendOTP"
        />
      </div>
    </div>
  );
};

export default SignupPopup;
