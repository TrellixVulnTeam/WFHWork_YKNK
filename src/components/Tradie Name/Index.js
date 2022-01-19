import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
//   1601545174666_user-profile_2020_10_01_17_39_31_786_ 1.jpg
// professional-tradie.jpg
import tradie_review_1 from "../../assets/images/1601545174666_user-profile_2020_10_01_17_39_31_786_ 1.jpg";
import * as Actions from "../../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import IconArrow from "../../assets/icons/icon-arrow.svg";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    userData,
    businessData,
    gallery,
    services,
    tradiaServiceLocation,
    submitApprovalRes,
  } = useSelector((state) => state.auth);

  const { Profile_steps_Action, submitForApproval } = Actions;
  const userDetails = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  const { fullname } = userDetails;
  const [complete, setComplete] = useState(false);
  const [businesDone, setBusinesDone] = useState(false);
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
    working_radius,
    license_number,
    business_name,
    id,
    profile_pic,
    rating,
    submit_for_approval,
  } = userData;
  const { house_no, street, pincode, state } = businessData;

  useEffect(() => {}, []);
  const handleProviderProfileCall = () => {
    dispatch(Profile_steps_Action());
  };
  useEffect(() => {
    if (
      full_name &&
      email &&
      mobile &&
      gender &&
      city &&
      professional_experience &&
      website_link &&
      country &&
      about_me
    ) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [userData]);
  useEffect(() => {
    if (
      working_radius &&
      license_number &&
      business_name &&
      house_no &&
      street &&
      pincode &&
      state &&
      city &&
      country
    ) {
      setBusinesDone(true);
    } else {
      setBusinesDone(false);
    }
  }, [businessData]);

  const submitForApp = () => {
    if (
      complete &&
      businesDone &&
      gallery.length > 0 &&
      services.length > 0 &&
      tradiaServiceLocation.length > 0
    ) {
      dispatch(submitForApproval(fullname));
    } else {
      toast.success("Submit successfully", {
        position: "bottom-left",
        autoClose: 1000,
        size: "small",
      });
    }
  };
  useEffect(() => {
    if (submitApprovalRes) {
      if (submitApprovalRes?.data?.data?.success == 1) {
        history.push("/");
        toast.success("Submit successfully", {
          position: "bottom-left",
          autoClose: 1000,
          size: "small",
        });
      }
    }
    setTimeout(() => {
      dispatch({ type: "SUBMIT_FOR_APPROVAL_SUCCESS", payloade: "" });
    }, 1000);
  }, [submitApprovalRes]);

  const completAlert = () => {
    toast.error("Please Complete your profile", {
      position: "bottom-left",
      autoClose: 1000,
      size: "small",
    });
  };

  return (
    <div className="tradie-my-profile__profile">
      <div className="tradie-profile__image">
        <img
          src={
            profile_pic
              ? `https://api.tapatradie.com/uploads/` + profile_pic
              : tradie_review_1
          }
          alt=""
        />
      </div>
      <Link to="/ChangeProfile" style={{ textDecoration: "none" }}>
        <small style={{ cursor: "pointer" }}>Change profile</small>
      </Link>
      <h4 className="tradie-profile__name">{fullname}</h4>

      <div className="tradie-profile__rating">
        <StarRatings
          rating={rating ? Math.round(Number(rating) * 10) / 10 : 0}
          starRatedColor="orange"
          numberOfStars={5}
          name="rating"
          starSpacing="1px"
          starDimension="17px"
        />
      </div>
      <a href="/tradie-review" className="tradie-profile__link">
        View Reviews{" "}
      </a>
      <p className="tradie-profile__text">
        {complete &&
        businesDone &&
        gallery.length > 0 &&
        services.length > 0 &&
        tradiaServiceLocation.length > 0
          ? ""
          : "You are only a few steps away from completing profile"}
      </p>
      <ul className="tradie-profile__list">
        <li className={complete ? "checked" : ""}>
          <a>
            <Link onClick={handleProviderProfileCall} to="/tradie-my-profile">
              Identify verifications & about me
            </Link>
            <img src={IconArrow} />
            {/* <svg><use xlinkHref="/assets/icons/sprite.svg#icon-arrow"></use></svg>{' '} */}
          </a>
        </li>
        <li className={businesDone ? "checked" : ""}>
          <a>
            <Link onClick={handleProviderProfileCall} to="/business-details">
              Business details
            </Link>
            <img src={IconArrow} />
          </a>
        </li>
        <li className={gallery.length > 0 ? "checked" : ""}>
          <a>
            <Link
              onClick={handleProviderProfileCall}
              to="/tradie-my-profile-upload"
            >
              {" "}
              Upload photos of your work{" "}
            </Link>{" "}
            <img src={IconArrow} />
          </a>
        </li>
        <li className={services.length > 0 ? "checked" : ""}>
          <a>
            <Link
              onClick={handleProviderProfileCall}
              to="/tradie-additional-services"
            >
              Additional Service information{" "}
            </Link>
            <img src={IconArrow} />
          </a>
        </li>
        <li className={tradiaServiceLocation.length > 0 ? "checked" : ""}>
          <a>
            <Link
              onClick={handleProviderProfileCall}
              to="/tradie-service-location"
            >
              Add your service location{" "}
            </Link>
            <img src={IconArrow} />
          </a>
        </li>
      </ul>
      {complete &&
      businesDone &&
      gallery.length > 0 &&
      services.length > 0 &&
      tradiaServiceLocation.length > 0 ? (
        submit_for_approval == 1 ? (
          ""
        ) : submit_for_approval == 0 ? (
          <a onClick={submitForApp} className="btn-primary">
            Submit for approval
          </a>
        ) : submit_for_approval == 3 ? (
          <button className="btn-primary" disabled={true}>
            Submited for approval
          </button>
        ) : submit_for_approval == 2 ? (
          <a onClick={submitForApp} className="btn-primary">
            Re Submit for approval
          </a>
        ) : (
          <button
            onClick={submitForApp}
            className="btn-primary"
            disabled={true}
          >
            Submit for approval
          </button>
        )
      ) : (
        <a onClick={completAlert} className="btn-primary">
          Submit for approval
        </a>
      )}
      <a className="tradie-profile__link">
        {complete && businesDone ? (
          <Link to={"/tradie-public-profile/" + id}>View Profile</Link>
        ) : (
          <a onClick={completAlert} style={{ cursor: "pointer" }}>
            View Profile
          </a>
        )}
      </a>
    </div>
  );
};
export default Index;
