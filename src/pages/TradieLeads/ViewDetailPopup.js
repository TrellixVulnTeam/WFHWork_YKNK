import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
import * as Actions from "../../redux/directory/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import tradie_leads_1 from "../../assets/images/user.png";
import AlertPopup from "./Alertpopup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ViewLeads = ({ setViewDetailPopup, viewData, setLoading }) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { providerJobAccept } = useSelector((state) => state.directory);
  const [alert, setAlert] = useState(false);
  const [alertData, setAlertData] = useState([]);
  const { provider_job_accept_request } = Actions;
  // const handleClose = () => {
  //   setViewDetailPopup(false);
  // };
  const handleAlert = (viewData, e) => {
    e.preventDefault();
    setViewDetailPopup(true);
    setAlertData(viewData);
    setAlert(true);
    setLoading(true);
  };

  const accepted = (alertData, e) => {
    e.preventDefault();
    setLoading(false);
    const data = { action: "accept", id: alertData?.id, type: alertData.type };
    dispatch(provider_job_accept_request(data));
    localStorage.setItem(
      "provideLeadAction",
      JSON.stringify({ action: "accept", id: alertData?.id })
    );
    setTimeout(() => {
      setLoading(true);
      dispatch(Actions.provider_leads_request());
    }, 3000);
  };

  useEffect(() => {
    if (providerJobAccept.success == 1) {
      toast.success(providerJobAccept.message, {
        position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
      setViewDetailPopup(false);
    }

    setTimeout(() => {
      dispatch({ type: "PROVIDER_JOB_ACCEPT_SUCCESS", payload: "" });
    }, 0);
  }, [providerJobAccept]);

  const tConvert = (time) => {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  };

  const dateConvert = (data) => {
    return new Date(data).toLocaleString("en-us", {
      month: "short",
      year: "numeric",
      day: "numeric",
    });
  };

  return (
    <>
      <section className="user-lead-modal popup" style={{ zIndex: 3 }}>
        <form className="popup__form">
          <div className="first">
            <div className="lead-img-box">
              <img
                src={
                  viewData.profile_pic
                    ? `https://api.tapatradie.com/profile/${viewData.uid}/` +
                      viewData.profile_pic
                    : tradie_leads_1
                }
                alt=""
              />
            </div>
            <div className="lead-content-box">
              <p className="heading">{viewData.full_name}</p>
              <p className="date">
                {viewData && tConvert(viewData.time)} on{" "}
                {viewData && dateConvert(viewData.date)}
              </p>
              <p className="city">{viewData.city}</p>
            </div>

            <span
              onClick={(e) => {
                setViewDetailPopup(false);
                setLoading(true);
                e.target.parentElement.parentElement.parentElement.style.display =
                  "none";
              }}
              className="Closesvg"
              style={{ marginBottom: "123px", marginRight: "-12px" }}
            >
              <Close width="30px" height="30px" />
            </span>
          </div>
          <div className="second">
            <div className="job_title">
              <p className="title">Job Title</p>
              <p className="description">{viewData.title}</p>
            </div>
            <div className="service_required">
              <p className="title">Service Required</p>
              <p className="description">{viewData.service_name}</p>
            </div>
            <div className="service_type">
              <p className="title">Service Type</p>
              <p className="description">{viewData.tradie_type}</p>
            </div>
            <div className="job_description">
              <p className="title">Job Description</p>
              <p className="description">{viewData.detail}</p>
            </div>
          </div>
          <div className="user-lead-modal-buttons">
            <button
              type="submit"
              className="btn-primary accept"
              onClick={(e) => {
                accepted(viewData, e);
              }}
            >
              Accept
            </button>
            <button
              type="submit"
              className="btn-primary reject"
              onClick={(e) => {
                handleAlert(viewData, e);
              }}
            >
              Reject
            </button>
          </div>
        </form>
        {alert && (
          <AlertPopup
            setAlert={setAlert}
            alertData={alertData}
            setViewDetailPopup={setViewDetailPopup}
          />
        )}
      </section>
    </>
  );
};
export default ViewLeads;
