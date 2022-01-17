import React, { useState, useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import * as AuthActions from "../../redux/auth/action";

import { useSelector, useDispatch } from "react-redux";
import HeaderLogo from "../../assets/images/header-logo.svg";
import spriteIconClose from "../../assets/icons/sprite-icon-close.svg";
import spriteIconMenu from "../../assets/icons/sprite-icon-menu.svg";
import {
  setLocalStorageAccessLoadSearchInfo,
  getLocalStorageAccessLoadSearchInfo,
  isAuthenticated,
} from "../../utilities/hooks/auth/util";
import useComponentVisibleHook from "../../pages/Directory/useComponentVisibleHook";
import Swal from "sweetalert2";
const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { Logout_Action, generateAccessToken_Action } = AuthActions;
  const [isDropDown, setIsDropDown] = useState(false);
  const [logoutUser, setLogoutUser] = useState(false);
  const { login, verify_OTP, userData } = useSelector((state) => state.auth);
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisibleHook(false);

  useEffect(() => {
    const btnMenuOpen = document.querySelector(".nav__btn-menu");
    const btnMenuClose = document.querySelector(".nav__btn-close");
    const navMenu = document.querySelector(".nav__menu");
    btnMenuOpen.addEventListener("click", () => {
      navMenu.classList.add("nav__menu--open");
    });
    btnMenuClose.addEventListener("click", () => {
      navMenu.classList.remove("nav__menu--open");
    });
  }, []);

  const reqType = window.location.pathname;
  const handleMyAccountPopup = () => {
    setIsDropDown(!isDropDown);

    setIsComponentVisible(true);
  };

  const setfirstTimeSeachCookie = () => {
    let cookieData = {
      address: "Perth WA, Australia",
      city: "Perth",
      country: "Australia",
      loadlatitude: "-31.9505269",
      loadlongitude: "115.8604572",
      state: "WA",
    };
    if (getLocalStorageAccessLoadSearchInfo() === null) {
      setLocalStorageAccessLoadSearchInfo(cookieData);
    }
  };
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(Logout_Action());
        dispatch(generateAccessToken_Action());
        setLogoutUser(true);
        history.push("/");
      }
    });
  };

  // if (userData.full_name === "" && userData.mobile !== "") {
  //   history.push("/tradie-popup-step1")
  // }
  return (
    <header className="header">
      <nav className="nav">
        <Link
          to="/"
          className="nav__left"
          onClick={() => {
            setfirstTimeSeachCookie();
          }}
        >
          <img
            className="nav__logo"
            src={HeaderLogo}
            alt="header_img"
            title="header_img"
          />
        </Link>
        <div className="nav__menu">
          <div role="button" className="nav__btn-close">
            <img src={spriteIconClose} alt="header_img" title="header_img" />
          </div>
          <ul className="nav__center">
            <li className="nav__item">
              <Link
                to="/directory"
                className={
                  reqType === "/directory" ? `nav__link--active` : `nav__link`
                }
                onClick={() => {
                  setfirstTimeSeachCookie();
                }}
              >
                Directory
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/tradieTV"
                className={
                  reqType === "/tradieTV" ? `nav__link--active` : `nav__link`
                }
              >
                TradieTV
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about-us"
                className={
                  reqType === "/about-us" ? `nav__link--active` : `nav__link`
                }
              >
                About us
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/how-it-works"
                className={
                  reqType === "/how-it-works"
                    ? `nav__link--active`
                    : `nav__link`
                }
              >
                How it Works
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/articles"
                className={
                  reqType === "/articles" ? `nav__link--active` : `nav__link`
                }
              >
                Articles
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/our-partners"
                className={
                  reqType === "/our-partners"
                    ? `nav__link--active`
                    : `nav__link`
                }
              >
                Partners
              </Link>
            </li>
          </ul>

          {!login && (
            <ul className="nav__right">
              <li className="nav__item">
                <Link to="/login" className="nav__link">
                  Log In
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/sign-up" className="nav__link btn-primary">
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
          {login && isAuthenticated() ? (
            <ul className=" drop-down">
              <button onClick={handleMyAccountPopup} className="btn-primary">
                My Account
              </button>

              {isComponentVisible && isComponentVisible ? (
                <ul ref={ref} style={{ background: "white", opacity: 0.9 }}>
                  {verify_OTP.role === "user" ? (
                    <>
                      <li className="nav__item">
                        <Link
                          to={userData.full_name === "" ? "/" : "/user-profile"}
                          className="nav__link"
                        >
                          My Profile
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          to={
                            userData.full_name === "" ? "/" : "/user-bookings"
                          }
                          className="nav__link"
                        >
                          My Booking
                        </Link>
                      </li>
                      <li className="nav__item">
                        <span className="nav__link" onClick={handleLogout}>
                          Logout
                        </span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav__item">
                        <Link
                          // to={
                          //   userData.full_name === ""
                          //     ? "/"
                          //     : "/tradie-my-profile"
                          // }
                          to={"/tradie-my-profile"}
                          className="nav__link"
                        >
                          My Profile
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          to={userData.full_name === "" ? "/" : "/tradie-leads"}
                          className="nav__link"
                        >
                          My Leads
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          to={
                            userData.full_name === ""
                              ? "/"
                              : "/tradie-membership"
                          }
                          className="nav__link"
                        >
                          Membership
                        </Link>
                      </li>
                      <li className="nav__item">
                        <span className="nav__link" onClick={handleLogout}>
                          Logout
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              ) : null}
            </ul>
          ) : null}
        </div>

        <div role="button" className="nav__btn-menu">
          <img src={spriteIconMenu} alt="header_img" title="header_img" />
        </div>
      </nav>
    </header>
  );
};

export default Index;
