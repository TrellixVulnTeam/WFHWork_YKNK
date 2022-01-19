import React, { useState, useEffect, useMemo } from "react";
import * as Actions from "../../redux/auth/action";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

// Handling Form with Formik
import { Formik, Form } from "formik";
// Handling Form Validation with yup
import * as Yup from "yup";
import tradie_my_profile_2 from "../../assets/images/professional-tradie.jpg";
import Navigation from "../../components/Tradie Name/Index";
import { countryListAlpha3 } from "./CountryList";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Section_top_1 from "../../assets/icons/section-top-directory-before.svg";


toast.configure();

const Index = () => {
  const history = useHistory();
  const { userData } = useSelector((state) => state.auth);
  const { userUpdateRes } = useSelector((state) => state.auth);
  const {
    full_name,
    email,
    mobile,
    gender,
    country,
    city,
    professional_experience,
    website_link,
    about_me,
    country_code,
    pincode
  } = userData;

  const {
    User_Profile_Update_Action,
    Profile_steps_Action,
    User_Profile_Get_Information_Action,
    Get_Business_Details_Action,
    Get_User_Address_Action,
  } = Actions;
  const dispatch = useDispatch();

  // const [Aboutme, setAboutme] = useState("");
  // const [EmailAddress, setEmailAddress] = useState("");
  // const [fullname, setfullname] = useState("");
  // const [Gender, setGender] = useState("");
  // const [PhoneNumber, setPhoneNumber] = useState("");
  // const [ProfessionalExperience, setProfessionalExperience] = useState("");
  // const [WebsiteLink, setWebsiteLink] = useState("");
  // const [City, setCity] = useState("");
  const [selectedCountry, setSelectOption] = useState("");

  useEffect(() => {
    //   if (full_name) {
    //     setfullname(full_name);
    //   }
    //   if (email) {
    //     setEmailAddress(email);
    //   }
    //   if (mobile) {
    //     setPhoneNumber(mobile);
    //   }
    //   if (gender) {
    //     setGender(gender);
    //   }
    if (country) {
      setSelectOption(country);
    }
    //   if (city) {
    //     setCity(city);
    //   }
    //   if (professional_experience) {
    //     setProfessionalExperience(professional_experience);
    //   }
    //   if (website_link) {
    //     setWebsiteLink(website_link);
    //   }
    //   if (about_me) {
    //     setAboutme(about_me);
    //   }
  }, [userData]);

  useEffect(() => {
    if (userUpdateRes) {
      history.push("/business-details");
      toast.success(userUpdateRes, {
        position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
    }
    setTimeout(() => {
      dispatch({ type: "UPDATE_PROFILE_VERIFICATION_SUCCESS", payloade: "" });
    }, 1000);
  }, [userUpdateRes]);

  useEffect(() => {
    dispatch(User_Profile_Get_Information_Action());
    dispatch(Get_Business_Details_Action());
    dispatch(Profile_steps_Action());
    dispatch(Get_User_Address_Action());
  }, []);

  const initialValues = {
    fullname: full_name,
    EmailAddress: email,
    Gender: gender,
    Aboutme: about_me,
    PhoneNumber: mobile,
    country_code: country_code,
    ProfessionalExperience: professional_experience,
    WebsiteLink: website_link,
    City: city,
    selectedCountry: country,
    pincode: pincode,
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required(" required"),
    EmailAddress: Yup.string().required("required").email(),
    Gender: Yup.string().required("required"),
    Aboutme: Yup.string().required(" required"),
    PhoneNumber: Yup.number().required(" required"),
    ProfessionalExperience: Yup.string().required(" required"),
    City: Yup.string().required("required"),
  });

  const handleSubmit = (values) => {
    // e.preventDefault();
    // const dataSend = {
    //   Aboutme,
    //   EmailAddress,
    //   fullname,
    //   Gender,
    //   PhoneNumber,
    //   ProfessionalExperience,
    //   WebsiteLink,
    //   City,
    //   selectedCountry,
    // };

    const dataSend = Object.assign({}, values, {
      selectedCountry: selectedCountry,
    });

    dispatch(User_Profile_Update_Action(dataSend));
  };

  const handleChangeCountry = (selectedOption) => {
    setSelectOption(selectedOption.label);
  };

  //cityFetch function

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

  const [errors, SetError] = useState(false);
  const [enrrors, SetNameerror] = useState(false);

  const [genders, Setgenders] = useState(false);
  const [countrys, Setcountrys] = useState(false);
  const [cityd, Setcityd] = useState(false);
  const [web, Setweb] = useState(false);
  const [aboutme, Setaboutme] = useState(false);
  const [expre, Setexpre] = useState(false);
  const [phone, Setphone] = useState(false);

  useEffect(() => {
    if (
      errors === true ||
      enrrors === true ||
      genders === true ||
      cityd === true ||
      web === true ||
      aboutme === true ||
      expre === true ||
      phone === true
    ) {
      toast.error("Please Fill Each And Every Field", {
        position: "bottom-left",
        autoClose: 3000,
        size: "small",
      });
    }
  }, [errors, enrrors, genders, cityd, web, aboutme, expre, phone]);

  return (
    <div>
      <Header />

      {/* <!-- My Profile--> */}
      <section className="directory-top-section section-top--tradie-my-profile">
      <div className="section-top__before">
          <img src={Section_top_1} alt="" />
        </div>
        <h2 className="section-top__title">
         
          My <span>Profile</span>
        </h2>
      </section>

      <section className="section section--tradie-my-profile">
        <div className="tradie-my-profile">
          <Navigation />
          <Formik
            enableReinitialize="true"
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className="tradie-my-profile__form">
                  {/* <form className="tradie-my-profile__form"> */}
                  <h4>Identify verification & about me</h4>

                  <div className="input-group">
                    <input
                      name="fullname"
                      type="text"
                      placeholder="Full Name"
                      onChange={formik.handleChange}
                      value={
                        formik.values.fullname?.charAt(0).toUpperCase() +
                        formik.values.fullname?.slice(1)
                      }
                      // onChange={(e) => {
                      //   setfullname(e.target.value);
                      // }}
                      id="inputError"
                    />

                    {formik.errors.fullname && formik.touched.fullname
                      ? SetNameerror(true)
                      : SetNameerror(false)}

                    <select
                      name="Gender"
                      onChange={formik.handleChange}
                      value={formik.values.Gender}
                      // onChange={(e) => {
                      //   setGender(e.target.value);
                      // }}
                      className="tradie-my-profile__SelectInputs"
                    >
                      <option selected={true} value="">
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {formik.errors.Gender && formik.touched.Gender
                    ? Setgenders(true)
                    : Setgenders(false)}

                  <div className="input-group">
                    <input
                      name="EmailAddress"
                      onChange={formik.handleChange}
                      value={formik.values.EmailAddress}
                      // onChange={(e) => {
                      //   setEmailAddress(e.target.value);
                      // }}
                      type="email"
                      placeholder="Email Address"
                    />

                    {formik.errors.EmailAddress && formik.touched.EmailAddress
                      ? SetError(true)
                      : SetError(false)}
                    <select
                      name="ProfessionalExperience"
                      onChange={formik.handleChange}
                      value={formik.values.ProfessionalExperience}
                      // onChange={(e) => {
                      //   setProfessionalExperience(e.target.value);
                      // }}
                      className="tradie-my-profile__SelectInputs"
                    >
                      <option selected={true} value="">
                        Select Experience
                      </option>
                      <option value="1 Year">1 Year</option>
                      <option value="2 Year">2 Year</option>
                      <option value="3 Year">3 Year</option>
                      <option value="4 Year">4 Year</option>
                      <option value="5 Year">5 Year</option>
                      <option value="6 Year">6 Year</option>
                      <option value="7 Year">7 Year</option>
                    </select>
                  </div>
                  {formik.errors.ProfessionalExperience &&
                  formik.touched.ProfessionalExperience
                    ? Setexpre(true)
                    : Setexpre(false)}

                  <div className="input-group">
                  <div className="country-section">
                        <Select
                          options={countryListAlpha3}
                          onChange={handleChangeCountry}
                          value={countryListAlpha3.filter(function (option) {
                            return option.label === selectedCountry;
                          })}
                          autoFocus={false}
                          styles={customStyles}
                        />
                          <input
                          name="PhoneNumber"
                          type="number"
                          placeholder="Phone Number"
                          onChange={formik.handleChange}
                          value={formik.values.PhoneNumber}
                        />
                      {formik.errors.PhoneNumber && formik.touched.PhoneNumber
                        ? Setphone(true)
                        : Setphone(false)}
                      </div>
                      </div>
                      <div className="input-group">
                    <div className="">
                     
                      {/* {formik.errors.ProfessionalExperience && formik.touched.ProfessionalExperience ? SetError(true): SetError(false) }  */}
                      
                        {/* <input
                          type="text"
                          value={formik.values.country_code}
                          onChange={formik.handleChange}
                          style={{ width: "70px" }}
                          placeholder="+91"
                        /> */}
                      
                    </div>
                  </div>

                  <div className="input-group">
                    <input
                      name="City"
                      type="text"
                      placeholder="City"
                      onChange={formik.handleChange}
                      value={formik.values.City}
                      // onChange={(e) => {
                      //   setCity(e.target.value);
                      // }}
                    />
                    {formik.errors.City && formik.touched.City
                      ? Setcityd(true)
                      : Setcityd(false)}
                    <input
                      name="WebsiteLink"
                      type="text"
                      placeholder="Website Link"
                      onChange={formik.handleChange}
                      value={formik.values.WebsiteLink}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      name="pincode"
                      type="text"
                      placeholder="Pin Code"
                      onChange={formik.handleChange}
                      value={formik.values.pincode}
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      name="Aboutme"
                      onChange={formik.handleChange}
                      value={formik.values.Aboutme}
                      // onChange={(e) => {
                      //   setAboutme(e.target.value);
                      // }}
                      placeholder="About me"
                      cols="30"
                      rows="10"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {formik.errors.Aboutme && formik.touched.Aboutme
                    ? Setaboutme(true)
                    : Setaboutme(false)}

                  <div className="input-group">
                    <input
                      type="submit"
                      className="btn-primary"
                      style={{ cursor: "pointer", float: "right" }}
                      // onClick={(e) => {
                      //   handleSubmit(e);
                      // }}
                      value="Save"
                    />
                  </div>

                  {/* </form> */}
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>

      {/* <!-- Are you a Professional Tradie? --> */}
      {/* {userData.access === "provider" ? (
        ""
      ) : ( */}
      <section className="section section--left">
        <div className="professional-tradie">
          <div className="professional-tradie__description">
            <h3 className="professional-tradie__title">
              Are you a Professional Tradie?
            </h3>
            <p>
              If you would like to be part of our Tradie community and are ready
              to meet new clients today please continue so we can welcome you
              onboard.
            </p>
            <Link to="/about-us" className="btn-primary">
              Learn More
            </Link>
          </div>
          <div className="professional-tradie__image">
            <img src={tradie_my_profile_2} alt="" />
          </div>
        </div>
      </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
