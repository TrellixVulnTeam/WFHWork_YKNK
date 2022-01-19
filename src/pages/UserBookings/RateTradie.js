import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
import * as Actions from "../../redux/directory/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const RateTradie = ({ setRateAlert, rateData }) => {
  const [rating, setRating] = useState();
  const [reviews, setReviews] = useState();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { reviewRes } = useSelector((state) => state.directory);
  const { user_give_reviews_action } = Actions;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: "",
      rating: rating,
      review: reviews,
      job_post_id: rateData.job_post_id,
      provider_id: rateData.provider_id,
      uid: rateData.uid,
    };

    dispatch(user_give_reviews_action(data));
    setRateAlert(false);
  };

  useEffect(() => {
    if (reviewRes) {
      if (reviewRes.success === 1) {
        toast.success(reviewRes.message, {
          position: "bottom-left",
          autoClose: 2000,
          size: "small",
        });
      }
    }
  }, [reviewRes]);

  return (
    <div>
      <section className="user-info-modal popup" style={{ zIndex: 5 }}>
        <form className="popup__form">
          <h2>
            <p>Rate & Review Your Experience</p>
            <span
              onClick={(e) => {
                setRateAlert(false);
                e.target.parentElement.parentElement.parentElement.style.display =
                  "none";
              }}
              className="Closesvg"
              style={{ marginBottom: "123px", marginRight: "-12px" }}
            >
              <Close width="30px" height="30px" />
            </span>
          </h2>
          <p>
            <p>Tap to Rate</p>
            <StarRatings
              rating={rating}
              starRatedColor="orange"
              changeRating={(newRating) => setRating(newRating)}
              numberOfStars={5}
              name="rating"
              starSpacing="1px"
              starDimension="37px"
            />
          </p>
          <p>
            <p>Review</p>
            <input
              type="text"
              style={{
                width: "100%",
                height: "12rem",
                border: "3px solid #e0e0e0",
                marginBottom: "14px",
              }}
              className="form-control"
              onChange={(e) => setReviews(e.target.value)}
              placeholder="Write here"
            />
          </p>
          <div>
            {/* <button
              type="submit"
              className="btn-primary"
              onClick={() => {
                handleDelete();
              }}
              style={{ width: "33%" }}
            >
              Yes
            </button> */}
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
export default RateTradie;
