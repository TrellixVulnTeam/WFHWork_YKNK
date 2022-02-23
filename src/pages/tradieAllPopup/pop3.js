import React, { useState, useEffect } from "react";
import * as Actions from "../../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";

const Pop3 = () => {
  const history = useHistory();

  const { Provider_Asssign_Service_Action } = Actions;
  const dispatch = useDispatch();
  const [SelectRole, setSelectRole] = useState(false);
  const [dataFromPop2, setstate] = useState();
  useEffect(() => {
    let pop2DataToSend = localStorage.getItem("categoryID");
    pop2DataToSend = pop2DataToSend?.split("[")[1].split("]")[0];

    setstate(pop2DataToSend);
  }, []);

  const handleSelectRole = (e) => {
    const dataSend = {
      serviceIdRole: dataFromPop2,
      role: tradie_type.toString(),
    };

    dispatch(Provider_Asssign_Service_Action(dataSend));
    localStorage.removeItem("categoryID");
  };

  const { login, verify_OTP } = useSelector((state) => state.auth);
  if (login && verify_OTP.fullname === "" && verify_OTP.role === "provider") {
    history.push("/tradie-popup-step1");
  }

  if (
    verify_OTP.full_name !== "" &&
    verify_OTP.access === "provider" &&
    verify_OTP.register_complete === 1
  ) {
    history.push("/tradie-membership");
  }

  const [residential, setResidential] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [tradie_type, setTradie_type] = useState([]);
  const [removeItem, setRemoveItem] = useState([]);

  const handleTradieType = (tradieType) => {
    if (tradieType === "residential" && residential === false) {
      setResidential(true);
      setTradie_type([...tradie_type, tradieType]);
    } else if (tradieType === "residential" && residential === true) {
      const data = tradie_type.filter(function (item) {
        return item !== tradieType;
      });
      setTradie_type(data);

      setResidential(false);
    } else if (tradieType === "commercial" && commercial === false) {
      setCommercial(true);
      setTradie_type([...tradie_type, tradieType]);
    } else if (tradieType === "commercial" && commercial === true) {
      const data = tradie_type.filter(function (item) {
        return item !== tradieType;
      });
      setTradie_type(data);
      setCommercial(false);
    }
  };

  return (
    <div>
      <section className="select-service popup">
        <div className="popup__content-container">
          <div className="popup__top">
            <h2>Select Service Type </h2>
            {/* <span
              onClick={(e) => {
                e.target.parentElement.parentElement.parentElement.style.display =
                  "none";
                history.push("/tradie-my-profile");
              }}
              className="Closesvg"
            >
              <Close width="30px" height="30px" />
            </span> */}
          </div>
          <p>Add your primary business if not listed</p>
          <div className="popup__btns">
            {/* <button
              onClick={() => {
                setSelectRole(false);
              }}
              style={{
                color: `${SelectRole ? "black" : "#ec9422"}`,
                border: `${SelectRole ? "" : "1px solid #ec9422"}`,
              }}
            >
              Residential
            </button>
            <button
              onClick={() => {
                setSelectRole(true);
              }}
              style={{
                color: `${SelectRole ? "#ec9422" : "black"}`,
                border: `${SelectRole ? "#ec9422 solid 1px" : ""}`,
              }}
            >
              Commercial
            </button> */}

            <button
              type="button"
              onClick={() => {
                handleTradieType("residential");
              }}
              style={{
                color: `${residential ? "#ec9422" : "black"}`,
                border: `${residential ? "#ec9422 solid 1px" : ""}`,
              }}
            >
              Residential
            </button>
            <button
              type="button"
              onClick={() => {
                handleTradieType("commercial");
              }}
              style={{
                color: `${commercial ? "#ec9422" : "black"}`,
                border: `${commercial ? "#ec9422 solid 1px" : ""}`,
              }}
            >
              Commercial
            </button>
          </div>

          <button className="btn-primary w-100" onClick={handleSelectRole}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};
export default Pop3;
