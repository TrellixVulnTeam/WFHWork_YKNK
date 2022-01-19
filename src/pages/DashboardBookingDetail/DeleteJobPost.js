import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
import * as Actions from "../../redux/directory/action";
import { useSelector, useDispatch } from "react-redux";

const DeleteJobPost = ({
  setDeleteJobPopup,
  deleteJobData,
  tradeDeleteData,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user_job_delete_request } = Actions;

  const handleClose = () => {
    setDeleteJobPopup(false);
  };
  const handleDelete = () => {
    dispatch(user_job_delete_request({ job_id: deleteJobData }));

    history.push("/user-bookings");
  };

  return (
    <div>
      <section className="user-info-modal popup">
        <form className="popup__form">
          <h2>
            <img
              src="https://sample.jploftsolutions.in/tapImages/confirmmation-icon.png"
              alt=""
            />
            <span
              onClick={(e) => {
                setDeleteJobPopup(false);
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
            You want to delete this job.
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
export default DeleteJobPost;
