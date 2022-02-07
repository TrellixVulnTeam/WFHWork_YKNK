import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Actions from "../../redux/directory/action";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import tradie_directory_1 from "../../assets/icons/section-top-directory-before.svg";
import tradie_directory_2 from "../../assets/icons/icon-list-text.png";
// import tradie_directory_3 from "../../assets/images/1601545174666_user-profile_2020_10_01_17_39_31_786_ 1.jpg";
import tradie_directory_3 from "../../assets/images/user.png";
import tradie_directory_4 from "../../assets/images/professional-tradie.jpg";
import CategoryInfo from "./CategoryInfo";
import { getLocalStorageAccessSearchInfo } from "../../utilities/hooks/auth/util";
import useComponentVisibleHook from "../Directory/useComponentVisibleHook";
import { ReactComponent as LocationIcon } from "../../assets/icons/locationSvg.svg";
import StarInactive from "../../assets/icons/star.svg";
import StarActive from "../../assets/icons/starActive.svg";
import { useHistory } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import LocationAutocomplete from "../Directory/AutoCompleteSearch";
import Button from "@restart/ui/esm/Button";
import TradieRequestModel from "./TradieRequestModel";
import AlertPopup from "./AlertPopup";
import { GoPrimitiveDot } from "react-icons/go";
import { CircularProgress, Tab, Tabs } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRatings from "react-star-ratings";
import GoogleMapss from "./GoogleMap";
toast.configure();

