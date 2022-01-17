import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// Handling Form with Formik
import { Formik, Form } from "formik";
// Handling Form Validation with yup
import * as Yup from "yup";
import { user_to_tradie_request } from "../../redux/directory/action";
import AutoCompleteSearch from "../Directory/AutoCompleteSearch";
import { ReactComponent as LocationIcon } from "../../assets/icons/locationSvg.svg";
import moment from "moment";
import tradie_request_1 from "../../assets/images/professional-tradie.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Index = (props) => {
  let tradieId = props.location.state;
  const { userData } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const { userTradieReqRes } = useSelector((state) => state.directory);
  const [selectDate, setSelectDate] = useState();
  const [selectTime, setSelectTime] = useState();
  const [SelectRole, setSelectRole] = useState(false);
  const [SelectService, setSelectService] = useState(false);
  const [searchFormData, setSearchFormData] = useState({
    searchQuery: "",
    latitude: "",
    longitude: "",
    locationAdress: "",
  });
  const serviceId = localStorage.getItem("tradiesearchCat");
  const SearchItem = JSON.parse(localStorage.getItem("tradiesearch"));

  const initialValues = {
    uid: "",
    title: "",
    detail: "",
    tradie_id: tradieId.id,
    service_id: serviceId,
    search: SearchItem.search,
    search_type: SearchItem.search,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Job Title is required").min(4),
    detail: Yup.string().required("Job Detail is required"),
    // address: Yup.string().required("address is required"),
    city: Yup.string().required("city is required"),
    state: Yup.string().required("city is required"),
  });
  const handleSubmit = (values) => {
    const locationData = {
      latitude: searchFormData.latitude,
      longitude: searchFormData.longitude,
      address: searchFormData.locationAdress,
    };
    const tradieType = {
      tradie_type: SelectRole ? "commercial" : "residential",
      service_type: SelectService ? "later" : "immediately",
      date: SelectService
        ? moment(selectDate).format("YYYY-MM-DD")
        : moment(new Date()).format("YYYY-MM-DD"),
      time: SelectService ? selectTime : moment(new Date()).format("HH:mm:ss"),
    };
    const tradieRequest = Object.assign({}, values, locationData, tradieType);
    dispatch(user_to_tradie_request(tradieRequest));
    // console.log("Submit", Object.assign({}, values, locationData, tradieType));
  };
  useEffect(() => {
    if (userTradieReqRes) {
      if (userTradieReqRes.success === 1) {
        history.push("/user-bookings");
        toast.success(userTradieReqRes.message, {
          position: "bottom-left",
          autoClose: 2000,
          size: "small",
        });
      } else {
        toast.error(userTradieReqRes.message, {
          position: "bottom-left",
          autoClose: 2000,
          size: "small",
        });
      }
    }
    setTimeout(() => {
      dispatch({ type: "USER_JOB_REQUEST_TO_TRADIE_SUCCESS", payload: "" });
    }, 1000);
  }, [userTradieReqRes]);

  return (
    <div>
      <Header />

      {/* <!-- Tradie Request --> */}
      <section className="section-top">
        <h2 className="section-top__title">
          Request <span>Tradie</span>
        </h2>
      </section>

      <section className="section section-middle">
        <Formik
          enableReinitialize="true"
          initialValues={initialValues}
          onSubmit={handleSubmit}
          // validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form autoComplete="off" className="tradie-request__form">
                {/* <form action="#" className="tradie-request__form"> */}
                <div className="input-group-1">
                  <input
                    type="text"
                    placeholder="Job Title"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />

                  <input
                    type="text"
                    placeholder="Job Detail"
                    name="detail"
                    onChange={formik.handleChange}
                    value={formik.values.detail}
                  />

                  {/* <input type="text" placeholder="Location" name="" /> */}

                  {/* <LocationIcon /> */}
                  <AutoCompleteSearch
                    state={searchFormData}
                    setStateFunction={setSearchFormData}
                  />
                </div>

                <label>When would you like your service?</label>
                <div className="input-group-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectService(false);
                    }}
                    style={{
                      color: `${SelectService ? "black" : "#ec9422"}`,
                      cursor: "pointer",
                    }}
                  >
                    Immediately
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectService(true);
                    }}
                    style={{
                      color: `${SelectService ? "#ec9422" : "black"}`,
                      cursor: "pointer",
                    }}
                  >
                    Choose Date
                  </button>

                  {!SelectService ? (
                    ""
                  ) : (
                    <>
                      {" "}
                      <input
                        type="date"
                        placeholder="Choose Date"
                        name="date"
                        onChange={(e) => setSelectDate(e.target.value)}
                        // value={formik.values.date}
                      />
                      <input
                        type="time"
                        placeholder="Choose Date"
                        name="time"
                        step="1"
                        onChange={(e) => setSelectTime(e.target.value)}
                        // value={formik.values.time}
                      />
                    </>
                  )}
                </div>

                <label>Select your tradie type</label>
                <div className="input-group-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectRole(false);
                    }}
                    style={{
                      color: `${SelectRole ? "black" : "#ec9422"}`,
                      cursor: "pointer",
                    }}
                  >
                    Residential
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectRole(true);
                    }}
                    style={{
                      color: `${SelectRole ? "#ec9422" : "black"}`,
                      cursor: "pointer",
                    }}
                  >
                    Commercial
                  </button>
                </div>
                <button type="submit" className="btn-primary">
                  Next
                </button>
                {/* </form> */}
              </Form>
            );
          }}
        </Formik>
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
                If you would like to be part of our Tradie community and are
                ready to meet new clients today please continue so we can
                welcome you onboard.
              </p>
              <Link to="/about-us" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="professional-tradie__image">
              <img src={tradie_request_1} alt="" />
            </div>
          </div>
        </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
