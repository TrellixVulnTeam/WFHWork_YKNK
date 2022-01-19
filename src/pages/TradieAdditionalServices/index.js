import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import tradie_add_service_2 from "../../assets/images/professional-tradie.jpg";
import NavigationLinks from "../../components/Tradie Name/Index";
import * as Actions from "../../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Section_top_1 from "../../assets/icons/section-top-directory-before.svg";


toast.configure();

const Index = () => {
  const history = useHistory();
  const { getServiceList, SelectedServices, userData, selected_services } =
    useSelector((state) => state.auth);

  const { services, businessUpdateres } = useSelector((state) => state.auth);
  const { name } = services;
  const dispatch = useDispatch();

  const {
    Get_Service_list_Action,
    Provider_Asssign_Service_Action,
    User_Profile_Get_Information_Action,
  } = Actions;

  const [search, setSearch] = useState("");

  const [residential, setResidential] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [tradie_type, setTradie_type] = useState([]);
  const [removeItem, setRemoveItem] = useState([]);
  useEffect(() => {
    if (services) {
      services?.map((res) => {
        if (res.service_type == "residential") {
          setResidential(true);
          setTradie_type("residential");
        } else if (res.service_type == "commercial") {
          setCommercial(true);
          setTradie_type("commercial");
        }
      });
    }
  }, [services]);
  const [DataToSend, setDataToSend] = useState([]);
  useEffect(() => {
    dispatch(Get_Service_list_Action());
    dispatch(User_Profile_Get_Information_Action());
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (data) => {
    const { id } = data;

    //check id already exist or not
    const checkItem = DataToSend?.some((item) => item === id);

    if (!checkItem) {
      setDataToSend((prevState) => [...prevState, id]);
    }
    services.filter((res) => {
      if (res.id === id) {
        setRemoveItem([...removeItem, res.id]);
      }
    });

    //check unchecked condition removed
    if (checkItem) {
      const filderItem = DataToSend?.filter((item) => item !== id);

      setDataToSend(filderItem);
    }
  };

  useEffect(() => {
    if (businessUpdateres) {
      if (businessUpdateres.success == 1) {
        toast.success(businessUpdateres.message, {
          position: "bottom-left",
          autoClose: 2000,
          size: "small",
        });
        history.push("/tradie-service-location");
      } else {
        toast.error("Something went wrong", {
          position: "bottom-left",
          autoClose: 2000,
          size: "small",
        });
      }
    }
    setTimeout(() => {
      dispatch({ type: "BUSINESSS_DETAILS_UPDATE_SUCCESS", payloade: "" });
    }, 1000);
  }, [businessUpdateres]);

  const serachServicesTradie = () => {
    if (getServiceList?.length) {
      const getAllSErvce = getServiceList
        ?.filter((val) => {
          if (search === "") {
            return val;
          } else if (val.name.toLowerCase().includes(search?.toLowerCase())) {
            return val;
          }
        })
        .map((val) => {
          return (
            <label
              className="container"
              style={{ textTransform: "capitalize" }}
              key={val.id}
            >
              {val.name}
              {/* {services?.map((res) => ( */}
              <input
                type="checkbox"
                defaultChecked={services.find((res) => {
                  return res.id == val.id;
                })}
                onChange={(e) => handleChange(val)}
              />
              {/* ))} */}
              <span className="checkmark" />

              <hr />
            </label>
          );
        });
      return getAllSErvce.length > 0 ? (
        getAllSErvce
      ) : (
        <center>No Category Found</center>
      );
    }
  };

  const handleTradieType = (tradieType) => {
    if (tradieType === "residential" && residential === false) {
      setResidential(true);
      setTradie_type([...tradie_type, tradieType]);
    } else if (tradieType === "residential" && residential === true) {
      const data = tradie_type.filter(function (item) {
        return item !== tradieType;
      });
      setTradie_type(data);

      setResidential(false);
    } else if (tradieType === "commercial" && commercial === false) {
      setCommercial(true);
      setTradie_type([...tradie_type, tradieType]);
    } else if (tradieType === "commercial" && commercial === true) {
      const data = tradie_type.filter(function (item) {
        return item !== tradieType;
      });
      setTradie_type(data);
      setCommercial(false);
    }
  };
  const submitTradieService = (e) => {
    e.preventDefault();

    const dataSend = {
      serviceIdRole: DataToSend.toString(),
      role: tradie_type.toString(),
      remove_services: removeItem.toString(),
    };

    dispatch(Provider_Asssign_Service_Action(dataSend));
  };
  const Back = () => {
    history.goBack();
  };
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
          <NavigationLinks />
          <form action="#" className="tradie-my-profile__form">
            <h4>Additional Service Information </h4>

            <label className="m-b-1">Search your business category</label>
            <div className="input-group">
              <input
                value={search}
                onChange={(e) => {
                  handleSearch(e);
                }}
                className="w-100 additional-service-information"
                type="text"
                placeholder="Search for a service"
              />
            </div>
            <label className="m-b-1">Select your service type</label>
            <div className="input-group residential-commercial">
              <button
                type="button"
                onClick={() => {
                  handleTradieType("residential");
                }}
                style={{
                  color: `${residential ? "#ec9422" : "#666"}`,
                  border: `${residential ? "#ec9422 solid 1px" : "#666 "}`,
                  cursor: "pointer",
                }}
              >
                Residential
              </button>
              <button
                type="button"
                onClick={() => {
                  handleTradieType("commercial");
                }}
                style={{
                  color: `${commercial ? "#ec9422" : "#666"}`,
                  border: `${commercial ? "#ec9422 solid 1px" : "#666 "}`,
                  cursor: "pointer",
                }}
              >
                Commercial
              </button>
            </div>
            <label className="m-b-1">All Categories</label>
            <div className="input-group mb-1">
              {serachServicesTradie()}
              {/* {getServiceList && getServiceList.map((servericeItem) => (
                <label className="container" style={{ textTransform: "capitalize" }}>
                  {servericeItem.name}
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <hr />
                </label>
              ))} */}
            </div>

            <div className="input-group mb-1">
              <label className="container text-others">
                <a
                  className="text-others"
                  onClick={Back}
                  style={{ cursor: "pointer" }}
                >
                  Back
                </a>
                <input type="text" />
                <span className="text-others" />
                <hr />
              </label>
            </div>

            <div className="input-group btn">
              <input
                type="submit"
                className="btn-primary"
                onClick={(e) => {
                  submitTradieService(e);
                }}
                value="Save"
                style={{ float: "right" }}
              />
            </div>
          </form>
        </div>
      </section>

      {/* // <!-- Are you a Professional Tradie? --> */}
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
            <img src={tradie_add_service_2} alt="" />
          </div>
        </div>
      </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
