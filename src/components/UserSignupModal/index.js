import React from "react";
import * as Actions from "../../redux/auth/action";
import { useDispatch } from "react-redux";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
import { useHistory } from "react-router-dom";

export const Modal = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { Signup_User_Enter_Name_Action } = Actions;
  const [inputFieldText, setInputFieldText] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState(false);

  const handleChange = (evt) => {
    setInputFieldText(evt.target.value);
  };
  const handleSubmit = () => {
    if (inputFieldText.length === 0) {
      setErrorMsg(true);
    } else {
      dispatch(Signup_User_Enter_Name_Action(inputFieldText));
      props.setnamePopup(false);
      history.push("/");
    }
    
  };
  const handleCloseModal = () => {
    props.setnamePopup(false);
    history.push("/");
  };

  return (
    <div className="homePage__modal-root">
      <div className="homePage__modal-parent">
        <div
          className="Closesvg"
          style={{ textAlign: "end" }}
          // onClick={handleCloseModal}
        >
          <h4 className="homePage__heading">Enter your details</h4>
          {/* <Close width="40px" height="40px" /> */}
        </div>
        
        <p className="homePage__SubtHeading">
          Enter your full name to continue
        </p>
        <div
          className="input-group modalInput"
          style={{ marginBottom: "1rem" }}
        >
          <input
            type="text"
            value={inputFieldText}
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>
        {errorMsg ? (
          <div style={{ color: "red" }}>Please enter your name</div>
        ) : null}
        <br />
        <button className="btn-primary w-100" onClick={handleSubmit}>
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Modal;
