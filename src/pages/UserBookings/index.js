import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import user_bookings__1 from "../../assets/icons/icon-deadline.png";
import user_bookings__2 from "../../assets/images/professional-tradie.jpg";
import * as Actions from "../../redux/directory/action";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router";
import TakeDone from "./TakeDonePopup";
import RateTradie from "./RateTradie";
import DisputeJob from "./DisputeJob";
import Section_top_1 from "../../assets/icons/section-top-directory-before.svg";

const Index = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const { userLeads, userLeadHistory } = useSelector(
    (state) => state.directory
  );

  const {
    user_leads_request,
    user_single_lead_request,
    user_leads_history_request,
  } = Actions;
  const [tabSelect, setTabSelect] = useState("current");
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  const [alert, setAlert] = useState(false);
  const [rateAlert, setRateAlert] = useState(false);
  const [disputeAlert, setDisputeAlert] = useState(false);
  const [rateData, setRateData] = useState();
  const [disputeData, setDisputeData] = useState();
  const [alertData, setAlertData] = useState([]);
  const { reviewRes, singleTradieRes, providerJobAccept, disputeRes } =
    useSelector((state) => state.directory);

  useEffect(() => {
    dispatch(user_leads_request({ lead_type: "new" }));
    dispatch(user_leads_history_request({ lead_type: "history" }));
    dispatch({ type: "SINGLE_TRADIE_DELETE_SUCCESS", payload: "" });
  }, [reviewRes, singleTradieRes, providerJobAccept, disputeRes]);

  const singleTradie = (id) => {
    dispatch(user_single_lead_request({ jobid: id }));
    history.push(`/dashboard-booking-detail/${id}`);
  };
  const handleAlert = (viewData, e) => {
    e.preventDefault();
    setAlertData(viewData);
    setAlert(true);
  };
  const handleDispute = (viewData, e) => {
    e.preventDefault();
    setDisputeData(viewData);
    setDisputeAlert(true);
  };
  const handleRate = (viewData, e) => {
    e.preventDefault();
    setRateData(viewData);
    setRateAlert(true);
  };

  return (
    <div>
      <Header />

      {/* <!-- My Bookings --> */}
      <section className="directory-top-section section-top--calender">
        <div className="section-top__before">
          <img src={Section_top_1} alt="" />
        </div>
        <h2 className="section-top__title">
          My <span>Bookings</span>
        </h2>
      </section>

      <section className="section section--calender">
        <div className="calender">
          <div>
            <Link to="/" className="calender__back">
              {" "}
              Back{" "}
            </Link>
            <nav className="calender__nav">
              <span
                href="#"
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
              <span href="#"> </span>
            </nav>
            {tabSelect === "current" ? (
              <div className="calender__events">
                {Object.keys(userLeads).length > 0 ? (
                  userLeads.map((userBooking) => {
                    return (
                      <div className="event">
                        <p className="event__budge">
                          {userBooking.type == "multiple" ? (
                            userBooking.dispute == 1 ? (
                              userBooking.job_post.map((leads, i) =>
                                leads.user_status == "completed" ? (
                                  <p>Completed</p>
                                ) : (
                                  "Disputed"
                                )
                              )
                            ) : userBooking.status == "completed " ? (
                              <p>Completed</p>
                            ) : userBooking.status == "open" ? (
                              <p className="pending-btn">Pending</p>
                            ) : userBooking.status == "accept" ? (
                              "Accepted"
                            ) : userBooking.status == "active" ? (
                              userBooking.job_post.map((leads, i) =>
                                leads.provider_status == "completed" ? (
                                  <p>Completed</p>
                                ) : leads.provider_status == "accept" &&
                                  leads.user_status == "accept" ? (
                                  "Accepted"
                                ) : (
                                  leads.provider_status
                                )
                              )
                            ) : (
                              ""
                            )
                          ) : userBooking.job_post.length > 0 ? (
                            userBooking.job_post.map((leads, i) =>
                              userBooking.type == "multiple" ? (
                                userBooking.status == "open" ? (
                                  <p className="pending-btn">Pending</p>
                                ) : leads.provider_status == "reject" ? (
                                  <p key={i}>Settled</p>
                                ) : leads.provider_status == "accept" &&
                                  leads.user_status == "accept" ? (
                                  "Accepted"
                                ) : leads.provider_status == "completed" &&
                                  leads.user_status == "completed" ? (
                                  <p>Completed</p>
                                ) : leads.provider_status == "Pending" ? (
                                  <p className="pending-btn">Pending</p>
                                ) : (
                                  <p className="pending-btn">Pending</p>
                                )
                              ) : userBooking.dispute == 1 ? (
                                leads.user_status == "completed" ? (
                                  <p>Completed</p>
                                ) : (
                                  "Disputed"
                                )
                              ) : leads.provider_status == "reject" ? (
                                <p key={i}>Settled</p>
                              ) : leads.provider_status == "accept" ? (
                                "Accepted"
                              ) : leads.provider_status == "completed" ? (
                                "Completed"
                              ) : leads.provider_status == "completed" &&
                                leads.user_status == "accept" ? (
                                <p>Accepted</p>
                              ) : leads.provider_status == "Pending" ? (
                                <p className="pending-btn">Pending</p>
                              ) : (
                                <p className="pending-btn">Pending</p>
                              )
                            )
                          ) : (
                            ""
                          )}
                        </p>
                        <br />
                        <div className="event__what">
                          <h4>{userBooking?.title}</h4>
                          <p>{userBooking?.detail}</p>
                        </div>
                        <p className="event__when-where">
                          <img src={user_bookings__1} alt="" />
                          {moment(userBooking.time, ["HH.mm.ss"]).format(
                            "hh:mm A"
                          )}{" "}
                          on {moment(userBooking.date).format("ll")}
                        </p>
                        <button
                          onClick={() => {
                            singleTradie(userBooking.id);
                          }}
                          className="btn-primary"
                        >
                          View Details
                        </button>{" "}
                        {userBooking.job_post.length > 0
                          ? userBooking.job_post.map((leads, i) =>
                              leads.provider_status == "completed" &&
                              userBooking.dispute == 0 ? (
                                <>
                                  <br />{" "}
                                  <span
                                    key={i}
                                    style={{
                                      cursor: "pointer",
                                      marginRight: "11px",
                                    }}
                                    className="btn-primary"
                                    onClick={(e) => {
                                      handleAlert(userBooking, e);
                                    }}
                                  >
                                    Confirm
                                  </span>
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className="btn-secondary"
                                    onClick={(e) => {
                                      handleDispute(leads, e);
                                    }}
                                  >
                                    Raise Dispute
                                  </span>
                                </>
                              ) : (
                                ""
                              )
                            )
                          : ""}
                      </div>
                    );
                  })
                ) : (
                  <div className="no-listing-box">
                    <img src="https://sample.jploftsolutions.in/tapImages/no-listing.png" />
                    <p>No Booking Found</p>
                  </div>
                )}
              </div>
            ) : null}
            {tabSelect === "history" ? (
              <div className="calender__events">
                {Object.keys(userLeadHistory).length > 0 ? (
                  userLeadHistory.map((userBooking) => {
                    return (
                      <div className="event">
                        <p className="event__budge">
                          {userBooking.dispute == 1 ? (
                            userBooking.user_status == "completed" ? (
                              <p>Completed</p>
                            ) : (
                              "Disputed"
                            )
                          ) : userBooking.status == "deleted" ? (
                            "Deleted"
                          ) : userBooking.status == "reject" ? (
                            "Settled"
                          ) : userBooking.status == "reject" ? (
                            "Settled"
                          ) : userBooking.status == "cancel" ? (
                            "Settled"
                          ) : userBooking.user_status == "accept" ? (
                            "Accepted"
                          ) : (
                            (userBooking.user_status = "completed"
                              ? "Completed"
                              : (userBooking.user_status = "deleted"
                                  ? "Deleted"
                                  : "Declined"))
                          )}
                        </p>
                        <br />
                        <div className="event__what">
                          <h4>{userBooking.title}</h4>
                        </div>
                        <p className="event__when-where">
                          <img src={user_bookings__1} alt="" />
                          {moment(userBooking.time, ["HH.mm.ss"]).format(
                            "hh:mm A"
                          )}{" "}
                          on {moment(userBooking.date).format("ll")}
                        </p>
                        <button
                          onClick={() => {
                            singleTradie(userBooking.id);
                          }}
                          className="btn-primary"
                        >
                          View Details
                        </button>

                        {userBooking.job_post.length > 0
                          ? userBooking.job_post.map((leads, i) =>
                              leads.user_status == "completed" &&
                              leads.rating <= 0 &&
                              leads.rating == null ? (
                                <>
                                  <br />
                                  <span
                                    key={i}
                                    style={{
                                      cursor: "pointer",
                                    }}
                                    // className="btn-primary"
                                    onClick={(e) => {
                                      handleRate(leads, e);
                                    }}
                                  >
                                    ⭐RATE THIS TRADIE
                                  </span>
                                </>
                              ) : (
                                ""
                              )
                            )
                          : ""}
                      </div>
                    );
                  })
                ) : (
                  <div className="no-listing-box">
                    <img src="https://sample.jploftsolutions.in/tapImages/no-listing.png" />

                    <p>No History Found</p>
                  </div>
                )}
              </div>
            ) : null}
            {alert && <TakeDone setAlert={setAlert} alertData={alertData} />}
            {rateAlert && (
              <RateTradie setRateAlert={setRateAlert} rateData={rateData} />
            )}
            {disputeAlert && (
              <DisputeJob
                setDisputeAlert={setDisputeAlert}
                disputeData={disputeData}
              />
            )}
          </div>
        </div>
      </section>

      {/* <!-- Are you a Professional Tradie? --> */}
      {userInfo?.role == "provider" ? (
        ""
      ) : (
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
              <img src={user_bookings__2} alt="" />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Index;
