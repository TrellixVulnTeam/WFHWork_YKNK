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
import { IoMdCloudDone } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import DeleteTradie from "./DeleteTradiePopup";
import DeleteJobPost from "./DeleteJobPost";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";

const Index = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    user_single_lead_request,
    user_leads_request,
    single_tradie_delete_request,
    user_leads_history_request,
  } = Actions;
  const { singleLead, singleTradieRes } = useSelector(
    (state) => state.directory
  );
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteJobPopup, setDeleteJobPopup] = useState(false);
  const [deleteJobData, setDeleteJobData] = useState("");
  const { userLeads, userLeadHistory } = useSelector(
    (state) => state.directory
  );

  const [tradeDeleteData, setTradeDeleteData] = useState({
    job_id: "",
    pid: "",
    uid: "",
    type: "",
    action: "",
  });
  useEffect(() => {
    if (singleTradieRes) {
      if (singleTradieRes.success == 1) {
        toast.success(singleTradieRes.message, {
          position: "bottom-left",
          autoClose: 2000,
          size: "small",
        });
        history.push("/");
      }
    }
    setTimeout(() => {
      dispatch({ type: "SINGLE_TRADIE_DELETE_SUCCESS", payload: "" });
    }, 1000);
  }, [singleTradieRes]);

  useEffect(() => {
    dispatch(user_single_lead_request({ jobid: id }));
    dispatch(user_leads_request({ lead_type: "new" }));
    dispatch(user_leads_history_request({ lead_type: "history" }));
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
  const acceptProvider = (data) => {
    const acceptData = {
      id: data?.job_post_id,
      action: "accept",
      type: data?.type,
      pid: data?.provider_id,
    };
    dispatch(single_tradie_delete_request(acceptData));
  };
  const rejectProvider = (data) => {
    const acceptData = {
      id: data.job_post_id,
      action: "reject",
      type: data.type,
      pid: data.provider_id,
    };
    dispatch(single_tradie_delete_request(acceptData));
  };

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
                  singleLead?.map((singleBooking) => {
                    return (
                      <>
                        <div className="booking_status">
                          {userLeads?.map((res) =>
                            res.id == singleBooking.id
                              ? res.type == "multiple"
                                ? res.status == "completed"
                                  ? "Completed"
                                  : res.status == "open"
                                  ? "Pending"
                                  : res.status == "accept"
                                  ? "Accepted"
                                  : res.status == "active"
                                  ? "Accepted"
                                  : ""
                                : res.job_post.length > 0
                                ? res.job_post.map((leads, i) =>
                                    res.dispute == 1 ? (
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
                                    ) : (
                                      "pending"
                                    )
                                  )
                                : ""
                              : ""
                          )}

                          {userLeadHistory?.map((res) =>
                            res.id == singleBooking.id
                              ? res.type == "multiple"
                                ? res.status == "completed"
                                  ? "Completed"
                                  : res.status == "open"
                                  ? "Pending"
                                  : res.status == "accept"
                                  ? "Accepted"
                                  : res.status == "active"
                                  ? "Accepted"
                                  : "Pending"
                                : res.job_post.length > 0
                                ? res.job_post.map((leads, i) =>
                                    res.dispute == 1 ? (
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
                                    ) : (
                                      "pending"
                                    )
                                  )
                                : ""
                              : ""
                          )}
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
                          {singleBooking?.job_post?.length <= 1 ? (
                            singleBooking?.job_post?.map((singleTradie) =>
                              singleTradie.provider_status == "accept" ? (
                                ""
                              ) : singleTradie.provider_status ==
                                "completed" ? (
                                ""
                              ) : singleTradie.provider_status == "accept" &&
                                singleTradie.user_status != "reject" ? (
                                <button
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    handleDeleteJob(singleBooking.id);
                                  }}
                                >
                                  Delete This Job
                                </button>
                              ) : (
                                <button
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    handleDeleteJob(singleBooking.id);
                                  }}
                                >
                                  Delete This Job
                                </button>
                              )
                            )
                          ) : (
                            <button
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                handleDeleteJob(singleBooking.id);
                              }}
                            >
                              Delete This Job
                            </button>
                          )}
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
                  singleLead?.map((singleBooking) => {
                    return singleBooking?.job_post?.map((singleTradie) => {
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
                                        ? `https://api.tapatradie.com/profile/${singleTradie.provider_id}/` +
                                          singleTradie.profile_pic
                                        : "/static/media/user.8d49e377.png"
                                    }
                                    alt=""
                                  />
                                  <img
                                    className="img2"
                                    src="http://sample.jploftsolutions.in/tapImages/creator-icon.svg"
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
                                {
                                  (singleBooking.type = "multiple" ? (
                                    singleBooking.job_post.length > 1 ? (
                                      singleTradie.provider_status ==
                                      "accept" ? (
                                        singleTradie.user_status == "reject" ? (
                                          ""
                                        ) : singleTradie.user_status ==
                                          "accept" ? (
                                          ""
                                        ) : (
                                          <>
                                            <IoMdCloudDone
                                              size={22}
                                              style={{ color: "green" }}
                                              onClick={(e) =>
                                                acceptProvider(singleTradie)
                                              }
                                            />
                                            {"  "} &nbsp;
                                            <MdOutlineCancel
                                              size={22}
                                              style={{ color: "red" }}
                                              onClick={() =>
                                                rejectProvider(singleTradie)
                                              }
                                            />{" "}
                                          </>
                                        )
                                      ) : null
                                    ) : (
                                      ""
                                    )
                                  ) : null)
                                }
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
