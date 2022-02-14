import React, { useState, useEffect } from "react";
import Select from "react-select";
import * as Actions from "../../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { countryListAlpha3 } from "./CountryList";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
const Pop1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { Profile_Provider_Register_Action } = Actions;
  const { login, verify_OTP } = useSelector((state) => state.auth);

  if (
    verify_OTP?.fullname !== "" &&
    verify_OTP?.role === "provider" &&
    verify_OTP?.register_complete === 1
  ) {
    history.push("/");
  }

  if (verify_OTP?.fullname !== "" && verify_OTP?.register_complete === 0) {
    history.push("/tradie-popup-step2");
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedCountry, setSelectOption] = useState({ selectedOption: null });
  const { selectedOption } = selectedCountry;
  const [countryMsg, setCountryMsg] = useState(false);
  const [formData, setFormData] = useState();
  const [redirectpop2, setRedirectpop2] = useState(false);
  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: "1px solid lightgray",
      "&:hover": { borderColor: "gray" }, // border style on hover
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#dddddd" : "#ffffff",
      color: state.isSelected ? "black" : "black",
    }),
  };

  const handleChange = (selectedOption) => {
    setSelectOption({ selectedOption });
  };
  const onSubmit = (data) => {
    if (selectedCountry.selectedOption !== null) {
      const datatoSend = { ...data, country: selectedOption?.label };

      setCountryMsg(false);
      dispatch(Profile_Provider_Register_Action(datatoSend));
      setRedirectpop2(true);
    } else {
      setCountryMsg(true);
      alert("Please select country");
    }
  };
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  const { fullname, email } = userInfo;

  /*   if (fullname !== "" && email !== "" && redirectpop2) {
    return <Redirect to="/tradie-popup-step2" />;
  } */

  // console.log("re rendering");
  return (
    <div>
      <section className="user-info-modal popup">
        <form className="popup__form" onSubmit={handleSubmit(onSubmit)}>
          <h2>
            Create your Account{" "}
            {/* <span
              onClick={(e) => {
                e.target.parentElement.parentElement.parentElement.style.display =
                  "none";
                history.push("/tradie-my-profile");
              }}
              className="Closesvg"
            >
              <Close width="30px" height="30px" />
            </span> */}
          </h2>

          <div className="input-group" style={{ marginBottom: "1.8rem" }}>
            <input
              type="text"
              {...register("fullname", {
                required: { value: true, message: "Full name is required" },
                minLength: { value: 2, message: "min value > 3" },
              })}
            />
            <span>Full Name *</span>
          </div>
          {errors.fullname && (
            <span
              style={{ color: "red", marginTop: "-15px", display: "block" }}
            >
              {errors.fullname.message}
            </span>
          )}
          <br />

          <div className="input-group" style={{ marginBottom: "1.8rem" }}>
            <input
              type="email"
              {...register("EmailAddress", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter Valid Email",
                },
              })}
            />
            <span>Email</span>
          </div>
          {errors.EmailAddress && (
            <span
              style={{ color: "red", marginTop: "-15px", display: "block" }}
            >
              {errors.EmailAddress.message}
            </span>
          )}
          <br />

          <div className="input-group text-left">
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={countryListAlpha3}
              isSearchable
              placeholder="Select Country"
              autoFocus={false}
              styles={customStyles}
            />
          </div>
          {countryMsg ? (
            <span style={{ color: "red" }}>Please select country</span>
          ) : null}
          <div className="input-group">
            <input
              type="text"
              {...register("city", {
                required: { value: true, message: "Full name is required" },
              })}
            />
            <span>City</span>
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>
      </section>
    </div>
  );
};
export default Pop1;
