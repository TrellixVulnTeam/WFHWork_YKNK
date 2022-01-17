import React, { useState, useEffect, useRef } from "react";

import { mainCategories, allCategories } from "./categories";

const Index = () => {
  const [otherCategoriesLink, setOtherCategoiresLink] = useState(true);
  const [isResidentialLink, setIsResidentialLink] = useState(false);
  const [isCommercialLink, setIsCommercialLink] = useState(false);

  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    country: "",
    city: "",
  });

  const { fullName, email, country, city } = inputValues;

  function handleChange(e) {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  }

  useEffect(() => {
  
    const inputEl = document.querySelectorAll(`input`);

    inputEl.forEach((input) => {
      if (input.value) {
        input.nextElementSibling.classList.add("move-up");
      } else {
        input.nextElementSibling.classList.remove("move-up");
      }
    });
  }, [inputValues]);

  return (
    <>
      <section className="user-info-modal popup">
        <form className="popup__form">
          <h2>
            Enter Your Details{" "}
            <span
              onClick={(e) =>
                (e.target.parentElement.parentElement.parentElement.style.display =
                  "none")
              }
            >
              X
            </span>
          </h2>

          <div className="input-group" onChange={handleChange}>
            <input
              type="text"
              onChange={handleChange}
              value={fullName}
              name="fullName"
            />
            <span>Full Name *</span>
          </div>

          <div className="input-group">
            <input
              type="email"
              onChange={handleChange}
              value={email}
              name="email"
            />
            <span>Email</span>
          </div>

          <div className="input-group">
            <input
              type="text"
              onChange={handleChange}
              value={country}
              name="country"
            />
            <span>Country</span>
            <i className="drop-btn">&#x25BC;</i>
          </div>

          <div className="input-group">
            <input
              type="text"
              onChange={handleChange}
              value={city}
              name="city"
            />
            <span>City *</span>
          </div>

          <button className="btn-primary">Get Started</button>
        </form>
      </section>
      {/* second pop */}
      <section className="primary-business-modal popup">
        <div className="popup__content-container">
          <form className="popup__form2">
            <div className="popup__form2-top">
              <h2>Primary Business </h2>
              <span
                onClick={(e) =>
                  (e.target.parentElement.parentElement.parentElement.parentElement.style.display =
                    "none")
                }
              >
                X
              </span>
            </div>
            <p>
              Select your primary business, you can select one or more business
              categories
            </p>

            <div className="input-group">
              <input type="text" placeholder="Search for a service" />
              <i className="search-icon"> &#x1F50D;</i>
            </div>
          </form>

          <ul className="popup__categories">
            <p>All Categories</p>

            {otherCategoriesLink
              ? mainCategories.map((category, index) => (
                  <li className="category-group" key={index}>
                    <input type="checkbox" />
                    <span>{category}</span>
                  </li>
                ))
              : allCategories.map((category, index) => (
                  <li className="category-group" key={index}>
                    <input type="checkbox" />
                    <span>{category}</span>
                  </li>
                ))}
          </ul>

          <div className="popup__nav-categories">
            {otherCategoriesLink ? (
              <button onClick={() => setOtherCategoiresLink(false)}>
                Other Categories
              </button>
            ) : (
              <button onClick={() => setOtherCategoiresLink(true)}>Back</button>
            )}
          </div>

          <div className="popup__btn-next">
            <button className="btn-primary">Next</button>
          </div>
        </div>
      </section>
      {/*  pop 3 */}
      <section className="select-service popup">
        <div className="popup__content-container">
          <div className="popup__top">
            <h2>Select Service Type </h2>
            <span
              onClick={(e) =>
                (e.target.parentElement.parentElement.parentElement.style.display =
                  "none")
              }
            >
              X
            </span>
          </div>

          <p>Add your primary business if not listed</p>

          <div className="popup__btns">
            <button
              onClick={() => setIsResidentialLink(!isResidentialLink)}
              style={{
                color: `${!isResidentialLink ? "transparent" : "#666"}`,
              }}
            >
              Residential
            </button>
            <button
              onClick={() => setIsCommercialLink(!isCommercialLink)}
              style={{
                color: `${!isCommercialLink ? "transparent" : "#666"}`,
              }}
            >
              Commercial
            </button>
          </div>

          <button className="btn-primary w-100">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Index;
