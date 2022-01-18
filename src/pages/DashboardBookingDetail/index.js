import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../../redux/directory/action";
import StarSvg from "../../assets/icons/star.svg";
import starActive from "../../assets/icons/starActive.svg";
import { useParams } from "react-router-dom";
import moment from "moment";

import DeleteTradie from "./DeleteTradiePopup";
import DeleteJobPost from "./DeleteJobPost";
import StarRatings from "react-star-ratings";
const Index = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user_single_lead_request } = Actions;
  const { singleLead } = useSelector((state) => state.directory);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteJobPopup, setDeleteJobPopup] = useState(false);
  const [deleteJobData, setDeleteJobData] = useState("");

  const [tradeDeleteData, setTradeDeleteData] = useState({
    job_id: "",
    pid: "",
    uid: "",
    type: "",
    action: "",
  });

  useEffect(() => {
    dispatch(user_single_lead_request({ jobid: id }));
  }, []);

  const selectedRadieType = (singleBooking) => {
    if (singleBooking == "residential,commercial")
      return (
        <>
          <div className="booking_status_service_list_btn">
            <button style={{ textTransform: "capitalize" }}>
              {"Residential"}
            </button>
          </div>
          <div className="booking_status_service_list_btn">
            <button style={{ textTransform: "capitalize" }}>
              {"Commercial"}
            </button>
          </div>
        </>
      );
    else if (singleBooking == "residential")
      return (
        <>
          <div className="booking_status_service_list_btn">
            <button style={{ textTransform: "capitalize" }}>
              {"Residential"}
            </button>
          </div>
        </>
      );
    else
      return (
        <>
          <div className="booking_status_service_list_btn">
            <button style={{ textTransform: "capitalize" }}>
              {"Commercial"}
            </button>
          </div>
        </>
      );
  };

  const handleDeleteTradie = (job_id, pid, uid, type) => {
    setTradeDeleteData({
      job_id: job_id,
      pid: pid,
      uid: uid,
      type: type,
      action: "delete",
    });
    setDeletePopup(true);
  };

  const handleDeleteJob = (job_id) => {
    setDeleteJobData(job_id);
    setDeleteJobPopup(true);
  };
  console.log("tradeDeleteData ", tradeDeleteData);
  return (
    <div>
      <Header />
      <section className="booking-section1">
        <div className="container">
          <div className="booking-section1_row">
            <div className="booking-section1_col1">
              <div className="white-box-radius">
                <div className="back">
                  <a
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    {`<    Back`}
                  </a>
                </div>
                {singleLead &&
                  singleLead.map((singleBooking) => {
                    return (
                      <>
                        <div className="booking_status">
                          {singleBooking.job_post.length > 0
                            ? singleBooking.job_post.map((leads, i) =>
                                leads.provider_status == "reject" ? (
                                  <p key={i}>Settled</p>
                                ) : leads.provider_status == "accept" ? (
                                  "Accept"
                                ) : leads.provider_status == "completed" ? (
                                  "Completed"
                                ) : (
                                  "pending"
                                )
                              )
                            : ""}
                        </div>
                        <div
                          className="booking_status_title"
                          style={{ textTransform: "capitalize" }}
                        >
                          {singleBooking.title}
                        </div>
                        <div className="booking_status_date">
                          {moment(singleBooking.time, ["HH.mm.ss"]).format(
                            "hh:mm A"
                          )}{" "}
                          on {moment(singleBooking.date).format("ll")}
                        </div>
                        <div className="booking_status_service">
                          Service Type
                        </div>
                        <div className="booking_status_service_list">
                          {selectedRadieType(singleBooking.tradie_type)}
                        </div>
                        <div className="booking_status_job_desc">
                          Job Description
                        </div>
                        <div className="booking_status_job_desc_list">
                          {singleBooking.detail}
                        </div>
                        <div className="booking_status_service_delete">
                          <button
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              handleDeleteJob(singleBooking.id);
                            }}
                          >
                            Delete This Job
                          </button>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
            <div className="booking-section1_col2">
              <h4>List All Tradie</h4>
              <div className="booking-section1_inner_row">
                {singleLead &&
                  singleLead.map((singleBooking) => {
                    return singleBooking.job_post.map((singleTradie) => {
                      return (
                        <>
                          <div className="booking-section1_col3">
                            <div className="list-box">
                              <div className="list-box_img_sec">
                                <div className="list-box_img">
                                  <img
                                    className="img1"
                                    src={
                                      singleTradie.profile_pic
                                        ? `https://api.tapatradie.com/uploads/` +
                                          singleTradie.profile_pic
                                        : "/static/media/user.8d49e377.png"
                                    }
                                    alt=""
                                  />
                                  <img
                                    className="img2"
                                    src="http://78.46.210.25/tapatradieweb/assets/images/creator-icon.svg"
                                    alt=""
                                  />
                                </div>
                                <span className="list-box_online">
                                  {singleTradie.online === 1
                                    ? "Online"
                                    : "Offline"}
                                </span>
                              </div>
                              <div className="list-box_detail">
                                <h3>{singleTradie.full_name}</h3>

                                <div className="list-box_detail_img">
                                  <StarRatings
                                    rating={
                                      singleTradie.avg_rating
                                        ? Math.round(
                                            Number(singleTradie.avg_rating) * 10
                                          ) / 10
                                        : 0
                                    }
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    name="rating"
                                    starSpacing="1px"
                                    starDimension="17px"
                                  />
                                </div>
                                {/* <p>Review: {singleTradie.review}</p> */}
                                <p>{singleBooking.service_name}</p>
                                {/* <button
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    handleDeleteTradie(
                                      singleTradie.job_post_id,
                                      singleTradie.provider_id,
                                      singleTradie.uid,
                                      singleTradie.type
                                    );
                                  }}
                                >
                                  <div>
                                    <img
                                      src="http://78.46.210.25/tapatradieweb/assets/images/round-icon-delete.svg"
                                      alt=""
                                    />
                                    <span>Remove</span>
                                  </div>
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    });
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {deletePopup && (
        <DeleteTradie
          setDeletePopup={setDeletePopup}
          tradeDeleteData={tradeDeleteData}
        />
      )}

      {deleteJobPopup && (
        <DeleteJobPost
          setDeleteJobPopup={setDeleteJobPopup}
          deleteJobData={deleteJobData}
          tradeDeleteData={tradeDeleteData}
        />
      )}
    </div>
  );
};

export default Index;
