import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
import * as Actions from "../../redux/directory/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const TakeDone = ({ setAlert, alertData, setViewDetailPopup }) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { singleLead, providerJobAccept } = useSelector(
    (state) => state.directory
  );
  const { single_tradie_delete_request, provider_job_accept_request } = Actions;

  // console.log("providerJobAccept", providerJobAccept);

  const handleClose = () => {
    setAlert(false);
  };

  const handleDelete = () => {
    const data = {
      action: "completed",
      id: alertData.id,
      type: alertData.type,
    };
    dispatch(provider_job_accept_request(data));
    setAlert(false);
    setViewDetailPopup(false);
    history.push("/")
    localStorage.setItem(
      "provideLeadAction",
      JSON.stringify({ action: "completed", id: alertData.id })
    );
  };

  return (
    <div>
      <section className="user-info-modal popup" style={{ zIndex: 5 }}>
        <form className="popup__form">
          <h2>
            <img
              src="https://sample.jploftsolutions.in/tapImages/confirmmation-icon.png"
              alt=""
            />
            <span
              onClick={(e) => {
                setAlert(false);
                e.target.parentElement.parentElement.parentElement.style.display =
                  "none";
              }}
              className="Closesvg"
              style={{ marginBottom: "123px", marginRight: "-12px" }}
            >
              <Close width="30px" height="30px" />
            </span>
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: 500,
              marginBottom: "10px",
              marginTop: "-35px",
            }}
          >
            Are You Sure ?
          </p>
          <p
            style={{
              textAlign: "center",
              fontWeight: 500,
              marginBottom: "14px",
            }}
          >
            This will mark job as complete
          </p>
          <div>
            <button
              type="submit"
              className="btn-primary"
              onClick={() => {
                handleDelete();
              }}
              style={{ width: "33%" }}
            >
              Yes
            </button>
            <button
              type="submit"
              className="btn-primary"
              onClick={() => {
                handleClose();
              }}
              style={{ width: "33%", float: "right" }}
            >
              No
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default TakeDone;
