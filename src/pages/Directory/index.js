import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/directory/action";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section_top_1 from "../../assets/icons/section-top-directory-before.svg";
import Section_top_2 from "../../assets/icons/directory-title-before.svg";
import Section_top_3 from "../../assets/icons/electrician.png";
import Section_top_4 from "../../assets/icons/plumber.png";
import Section_top_5 from "../../assets/icons/carpenter.png";
import Section_top_6 from "../../assets/icons/tiler.png";
import Section_top_7 from "../../assets/icons/painter.png";
import Section_top_8 from "../../assets/icons/plasterer.png";
import Section_top_9 from "../../assets/icons/landscaper.png";
import Section_top_10 from "../../assets/icons/labourer.png";
import Section_top_11 from "../../assets/icons/bricklayer.png";
import Section_top_12 from "../../assets/icons/mowing.png";
import Section_top_13 from "../../assets/icons/builder.png";
import Section_top_14 from "../../assets/images/professional-tradie.jpg";
import AutoCompleteSearch from "./AutoCompleteSearch";
import { ReactComponent as LocationIcon } from "../../assets/icons/locationSvg.svg";
import useComponentVisibleHook from "./useComponentVisibleHook";
import { Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Index = () => {

  const {
    trendingAllCategories_Action,
    search_trading_onClick_search_Action,
    search_trading_service_Action,
  } = Actions;

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisibleHook(true);

  const { trendingCategories, searchingTradie } = useSelector(
    (state) => state.directory
  );

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [redirectpPage, setRedirectpPage] = useState(false);
  const [searchFormData, setSearchFormData] = useState({
    searchQuery: "",
    latitude: "",
    longitude: "",
  });

  const [modelOpen, setModelOpen] = useState(false);
  useEffect(() => {
    dispatch(trendingAllCategories_Action());
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
      {trendingCategories?.length ? (
        trendingCategories
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
              <Link
                key={val.id}
                href="#2"
                onClick={(event) => {
                  goalInputHandler1(val.name);
                  event.preventDefault();
                }}
                className="section-top__search-category-Listitems"
              >
                <span> {val.name}</span>
              </Link>
            );
          })
      ) : (
        null
      )}
    </div>
  );

  return (
    <div>
      <Header />
      <section className="directory-top-section section-top--directory">
        <div className="section-top__before">
          <img src={Section_top_1} alt="" />
        </div>
       <div className="">
       <h2 className="section-top__title">
          <img
            className="section-top__title-before"
            src={Section_top_2}
            alt=""
          />
          Start your project <span> today </span>
        </h2>
        <form
          action="#"
          className="search-form"
          onClick={(e) => e.preventDefault()}
        >
          <input

            type="text"
            value={searchTerm}
            placeholder="What service do you need?"
            className="search-form__service"
            onChange={handleInputValueSet}
          />
          {isComponentVisible &&
            modelOpen ?
            searchTerm?.length === 0 ? null : (
              <div ref={ref} className="section-top__autocomplete-search-category" style={{ zIndex: 1 }}>
                {content4?.props?.children?.length === 0 ? <p style={{ textAlign: "center" }}>No Search Found</p> :

                  null
                }
                {content4}
              </div>
            ) : null}

          <div className="search-form__address">
            <label for="address">
              <svg>
                {/* <use xlink:href="/assets/icons/sprite.svg#icon-address"></use> */}
              </svg>
            </label>
            <LocationIcon />
            <AutoCompleteSearch
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
       </div>
      </section>

      <section className="section">
        <h2 className="section__title">Trending Services</h2>
        <div className="trending-services">
          <Link
            to="/tradie-directory"
            className="trending-services__item"
            onClick={() => {
              SendData({ search: "electrician" });
            }}
          >
            <div>
              <img src={Section_top_3} alt="" />
            </div>
            <h4>Electrician</h4>
          </Link>
          <Link
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "plumber" });
            }}
            className="trending-services__item"
          >
            <div>
              <img src={Section_top_4} alt="" />
            </div>
            <h4>Plumber</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "carpenter" });
            }}
          >
            <div>
              <img src={Section_top_5} alt="" />
            </div>
            <h4>Carpenter</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "tiler" });
            }}
          >
            <div>
              <img src={Section_top_6} alt="" />
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
              <img src={Section_top_7} alt="" />
            </div>
            <h4>Painter</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "plasterer" });
            }}
          >
            <div>
              <img src={Section_top_8} alt="" />
            </div>
            <h4>Plasterer</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "landscaper" });
            }}
          >
            <div>
              <img src={Section_top_9} alt="" />
            </div>
            <h4>Landscaper</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "labourer" });
            }}
          >
            <div>
              <img src={Section_top_10} alt="" />
            </div>
            <h4>Labourer</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "bricklayer" });
            }}
          >
            <div>
              <img src={Section_top_11} alt="" />
            </div>
            <h4>Bricklayer</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "lawn mowing" });
            }}
          >
            <div>
              <img src={Section_top_12} alt="" />
            </div>
            <h4>Lawn Mowing</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/tradie-directory"
            onClick={() => {
              SendData({ search: "builder" });
            }}
          >
            <div>
              <img src={Section_top_13} alt="" />
            </div>
            <h4>Builder</h4>
          </Link>
          <Link
            className="trending-services__item"
            to="/our-services"
            onClick={() => {
              SendData({ search: "more" });
            }}
          >
            <h4>More Services</h4>
          </Link>
        </div>
      </section>
      {/* new links */}
      <section className="section">
        <h2 className="section__title">All Categories</h2>
        <div className="categories">
          <div className="categories__column">
            <div className="category">
              <h4 className="category__letter">A</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Air Conditioning" });
                    }}
                  >
                    Air Conditioning
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Antenna, Audio Visual" });
                    }}
                  >
                    Antenna, Audio Visual &amp; Computers
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Appliance Repair" });
                    }}
                  >
                    Appliance Repair
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Asbestos and Mold services" });
                    }}
                  >
                    Asbestos And Mold Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">b</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Bathroom Renovation" });
                    }}
                  >
                    {" "}
                    Bathroom Renovation
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Bob Cat Services" });
                    }}
                  >
                    {" "}
                    Bob Cat Services
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "bricklayer" });
                    }}
                  >
                    Bricklayer
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Builder" });
                    }}
                  >
                    {" "}
                    Builder
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Builders" });
                    }}
                  >
                    {" "}
                    Builders &amp; Contractors
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Building Inspections / Certifiers" });
                    }}
                  >
                    {" "}
                    Building Inspections/certifiers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">c</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Cabinet " });
                    }}
                  >
                    Cabinet &amp; Kitchen makers
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "carpenter" });
                    }}
                  >
                    {" "}
                    Carpenter
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Carpet " });
                    }}
                  >
                    {" "}
                    Carpet &amp; Upholstery cleaning
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Ceilings" });
                    }}
                  >
                    {" "}
                    Ceilings
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Civil Construction" });
                    }}
                  >
                    {" "}
                    Civil Construction
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Cleaning services" });
                    }}
                  >
                    {" "}
                    Cleaning Services
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Concrete Services" });
                    }}
                  >
                    {" "}
                    Concrete Services
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Counter and bench tops" });
                    }}
                  >
                    {" "}
                    Counter &amp; Bench tops
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">d</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Demolition Contractors" });
                    }}
                  >
                    Demolition Contractors
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Doors" });
                    }}
                  >
                    {" "}
                    Doors
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Drainage" });
                    }}
                  >
                    {" "}
                    Drainage
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Dry-wall Wet Wall" });
                    }}
                  >
                    {" "}
                    Dry-wall Wet wall &amp; Plastering
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="categories__column">
            <div className="category">
              <h4 className="category__letter">E</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "electrician" });
                    }}
                  >
                    Electrician
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Equipment Hire" });
                    }}
                  >
                    {" "}
                    Equipment Hire
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Excavation and Digger Hire" });
                    }}
                  >
                    {" "}
                    Excavation &amp; Digger Hire
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">f</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Fencing" });
                    }}
                  >
                    Fencing
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Flooring and Carpet" });
                    }}
                  >
                    {" "}
                    Flooring &amp; Carpet
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Fly Screens" });
                    }}
                  >
                    Fly Screens
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">g</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Garage doors" });
                    }}
                  >
                    Garage Doors
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Gas Fitters" });
                    }}
                  >
                    {" "}
                    Gas Fitters
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Glass" });
                    }}
                  >
                    {" "}
                    Gas &amp; Glazing
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Gutters " });
                    }}
                  >
                    {" "}
                    Gutters &amp; Down pipes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">h</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Handyman Services" });
                    }}
                  >
                    Handyman Services
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Heating systems" });
                    }}
                  >
                    {" "}
                    Heating Systems
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Home Inspection" });
                    }}
                  >
                    {" "}
                    Home Inspection
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Home Security" });
                    }}
                  >
                    {" "}
                    Home Security
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">i</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Insulation" });
                    }}
                  >
                    Insulation
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Irrigation " });
                    }}
                  >
                    {" "}
                    Irrigation &amp; Rectic systems
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="categories__column">
            <div className="category">
              <h4 className="category__letter">J</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Joinery" });
                    }}
                  >
                    Joinery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">l</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "labourer" });
                    }}
                  >
                    Labourer
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Labourer " });
                    }}
                  >
                    {" "}
                    Labourer &amp; General Operative
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "landscaper" });
                    }}
                  >
                    {" "}
                    Landscaper
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Landscaping" });
                    }}
                  >
                    {" "}
                    Landscaping
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "lawn mowing" });
                    }}
                  >
                    {" "}
                    Lawn Mowing
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Lawn Mowing " });
                    }}
                  >
                    {" "}
                    Lawn &amp; Garden Care
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Lock Smith" });
                    }}
                  >
                    {" "}
                    Lock Smith
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">m</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Maintenance" });
                    }}
                  >
                    Maintenance
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Metal Fabrication and welding" });
                    }}
                  >
                    {" "}
                    Metal fabrication &amp; Welding
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">p</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "painter" });
                    }}
                  >
                    Painter
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Painting and Decorating" });
                    }}
                  >
                    {" "}
                    Painting &amp; Decorating
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Paving" });
                    }}
                  >
                    {" "}
                    Paving
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Pest Control" });
                    }}
                  >
                    {" "}
                    Pest Control
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "plasterer" });
                    }}
                  >
                    {" "}
                    Plasterer
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "plumber" });
                    }}
                  >
                    {" "}
                    Plumber
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Plumbing and Heating" });
                    }}
                  >
                    {" "}
                    Plumbing &amp; Heating
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Power Washing" });
                    }}
                  >
                    {" "}
                    Power Washing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="categories__column">
            <div className="category">
              <h4 className="category__letter">r</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Removal and Delivery Service" });
                    }}
                  >
                    {" "}
                    Removal &amp; Delivery service
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Retaining Walls" });
                    }}
                  >
                    {" "}
                    Retaining Walls
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Roofing" });
                    }}
                  >
                    {" "}
                    Roofing{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">s</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Septic Tanks " });
                    }}
                  >
                    Septic tanks &amp; Wells
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Sewer Services" });
                    }}
                  >
                    {" "}
                    Sewer Services
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Silicon and Sealing Service" });
                    }}
                  >
                    {" "}
                    Silicon &amp; Sealing services
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Solar Panels" });
                    }}
                  >
                    {" "}
                    Solar Panels
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Stone Mason" });
                    }}
                  >
                    {" "}
                    Stone Mason
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Swimming Pools" });
                    }}
                  >
                    {" "}
                    Swimming Pools
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">t</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Dry-wall Wet Wall" });
                    }}
                  >
                    Tiler
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "tiler" });
                    }}
                  >
                    {" "}
                    Tiling
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Timber flooring" });
                    }}
                  >
                    {" "}
                    Timber Flooring
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Torch on Felt" });
                    }}
                  >
                    {" "}
                    Torch On Felt
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Tree Services / Arborists" });
                    }}
                  >
                    {" "}
                    Tree Services/Aborists
                  </Link>
                </li>
              </ul>
            </div>
            <div className="category">
              <h4 className="category__letter">w</h4>
              <ul className="category__list">
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Wall Cladding / Siding" });
                    }}
                  >
                    Wall Cladding/Slide
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Waste Removal Services" });
                    }}
                  >
                    {" "}
                    Waste Removal services
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Waterproofing" });
                    }}
                  >
                    {" "}
                    Waterproofing
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                    to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Window Tinting" });
                    }}
                  >
                    {" "}
                    Window Tinting
                  </Link>
                </li>
                <li className="category__item">
                  <Link
                   to="/tradie-directory"
                    className="category__link"
                    onClick={() => {
                      SendData({ search: "Windows" });
                    }}
                  >
                    {" "}
                    Windows
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--left">
        <div className="professional-tradie">
          <div className="professional-tradie__description">
            <h3 className="professional-tradie__title">
              Are you Link Professional Tradie?
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
            <img src={Section_top_14} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div >
  );
};

export default Index;
