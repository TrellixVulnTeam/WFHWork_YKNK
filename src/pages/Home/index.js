import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/directory/action";
import * as AuthActions from "../../redux/auth/action";
import Header from "../../components/Header";

import Footer from "../../components/Footer";
import ellipse_1 from "../../assets/icons/ellipse-1.svg";
import ellipse_2 from "../../assets/icons/ellipse-2.svg";
import gallery_picture_1 from "../../assets/images/photo-1581141849291-1125c7b692b5.jpeg";
import gallery_picture_2 from "../../assets/images/photo-1606462471470-e62753e2cfaf.jpeg";
import gallery_picture_3 from "../../assets/images/photo-1605117882932-f9e32b03fea9.jpeg";
import gallery_picture_4 from "../../assets/images/photo-1617720356637-6264c1c0b4bb.jpeg";
import gallery_picture_5 from "../../assets/images/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg";
import how_work_its_1 from "../../assets/icons/how-it-works-1.svg";
import how_work_its_2 from "../../assets/icons/how-it-works-2.svg";
import trending_service_1 from "../../assets/icons/electrician.png";
import trending_service_2 from "../../assets/icons/plumber.png";
import trending_service_3 from "../../assets/icons/carpenter.png";
import trending_service_4 from "../../assets/icons/tiler.png";
import trending_service_5 from "../../assets/icons/painter.png";
import trending_service_6 from "../../assets/icons/plasterer.png";
import trending_service_7 from "../../assets/icons/landscaper.png";
import trending_service_8 from "../../assets/icons/labourer.png";
import trending_service_9 from "../../assets/icons/bricklayer.png";
import trending_service_10 from "../../assets/icons/mowing.png";
import trending_service_11 from "../../assets/icons/builder.png";
import feature_1 from "../../assets/images/features-right.png";
import feature_2 from "../../assets/icons/features-after.svg";
import download_app_1 from "../../assets/icons/download-app-after.svg";
import download_app_2 from "../../assets/icons/download-app-customers-left.svg";
import download_app_3 from "../../assets/icons/qr.png";
import download_app_4 from "../../assets/icons/download-app-customers-right.svg";
import download_app_5 from "../../assets/icons/download-app-tradies-left.svg";
import download_app_6 from "../../assets/icons/qr.png";
import download_app_7 from "../../assets/icons/download-app-tradies-right.svg";
import professional_tradie from "../../assets/images/professional-tradie.jpg";
import icon_address from "../../assets/icons/icon-address.svg";
import AutoCompleteSearch from "../Directory/AutoCompleteSearch";
import useComponentVisibleHook from "../Directory/useComponentVisibleHook";
import contact_us_9 from "../../assets/icons/download-app-tradies-left.svg";
import contact_us_10 from "../../assets/icons/qr.png";
import contact_us_7 from "../../assets/icons/qr.png";
import contact_us_6 from "../../assets/icons/download-app-customers-left.svg";
import { Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Index = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const {
    trendingAllCategories_Action,
    search_trading_service_Action,
    search_trading_onClick_search_Action,
  } = Actions;
  const { User_Profile_Get_Information_Action } = AuthActions;
  const [modelOpen, setModelOpen] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisibleHook(true);
  const { trendingCategories, searchingTradie } = useSelector(
    (state) => state.directory
  );
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

  const { userData, login } = useSelector((state) => state.auth);
  // const {full_name}=userData
  // console.log("userData", userData);
  const [redirectpPage, setRedirectpPage] = useState(false);
  const [searchFormData, setSearchFormData] = useState({
    searchQuery: "",
    latitude: "",
    longitude: "",
  });
  const [enterNameModal, setModalClose] = useState(true);

  useEffect(() => {
    dispatch(trendingAllCategories_Action());
    dispatch(User_Profile_Get_Information_Action());
  }, []);
  const goalInputHandler1 = (enterText) => {
    setModelOpen(false);
    setSearchTerm(enterText);
    setSearchFormData({
      ...searchFormData,
      searchQuery: enterText,
    });
  };

  const handleInputValueSet = (evt) => {
    setModelOpen(true);
    setSearchTerm(evt.target.value);
    setIsComponentVisible(true);
    setSearchFormData({
      ...searchFormData,
      searchQuery: evt.target.value,
    });
  };

  const SendData = (serachData) => {
    dispatch(search_trading_service_Action(serachData));
  };

  const handleSubmit = () => {
    if (searchFormData.latitude == "") {
      toast.error("Please Select Location", {
        // position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
    } else {
      dispatch(search_trading_onClick_search_Action(searchFormData));
      setRedirectpPage(true);
    }
  };

  if (searchingTradie && redirectpPage) {
    return <Redirect to={`/tradie-directory`} />;
  }

  const content4 = (
    <div>
      {trendingCategories?.length
        ? trendingCategories
            ?.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(0, 8)
            .map((val) => {
              return (
                <a
                  key={val.id}
                  href="#2"
                  onClick={(event) => {
                    goalInputHandler1(val.name);
                    event.preventDefault();
                  }}
                  className="section-top__search-category-Listitems"
                >
                  <span> {val.name}</span>
                </a>
              );
            })
        : null}
    </div>
  );

  return (
    <div className="homePage">
      <Header />
      <hr />
      {/* condition for name */}
      {/* {full_name === "" ? <Modal/> : null} */}

      <section className="section-top pb-0">
        <div className="section-top__before">
          <svg>
            {/* <use xlink:href="/assets/icons/sprite.svg#section-top-before"></use> */}
          </svg>
        </div>
        <div className="section-heading">
        <h2 className="section-top__title">
          <span>Any Trade</span>, Anywhere, Anytime
        </h2>
        <form
          className="search-form header-form text-left"
          onSubmit={(evt) => evt.preventDefault()}
          style={{ zIndex: 2 }}
        >
          <input
            type="text"
            value={searchTerm}
            placeholder="What service do you need?"
            className="search-form__service"
            onChange={handleInputValueSet}
          />
          {isComponentVisible && modelOpen ? (
            searchTerm?.length === 0 ? null : (
              <div
                ref={ref}
                className="section-top__autocomplete-search-category"
              >
                {content4?.props?.children?.length === 0 ? (
                  <span>No Search Found</span>
                ) : null}
                {content4}
              </div>
            )
          ) : null}
          <div className="search-form__address">
            <label for="address">
              <img src={icon_address} alt="search address" />
            </label>
            <AutoCompleteSearch
              state={searchFormData}
              setStateFunction={setSearchFormData}
            />
          </div>
          <input
            type="submit"
            className=" btn-primary"
            value="Search"
            onClick={handleSubmit}
          />
        </form>
        </div>
        <div className="section-top__after">
          <svg>
            {/* <use xlink:href="/assets/icons/sprite.svg#section-top-after"></use> */}
          </svg>
        </div>
        <img
          className="section-top__ellipse section-top__ellipse--1"
          src={ellipse_1}
          alt=""
        />
        <img
          className="section-top__ellipse section-top__ellipse--2"
          src={ellipse_2}
          alt=""
        />

{userInfo.full_name ? (
        ""
      ) : (
        <section className="section--register-tradie">
          <div className="register-tradie">
            <h4>Register as a Tradie Today!</h4>
            <p>
              List your business here, fill in your profile, control when and
              where you work and meet some amazing new clients.
            </p>
            <Link to="/sign-up">Register Now</Link>
          </div>
        </section>
      )}
      </section>

    

      <section className="gallery" style={{ zIndex: 0 }}>
        <div>
          <div className="gallery__item">
            <img src={gallery_picture_1} alt="" />
          </div>
          <div className="gallery__item">
            <img src={gallery_picture_2} alt="" />
          </div>
          <div className="gallery__item">
            <img src={gallery_picture_3} alt="" />
          </div>
          <div className="gallery__item">
            <img src={gallery_picture_4} alt="" />
          </div>
          <div className="gallery__item">
            <img src={gallery_picture_5} alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">
          It’s as Easy as 1 - 2 - 3, Here’s how it works
        </h2>
        <div className="how-it-works">
          <div className="how-it-works__item">
            <img src={how_work_its_1} alt="" />
            <span>1</span>
            <h3>Tell us what you need</h3>
            <p>Choose a Trade and what you need done.</p>
          </div>
          <div className="how-it-works__item">
            <img src={how_work_its_2} />
            <span>2</span>
            <h3>Send to one or all Tradies in your area</h3>
            <p>
              Your job is sent out to all the relevant Tradies in your area.
            </p>
          </div>
          <div className="how-it-works__item">
            <span>3</span>
            <h3>Choose the best Tradie for your job</h3>
            <p>
              Compare profiles, previous work and ratings to find the best
              Tradie for your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Trending Services</h2>
        <div className="trending-services">
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "electrician" });
            }}
          >
            <div>
              <img src={trending_service_1} alt="" />
            </div>
            <h4>Electrician</h4>
          </Link>
          <Link
            to="/tradie-directory"
            className="trending-services__item"
            onClick={() => {
              SendData({ search: "plumber" });
            }}
          >
            <div>
              <img src={trending_service_2} alt="" />
            </div>
            <h4>Plumber</h4>
          </Link>
          <Link
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "carpenter" });
            }}
            className="trending-services__item"
          >
            <div>
              <img src={trending_service_3} alt="" />
            </div>
            <h4>Carpenter</h4>
          </Link>
          <Link
            to="/tradie-directory"
            className="trending-services__item"
            className="trending-services__item"
            onClick={() => {
              SendData({ search: "tiler" });
            }}
          >
            <div>
              <img src={trending_service_4} alt="" />
            </div>
            <h4>Tiler</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "painter" });
            }}
          >
            <div>
              <img src={trending_service_5} alt="" />
            </div>
            <h4>Painter</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            className="trending-services__item"
            onClick={() => {
              SendData({ search: "plasterer" });
            }}
          >
            <div>
              <img src={trending_service_6} alt="" />
            </div>
            <h4>Plasterer</h4>
          </Link>
          <Link
            to="/tradie-directory"
            className="trending-services__item"
            onClick={() => {
              SendData({ search: "Landscaper" });
            }}
          >
            <div>
              <img src={trending_service_7} alt="" />
            </div>
            <h4>Landscaper</h4>
          </Link>
          <Link
            to="/tradie-directory"
            className="trending-services__item"
            onClick={() => {
              SendData({ search: "labourer" });
            }}
          >
            <div>
              <img src={trending_service_8} alt="" />
            </div>
            <h4>Labourer</h4>
          </Link>
          <Link
            to="/tradie-directory"
            className="trending-services__item"
            onClick={() => {
              SendData({ search: "bricklayer" });
            }}
          >
            <div>
              <img src={trending_service_9} alt="" />
            </div>
            <h4>Bricklayer</h4>
          </Link>
          <Link
            to="/tradie-directory"
            className="trending-services__item"
            onClick={() => {
              SendData({ search: "lawn mowing" });
            }}
          >
            <div>
              <img src={trending_service_10} alt="" />
            </div>
            <h4>Lawn Mowing</h4>
          </Link>
          <Link
            to="/tradie-directory"
            className="trending-services__item"
            onClick={() => {
              SendData({ search: "builder" });
            }}
          >
            <div>
              <img src={trending_service_11} alt="" />
            </div>
            <h4>Builder</h4>
          </Link>
          <Link to="/our-services" className="trending-services__item">
            <h4>More Services</h4>
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Our Features</h2>
        <div className="features">
          <div className="features__left">
            <p>
              Discover and reach registered tradies working and living in your
              local area quickly.
            </p>
            <p>
              Your privacy is important as your location is private, until you
              request to share with your tradie.
            </p>
            <p>
              Gives you a full profile of the tradie so you can read up on them.
            </p>
            <p>
              Locate and track the tradie via our map so you can watch as they
              drive to you.
            </p>
            <p>
              Rate a tradie after your job is completed and read other customers
              experiences.
            </p>
          </div>
          <div className="features__right">
            <img src={feature_1} alt="futreImg" />
            <img src={feature_2} alt="futreImg" />
          </div>
        </div>
      </section>

      <section className="section section--center">
        <h2 className="section__title">
          There’s so much more to love in the apps
        </h2>
        <div className="download-app">
          <img className="download-app__after" src={download_app_1} />
          <div className="download-app__customers">
            <h2>Customer App Download here</h2>
            <img src={contact_us_6} />
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.si.tapatradie&hl=en_IN"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_7} />
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/android-512.png" 
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              <a
                href="https://apps.apple.com/us/app/tap-a-tradie/id1473400994"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_7} />
              <img
                src="https://www.freeiconspng.com/uploads/ios-png-6.png"
              />
            </div>
          </div>
          <div className="download-app__tradies">
            <h2>Tradie App Download here</h2>
            <img src={contact_us_9} />
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.si.tradie"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_10} />
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/android-512.png" 
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              <a
                href="https://apps.apple.com/us/app/tradie/id1473400813"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_10} />
              <img
                src="https://www.freeiconspng.com/uploads/ios-png-6.png"

              />
            </div>
          </div>
        </div>
      </section>

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
            <img src={professional_tradie} alt="" />
          </div>
        </div>
      </section>
      {/* )} */}
      <Footer />
    </div>
  );
};

export default Index;
