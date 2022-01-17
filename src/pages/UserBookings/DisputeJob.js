import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
import * as Actions from "../../redux/directory/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const DisputeJob = ({ setDisputeAlert, disputeData }) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [resion, setResion] = useState();
  const { singleLead, providerJobAccept } = useSelector(
    (state) => state.directory
  );
  const { user_raise_dispute_action } = Actions;

  // console.log("providerJobAccept", providerJobAccept);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      job_post_id: disputeData.job_post_id,
      // provider_id: disputeData.provider_id,
      uid: disputeData.uid,
      resion: resion,
    };

    dispatch(user_raise_dispute_action(data));
    setDisputeAlert(false);
  };

  return (
    <div>
      <section className="user-info-modal popup" style={{ zIndex: 5 }}>
        <form className="popup__form">
          <h2>
            <img src="" alt="" />
            <span
              onClick={(e) => {
                setDisputeAlert(false);
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
            Raise A Dispute
          </p>
          <p>
            <input
              type="text"
              style={{
                width: "100%",
                height: "10rem",
                border: "3px solid #e0e0e0",
                marginBottom: "14px",
              }}
              className="form-control"
              onChange={(e) => setResion(e.target.value)}
              placeholder="Write your reason"
            />
          </p>
          <div>
            <button
              type="submit"
              className="btn-primary"
              onClick={(e) => {
                handleSubmit(e);
              }}
              style={{ width: "33%", float: "right" }}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default DisputeJob;