const Index = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  let searchCookie = JSON.parse(localStorage.getItem("tradiesearch"));
  let adressCookie = JSON.parse(localStorage.getItem("onloaddata"));
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisibleHook(true);
  const {
    get_provider_profile_request,
    slected_tradie_Id,
    slected_to_All_tradie_Id,
    search_trading_service_Action,
    trendingAllCategories_Action,
    search_trading_onClick_search_Action,
  } = Actions;
  const [searchTerm, setSearchTerm] = useState(searchCookie?.search);
  const [adressTerm, setAddressTerm] = useState(adressCookie?.address);
  const [modelOpen, setModelOpen] = useState(false);
  const [selectAllTradies, setSelectAllTradie] = useState(false);
  const [alertPopup, setalertPopup] = useState(false);
  const [sortTradieType, setSortTradie] = useState();
  const [sortRating, setSortRating] = useState("low");
  const [activeCommercial, setCommercial] = useState(false);
  const [activeResidential, setResidential] = useState(true);

  const ServiceTypeChange = (data) => {
    if (data == "residential") {
      setResidential(true);
      setCommercial(false);
    } else if (data == "commercial") {
      setCommercial(true);
      setResidential(false);
    } else {
      setResidential(false);
      setCommercial(false);
    }
  };

  useEffect(() => {
    if (activeCommercial) {
      setSortTradie("commercial");
    } else if (activeResidential) {
      setSortTradie("residential");
    } else {
      setSortTradie("");
    }
  }, [activeCommercial, activeResidential]);

  const [modelOpenTradieRequest, setModelOpenTradieRequest] = useState(false);
  const { trendingCategories, searchingTradie, searchLocation } = useSelector(
    (state) => state.directory
  );

  useEffect(() => {
    if (searchingTradie) {
      setLoading(true);
    }
  }, [searchingTradie]);
  const [valueTab, setValue] = useState("map");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { login, verify_OTP } = useSelector((state) => state.auth);
  const [searchFormData, setSearchFormData] = useState({
    searchQuery: searchTerm,
    latitude: adressCookie?.loadlatitude,
    longitude: adressCookie?.loadlongitude,
  });
  const [redirectpPage, setRedirectpPage] = useState(false);
  var tradiesIdss = [];

  const [tradieIds, setTradieIds] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    if (searchLocation === false) {
      const getInformation = getLocalStorageAccessSearchInfo();

      dispatch(search_trading_service_Action(getInformation));
      dispatch(trendingAllCategories_Action());
    }
  }, [searchLocation]);

  if (!modelOpenTradieRequest) {
    document
      .getElementsByTagName("html")[0]
      .classList.remove("Scroll_disable_onClick");
  }

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

  const handleSubmit = () => {
    setLoading(false);
    if (searchFormData?.latitude == "") {
      toast.error("Please Select Location", {
        // position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
    } else if (searchFormData?.searchQuery == "") {
      toast.error("Please Select  Service", {
        // position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
    } else {
      localStorage.setItem("SearchAllData", JSON.stringify(searchFormData));
      dispatch(search_trading_onClick_search_Action(searchFormData));

      setRedirectpPage(true);
    }
  };

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

  const slectedTradie = (tradieID) => {
    if (login === true && verify_OTP.uid !== "" && verify_OTP.role === "user") {
      dispatch(slected_tradie_Id(tradieID));
    } else {
      setalertPopup(true);
    }
  };

  const submitTradieRequest = () => {
    //  return console.log("traide id",tradiesIds)

    if (tradiesIdss.length === 0) {
      toast.error("Please Select Traide", {
        position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
    } else {
      history.push({
        pathname: "/tradie-request",
        state: {
          id: tradiesIdss,
        },
      });
    }
    // setModelOpenTradieRequest(true);
  };

  if (searchingTradie?.length > 0) {
    searchingTradie?.filter((tradieDatas) => {
      if (tradieDatas?.isBtnSelect === true) {
        tradiesIdss.push(tradieDatas.id);
      }
    });
  }

  const sortFilter = searchingTradie?.filter((tradieDatas) =>
    tradieDatas?.service_type?.includes(sortTradieType)
  );

  const sortTradie = () => {
    if (sortFilter?.length > 0) {
      if (sortRating == "low") {
        return sortFilter?.sort((a, b) => a.rating - b.rating);
      } else if (sortRating == "high") {
        return searchingTradie?.sort((a, b) => b.rating - a.rating);
      } else {
        return sortFilter;
      }
    } else if (sortRating == "low") {
      return searchingTradie?.sort((a, b) => a.rating - b.rating);
    } else if (sortRating == "high") {
      return searchingTradie?.sort((a, b) => b.rating - a.rating);
    } else {
      return searchingTradie;
    }
  };

  const selectAllTradie = () => {
    if (login == true && verify_OTP.uid !== "" && verify_OTP.role === "user") {
      if (selectAllTradies === false) {
        dispatch(slected_to_All_tradie_Id());
        setSelectAllTradie(true);
      } else {
        setModelOpenTradieRequest(false);
      }
    } else {
      setalertPopup(true);
    }
  };

  const handleChangeRoute = (tradieId) => {
    history.push(`/tradie-public-profile/${tradieId}`);
    dispatch(get_provider_profile_request({ provider_id: tradieId }));
  };

  let RatingStars;

  if (searchingTradie) {
    searchingTradie?.map((item) => {
      if (parseInt(item?.rating) === 5) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
          </>
        );
      }
      if (parseInt(item?.rating) === 4) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarInactive} />
          </>
        );
      }
      if (parseInt(item?.rating) === 3) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
          </>
        );
      }
      if (parseInt(item?.rating) === 2) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarActive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
          </>
        );
      }
      if (parseInt(item?.rating) === 1) {
        RatingStars = (
          <>
            <img src={StarActive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
          </>
        );
      }
      if (parseInt(item?.rating) === 0 || item.user_data?.rating === null) {
        RatingStars = (
          <>
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
            <img src={StarInactive} />
          </>
        );
      }
    });
  }
  const SearchId = trendingCategories?.length
    ? trendingCategories?.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
        ) {
          return val;
        }
      })
    : null;

  localStorage.setItem(
    "tradiesearchCat",
    JSON.stringify(SearchId ? SearchId[0]?.id : "")
  );

  const deselectall = () => {
    if (tradiesIdss.length > 0) {
      let TradieId = 1;
      tradiesIdss.length = 0;
      setSelectAllTradie(false);
      dispatch(slected_to_All_tradie_Id(TradieId));
    }
  };

  return (
    <div>
      <Header />

      {/* <!-- Any Trade. Any Time.  Any Where --> */}
      <section className="section-top section-top--directory">
        <div className="section-top__before">
          <img src={tradie_directory_1} alt="" />
        </div>
        <h2 className="section-top__title directory-title">
          Any Trade. Any Time. <span> Any Where</span>
        </h2>

        <form onClick={(e) => e.preventDefault()} className="search-form">
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
              <svg>
                {/* <use xlink:href="/assets/icons/sprite.svg#icon-address"></use> */}
              </svg>
            </label>
            <LocationIcon />
            <LocationAutocomplete
              label="Enter your ZIP Code"
              addressValue={adressCookie?.address}
              state={searchFormData}
              setStateFunction={setSearchFormData}
            />
          </div>
          <input
            type="submit"
            className="search-form__submit btn-primary"
            value="Search"
            onClick={handleSubmit}
          />
        </form>
      </section>

      {/* <!-- Filter by Rating --> */}
      <section className="section">
        {valueTab == "list" ? (
          <form className="tradies__filter">
            <div>
              <h4>Filter by Rating</h4>
              <div className="radio-group">
                <input
                  type="radio"
                  id="high-to-low"
                  name="rating"
                  onChange={() => setSortRating("high")}
                />
                <label htmlFor="high-to-low">High to Low</label>
                <span className="checkmark" />
              </div>

              <div className="radio-group">
                <input
                  type="radio"
                  id="low-to-high"
                  name="rating"
                  checked={sortRating === "low"}
                  onChange={() => setSortRating("low")}
                />
                <label htmlFor="low-to-high">Low to High</label>
                <span className="checkmark" />
              </div>
            </div>
            {/* <button onClick={()=>setSortRating("")}>Clear</button> */}
            <div>
              <h4>Select Your Tradie Type</h4>
              <div className="radio-group">
                <input
                  type="radio"
                  id="residential"
                  name="type"
                  defaultChecked={activeResidential}
                  onClick={() => ServiceTypeChange("residential")}
                  // onChange={() => setSortTradie("residential")}
                />
                <label htmlFor="residential">Residential</label>
                <span className="checkmark" />
              </div>
              <div className="radio-group">
                <input
                  type="radio"
                  id="commercial"
                  name="type"
                  defaultChecked={activeCommercial}
                  onClick={() => ServiceTypeChange("commercial")}
                  // onChange={() => setSortTradie("commercial")}
                />
                <label htmlFor="commercial">Commercial</label>
                <span className="checkmark" />
              </div>
            </div>
            {/* <a href="#" className="btn-primary">
            Apply
          </a> */}
          </form>
        ) : (
          ""
        )}
        <div className="map-list">
          <Tabs
            className="list-tab-map-show"
            value={valueTab}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="list" label="List" />
            <Tab value="map" label="Map" />
          </Tabs>

          <nav className="tradies__filter-nav map-select">
            {selectAllTradies && tradiesIdss.length > 0 ? (
              // <Button className="btn-secondary font-m">Selected to All</Button>
              <Button className="btn-secondary font-m" onClick={deselectall}>
                Deselect All
              </Button>
            ) : (
              <Button
                className="btn-secondary font-m"
                onClick={() => {
                  selectAllTradie();
                }}
              >
                Select All{" "}
              </Button>
            )}

            <button
              className="btn-primary font-m"
              style={{ marginLeft: 20 }}
              onClick={() => {
                submitTradieRequest();
              }}
              // disabled={ tradiesIds?.length === 0}
            >
              Send Request
            </button>
          </nav>
        </div>

        {/* {searchingTradie &&
          sortTradie()?.map((item, index) => {
            return (
              <div className="tradies-item tradies-item--row" key={index}>
                <CategoryInfo
                  fullName={item.full_name}
                  picture={item.profile_pic}
                  serviceName={item.service_name}
                  about={item.about_me}
                  id={item.id}
                />
              </div>
            );
          })} */}

        {loading ? (
          valueTab == "list" ? (
            <div className="tradies__grid">
              {searchingTradie && Object.keys(sortTradie()).length > 0 ? (
                sortTradie()?.map((item, index) => {
                  return (
                    <div className="tradies-item" key={index}>
                      <div
                        className="tradies-item__image"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleChangeRoute(item.id);
                        }}
                      >
                        <img
                          src={
                            item.profile_pic
                              ? `https://api.tapatradie.com/profile/${item.id}/` +
                                item.profile_pic
                              : tradie_directory_3
                          }
                          alt="User"
                          loading="lazy"
                        />
                      </div>

                      <div className="tradies-item__content">
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleChangeRoute(item.id);
                          }}
                        >
                          <h4 className="tradies-item__name">
                            {item?.full_name}
                          </h4>
                          <ul className="tradies-item__specialties">
                            <li>{item?.service_name}</li>
                          </ul>
                          <div className="tradies-item__rating">
                            <StarRatings
                              rating={
                                item?.rating
                                  ? Math.round(Number(item?.rating) * 10) / 10
                                  : 0
                              }
                              starRatedColor="orange"
                              numberOfStars={5}
                              name="rating"
                              starSpacing="1px"
                              starDimension="17px"
                            />
                          </div>
                        </div>
                        <span
                          className="list-box_online"
                          style={{ marginTop: "-10px", marginBottom: "3px" }}
                        >
                          {item.online === 1 ? (
                            <>
                              <GoPrimitiveDot color="green" /> Online
                            </>
                          ) : (
                            <>
                              <GoPrimitiveDot color="red" /> Offline
                            </>
                          )}
                        </span>
                        {/* {item?.isBtnSelect  === true ? (
                      <Link
                        to={{
                          pathname: "/tradie-request",
                          state: {
                            id: tradiesIds,
                          },
                        }}
                        className={`tradies-item__select ${
                          item?.isBtnSelect === true
                            ? "bg-light-orange"
                            : "btn-primary"
                        }`}
                      >
                        {item.isBtnSelect === true ? "Deselect" : "Select"}
                      </Link>
                    ) : ( */}
                        <Button
                          role="button"
                          to="/tradie-request"
                          className={`tradies-item__select ${
                            item?.isBtnSelect === true
                              ? "bg-light-orange"
                              : "btn-primary"
                          }`}
                          onClick={() => {
                            slectedTradie(item.id);
                          }}
                        >
                          {item.isBtnSelect === true ? "Deselect" : "Select"}
                        </Button>
                        {/* )} */}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="tradies-item">
                  <center>No Tradie Found!</center>
                </div>
              )}
            </div>
          ) : (
            <div style={{ width: "100%", height: 500 }}>
              <GoogleMapss />
            </div>
          )
        ) : (
          <center>
            <CircularProgress />
          </center>
        )}
      </section>

      {/* <!-- Register as a Tradie Today! --> */}
      {userInfo?.access ? (
        ""
      ) : (
        <section
          section
          className="section--register-tradie"
          style={{ zIndex: "0" }}
        >
          <div className="register-tradie">
            <h4>Register as a Tradie Today!</h4>
            <p>
              List your business here, fill in your profile, control when and
              where you work and meet some amazing new clients.
            </p>
            <Link to="/sign-up" role="button">
              Register Now
            </Link>
          </div>
        </section>
      )}

      {/* <!-- Are you a Professional Tradie? --> */}
      {userInfo?.access == "provider" ? (
        ""
      ) : (
        <section section className="section section--left">
          <div className="professional-tradie">
            <div className="professional-tradie__description">
              <h3 className="professional-tradie__title">
                Are you a Professional Tradie?
              </h3>
              <p>
                If you would like to be part of our Tradie community and are
                ready to meet new clients today please continue so we can
                welcome you onboard.
              </p>
              <Link to="/about-us" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="professional-tradie__image">
              <img src={tradie_directory_4} alt="" />
            </div>
          </div>
        </section>
      )}

      <Footer />
      {modelOpenTradieRequest && (
        <TradieRequestModel
          modelOpenTradieRequest={modelOpenTradieRequest}
          tradiesIds={tradiesIdss}
          setModelOpenTradieRequest={setModelOpenTradieRequest}
        />
      )}

      {alertPopup && <AlertPopup setalertPopup={setalertPopup} />}
    </div>
  );
};

export default Index;
