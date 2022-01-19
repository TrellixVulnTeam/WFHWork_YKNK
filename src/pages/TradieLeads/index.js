import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import tradie_leads_1 from "../../assets/images/1601545174666_user-profile_2020_10_01_17_39_31_786_ 1.jpg";
import tradie_leads_2 from "../../assets/icons/icon-deadline.png";
import tradie_leads_3 from "../../assets/icons/icon-location.png";
import tradie_leads_4 from "../../assets/images/professional-tradie.jpg";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/directory/action";
import moment from "moment";
import ViewDetailPoppup from "./ViewDetailPopup";
import TakeDone from "./TakeDonePopup";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const [viewDetailPopup, setViewDetailPopup] = useState(false);
  const [tabSelect, setTabSelect] = useState("current");
  const [viewData, setViewData] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alertData, setAlertData] = useState([]);
  // const [tradieLeads, setTradieLeads] = useState([]);
  const { provider_leads_request, provider_leads_history_request } = Actions;
  const { providerJobAccept } = useSelector((state) => state.directory);
  const {
    providerLeads,
    providerLeadsHistory,
    singleTradieRes,
    reviewRes,
    disputeRes,
  } = useSelector((state) => state.directory);
  const providerAccepted = JSON.parse(
    localStorage.getItem("provideLeadAction")
  );

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: "my-auth-token",
    },
  };
  // useEffect(() => {
  //   let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  //   var UserLeads = {
  //     access_token: userInfo.access_token,
  //     device_id: userInfo.device_id,
  //     api_key: userInfo.api_key,
  //     device_type: userInfo.device_type,
  //     lead_type: "new",
  //     page: 1,
  //     uid: userInfo.uid,
  //   };
  //   axios
  //     .post("https://api.tapatradie.com/api/provider-leads", UserLeads, config)
  //     .then((res) => setTradieLeads(res?.data));
  // }, []);
  useEffect(() => {
    dispatch(provider_leads_request());
    dispatch(provider_leads_history_request());
  }, [providerJobAccept, singleTradieRes, reviewRes, disputeRes]);

  const handleViewDetailLead = (leads) => {
    setViewData(leads);
    setViewDetailPopup(true);
  };

  const handleAlert = (viewData, e) => {
    e.preventDefault();
    setAlertData(viewData);
    setAlert(true);
  };
  const leadStatus = providerLeadsHistory?.map((leads) => {
    if (leads.dispute == 1) {
      if (leads.user_status == "completed") {
        return "Completed";
      } else {
        return "Disputed";
      }
    } else {
      if (leads.status == "deleted") {
        return "Completed";
      } else if (leads.status == "cancel") {
        return "Settled";
      } else {
        if (leads.user_status == "accept") {
          return "Completed";
        } else if ((leads.user_status = "completed")) {
          return "Completed";
        } else if ((leads.user_status = "deleted")) {
          return "Completed";
        } else {
          return "Declined";
        }
      }
    }
  });
 
  const Back = () => {
    history.goBack();
  };

  return (
    <div>
      <Header />
      {/* <!-- My Leads --> */}
      <section className="section-top section-top--calender">
        <h2 className="section-top__title">
          My <span>Leads</span>
        </h2>
      </section>
      <section className="section section--calender">
        <div className="calender">
          <div>
            <a
              onClick={Back}
              className="calender__back"
              style={{ cursor: "pointer" }}
            >
              {" "}
              Back{" "}
            </a>
            <nav className="calender__nav">
              <span
                href="javascript:void(0)"
                className={
                  tabSelect === "current" ? "calender__nav-active" : ""
                }
                onClick={() => {
                  setTabSelect("current");
                }}
              >
                Current
              </span>
              <span
                onClick={() => {
                  setTabSelect("history");
                }}
                className={
                  tabSelect === "history" ? "calender__nav-active" : ""
                }
              >
                History
              </span>
              <span href="javascript:void(0)"> </span>
            </nav>
            {tabSelect === "current" ? (
              <div className="calender__events">
                {Object.keys(providerLeads).length > 0 ? (
                  providerLeads?.map((leads) => (
                    <div className="event">
                      <a href="javascript:void(0)" className="event__budge">
                        {leads.dispute == 1 ? (
                          leads.user_status == "completed" ? (
                            <p>Completed</p>
                          ) : (
                            "Disputed"
                          )
                        ) : leads.status == "deleted" ? (
                          "Deleted"
                        ) : leads.user_status == "pending" &&
                          leads.provider_status == "pending" ? (
                          "Pending"
                        ) : leads.status == "cancel" ? (
                          "Settled"
                        ) : leads.user_status == "accept" ? (
                          "Accepted"
                        ) : leads.provider_status == "accept" ? (
                          "Accepted"
                        ) : (
                          (leads.provider_status = "completed"
                            ? "Completed"
                            : (leads.user_status = "deleted"
                                ? "Deleted"
                                : "Declined"))
                        )}
                        {leads.user_status == "reject"
                          ? localStorage.removeItem("provideLeadAction")
                          : ""}
                      </a>
                      <div className="event__what event__what--img">
                        <div>
                          <img
                            src={
                              leads.profile_pic
                                ? `https://api.tapatradie.com/uploads/` +
                                  leads.profile_pic
                                : "http://78.46.210.25/tapatradieweb/assets/images/dummy-icon-round.png"
                            }
                            alt=""
                          />
                        </div>
                        <h4 style={{ textTransform: "capitalize" }}>
                          {leads.full_name}
                        </h4>
                      </div>
                      <span
                        style={{
                          marginBottom: "20px",
                          fontSize: "1.8rem",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <h4>Title</h4>
                        <p>
                          {" "}
                          {leads?.title?.charAt(0).toUpperCase() +
                            leads?.title?.slice(1)}
                        </p>
                      </span>
                      <p className="event__when-where">
                        <img src={tradie_leads_2} />
                        {moment(leads.time, ["HH.mm.ss"]).format(
                          "hh:mm A"
                        )} on {moment(leads.date).format("ll")}
                      </p>
                      <p className="event__when-where">
                        <img src={tradie_leads_3} />
                        {leads.address}
                      </p>
                      {providerAccepted == "accept" ? (
                        <a
                          href="javascript:void(0)"
                          className="btn-primary"
                          //  onClick={() => {
                          //    handleViewDetailLead(leads);
                          //  }}
                          onClick={(e) => {
                            handleAlert(leads, e);
                          }}
                        >
                          Task Done
                        </a>
                      ) : (
                        <a
                          href="javascript:void(0)"
                          className="btn-primary"
                          onClick={() => {
                            handleViewDetailLead(leads);
                          }}
                        >
                          View Details
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="no-listing-box">
                    <img src="http://78.46.210.25/tapatradieweb/assets/images/no-listing.png" />
                    <p>No Leads Found</p>
                  </div>
                )}
              </div>
            ) : null}
            {tabSelect === "history" ? (
              <>
                {Object.keys(providerLeadsHistory).length > 0 ? (
                  <div className="calender__events">
                    {providerLeadsHistory.map((leads) => (
                      <div className="event">
                        <a href="javascript:void(0)" className="event__budge">
                          {leads.dispute == 1 ? (
                            leads.user_status == "completed" ? (
                              <p>Completed</p>
                            ) : (
                              "Disputed"
                            )
                          ) : leads.status == "deleted" ? (
                            "Completed"
                          ) : leads.status == "cancel" ? (
                            "Settled"
                          ) : (
                            (leads.user_status = "completed"
                              ? "Completed"
                              : (leads.user_status = "deleted"
                                  ? "Completed"
                                  : "Declined"))
                          )}
                        </a>
                        <div className="event__what event__what--img">
                          <div>
                            <img
                              src={
                                leads.profile_pic !== ""
                                  ? `https://api.tapatradie.com/uploads/` +
                                    leads.profile_pic
                                  : "http://78.46.210.25/tapatradieweb/assets/images/dummy-icon-round.png"
                              }
                              alt=""
                            />
                          </div>
                          <h4 style={{ textTransform: "capitalize" }}>
                            {leads.full_name}
                          </h4>
                        </div>
                        <p className="event__when-where">
                          <img src={tradie_leads_2} />
                          {moment(leads.time, ["HH.mm.ss"]).format(
                            "hh:mm A"
                          )}{" "}
                          on {moment(leads.date).format("ll")}
                        </p>
                        <p className="event__when-where">
                          <img src={tradie_leads_3} />
                          {leads.address}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (

                  <div className="no-listing-box">
                    <img src="http://78.46.210.25/tapatradieweb/assets/images/no-listing.png" />
                    <p>No Leads Found</p>

                  <div className="calender__events">
                    <div className="no-listing-box">
                      <img src="https://sample.jploftsolutions.in/tapImages/no-listing.png" />
                      <p>No History Found</p>
                    </div>
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
      </section>
      {viewDetailPopup && (
        <ViewDetailPoppup
          setViewDetailPopup={setViewDetailPopup}
          viewData={viewData}
        />
      )}{" "}
      {alert && (
        <TakeDone
          setAlert={setAlert}
          alertData={alertData}
          setViewDetailPopup={setViewDetailPopup}
        />
      )}
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
            <img src={tradie_leads_4} alt="" />
          </div>
        </div>
      </section>
      {/* )} */}
      <Footer />
    </div>
  );
};

export default Index;
