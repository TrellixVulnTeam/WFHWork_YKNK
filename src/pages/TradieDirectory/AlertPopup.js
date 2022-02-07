import React from "react";
import * as AuthActions from "../../redux/auth/action";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";

const AlertPopup = ({ setalertPopup }) => {
  const { Logout_Action, generateAccessToken_Action } = AuthActions;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleMoveLink = () => {
    dispatch(Logout_Action());
    dispatch(generateAccessToken_Action());
    setalertPopup(false);
    setTimeout(() => {
      history.push({ pathname: "/login", state: { access: "user" } });
    }, 2000);
  };

  return (
    <div>
      <section className="user-info-modal popup">
        <form className="popup__form">
          <h2>
            Please login as a user to continue
            <span
              onClick={(e) => {
                setalertPopup(false);
                e.target.parentElement.parentElement.parentElement.style.display =
                  "none";
                history.push("/tradie-directory");
              }}
              className="Closesvg"
              style={{ marginRight: "-21px", marginTop: "-56px" }}
            >
              <Close width="30px" height="30px" />
            </span>
          </h2>

          <button
            type="submit"
            className="btn-primary"
            onClick={() => {
              handleMoveLink();
            }}
          >
            Login User
          </button>
        </form>
      </section>
    </div>
  );
};
export default AlertPopup;
