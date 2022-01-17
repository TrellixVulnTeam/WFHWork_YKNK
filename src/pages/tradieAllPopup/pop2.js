import React, { useState } from "react";
import { mainCategories, allCategories } from "./ServiceCategories";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
import { useDispatch, useSelector } from "react-redux";

const Pop2 = () => {
  const history = useHistory();
  const [otherCategoriesLink, setOtherCategoiresLink] = useState(true);
  const [DataToSend, setDataToSend] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");

  const { login, verify_OTP } = useSelector((state) => state.auth);

  const resultCat = allCategories?.filter((val) => {
    if (searchCategory === "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchCategory?.toLowerCase())) {
      return val;
    }
  });

  if (login && verify_OTP.fullname === "" && verify_OTP.role === "provider") {
    history.push("/tradie-popup-step1");
  }

  if (
    verify_OTP.fullname !== "" &&
    verify_OTP.role === "provider" &&
    verify_OTP.register_complete === 1
  ) {
    history.push("/");
  }

  const handleChange = (data, e) => {
    const { name, id } = data;
    //check id already exist or nor
    const checkItem = DataToSend.some((item) => item === id);

    if (!checkItem) {
      setDataToSend((prevState) => [...prevState, id]);
    }
    //check unchecked condition removed
    if (checkItem) {
      const filderItem = DataToSend.filter((item) => item !== id);
      setDataToSend(filderItem);
    }
    // setDataToSend(filderItem);
  };
  localStorage.setItem("categoryID", JSON.stringify(DataToSend));

  return (
    <div>
      <section className="primary-business-modal popup">
        <div className="popup__content-container">
          <form className="popup__form2">
            <div className="popup__form2-top">
              <h2>Primary Business </h2>
              {/* <span
                onClick={(e) => {
                  e.target.parentElement.parentElement.parentElement.parentElement.style.display =
                    "none";
                  history.push("/tradie-my-profile");
                }}
                className="Closesvg"
              >
                <Close width="30px" height="30px" />
              </span> */}
            </div>
            <p>
              Select your primary business, you can select one or more business
              categories
            </p>

            <div className="input-group">
              <input
                type="text"
                placeholder="Search for a service"
                onChange={(e) => setSearchCategory(e.target.value)}
              />
              <i className="search-icon"> &#x1F50D;</i>
            </div>
          </form>

          <ul className="popup__categories">
            <p>All Categories</p>

            {otherCategoriesLink
              ? mainCategories &&
                resultCat.map((category, index) => (
                  <li className="category-group" key={index.id}>
                    <input
                      id={category.id}
                      type="checkbox"
                      onChange={(e) => handleChange(category)}
                    />
                    <span>{category.name}</span>
                  </li>
                ))
              : allCategories &&
                resultCat.map((category, index) => (
                  <li className="category-group" key={index}>
                    <input
                      type="checkbox"
                      id={category.id}
                      onChange={(e) => handleChange(category)}
                    />
                    <span htmlfor={category.id}>{category.name}</span>
                  </li>
                ))}
          </ul>

          <div className="popup__nav-categories">
            {otherCategoriesLink ? (
              <button onClick={() => setOtherCategoiresLink(false)}>
                {/* Other Categories */}
              </button>
            ) : (
              <button onClick={() => setOtherCategoiresLink(true)}>
                {/* Back */}
              </button>
            )}
          </div>

          <div className="popup__btn-next">
            <button
              className="btn-primary"
              disabled={DataToSend.length === 0 ? true : false}
              onClick={() => {
                history.push("/tradie-popup-step3");
              }}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Pop2;
